import React, { useRef, useState, useEffect, useContext } from "react";

import { PrintBarcodeContext } from "../Context/PrintBarcodeCart";

const DataPrint = () => {
  const { PrintData, setPrintData, DisplayData, setDisplayData } = useContext(PrintBarcodeContext);

  const DelPrintBarcode = (e) => {
    const removedata = PrintData.filter((p) => p.product_stock_barcode_13 !== e.target.id);
    const sendremovedata = PrintData.filter((p) => p.product_stock_barcode_13 === e.target.id);

    const test = DisplayData.concat(
      sendremovedata.map((e) => {
        return {
          product: e.product,
          product_id: e.product_id,
          product_stock_barcode: e.product_stock_barcode,
          product_stock_barcode_13: e.product_stock_barcode_13,
          size_info: e.size_info,
          size_info_id: e.size_info_id,
        };
      })
    );

    setDisplayData([...new Set(test)]);
    setPrintData(removedata);
  };

  return (
    <div className="flex flex-col mt-8 col-span-12 overflow-auto lg:overflow-visible">
      <table className="text-left w-full table-report  -mt-2">
        <thead>
          <tr>
            <th className="whitespace-nowrap pl-3"></th>
            <th className="whitespace-nowrap">BARCODE</th>
            <th className="whitespace-nowrap">รหัสสินค้า</th>
            <th className="whitespace-nowrap">ชื่อสินค้า</th>
            <th className="text-center whitespace-nowrap">ไซส์</th>
            <th className="text-center whitespace-nowrap">ราคา</th>
            <th className="text-center whitespace-nowrap">จำนวนบาร์โค้ด</th>
          </tr>
        </thead>
        <tbody>
          {PrintData.map((e, i) => (
            <tr key={e.product_stock_barcode_13} className="z-50  border-b relative bg-white ">
              <td className="w-10 pl-3">
                <div
                  id={e.product_stock_barcode_13}
                  onClick={DelPrintBarcode}
                  className="flex text-danger hover:shadow-slate-100"
                >
                  {/* <Lucide id={e.product_stock_barcode_13} icon="XCircle" className="text-danger w-5 h-5 hover:text-red-900 " /> */}
                  X
                </div>
              </td>
              <td className="w-40 py-5  bg-white border-b-0 dark:bg-darkmode-600">
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

              <td className="table-report__action ">
                <div className="flex justify-center items-center">
                  <a className="flex items-center text-success">{e.value}</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPrint;
