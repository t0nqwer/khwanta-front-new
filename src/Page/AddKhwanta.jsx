import { useState, useEffect } from "react";
import { DesignInfo, UploadImg, Loading } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { GetProCategory } from "../Action/product";
import { Store } from "react-notifications-component";
import { useStateContext } from "../Context/ContextProvider";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import * as add from "../Action/add";
import { START_LOADING } from "../constants/actionTypes";

const AddKhwanta = () => {
  const { ProCategory, Prodata, isLoading } = useSelector((state) => state.category);
  const { currentColor } = useStateContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProCategory());
  }, []);

  //<==================State =====================>
  const [ResetData, setResetData] = useState(true);
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState([]);
  const [Product, setProduct] = useState({
    title: "",
    description: "",
    categoryname: "",
    price: "",
    Front_img: "",
    Back_img: "",
  });
  //<==================Function =====================>
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
  const NoPrice = (e) => {
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
  const getFrontimg = (e) => {
    if (e.length === 0) return setImageFront(null);
    const FrontImg = e;
    setImageFront(FrontImg);
  };
  const ProductInfoHandler = (data) => {
    setProduct({
      ...Product,
      title: data.title,
      category: data.category,
      description: data.description,
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
  const Submit = () => {
    if (Product.title.length === 0) return NoName();
    if (Product.category.length === 0) return NoType();
    if (Product.price.length === 0) return NoPrice();
    if (~~Product.price === 0) return NumPrice();
    for (let i = 0; i < Prodata.length; i++) {
      if (Product.title === Prodata[i].title) {
        MulPro();
        return;
      }
    }
    if (imageFront === null) return NoFimg();
    if (imageBack === null) return NoBimg();
    dispatch({ type: START_LOADING });
    SaveProduct(imageFront, imageBack, imageDetail);
  };
  const SaveProduct = (imgF, imgB, imgD) => {
    const id = `KhwantaProduct/${Product.title}`;

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

        dispatch(add.AddKhwanta(adddata));
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
        <h1 className="mb-5 ml-5">เพิ่มสินค้าขวัญตา</h1>
        <DesignInfo
          ResetData={ResetData}
          OnProductInfoHandler={ProductInfoHandler}
          IsTitle={true}
          IsType={{
            Show: true,
            value: ProCategory.map((e) => {
              return { name: e.product_category_name, id: e.product_category_id };
            }),
          }}
          IsDescrip={true}
          IsPrice={true}
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

export default AddKhwanta;
