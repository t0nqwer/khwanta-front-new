import React from "react";
import { DesignSingle, Modal } from "../Components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DelDesign, DelProduct, GetSingleDesign } from "../Action/product";
import useDidMountEffect from "../hook/useDidMountEffect";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { AiFillDelete } from "react-icons/ai";
import { START_LOADING } from "../constants/actionTypes";
const SingleDesign = () => {
  const { currentColor } = useStateContext();
  const { Data, Sizede, Sta } = useSelector((state) => state.singleproduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleDesign(id));
  }, [id]);
  useEffect(() => {
    console.log(Sta);
    dispatch(GetSingleDesign(id));
  }, [Sta]);
  console.log(Sizede);
  const navigate = useNavigate();
  const [Sizedata, setSizedata] = useState([]);
  const [SizeHead, setSizeHead] = useState([1, 2]);
  const [SizeRow, setSizeRow] = useState([1, 2]);
  const [modalOpen, setModalOpen] = useState(false);

  const [img, setImg] = useState([]);
  const [ProDetail, setProDetail] = useState([]);
  const [DeDetail, setDeDetail] = useState([]);

  useEffect(() => {
    setDeDetail(Data?.detail_img);
    setImg([
      {
        imageUrl: Data?.cloth_front_img,
      },
      {
        imageUrl: Data?.cloth_back_img,
      },
    ]);
  }, [Data]);
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
    navigate(`/ViewDesign`);
  };

  const DelProductFunc = (e) => {
    dispatch({ type: START_LOADING });
    dispatch(DelDesign(id));
    setModalOpen(false);
    navigate(`/ViewDesign`);
  };
  return (
    <div className="p-5">
      <DesignSingle
        Data={Data}
        Sizede={Sizede}
        SizeHead={SizeHead}
        SizeRow={SizeRow}
        img={img}
        ProDetail={ProDetail}
        DeDetail={DeDetail}
        IsSize={true}
        id={id}
      />
      <div className="w-full flex justify-end ">
        <button
          type="button"
          onClick={Submit}
          style={{ backgroundColor: currentColor }}
          className="btn py-3 mt-3 mb-10 mr-5  text-white w-full md:w-52"
        >
          กลับหน้ารวมดีไซน์
        </button>
        <button
          type="button"
          onClick={() => {
            setModalOpen(true);
          }}
          className="btn py-3 mt-3 mb-10 mr-5 bg-red-600  text-white w-full md:w-52"
        >
          <AiFillDelete className="mr-2" />
          ลบดีไซน์นี้
        </button>
      </div>
      {modalOpen && (
        <Modal
          title={`คุณแน่ใจมั้ยว่าต้องการลบดีไซน์นี้  ?`}
          body={
            <>
              <span className="text-center">
                1. หลังจากลบสินค้าแล้วจะไม่สามารถกู้ข้อมูลกลับมาใหม่ได้
                <br /> 2. รหัสบาร์โค้ด,สต๊อคและสินค้าทั้งหมดที่ใช้ดีไซน์จะถูกลบออกจากระบบ
              </span>
            </>
          }
          setOpenModal={setModalOpen}
          DelButton="ลบ"
          customFunc={DelProductFunc}
        />
      )}
    </div>
  );
};

export default SingleDesign;
