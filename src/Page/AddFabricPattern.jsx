import { useState, useEffect } from "react";
import { DesignInfo, Loading, UploadImg } from "../Components";
import { useStateContext } from "../Context/ContextProvider";
import { Store } from "react-notifications-component";
import { useDispatch, useSelector } from "react-redux";
import { GetFabricType } from "../Action/product";
import * as add from "../Action/add";
const AddFabricPattern = () => {
  const { currentColor } = useStateContext();
  const dispatch = useDispatch();
  const { weaving, fabricType, colorTechnique, pattern, isLoading } = useSelector(
    (state) => state.FabricType
  );

  useEffect(() => {
    dispatch(GetFabricType());
  }, [dispatch]);
  //<==================State =====================>
  const [ResetData, setResetData] = useState(true);
  const [Product, setProduct] = useState({
    title: "",
    description: "",
  });
  //<==================Function =====================>
  const ProductInfoHandler = (data) => {
    setProduct({
      ...Product,
      title: data.title,
      description: data.description,
    });
  };
  const NoTitle = (e) => {
    Store.addNotification({
      title: " คุณยังไม่ได้กรอกชื่อผู้ส่งสินค้า",
      message: "โปรดกรอกชื่อผู้ส่งสินค้า",
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
      title: "มีลายผ้านี้ในระบบแล้ว",
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
    if (Product.title.length === 0) return NoTitle();
    for (let i = 0; i < pattern.length; i++) {
      if (Product.title === pattern[i].FabricPatternName) {
        MulPro();
        return;
      }
    }
    dispatch(add.AddFabricPattern(Product));
    setResetData(!ResetData);
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
          IsTitle={true}
          ResetData={ResetData}
          IsDescrip={true}
        />
        <div className="w-full flex justify-end ">
          <button
            type="button"
            onClick={Submit}
            style={{ backgroundColor: currentColor }}
            className="btn py-3 mt-3 mb-10 mr-5  text-white w-full md:w-52"
          >
            เพิ่มลายผ้า
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFabricPattern;
