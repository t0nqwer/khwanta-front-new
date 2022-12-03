import React from "react";
import { DesignSingle, Loading, Modal,Productsingle } from "../Components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DelProduct, GetSingleDesign, GetSingleProduct } from "../Action/product";
import useDidMountEffect from "../hook/useDidMountEffect";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { AiFillDelete } from "react-icons/ai";
import { START_LOADING } from "../constants/actionTypes";

const SingleProduct = () => {
  const { currentColor } = useStateContext();
  const { Data, Sizede, isLoading } = useSelector((state) => state.singleproduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleProduct(id));
  }, [id]);
  const navigate = useNavigate();
  const [Sizedata, setSizedata] = useState([]);
  const [SizeHead, setSizeHead] = useState([1, 2]);
  const [SizeRow, setSizeRow] = useState([1, 2]);
  const [modalOpen, setModalOpen] = useState(false);
  const [img, setImg] = useState([]);
  const [ProDetail, setProDetail] = useState([]);
  const [DeDetail, setDeDetail] = useState([]);
  console.log(Data, Sizede);
  useDidMountEffect(() => {
    setProDetail(Data?.product_detail_img);
    setDeDetail(Data?.cloth_design?.detail_img);
    if (Data?.Front_img.length === 0) {
      setImg([
        {
          imageUrl: Data?.cloth_design?.cloth_front_img,
        },
        {
          imageUrl: Data?.cloth_design?.cloth_back_img,
        },
      ]);
    } else if (Data?.cloth_design?.cloth_front_img?.length === 0) {
      setImg([
        {
          imageUrl: Data?.Front_img,
        },
        {
          imageUrl: Data?.Back_img,
        },
        {
          imageUrl: Data?.cloth_design?.cloth_front_img,
        },
        {
          imageUrl: Data?.cloth_design?.cloth_back_img,
        },
      ]);
    } else {
      setImg([
        {
          imageUrl: Data?.Front_img,
        },
        {
          imageUrl: Data?.Back_img,
        },
      ]);
    }
  }, [Data]);
  console.log(ProDetail);
  useEffect(() => {
    const sizede = [
      ...new Set(Sizede.map((e) => e.size_de_info.map((p) => p.size_de.size_de_name)).flat()),
    ];
    setSizeHead(sizede);
    const sizerow = Sizede.map((e) => {
      const data = e.size_de_info.map((p) => p.size_info);
      return { sizename: e.size.size_name, Sizedata: data };
    });
    setSizeRow(sizerow);
  }, [Sizede]);
  const Submit = () => {
    navigate(`/ViewProduct`);
  };
  const DelProductFunc = (e) => {
    dispatch({ type: START_LOADING });
    dispatch(DelProduct(id));
    setModalOpen(false);
    navigate(`/ViewProduct`);
  };
  return (
    <>
      {isLoading ? (
        <div
          className=" fixed w-full justify-center min-w-min left-0 top-0 items-center op  "
          style={{ zIndex: "100000" }}
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
        {Data?.product_category?.product_category_type_id === 1 ? (
          <Productsingle
            Data={{
              head1: "รหัส :",
              info1: Data?.code,
              info2: Data.title,
              info4: Data?.product_category?.product_category_name,
              info5: Data?.cloth_design.pattern_design.pattern_design_name,
              head6: "ราคา :",
              info3: Data?.cloth_design?.brand?.brand_name,
              info6: Data?.price,
              design_description: Data?.cloth_design.design_description,
              head7: "ผ้า :",
              info7: Data?.fabric.title,
            }}
            Sizede={Sizede}
            SizeHead={SizeHead}
            SizeRow={SizeRow}
            img={img}
            ProDetail={ProDetail}
            DeDetail={DeDetail}
            IsSize={true}
          />
        ) : Data?.product_category?.product_category_type_id === 2 ? (
          <Productsingle
            Data={{
              head1: "Barcode :",
              info1: Data?.product_stock_info[0]?.product_stock_barcode_13,
              info2: Data.title,
              info3: "Khwanta",
              info4: Data?.product_category?.product_category_name,
              head5: "ราคา :",
              info5: Data?.price,
              design_description: Data?.product_Descripttion,
            }}
            Sizede={Sizede}
            SizeHead={SizeHead}
            SizeRow={SizeRow}
            img={img}
            ProDetail={ProDetail}
            DeDetail={DeDetail}
          />
        ) : Data?.product_category?.product_category_type_id === 3 ? (
          <Productsingle
            Data={{
              head1: "Barcode :",
              info1: Data?.product_stock_info[0]?.product_stock_barcode_13,
              info2: Data.title,
              info3: Data.brand.brand_name,
              info4: Data?.product_category?.product_category_name,
              head5: "ราคา :",
              info5: Data?.price,
              design_description: Data?.product_Descripttion,
            }}
            Sizede={Sizede}
            SizeHead={SizeHead}
            SizeRow={SizeRow}
            img={img}
            ProDetail={ProDetail}
            DeDetail={DeDetail}
          />
        ) : (
          ""
        )}
        <div className="w-full flex justify-end ">
          <button
            type="button"
            onClick={Submit}
            style={{ backgroundColor: currentColor }}
            className="btn py-3 mt-3 mb-10 mr-5  text-white w-full md:w-52"
          >
            กลับหน้ารวมสินค้า
          </button>
          <button
            type="button"
            onClick={() => {
              setModalOpen(true);
            }}
            className="btn py-3 mt-3 mb-10 mr-5 bg-red-600  text-white w-full md:w-52"
          >
            <AiFillDelete className="mr-2" />
            ลบสินค้า
          </button>
        </div>
      </div>
      {modalOpen && (
        <Modal
          title={`คุณแน่ใจมั้ยว่าต้องการลบสินค้าชิ้นนี้  ?`}
          body={
            <>
              <span className="text-center">
                1. หลังจากลบสินค้าแล้วจะไม่สามารถกู้ข้อมูลกลับมาใหม่ได้
                <br /> 2. รหัสบาร์โค้ดและสต๊อคทั้งหมดจะถูกลบออกจากระบบ
              </span>
            </>
          }
          setOpenModal={setModalOpen}
          DelButton="ลบสินค้า"
          customFunc={DelProductFunc}
        />
      )}
    </>
  );
};

export default SingleProduct;
