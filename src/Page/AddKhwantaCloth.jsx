import React, { useState, useEffect } from "react";
import { DesignInfo, Size, UploadImg, Loading } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { GetDesignCode } from "../Action/product";
import { Store } from "react-notifications-component";
import { useStateContext } from "../Context/ContextProvider";
import * as add from "../Action/add";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { START_LOADING } from "../constants/actionTypes";
import { storage } from "../firebase";

const AddKhwantaCloth = () => {
  const dispatch = useDispatch();
  const { currentColor } = useStateContext();

  const { Prodata, Design, Fabric, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetDesignCode());
  }, [dispatch]);

  //<==================State =====================>
  const [ResetData, setResetData] = useState(true);
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState([]);
  const [GetSize, setGetSize] = useState([]);
  const [Product, setProduct] = useState({
    code: "",
    codeName: "",
    title: "",
    description: "",
    fabric: "",
    fabricName: "",
    price: "",
    Front_img: "",
    Back_img: "",
  });
  //<==================Function =====================>
  const getFrontimg = (e) => {
    if (e.length === 0) return setImageFront(null);
    const FrontImg = e;
    setImageFront(FrontImg);
  };
  const ProductInfoHandler = (data) => {
    setProduct({
      ...Product,
      code: data.search1,
      codeName: Design.filter((e) => data.search1 == e.code)
        .map((p) => p.design_name)
        .toString(),
      title: `${Design.filter((e) => data.search1 == e.code)
        .map((p) => p.design_name)
        .toString()}${data.search2label}`,
      description: data.description,
      fabric: data.search2,
      fabricName: data.search2label,
      price: data.price,
    });
  };

  const getBackimg = (e) => {
    if (e.length === 0) return setImageBack(null);
    const BackImg = e;
    setImageBack(BackImg);
  };

  const getDetailimg = (e) => {
    const DetailImg = e;
    setImageDetail(DetailImg);
  };
  const NoCode = (e) => {
    Store.addNotification({
      title: " คุณยังไม่ได้เลือกรหัสสินค้า",
      message: "โปรดเลือกรหัส",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
      },
    });
  };
  const NoFabric = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกผ้า",
      message: "โปรดเลือผ้า",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
      },
    });
  };
  const NoPricr = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้กรอกราคา",
      message: "โปรดกรอกราคา",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
      },
    });
  };
  const MulPro = (e) => {
    Store.addNotification({
      title: "มีสินค้านี้ในระบบแล้ว",
      message: "โปรดตรวจสอบข้อมูลอีกครั้ง",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
      },
    });
  };
  const NumPrice = (e) => {
    Store.addNotification({
      title: "คุณกรอกราคาผิด",
      message: "โปรดกรอกราคาแค่ตัวเลข",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
      },
    });
  };

  const Submit = () => {
    if (Product.code.length === 0) return NoCode();
    if (Product.fabric.length === 0) return NoFabric();
    if (Product.price.length === 0) return NoPricr();
    if (~~Product.price === 0) return NumPrice();
    for (let i = 0; i < Prodata.length; i++) {
      if (+Product.fabric === Prodata[i].fabric_id && Product.code === Prodata[i].code) {
        MulPro();
        return;
      }
    }
    console.log("addProduct");
    if (imageFront === null) {
      let addDesigndata = [Product, []];
      dispatch(add.AddKhwantaCloth(addDesigndata));
      setResetData(!ResetData);
    } else {
      dispatch({ type: START_LOADING });
      SaveProduct(imageFront, imageBack, imageDetail);
    }
  };

  const SaveProduct = (imgF, imgB, imgD) => {
    const id = `khwantacloth/${Product.title}`;

    const promises = [];
    const metadata = {
      contentType: "image/jpeg",
    };

    promises.push(uploadTaskDetail(), uploadTaskBack(), uploadTaskFront());
    async function uploadTaskDetail() {
      const uploadimg = imgD.map(async (e, index) => {
        const fileRef = ref(storage, `${id}/${index}-detail`);
        const uploadTaskSnapshot = await uploadBytes(fileRef, e, metadata);
        const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
        return downloadURL;
      });

      const returndata = await Promise.all(uploadimg);
      return returndata;
    }

    async function uploadTaskBack() {
      const file = imgB[0];
      const fileRef = ref(storage, `${id}/${id}-back`);
      const uploadTaskSnapshot = await uploadBytes(fileRef, file, metadata);
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

      return downloadURL;
    }
    async function uploadTaskFront() {
      const file = imgF[0];
      const fileRef = ref(storage, `${id}/${id}-front`);
      const uploadTaskSnapshot = await uploadBytes(fileRef, file, metadata);
      const downloadFrontURL = await getDownloadURL(uploadTaskSnapshot.ref);

      return downloadFrontURL;
    }
    Promise.all(promises)
      .then((result) => {
        const datainfo = { ...Product, Front_img: result[2], Back_img: result[1] };
        let adddata = [datainfo, result[0]];
        dispatch(add.AddKhwantaCloth(adddata));
        setResetData(!ResetData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {isLoading ? (
        <div
          className=" fixed w-full justify-center min-w-min left-0 top-0 items-center op  "
          style={{ zIndex: "10000" }}
        >
          <div className=" w-screen relative h-screen items-center justify-center flex bg-orange-200 bg-opacity-50">
            <div className="w-60">
              <Loading iconColor={currentColor} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="p-5">
        <h1 className="mb-5 ml-5">เพิ่มสินค้าเสื้อผ้าขวัญตา</h1>
        <DesignInfo
          ResetData={ResetData}
          IsShowname={true}
          IsSearchSelect1={{
            Show: true,
            lable: "รหัสแบบเสื้อผ้า",
            options: Design.map((e) => {
              return { value: e.code, label: e.code };
            }),
          }}
          IsSearchSelect2={{
            Show: true,
            lable: "ผ้า",
            options: Fabric.map((e) => {
              return { value: e.fabric_id, label: e.title };
            }),
          }}
          IsDescrip={true}
          IsPrice={true}
          OnProductInfoHandler={ProductInfoHandler}
        />
        <UploadImg
          ResetData={ResetData}
          onSaveProductFront={getFrontimg}
          onSaveProductBack={getBackimg}
          onSaveProductDetail={getDetailimg}
        />
        <div className="w-full flex justify-end ">
          <button
            type="button"
            onClick={Submit}
            style={{ backgroundColor: currentColor }}
            className="btn py-3 mt-3 mb-10 mr-5  text-white w-full md:w-52"
          >
            เพิ่มสินค้า
          </button>
        </div>
      </div>
    </>
  );
};

export default AddKhwantaCloth;
