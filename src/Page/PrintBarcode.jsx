import { useState, useEffect, createContext, useRef } from "react";
import { DataPrint, Datalist } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { GetProductStockBarcode } from "../Action/stock";
import { PrintBarcodeContext } from "../Context/PrintBarcodeCart";
import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";
import { useStateContext } from "../Context/ContextProvider";
const PrintBarcode = () => {
  const StockBarcode = useSelector((state) => state.Stock);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const { currentColor } = useStateContext();
  const dispatch = useDispatch();
  const [PrintData, setPrintData] = useState([]);
  const [DisplayData, setDisplayData] = useState([]);
  console.log(StockBarcode);
  useEffect(() => {
    dispatch(GetProductStockBarcode());
  }, [dispatch]);
  useEffect(() => {
    setDisplayData(StockBarcode);
  }, [StockBarcode]);

  const searchFunc = (e) => {
    console.log(e.target.value);
    const searchbarcode = StockBarcode.filter((p) =>
      p.product_stock_barcode_13.includes(e.target.value)
    );
    const searchproduct_id = StockBarcode.filter((p) => p.product_id.includes(e.target.value));
    const searchsize_info_id = StockBarcode.filter((p) =>
      p.size_info_id.includes(e.target.value.toLowerCase())
    );
    const searchsize = StockBarcode.filter((p) =>
      p.size_info.size.size_name.includes(e.target.value.toUpperCase())
    );
    const searchttile = StockBarcode.filter((p) => p.product.title.includes(e.target.value));

    const searchdata = [
      ...new Set(
        searchbarcode.concat(searchproduct_id, searchsize_info_id, searchttile, searchsize)
      ),
    ];
    const checkdata = PrintData.map((e) => {
      return e.product_stock_barcode_13;
    });

    if (PrintData.length !== 0) {
      const intersection = searchdata.filter(
        (x) =>
          !x.product_stock_barcode_13.includes(PrintData.map((e) => e.product_stock_barcode_13))
      );
      console.log(intersection);
      setDisplayData(intersection);
    } else {
      setDisplayData(searchdata);
    }
  };
  const warptext = (ctx, text, x, y, maxWidth, lineHeight) => {
    let Maxtext = 19;
    let words = text.length;
    let numberline = Math.ceil(words / Maxtext);
    let lineArray = [];
    for (let i = 0; i < numberline; i++) {
      let data = text.substr(i * Maxtext, (i + 1) * Maxtext);
      lineArray.push([data, x, y + i * lineHeight]);
    }
    return lineArray;
  };
  const Printtrigger = () => {
    const myWindow = window.open("", "");
    myWindow.document.write('<html><head><title>Print it!</title></head><body style="margin:0;">');
    // PrintData.map((e) => {
    //   for (let i = 0; i < e.value; i++) {
    //     const h = 155;
    //     const batcode = createCanvas(200, 200);
    //     const PrintBar = createCanvas(220, h);
    //     const ctx = PrintBar.getContext("2d");
    //     ctx.beginPath();
    //     ctx.rect(0, 0, 220, h);
    //     ctx.fillStyle = "white";
    //     ctx.fill();
    //     ctx.fillStyle = "black";
    //     ctx.font = '12px "roboto"';
    //     JsBarcode(batcode, e.product_stock_barcode_13, {
    //       format: "EAN13",
    //       width: 4,
    //       height: 80,
    //       text: e.product_stock_barcode_13,
    //       marginTop: 0,
    //       marginBottom: 0,
    //       marginLeft: 0,
    //       marginRight: 0,
    //       background: "#ffffff",
    //     });
    //     ctx.drawImage(batcode, 0, h - 80, 210, 80);
    //     ctx.textAlign = "start";
    //     ctx.textBaseline = "top";
    //     ctx.font = "700 20px Arial";
    //     ctx.fillText(e.size_info_id, 10, 5);
    //     ctx.textAlign = "end";
    //     ctx.fillText(`ราคา ${e?.product.price}`, 200, 5);
    //     ctx.textAlign = "start";
    //     ctx.font = "700 17px Arial";

    //     ctx.font = "700 18px Arial";
    //     let wrappedText = warptext(ctx, e?.product?.fabric.title, 10, 30, 200, 16);
    //     wrappedText.forEach(function (item) {
    //       ctx.fillText(item[0], item[1], item[2]);
    //     });

    /// V-1

    PrintData.map((e) => {
      for (let i = 0; i < e.value; i++) {
        const h = 155;
        const batcode = createCanvas(200, 200);
        const PrintBar = createCanvas(220, h);
        const ctx = batcode.getContext("2d");
        ctx.beginPath();
        ctx.rect(0, 0, 220, h);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.font = '12px "roboto"';
        JsBarcode(batcode, e.product_stock_barcode_13, {
          format: "EAN13",
          width: 2,
          height: 50,
          flat: true,
          text: e.product_stock_barcode_13,
          marginTop: 80,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          background: "#ffffff",
        });
        ctx.textAlign = "start";
        ctx.textBaseline = "top";
        ctx.font = "700 22px Arial";
        if (e?.size_info !== null) {
          ctx.fillText(e.size_info_id, -190, 8);
        }

        ctx.textAlign = "end";
        ctx.fillText(`ราคา ${e?.product.price}`, -0, 8);
        ctx.textAlign = "start";
        ctx.font = "700 17px Arial";

        ctx.font = "700 16px Arial";

        if (e?.size_info !== null) {
          let wrappedText = warptext(ctx, e?.product?.fabric.title, -190, 30, 200, 15);
          wrappedText.forEach(function (item) {
            ctx.fillText(item[0], item[1], item[2]);
          });
        } else {
          let wrappedText = warptext(ctx, e.product.title, -190, 30, 200, 15);
          wrappedText.forEach(function (item) {
            ctx.fillText(item[0], item[1], item[2]);
          });
        }

        console.log(batcode);
        myWindow.document.write(`<img src="${batcode.toDataURL("image/jpeg", "bilinear")}" />`);
      }
    });
    // myWindow.document.write(`<img src="" />`);
    myWindow.document.write("</body></html>");
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
  };

  return (
    <>
      <PrintBarcodeContext.Provider
        value={{ PrintData, setPrintData, DisplayData, setDisplayData, Printtrigger }}
      >
        <div className="p-5">
          <h2 className="intro-y text-lg font-medium mt-10">Product List</h2>
          <DataPrint />
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y justify-between col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
              <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                <div className="w-56 relative text-slate-500">
                  <input
                    type="text"
                    className="form-control p-3 w-56 box pr-10"
                    onChange={searchFunc}
                    placeholder="Search..."
                  />
                </div>
              </div>
              <button
                onClick={Printtrigger}
                className="btn  btn-primary w-24 mr-10 mb-2"
                style={{ backgroundColor: currentColor }}
              >
                Print
              </button>
            </div>
            <Datalist />
          </div>
        </div>
      </PrintBarcodeContext.Provider>
    </>
  );
};

export default PrintBarcode;
