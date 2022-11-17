import { useState, useEffect } from "react";
import Carousel from "./carousel";

const Slider = (props) => {
  const [current, setCurrent] = useState([]);
  const [data, setdata] = useState([]);
  const [proDetail, setProDetail] = useState([]);
  const [deDetail, setDeDetail] = useState([]);

  useEffect(() => {
    setdata(props.product);
    setProDetail(props.imgdetail);
    setDeDetail(props.imgdesigndetail);
  }, [props.product]);

  return (
    <div className="intro-y grid grid-cols-8 col-span-8 box p-5  ">
      <div className=" border-slate-200/60 dark:border-darkmode-400 grid grid-cols-8 col-span-8 rounded-md p-5">
        <div className="col-span-8">
          <div className="font-medium text-base flex items-center border-b  border-slate-200/60 dark:border-darkmode-400 pb-5">
            รูปสินค้า
          </div>
          <div className="mt-5 justify-center">
            <div className="mx-6">
              <Carousel data1={data} imgdetail={proDetail} imgdesigndetail={deDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
