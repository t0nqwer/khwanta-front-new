const Info = ({ product }) => {
  return (
    <div className="">
      <div className="intro-y box mt-5  ">
        <div className=" border-slate-200/60 dark:border-darkmode-400  rounded-md p-5">
          <div className="">
            <div className="font-medium text-base flex items-center justify-between border-b  border-slate-200/60 dark:border-darkmode-400 pb-5">
              <span>ข้อมูลสินค้า </span>
              <button className="btn mr-5 bg-red-600  text-white w-full md:w-52">
                แก้ไขข้อมูลสินค้า
              </button>
            </div>

            <div className="mt-5 justify-center"></div>
            <div className="grid grid-cols-12 gap-5 text-base mt-10 lg:text-lg">
              <div className=" col-span-2 justify-items-end text-right">
                <label className="">{product.head1 ? product.head1 : "รหัส :"}</label>
              </div>
              <div className="col-span-5 ">
                {product.info1 ? product.info1 : product?.code?.toUpperCase()}
              </div>
              <div className="col-span-2 text-right">
                <label htmlFor="horizontal-form-1" className="">
                  {product.head4 ? product.head4 : " ประเภท :"}
                </label>
              </div>
              <div className="col-span-3">
                <span className=" ">
                  {product.info4 ? product.info4 : product?.cloth_category?.category_name}
                </span>
              </div>
              <div className=" col-span-2 justify-items-end text-right">
                <label className=""> {product.head2 ? product.head2 : "ชื่อ :"}</label>
              </div>
              <div className=" col-span-5">
                <span className="">{product.info2 ? product.info2 : product?.design_name}</span>
              </div>
              <div className="col-span-2 text-right">
                <label htmlFor="horizontal-form-1" className="">
                  {product.head5 ? product.head5 : "ช่างแพทเทิร์น :"}
                </label>
              </div>
              <div className="col-span-3">
                <span className="">
                  {product.info5 ? product.info5 : product?.pattern_design?.pattern_design_name}
                </span>
              </div>
              <div className=" col-span-2 justify-items-end text-right">
                {product.head3 ? product.head3 : "แบรนด์ :"}
              </div>
              <div className=" col-span-5">
                <span className="flex">
                  {product.info3 ? product.info3 : product?.brand?.brand_name}
                </span>
              </div>
              {product?.head6 ? (
                <div className="col-span-2 text-right">
                  <label htmlFor="horizontal-form-1" className="">
                    {product?.head6}
                  </label>
                </div>
              ) : (
                ""
              )}
              <div className="col-span-3">
                <span className="">{product.info6}</span>
              </div>
              {product?.head7 ? (
                <>
                  <div className="col-span-2 text-right">
                    <label htmlFor="horizontal-form-1" className="">
                      {product.head7}
                    </label>
                  </div>
                  <div className=" col-span-5">
                    <span className="">{product?.info7}</span>
                  </div>
                </>
              ) : (
                ""
              )}
              {product?.head8 ? (
                <>
                  <div className="col-span-2 text-right">
                    <label htmlFor="horizontal-form-1" className="">
                      {product.head8}
                    </label>
                  </div>
                  <div className=" col-span-3">
                    <span className="">{product?.info8}</span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="grid grid-cols-11 gap-5 mt-5 text-lg lg:text-base">
              <div className=" col-span-2 text-right">
                <label htmlFor="horizontal-form-1" className="">
                  คำอธิบาย :
                </label>
              </div>
              <div className=" col-span-8 text-right">
                <span className=" text-lg">{product?.design_description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
