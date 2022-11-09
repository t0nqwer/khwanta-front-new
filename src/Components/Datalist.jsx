import { useState, useEffect, useContext } from "react";

import { PrintBarcodeContext } from "../Context/PrintBarcodeCart";
const Datalist = () => {
  const { PrintData, setPrintData, DisplayData, setDisplayData } = useContext(PrintBarcodeContext);
  const addBarCode = (e) => {
    const value = document.getElementById(e.target.id).value;
    const [target] = DisplayData.filter((p) => p.product_stock_barcode_13 === e.target.id);
    const printdata = { ...target, value: value };
    setPrintData([...PrintData, printdata]);
    const newShowData = DisplayData.filter((d) => d.product_stock_barcode_13 !== e.target.id);
    setDisplayData(newShowData);
  };

  return (
    <div className="flex flex-col col-span-12 overflow-auto lg:overflow-visible">
      <table className="text-left w-full table-report -mt-2">
        <thead>
          <tr>
            <th className="whitespace-nowrap pl-3 ">BARCODE</th>
            <th className="whitespace-nowrap ">รหัสสินค้า</th>
            <th className="whitespace-nowrap ">ชื่อสินค้า</th>
            <th className="text-center whitespace-nowrap">ไซส์</th>
            <th className="text-center whitespace-nowrap ">ราคา</th>
            <th className="text-center whitespace-nowrap ">จำนวนบาร์โค้ด</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData.map((e, i) => (
            <tr key={e.product_stock_barcode_13} className=" z-50 border-b relative bg-white ">
              <td className="w-40 py-5 pl-3 bg-white border-b-0 dark:bg-darkmode-600">
                <div className="flex">
                  <a href="" className="text-lg whitespace-nowrap">
                    {e.product_stock_barcode_13}
                  </a>
                </div>
              </td>
              <td>
                <a href="" className=" text-lg whitespace-nowrap">
                  {e?.size_info_id?.toUpperCase()}
                </a>
              </td>
              <td className="text-lg">{e.product.title}</td>
              <td className="text-center px-5">{e?.size_info?.size?.size_name}</td>
              <td className="text-center px-5">{e.product.price}</td>

              <td className="table-report__action w-72">
                <div className="flex justify-center items-center">
                  <input
                    id={e.product_stock_barcode_13}
                    className="w-28 shadow-md border-gray-300 border rounded-md p-1 mr-4 text-center"
                    type="text"
                  ></input>
                  <button
                    id={e.product_stock_barcode_13}
                    onClick={addBarCode}
                    type="submit"
                    className="flex items-center text-success"
                  >
                    เพิ่มบาร์โค้ด
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datalist;
