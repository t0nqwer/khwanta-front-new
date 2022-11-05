import { useState, useEffect } from "react";
import UploadDetail from "./UploadDetail";
import UploadFB from "./UploadFB";
import { IoIosArrowDown } from "react-icons/io";

const UploadImg = (props) => {
  const [delImg, setDelImg] = useState(false);

  const saveImageBack = (image) => {
    const newImageURL = [...image];
    props.onSaveProductBack(newImageURL);
  };

  const saveImageFront = (image) => {
    const newImageURL = [...image];
    props.onSaveProductFront(newImageURL);
  };

  const saveImageDetail = (image) => {
    const newImageURL = [...image];
    props.onSaveProductDetail(newImageURL);
  };

  useEffect(() => {
    setDelImg(!delImg);
  }, [props.ResetData]);

  return (
    <>
      <div className="intro-y box p-5  mt-5">
        <div className="border border-gray-300 dark:border-darkmode-400 rounded-md px-5">
          <div className="grid gap-5 md:grid-cols-4 ">
            <div className="col-span-2">
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-10">
                  <div className="form-label w-30 xl:w-30 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">รูปด้านหน้า</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        <div>รูปสินค้าด้านหน้า 1 รูป</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                    <UploadFB DelImg={delImg} onSaveImageFront={saveImageFront} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="form-inline items-start flex-col xl:flex-row mt-10">
                <div className="form-label w-30 xl:w-30 xl:!mr-10">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">รูปด้านหลัง</div>
                      <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                    <div className="leading-relaxed text-slate-500 text-xs mt-3">
                      <div>รูปสินค้าด้านหลัง 1 รูป</div>
                    </div>
                  </div>
                </div>
                <div className=" mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 justify-center rounded-md pt-4">
                  <UploadFB DelImg={delImg} onSaveImageBack={saveImageBack} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-inline items-start flex-col xl:flex-row mt-10">
            <div className="form-label w-full xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">รูปรายละเอียดสินค้า</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Required
                  </div>
                </div>
                <div className="leading-relaxed text-slate-500 text-xs mt-3">
                  <div>รูปรายละเอียดสินค้า</div>
                </div>
              </div>
            </div>
            <div className="w-full mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
              <UploadDetail DelImg={delImg} onSaveImageDetail={saveImageDetail} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImg;
