import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Input } from "@material-tailwind/react";
import Select from "react-select";

const DesignInfo = ({
  IsCode,
  IsTitle,
  IsBrand,
  IsDescrip,
  IsType,
  IsPattern,
  IsFabric,
  IsPrice,
  IsSearchSelect1,
  IsSearchSelect2,
  IsShowname,
  OnProductInfoHandler,
  IsSearchSelect3,
  IsShowFabric,
  ResetData,
}) => {
  const { DesignCode } = useSelector((state) => state.designcode);

  //<==================State=====================>
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [ProductData, setProductData] = useState({
    code: "",
    title: "",
    description: "",
    category: "",
    categoryname: "",
    pattern: "",
    patternname: "",
    brand: "",
    brandname: "",
    fabric: "",
    search1: "",
    search2: "",
    search3: "",
    search1label: "",
    search2label: "",
    search3label: "",
    price: "",
  });
  const [isActive, setIsActive] = useState(false);
  const checkid = DesignCode.map((e) => e.code);
  //<==================Function=====================>



  useEffect(() => {
    setProductData({
      code: "",
      title: "",
      description: "",
      category: "",
      categoryname: "",
      pattern: "",
      patternname: "",
      brand: "",
      brandname: "",
      fabric: "",
      search1: "",
      search2: "",
      search3: "",
      search1label: "",
      search2label: "",
      search3label: "",
      price: "",
    });
 
  }, [ResetData]);
  useEffect(() => {
    OnProductInfoHandler(ProductData);
  }, [ProductData]);
  const codehandler = (e) => {
    for (let i = 0; i < checkid.length; i++) {
      if (e.target.value === checkid[i]) {
        setIsActive(true);
        setProductData({ ...ProductData, code: e.target.value.toLowerCase() });
        break;
      } else {
        setIsActive(false);
        setProductData({ ...ProductData, code: e.target.value.toLowerCase() });
      }
    }
  };
  const pricehandler = (e) => {
    setProductData({ ...ProductData, price: e.target.value });
  };
  const namehandler = (e) => {
    setProductData({ ...ProductData, title: e.target.value });
  };
  const descriptionhandler = (e) => {
    setProductData({ ...ProductData, description: e.target.value });
  };
  const brandhandler = (e) => {
    setProductData({ ...ProductData, brand: e.target.id, brandname: e.target.value });
  };
  const categoryhandler = (e) => {
    setProductData({
      ...ProductData,
      category: e.target.selectedOptions[0].id,
      categoryname: e.target.value,
    });
  };
  const patternhandler = (e) => {
    setProductData({
      ...ProductData,
      pattern: e.target.selectedOptions[0].id,
      patternname: e.target.value,
    });
  };
  const SearchSelect1handler = (e) => {
    if (e === null) {
      setProductData({
        ...ProductData,
        search1: "",
        search1label: "",
      });
      return;
    }
    setProductData({
      ...ProductData,
      search1: e.value,
      search1label: e.label,
    });
  };
  const SearchSelect2handler = (e) => {
    if (e === null) {
      setProductData({
        ...ProductData,
        search2: "",
        search2label: "",
      });
      return;
    }
    setProductData({
      ...ProductData,
      search2: e.value,
      search2label: e.label,
    });
  };
  const SearchSelect3handler = (e) => {
    if (e === null) {
      setProductData({
        ...ProductData,
        search3: "",
        search3label: "",
      });
      return;
    }
    setProductData({
      ...ProductData,
      search3: e.value,
      search3label: e.label,
    });
  };

  return (
    <div>
      <div className="intro-y box p-5  ">
        <div className="border border-gray-300 dark:border-darkmode-400 rounded-md p-5">
          <div className="mt-5 items-center content-center">
            {IsShowname ? (
              <div className="grid  grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex sm:w-20">
                  ชื่อ
                </label>
                <span className="col-span-9">{`${ProductData.title}${ProductData.fabric}${ProductData.search1}${ProductData.search2label}`}</span>
              </div>
            ) : (
              ""
            )}
            {IsShowFabric ? (
              <div className="grid  grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex sm:w-20">
                  ชื่อ
                </label>
                <span className="col-span-9">{`ผ้า${ProductData.categoryname}${ProductData.search1label}${ProductData.search2label}${ProductData.search3label}`}</span>
              </div>
            ) : (
              ""
            )}
            {IsCode ? (
              <div className="grid grid-cols-12">
                <label htmlFor="horizontal-form-1" className="col-span-2 flex sm:w-20">
                  รหัส
                </label>

                <input
                  id="horizontal-form-1"
                  value={ProductData.code}
                  type="text"
                  className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  style={{ textTransform: "uppercase" }}
                  placeholder="ty123t1"
                  onChange={codehandler}
                />

                <span className={`text-danger ml-3 ${isActive ? "" : "hidden"}`}>
                  {" "}
                  รหัสนี้มีในระบบแล้ว
                </span>
              </div>
            ) : (
              ""
            )}
            {IsTitle ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex sm:w-20">
                  ชื่อ
                </label>
                <input
                  id="horizontal-form-2"
                  value={ProductData.title}
                  type="text"
                  className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="เสื้อคอปาดแขนสั้นผ้าขืดยกดอกลาย 12 ราศี"
                  onChange={namehandler}
                />
              </div>
            ) : (
              ""
            )}
            {IsSearchSelect1?.Show ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex ">
                  {IsSearchSelect1.lable}
                </label>
                <Select
            
                  className="col-span-9"
                  classNamePrefix="select"
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={IsSearchSelect1.options}
                  onChange={SearchSelect1handler}
                
                />
              </div>
            ) : (
              ""
            )}
            {IsSearchSelect2?.Show ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex sm:w-20">
                  {IsSearchSelect2.lable}
                </label>
                <Select
               
                  className="col-span-9"
                  classNamePrefix="select"
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={IsSearchSelect2.options}
                  onChange={SearchSelect2handler}
                />
              </div>
            ) : (
              ""
            )}
            {IsSearchSelect3?.Show ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex ">
                  {IsSearchSelect3.lable}
                </label>
                <Select
                  className="col-span-9"
                  classNamePrefix="select"
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={IsSearchSelect3.options}
                  onChange={SearchSelect3handler}
                />
              </div>
            ) : (
              ""
            )}
            {IsBrand?.Show ? (
              <div className="grid grid-cols-12 mt-5 mb-10">
                <div className=" col-span-2">
                  <label htmlFor="horizontal-form-1" className="col-span-2 sm:w-20">
                    แบรนด์
                  </label>
                </div>
                {IsBrand.value.map((brand) => (
                  <div key={brand.brand_id} className="form-check mr-2">
                    <input
                      id={brand.brand_id}
                      className="form-check-input"
                      type="checkbox"
                      value={brand.brand_name}
                      onChange={brandhandler}
                    />
                    <label className="ml-2" htmlFor="checkbox-switch-4">
                      {brand.brand_name}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {IsDescrip ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-1" className="col-span-2 sm:w-20">
                  คำอธิบาย
                </label>
                <textarea
                  id="validation-form-6"
                  value={ProductData.description}
                  name="comment"
                  className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="คำอธิบานสินค้าเพิ่มเติม_"
                  onChange={descriptionhandler}
                ></textarea>
              </div>
            ) : (
              ""
            )}
            {IsType?.Show ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-1" className=" col-span-2 sm:w-20">
                  ประเภท
                </label>

                <select
                  id="category"
                  className="col-span-9 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={categoryhandler}
                >
                  <option defaultValue value="100"></option>
                  {IsType.value.map((type) => (
                    <option value={type.name} key={type.id} id={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              ""
            )}
            {IsPattern?.Show ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-1" className=" col-span-2">
                  ช่างแพทเทิร์น
                </label>

                <select
                  id="pattern2"
                  className="col-span-9 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={patternhandler}
                >
                  <option value="100"></option>
                  {IsPattern.value.map((post, i) => (
                    <option
                      value={post.pattern_design_name}
                      key={post.pattern_design_id}
                      id={post.pattern_design_id}
                    >
                      {post.pattern_design_name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              ""
            )}
            {IsFabric ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex sm:w-20">
                  ชื่อ
                </label>
                <input
                  id="horizontal-form-2"
                  value={ProductData.title}
                  type="text"
                  className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="เสื้อคอปาดแขนสั้นผ้าขืดยกดอกลาย 12 ราศี"
                  onChange={namehandler}
                />
              </div>
            ) : (
              ""
            )}
            {IsPrice ? (
              <div className="grid grid-cols-12 mt-5">
                <label htmlFor="horizontal-form-2" className="col-span-2 flex sm:w-20">
                  ราคา
                </label>
                <input
                  id="horizontal-form-2"
                  value={ProductData.price}
                  type="text"
                  className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="กรอกราคาแค่ตัวลขเท่านั้น"
                  onChange={pricehandler}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignInfo;
