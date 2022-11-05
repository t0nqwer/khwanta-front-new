import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Input } from "@material-tailwind/react";

const DesignInfo = () => {
  const { DesignCode, category, pattern, brand } = useSelector((state) => state.designcode);

  //<==================State=====================>
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
  });
  const [isActive, setIsActive] = useState(false);
  const [cataCheck, setCataCheck] = useState(false);
  const checkid = DesignCode.map((e) => e.code);
  //<==================Function=====================>
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
    const Mpattern = document.getElementById("pattern2");
    if (e.target.value === "ผ้าพันคอ") {
      Mpattern.setAttribute("disabled", "");
      Mpattern.selectedIndex = 0;
      setCataCheck(!cataCheck);
    } else {
      Mpattern.removeAttribute("disabled");
    }
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
  return (
    <div>
      <div className="intro-y box p-5  ">
        <div className="border border-gray-300 dark:border-darkmode-400 rounded-md p-5">
          <div className="mt-5">
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
            <div className="grid grid-cols-12 mt-5 mb-10">
              <div className=" col-span-2">
                <label htmlFor="horizontal-form-1" className="col-span-2 sm:w-20">
                  แบรนด์
                </label>
              </div>
              {brand.map((brand) => (
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

            <div className="grid grid-cols-12 mt-5">
              <label htmlFor="horizontal-form-1" className="col-span-2 sm:w-20">
                คำอธิบาย
              </label>
              <textarea
                id="validation-form-6"
                value={ProductData.description}
                name="comment"
                className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Type your comments"
                onChange={descriptionhandler}
              ></textarea>
            </div>

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
                {category.map((type) => (
                  <option
                    value={type.category_name}
                    key={type.cloth_category_id}
                    id={type.cloth_category_id}
                  >
                    {type.category_name}
                  </option>
                ))}
              </select>
            </div>
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
                {pattern.map((post, i) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignInfo;
