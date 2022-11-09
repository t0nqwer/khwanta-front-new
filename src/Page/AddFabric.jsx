import React, { useState, useEffect } from "react";
import { DesignInfo, Loading } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "react-notifications-component";
import { useStateContext } from "../Context/ContextProvider";
import { GetFabricType } from "../Action/product";
import * as add from "../Action/add";
const AddFabric = () => {
  const dispatch = useDispatch();
  const { currentColor } = useStateContext();
  const { weaving, fabricType, colorTechnique, pattern, isLoading } = useSelector(
    (state) => state.FabricType
  );
  useEffect(() => {
    dispatch(GetFabricType());
  }, [dispatch]);
  //<==================State =====================>
  const [Product, setProduct] = useState({
    weaving_id: "",
    weaving_name: "",
    color_id: "",
    color_name: "",
    pattern_id: "",
    pattern_name: "",
    fabric_type_id: "",
    fabric_typr_name: "",
  });
  const [ResetData, setResetData] = useState(true);
  //<==================Function =====================>
  const NoWeaving = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกเทคนิคการทอ",
      message: "โปรดลือกเทคนิคการทอ",
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
  const NoColor = (e) => {
    Store.addNotification({
      title: "คุณยังไม่ได้เลือกเทคนิคสี",
      message: "โปรดเลือกเทคนิคสี",
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
  const ProductInfoHandler = (data) => {
    setProduct({
      ...Product,
      weaving_id: data.search1,
      weaving_name: data.search1label,
      color_id: data.search2,
      color_name: data.search2label,
      pattern_id: data.search3,
      pattern_name: data.search3label,
      fabric_type_id: data.category,
      fabric_typr_name: data.categoryname,
    });
  };

  const Submit = () => {
    if (Product.weaving_id.length === 0) return NoWeaving();
    if (Product.color_id.length === 0) return NoColor();
    if (Product.fabric_type_id.length === 0) return NoType();
    dispatch(add.AddFabric(Product));
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
          ResetData={ResetData}
          IsShowFabric={true}
          IsType={{
            Show: true,
            value: fabricType.map((e) => {
              return {
                name: e.type,
                id: e.fabric_type_id,
              };
            }),
          }}
          IsSearchSelect1={{
            Show: true,
            lable: "เทคนิคการทอ",
            options: weaving.map((e) => {
              return {
                label: e.weaving_name,
                value: e.weaving_id,
              };
            }),
          }}
          IsSearchSelect2={{
            Show: true,
            lable: "เทคนิคสี",
            options: colorTechnique.map((e) => {
              return {
                label: e.FabricColorTechnique_name,
                value: e.FabricColorTechnique_id,
              };
            }),
          }}
          IsSearchSelect3={{
            Show: true,
            lable: "ลาย",
            options: pattern.map((e) => {
              return {
                label: e.FabricPatternName,
                value: e.FabricPattern_Id,
              };
            }),
          }}
          OnProductInfoHandler={ProductInfoHandler}
        />
        <div className="w-full flex justify-end ">
          <button
            type="button"
            onClick={Submit}
            style={{ backgroundColor: currentColor }}
            className="btn py-3 mt-3 mb-10 mr-5  text-white w-full md:w-52"
          >
            เพิ่มผ้า
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFabric;
