import { useState, useEffect } from "react";
import { DesignInfo, UploadImg, Loading } from "../Components";
import { useStateContext } from "../Context/ContextProvider";
import { Store } from "react-notifications-component";
import { useDispatch, useSelector } from "react-redux";
import { GetAddImport } from "../Action/product";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { AddImportProduct } from "../Action/add";
import { START_LOADING } from "../constants/actionTypes";

const AddImport = () => {
  const { currentColor } = useStateContext();
  const { Prodata, Brand, Category, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAddImport());
  }, []);

  //<==================State =====================>
  const [ResetData, setResetData] = useState(true);
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState([]);
  const [Product, setProduct] = useState({
    brand: "",
    title: "",
    category: "",
    description: "",
    categoryname: "",
    brandname: "",
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

  const getBackimg = (e) => {
    if (e.length === 0) return setImageBack(null);
    const BackImg = e;
    setImageBack(BackImg);
  };

  const getDetailimg = (e) => {
    const DetailImg = e;
    setImageDetail(DetailImg);
  };
  const ProductInfoHandler = (data) => {
    setProduct({
      ...Product,
      brand: data.search2,
      title: data.title,
      category: data.category,
      description: data.description,
      categoryname: data.categoryname,
      brandname: data.search2lable,
      price: data.price,
    });
  };
  const NoTitle = (e) => {
    Store.addNotification({
      title: " คุณยังไม่ได้กรอกชื่อสินค้า",
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
  const NoBrand = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้ผู้จัดส่ง",
      message: "โปรดเลือกผู้จัดส่ง",
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
  const NoCate = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกประเภทสินค้า",
      message: "โปรดเลือกประเภทสินค้า",
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
      title: "คุณยังไม่ได้เพิ่มรูปด้านหลังสินค้า",
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
  const Submit = () => {
    if (Product.title.length === 0) return NoTitle();
    if (Product.brand.length === 0) return NoBrand();
    if (Product.category.length === 0) return NoCate();
    if (Product.price.length === 0) return NoPricr();
    if (~~Product.price === 0) return NumPrice();
    for (let i = 0; i < Prodata.length; i++) {
      if (Product.title === Prodata[i].title) {
        MulPro();
        return;
      }
    }
    if (imageFront === null) return NoFimg();
    if (imageBack === null) return NoBimg();

    console.log("addProduct");
    dispatch({ type: START_LOADING });
    SaveProduct(imageFront, imageBack, imageDetail);
  };
  const SaveProduct = (imgF, imgB, imgD) => {
    const id = `ImportProduct/${Product.title}`;

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
        dispatch(AddImportProduct(adddata));
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
        ResetData={ResetData}
          OnProductInfoHandler={ProductInfoHandler}
          IsTitle={true}
          IsSearchSelect2={{
            Show: true,
            lable: "ผู้จัดส่ง",
            options: Brand.map((e) => {
              return { value: e.brand_id, label: e.brand_name };
            }),
          }}
          IsType={{
            Show: true,
            value: Category.map((e) => {
              return {
                id: e.product_category_id,
                name: e.product_category_name,
              };
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

export default AddImport;
