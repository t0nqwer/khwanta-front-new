import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  deleteConfirmationModal,
  img,
  pictag1,
  pigtag2,
  Detail1,
  Info1,
  Detail2,
  Info2,
  Detail3,
  Info3,
  navigatTo,
}) => {
  const navigate = useNavigate();
  const openPost = (e) => {
    navigate(navigatTo);
  };
  const confirmDel = (e) => {
    deleteConfirmationModal(e);
  };
  return (
    <div className="bg-white border-transparent rounded-md relative dark:bg-darkmode-600 dark:border-transparent shadow-lg ">
      <div className="p-5">
        <div className=" h-96 2xl:h-96 relative rounded-md overflow-visible ">
          <img className="rounded-md absolute object-cover w-full h-full" src={img} />
          <div className="absolute w-full bottom-0 text-white px-5 pb-4  z-10 bg-gradient-to-t from-zinc-700 to-transparent/0">
            <a href="" className="block font-medium pt-4 text-xl ">
              {pictag1}
            </a>
            <span className="text-white/90 text-sm mt-3">{pigtag2}</span>
          </div>
        </div>
        <div className="text-slate-600 dark:text-slate-500 mt-5">
          <div className="flex items-center">
            {Detail1}: {Info1}
          </div>
          <div className="flex items-center mt-2">
            {Detail2}: {Info2}
          </div>
          <div className="flex items-center mt-2">
            {Detail3}: {Info3}
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-center p-5 border-t border-slate-200/60 dark:border-darkmode-400">
        <a className="flex items-center text-primary mr-auto" onClick={openPost} href="#">
          ดูรายละเอียดสินค้า
        </a>
        <a className="flex items-center text-danger" onClick={confirmDel} href="#">
          Delete
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
