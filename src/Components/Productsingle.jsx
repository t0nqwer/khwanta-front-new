import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Info from "./Design/Info";
import Slider from "./Design/Slider";
import Sizetable from "./Design/Sizetable";
import { Size, EditDetailData } from ".";
import { EditDesignDetail, EditDesignSize, GetAddDesign, GetSingleDesign } from "../Action/product";

const Productsingle = ({
  Data,
  Sizede,
  SizeHead,
  SizeRow,
  img,
  ProDetail,
  DeDetail,
  IsSize,
  id,
}) => {
  const { SizeDe, DesignCode, category, pattern, brand, isLoading } = useSelector(
    (state) => state.designcode
  );
  const dispatch = useDispatch();
  const [IsEditSize, setIsEditSize] = useState(false);
  const [GetSize, setGetSize] = useState([]);
  const [isEditData, setIsEditData] = useState(false);
  const [ImageFrontSelected, setImageFrontSelected] = useState(false);
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
  const [Imgfront, setImgfront] = useState("");
  const [Imgback, setImgback] = useState("");
  useEffect(() => {
    setImgfront(img[0]?.imageUrl);
    setImgback(img[1]?.imageUrl);
  }, [img]);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImgfront(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    setImageFrontSelected(true);
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
  const cancelselectFrontImg = () => {
    setImageFrontSelected(false);
    setSelectedFile();
    setImgfront(img[0]?.imageUrl);
    console.log(img[0]?.imageUrl);
  };
  useEffect(() => {
    console.log(Imgfront);
  }, [Imgfront]);
  const editFrontImgFnc = (e) => {
    console.log(URL.createObjectURL(e.target.files));
    // setImgfront(URL.createObjectURL(e.target.value));
  };
  return (
    <div className="grid grid-cols-8 gap-4 mt-5">
      <div className=" col-span-8 ">
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div className="  justify-around relative flex flex-col items-center ">
              <span className="my-5 text-lg font-bold">รูปด้านหน้า</span>
              <img src={Imgfront} className=" object-contain rounded-md h-128 " />
              {!ImageFrontSelected && (
                <label
                  for="file-upload"
                  className=" w-full text-center text-white bg-red-400 p-3 mt-2 rounded-md"
                >
                  แก้ไขรูป
                </label>
              )}
              <input id="file-upload" onChange={onSelectFile} className=" hidden" type="file" />
              {ImageFrontSelected && (
                <div>
                  <button className="btn py-3 mt-3 mr-5 bg-green-600  text-white w-full ">
                    บันทึกรูป
                  </button>
                  <button
                    onClick={cancelselectFrontImg}
                    className="btn py-3 mt-3 mr-5 bg-red-600  text-white w-full "
                  >
                    ยกเลิก
                  </button>
                </div>
              )}
            </div>
            <div className="  justify-around relative flex flex-col items-center ">
              <span className="my-5 text-lg font-bold">รูปด้านหลัง</span>
              <img src={Imgback} className=" object-contain rounded-md h-128 " />
              <button className="btn py-3 mt-3 mr-5 bg-red-600  text-white w-full md:w-52">
                แก้ไขรูป
              </button>
            </div>
          </div>
          <div className="intro-y box mt-5  ">
            <div className=" border-slate-200/60 dark:border-darkmode-400  rounded-md p-5">
              <div className="">
                <div className="font-medium text-base flex items-center justify-between border-b  border-slate-200/60 dark:border-darkmode-400 pb-5">
                  <span>ข้อมูลสินค้า </span>

                  <div></div>
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

          <Sizetable SizeHead={SizeHead} SizeRow={SizeRow} />
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

export default Productsingle;
