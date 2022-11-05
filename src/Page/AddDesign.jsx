import React, { useState, useEffect } from "react";
import { DesignInfo, Size, UploadImg } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { GetAddDesign } from "../Action/product";

const AddDesign = () => {
  //<==================Redux=====================>

  const dispatch = useDispatch();
  const { SizeDe, DesignCode, isLoading } = useSelector((state) => state.designcode);

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
  return (
    <div>
      <DesignInfo OnProductInfoHandler={ProductInfoHandler} ResetData={ResetData} />
      <Size OnSaveSize={SaveSize} ResetData={ResetData} />
      <UploadImg
        ResetData={ResetData}
        onSaveProductFront={getFrontimg}
        onSaveProductBack={getBackimg}
        onSaveProductDetail={getDetailimg}
      />
    </div>
  );
};

export default AddDesign;
