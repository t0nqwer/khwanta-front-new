import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Info from "./Info";
import Slider from "./Slider";
import Sizetable from "./Sizetable";
import { Size, EditDetailData } from "../../Components";
import {
  EditDesignDetail,
  EditDesignSize,
  GetAddDesign,
  GetSingleDesign,
} from "../../Action/product";

const Product = ({ Data, Sizede, SizeHead, SizeRow, img, ProDetail, DeDetail, IsSize, id }) => {
  const { SizeDe, DesignCode, category, pattern, brand, isLoading } = useSelector(
    (state) => state.designcode
  );
  const dispatch = useDispatch();
  const [IsEditSize, setIsEditSize] = useState(false);
  const [GetSize, setGetSize] = useState([]);
  const [ResetData, setResetData] = useState(true);
  const [isEditData, setIsEditData] = useState(false);
  const [Product, setProduct] = useState({
    code: "",
    title: "",
    description: "",
    categoryname: "",
    pattern: "",
    patternname: "",
    brand: "",
    brandname: "",
  });
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
  useEffect(() => {
    dispatch(GetAddDesign());
  }, [dispatch]);
  const EditSizeFunc = (e) => {
    setIsEditSize(!IsEditSize);
  };
  const EditDataFunc = (e) => {
    setIsEditData(!isEditData);
    dispatch(EditDesignDetail(Product));
  };

  const submitEditSize = () => {
    dispatch(EditDesignSize([GetSize, id]));
    setGetSize([]);
    setIsEditSize(!IsEditSize);
  };

  const SaveSize = (e) => {
    const render = e.map((e) => {
      const dename = SizeDe.filter((x) => x.size_de_id === e.id);
      return { name: e.name, id: e.id, data: e.data, dename: dename[0].size_de_name };
    });

    setGetSize(render);
  };
  return (
    <div className="grid grid-cols-8 gap-4 mt-5">
      <div className=" col-span-8 ">
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div className="  justify-around relative flex flex-col items-center ">
              <span className="my-5 text-lg font-bold">?????????????????????????????????</span>
              <img src={img[0]?.imageUrl} className=" object-contain rounded-md h-128 " />
              <button className="btn py-3 mt-3 mr-5 bg-red-600  text-white w-full md:w-52">
                ????????????????????????
              </button>
            </div>
            <div className="  justify-around relative flex flex-col items-center ">
              <span className="my-5 text-lg font-bold">?????????????????????????????????</span>
              <img src={img[1]?.imageUrl} className=" object-contain rounded-md h-128 " />
              <button className="btn py-3 mt-3 mr-5 bg-red-600  text-white w-full md:w-52">
                ????????????????????????
              </button>
            </div>
          </div>
          <div className="intro-y box mt-5  ">
            <div className=" border-slate-200/60 dark:border-darkmode-400  rounded-md p-5">
              <div className="">
                <div className="font-medium text-base flex items-center justify-between border-b  border-slate-200/60 dark:border-darkmode-400 pb-5">
                  <span>???????????????????????????????????? </span>
                  {/* <button
                    className="btn mr-5 bg-red-600  text-white w-full md:w-52"
                    onClick={() => {
                      setIsEditData(!isEditData);
                    }}
                  >
                    ???????????????????????????????????????????????????
                  </button> */}
                  <div>
                    {!isEditData ? (
                      <button
                        className="btn mr-5 bg-red-600  text-white w-full md:w-52"
                        onClick={() => {
                          setIsEditData(!isEditData);
                          dispatch(GetAddDesign());
                        }}
                      >
                        ???????????????????????????????????????????????????
                      </button>
                    ) : (
                      ""
                    )}
                    {isEditData ? (
                      <>
                        <button
                          className="btn mr-5 bg-green-600  text-white w-full md:w-52"
                          onClick={EditDataFunc}
                        >
                          ??????????????????????????????????????????????????????
                        </button>
                        <button
                          className="btn mr-5 bg-red-600  text-white w-full md:w-52"
                          onClick={() => {
                            setIsEditData(!isEditData);
                          }}
                        >
                          ??????????????????
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {isEditData ? (
                  <EditDetailData
                    pattern={pattern}
                    category={category}
                    product={Data}
                    brand={brand}
                    OnProductInfoHandler={ProductInfoHandler}
                  />
                ) : (
                  <Info product={Data} />
                )}
              </div>
            </div>
          </div>

          {IsEditSize ? (
            <div className="mt-5">
              <Size OnSaveSize={SaveSize} ResetData={ResetData} />
              <div className=" justify-end flex mr-5">
                <button
                  className="btn py-3 mt-3 mr-5 bg-green-600  text-white w-full md:w-52 hover:bg-green-500"
                  onClick={submitEditSize}
                >
                  ??????????????????
                </button>
                <button
                  className="btn py-3 mt-3 mr-5 bg-red-600  text-white w-full md:w-52 hover:bg-red-500"
                  onClick={() => {
                    setIsEditSize(!IsEditSize);
                  }}
                >
                  ??????????????????
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {IsEditSize ? (
            ""
          ) : IsSize ? (
            <div>
              <Sizetable SizeHead={SizeHead} SizeRow={SizeRow} />
              <div className=" justify-end mt-5 mb-7 flex w-full">
                <button
                  className="btn mr-5 bg-red-600   text-white w-full md:w-52"
                  onClick={EditSizeFunc}
                >
                  ?????????????????????????????????????????????
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Slider
        className="grid col-span-8"
        product={img}
        imgdetail={ProDetail}
        imgdesigndetail={DeDetail}
      />
    </div>
  );
};

export default Product;
