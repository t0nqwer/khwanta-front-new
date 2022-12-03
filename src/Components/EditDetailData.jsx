import { useState, useEffect } from "react";

const EditDetailData = ({ product, brand, category, pattern, OnProductInfoHandler }) => {
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

  useEffect(() => {
    setProductData({
      ...ProductData,
      code: product.code,
      title: product.design_name,
      category: product?.cloth_category?.cloth_category_id,
      categoryname: product?.cloth_category?.category_name,
      description: product?.design_description,
      pattern: product?.pattern_design.pattern_design_id,
      patternname: product?.pattern_design.pattern_design_name,
      brand: product?.brand.brand_id,
      brandname: product?.brand.brand_name,
    });
  }, [product]);
  const namehandler = (e) => {
    setProductData({ ...ProductData, title: e.target.value });
  };
  const brandhandler = (e) => {
    setProductData({
      ...ProductData,
      brand: e.target.selectedOptions[0].id,
      brandname: e.target.value,
    });
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
  const descriptionhandler = (e) => {
    setProductData({ ...ProductData, description: e.target.value });
  };
  useEffect(() => {
    OnProductInfoHandler(ProductData);
  }, [ProductData]);

  return (
    <div>
      <div className="intro-y box p-5  ">
        <div className="items-center content-center"></div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 justify-end flex">
            <label htmlFor="horizontal-form-1" className="  flex ">
              รหัส
            </label>
          </div>
          <span>{product?.code}</span>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-2 justify-end content-center items-center flex">
            <label htmlFor="horizontal-form-2" className="">
              ชื่อ
            </label>
          </div>
          <input
            id="horizontal-form-2"
            value={ProductData.title}
            type="text"
            className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="เสื้อคอปาดแขนสั้นผ้าขืดยกดอกลาย 12 ราศี"
            onChange={namehandler}
          />
        </div>
        <div className="grid grid-cols-12 mt-5 gap-4">
          <div className="col-span-2 justify-end content-center items-center flex">
            <label className="">แบรนด์</label>
          </div>
          <select
            id="brand"
            className="col-span-9 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={ProductData.brandname}
            onChange={brandhandler}
          >
            {brand.map((data) => (
              <option value={data.brand_name} key={data.brand_id} id={data.brand_id}>
                {data.brand_name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-12 mt-5 gap-4">
          <div className="col-span-2 justify-end content-center items-center flex">
            <label className="">ประเภท</label>
          </div>
          <select
            id="brand"
            className="col-span-9 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={ProductData.categoryname}
            onChange={categoryhandler}
          >
            {category.map((data) => (
              <option
                value={data.category_name}
                key={data.cloth_category_id}
                id={data.cloth_category_id}
              >
                {data.category_name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-12 mt-5 gap-4">
          <div className="col-span-2 justify-end content-center items-center flex">
            <label className="">ช่างแพทเทิร์น</label>
          </div>
          <select
            id="brand"
            className="col-span-9 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={ProductData.patternname}
            onChange={patternhandler}
          >
            {pattern.map((data) => (
              <option
                value={data.pattern_design_name}
                key={data.pattern_design_id}
                id={data.pattern_design_id}
              >
                {data.pattern_design_name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-2 justify-end content-center items-center flex">
            <label htmlFor="horizontal-form-2" className="">
              คำอธิบาย
            </label>
          </div>
          <input
            id="horizontal-form-2"
            value={ProductData.description}
            type="text"
            className="col-span-9 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={descriptionhandler}
          />
        </div>
      </div>
    </div>
  );
};

export default EditDetailData;
