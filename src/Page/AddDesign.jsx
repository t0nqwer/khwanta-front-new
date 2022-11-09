import React, { useState, useEffect } from "react";
import { DesignInfo, Size, UploadImg, Loading } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { GetAddDesign } from "../Action/product";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { START_LOADING } from "../constants/actionTypes";
import { useStateContext } from "../Context/ContextProvider";
import * as add from "../Action/add";
import { Store } from "react-notifications-component";

const AddDesign = () => {
  //<==================Redux=====================>

  const dispatch = useDispatch();
  const { currentColor } = useStateContext();
  const { SizeDe, DesignCode, category, pattern, brand, isLoading } = useSelector(
    (state) => state.designcode
  );

  useEffect(() => {
    dispatch(GetAddDesign());
  }, [dispatch]);


  //<==================State =====================>
  const [ResetData, setResetData] = useState(true);
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState([]);
  const [GetSize, setGetSize] = useState([]);
  const [Product, setProduct] = useState({
    code: "",
    title: "",
    description: "",
    categoryname: "",
    pattern: "",
    patternname: "",
    brand: "",
    brandname: "",
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
      code: data.code,
      brand: data.brand,
      title: data.title,
      category: data.category,
      pattern: data.pattern,
      description: data.description,
      categoryname: data.categoryname,
      patternname: data.patternname,
      brandname: data.brandname,
    });
  };
  const SaveSize = (e) => {
    const render = e.map((e) => {
      const dename = SizeDe.filter((x) => x.size_de_id === e.id);
      return { name: e.name, id: e.id, data: e.data, dename: dename[0].size_de_name };
    });

    setGetSize(render);
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
      title: "คุณยังไม่ได้กรอกรหัสสินค้า",
      message: "โปรดกรอกรหัสสินค้า",
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
  const NoName = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้กรอกชื่อสินค้า",
      message: "โปรดกรอกชื่อสินค้า",
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
  const NoSize = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้กรอกไซส์สินค้า",
      message: "โปรดกรอกไซส์สินค้า",
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
  const NoType = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกประเภทสินค้า",
      message: "โปรดกรอกประเภทสินค้า",
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
  const NoPattern = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกช่างแพทเทิร์น",
      message: "โปรดเลือกช่างแพทเทิร์น",
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
  const NoBrand = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกแบรนด์สินค้า",
      message: "โปรดกรอกแบรนด์สินค้า",
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
  const NoFimg = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เพิ่มรูปด้านหน้าสินค้า",
      message: "โปรดเพิ่มรูปด้านหน้าสินค้า",
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
  const NoBimg = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เพิ่มรูปด้านหลักสินค้า",
      message: "โปรดเพิ่มรูปด้านหลังสินค้า",
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
  const Submit = () => {
    if (Product.code.length === 0) return NoCode();
    const checkid = DesignCode.map((e) => e.code);
    for (let i = 0; i < checkid.length; i++) {
      if (Product.code === checkid[i]) {
        MulPro();
        return;
      }
    }
    if (Product.title.length === 0) return NoName();
    if (Product.brand.length === 0) return NoBrand();
    if (Product.category.length === 0) return NoType();
    if (Product.pattern.length === 0) return NoPattern();
    if (GetSize.length === 0) return NoSize();
    if (imageFront === null) return NoFimg();
    if (imageBack === null) return NoBimg();
    dispatch({ type: START_LOADING });
    SaveProduct(imageFront, imageBack, imageDetail);
  };
  const SaveProduct = (imgF, imgB, imgD) => {
    dispatch({ type: START_LOADING });
    const id = `Design/${Product.code}`;

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
        let adddata = [datainfo, result[0], GetSize];
        dispatch(add.AddDesign(adddata));
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
        <DesignInfo
          OnProductInfoHandler={ProductInfoHandler}
          ResetData={ResetData}
          IsCode={true}
          IsTitle={true}
          IsBrand={{ Show: true, value: brand }}
          IsDescrip={true}
          IsType={{
            Show: true,
            value: category.map((e) => {
              return { name: e.category_name, id: e.cloth_category_id };
            }),
          }}
          IsPattern={{ Show: true, value: pattern }}
          IsFabric={false}
          IsPricce={false}
        />
        <Size OnSaveSize={SaveSize} ResetData={ResetData} />
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

export default AddDesign;
