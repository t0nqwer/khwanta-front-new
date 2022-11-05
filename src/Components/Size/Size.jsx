import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FreeSize from "./size/FreeSize";
import SizeSS from "./size/SizeSS";
import SizeS from "./size/SizeS";
import SizeM from "./size/SizeM";
import SizeL from "./size/SizeL";
import SizeXL from "./size/SizeXL";
import SizeXXL from "./size/SizeXXL";
import SizeXXXL from "./size/SizeXXXL";
import { IoIosAdd, IoMdRemove } from "react-icons/io";

const Size = ({ OnSaveSize, ResetData }) => {
  //redux----------------------------------------------------------------

  const { SizeDe, Sizename } = useSelector((state) => state.designcode);

  //----------------------------------------------------------------
  //state----------------------------------------------------------------
  //----------------------------------------------------------------
  const [initialValue, setInitialValue] = useState(0);
  const [displayText2, setDisplayText2] = useState(false);
  const [SizeDeCount, setSizeDeCount] = useState([]);
  const [sizeDetail, setSizeDetail] = useState([]);
  const [SizeArr, setSizeArr] = useState([]);
  const [IsFREEactive, setIsFREEactive] = useState(true);
  const [IsSSactive, setIsSSactive] = useState(true);
  const [IsSactive, setIsSactive] = useState(true);
  const [IsMactive, setIsMactive] = useState(true);
  const [IsLactive, setIsLactive] = useState(true);
  const [IsXLactive, setIsXLactive] = useState(true);
  const [IsXXLactive, setIsXXLactive] = useState(true);
  const [IsXXXLactive, setIsXXXLactive] = useState(true);
  //----------------------------------------------------------------
  //function----------------------------------------------------------------
  //----------------------------------------------------------------
  const sizeDetailCountHandler = (event) => {
    setInitialValue(initialValue + 1);
  };
  const sizeCountHandler = (event) => {
    const id = event.target.id;
    const target = event.target.id.toLowerCase();
    const targetEl = document.getElementById(target);
    if (event.target.id === "FREESIZE" && event.target.checked) {
      Sizename.map((e) => {
        const getEL = e.size_name.toLowerCase();
        const El = document.getElementById(getEL);
        const checkEl = document.getElementById(e.size_name);
        El.classList.add("hidden");
        checkEl.checked = false;
        checkEl.setAttribute("disabled", "");
        if (e.size_name === "FREESIZE") {
          checkEl.removeAttribute("disabled");
          checkEl.checked = true;
        }
      });
    }
    if (event.target.id === "FREESIZE" && !event.target.checked) {
      Sizename.map((e) => {
        const getEL = e.size_name.toLowerCase();
        const El = document.getElementById(getEL);
        const checkEl = document.getElementById(e.size_name);
        El.classList.add("hidden");
        checkEl.removeAttribute("disabled");
      });
    }
    if (event.target.checked) {
      targetEl.classList.remove("hidden");
      switch (id) {
        case "FREESIZE":
          setIsFREEactive(true);
          break;
        case "SS":
          setIsSSactive(true);
          break;
        case "S":
          setIsSactive(true);
          break;
        case "M":
          setIsMactive(true);
          break;
        case "L":
          setIsLactive(true);
          break;
        case "XL":
          setIsXLactive(true);
          break;
        case "XXL":
          setIsXXLactive(true);
          break;
        case "XXXL":
          setIsXXXLactive(true);
          break;
      }
    }
    if (!event.target.checked) {
      targetEl.classList.add("hidden");
      const removesize = SizeArr.filter((o) => {
        return o.name !== id;
      });
      switch (id) {
        case "FREESIZE":
          setIsFREEactive(false);
          break;
        case "SS":
          setIsSSactive(false);
          break;
        case "S":
          setIsSactive(false);
          break;
        case "M":
          setIsMactive(false);
          break;
        case "L":
          setIsLactive(false);
          break;
        case "XL":
          setIsXLactive(false);
          break;
        case "XXL":
          setIsXXLactive(false);
          break;
        case "XXXL":
          setIsXXXLactive(false);
          break;
      }
      setSizeArr(removesize);
    }
  };
  useEffect(() => {
    const button = document.getElementById("upbtn");
    const downbutton = document.getElementById("downbtn");
    if (initialValue <= 0) {
      setSizeDeCount([]);
      button.removeAttribute("disabled");
      downbutton.setAttribute("disabled", "");
      return;
    }
    const ivalue = [];
    for (let i = 0; i < initialValue; i++) {
      ivalue.push(i + 1);
      setSizeDeCount(ivalue);
    }
    downbutton.removeAttribute("disabled");
    button.setAttribute("disabled", "");

    setDisplayText2(true);
  }, [initialValue]);
  const setSizeHandler = (e) => {
    const button = document.getElementById("upbtn");
    const item = e.target.value;
    const id = e.target.id - 1;
    if (sizeDetail.length < 1) {
      setSizeDetail([e.target.value]);

      button.removeAttribute("disabled");

      return;
    }
    if (sizeDetail[id] === undefined) {
      setSizeDetail((prev) => [...prev, e.target.value]);

      button.removeAttribute("disabled");
      return;
    }
    const newState = sizeDetail.map((e, index, array) => {
      if (index === id) {
        return (array[id] = item);
      }
      return e;
    });

    setSizeDetail(newState);

    button.removeAttribute("disabled");
    console.log(sizeDetail);
  };
  useEffect(() => {
    setSizeArr([]);
  }, [sizeDetail]);
  /*-----FREESIZE--------------------------------------------*/
  const FreesizeHandler = (E) => {
    if (E.length === 0) {
      const delSize = SizeArr.filter((o) => {
        return o.name !== "FREESIZE";
      });
      setSizeArr(delSize);
      return;
    }
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        return o.size_de_name === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "FREESIZE";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----ss--------------------------------------------*/
  const SSHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}SS`;
        return findid === e.id;
      });

      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "SS";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----s--------------------------------------------*/
  const SHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}S`;
        return findid === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "S";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----M--------------------------------------------*/
  const MHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}M`;
        return findid === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "M";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----L-------------------------------------------*/
  const LHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}L`;
        return findid === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "L";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----XL-------------------------------------------*/
  const XLHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}XL`;
        return findid === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "XL";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----XXL-------------------------------------------*/
  const XXLHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}XXL`;
        return findid === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "XXL";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  /*-----XXXL-------------------------------------------*/
  const XXXLHandler = (E) => {
    const freedata = E.map((e) => {
      const po = SizeDe.filter((o) => {
        const findid = `${o.size_de_name}XXXL`;
        return findid === e.id;
      });
      const output = { ...e, id: po[0].size_de_id };
      return output;
    });
    const newsize = SizeArr.filter((o) => {
      return o.name !== "XXXL";
    });
    const finalsize = newsize.concat(freedata);

    setSizeArr(finalsize);
  };

  useEffect(() => {
    OnSaveSize(SizeArr);
  }, [SizeArr]);

  useEffect(() => {
    setSizeArr([]);
    setSizeDetail([]);
    setSizeDeCount([]);
    setInitialValue(0);
    Sizename.map((e) => {
      const id = e.size_name;
      const target = id.toLowerCase();
      const targetEl = document.getElementById(target);
      targetEl.classList.add("hidden");
      const checkEl = document.getElementById(e.size_name);

      checkEl.checked = false;
      switch (id) {
        case "FREESIZE":
          setIsFREEactive(false);
          break;
        case "SS":
          setIsSSactive(false);
          break;
        case "S":
          setIsSactive(false);
          break;
        case "M":
          setIsMactive(false);
          break;
        case "L":
          setIsLactive(false);
          break;
        case "XL":
          setIsXLactive(false);
          break;
        case "XXL":
          setIsXXLactive(false);
          break;
        case "XXXL":
          setIsXXXLactive(false);
          break;
      }
    });
  }, [ResetData]);

  //return----------------------------------------------------------------
  return (
    <div className=" box p-5 ">
      <div className="border border-gray-300 dark:border-darkmode-400 rounded-md p-5 grid grid-cols-12">
        <div className="  justify-around  col-span-11 grid grid-cols-11 mt-5">
          <label htmlFor="horizontal-form-1" className="sm:w-20 col-span-2  ">
            จำนวนไซส์
          </label>
          <div className="col-span-9 flex justify-around">
            {Sizename.map((size) => {
              return (
                <div key={size.size_id} className=" text-lg mr-2">
                  <input
                    id={size.size_name}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={sizeCountHandler}
                  />
                  <label className="ml-2" htmlFor="checkbox-switch-4">
                    {size.size_name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-11 grid grid-cols-11 gap-3  items-center justify-items-stretch mt-5">
          <label htmlFor="horizontal-form-1" className=" col-span-2 mr-3 ml-5 md:ml-0">
            จำนวนรายละเอียดไซส์
          </label>
          <input
            type="number"
            value={initialValue}
            onChange={sizeDetailCountHandler}
            className="col-span-8 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="Input inline 2"
            aria-label="default input inline 2"
            disabled
          />
          <div className=" flex justify-around w-full">
            <button
              id="upbtn"
              className=" justify-self-center border-green-500 border rounded hover:bg-green-500 hover:text-white  text-xl p-2  "
              onClick={() => setInitialValue(initialValue + 1)}
            >
              <IoIosAdd />
            </button>
            <button
              id="downbtn"
              className=" justify-self-center border-red-500 border rounded hover:bg-red-500 hover:text-white  text-xl p-2 "
              onClick={() => setInitialValue(initialValue - 1)}
            >
              <IoMdRemove />
            </button>
          </div>
        </div>
        <div className=" w-full col-span-7 mt-5">
          <div className="flex flex-wrap ">
            {displayText2 &&
              SizeDeCount.map((i) => {
                return (
                  <select key={i} id={i} className=" appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={setSizeHandler}>
                    <option defaultValue></option>
                    {SizeDe.map((size) => {
                      return (
                        <option key={size.size_de_id} id={size.size_de_id}>
                          {size.size_de_name}
                        </option>
                      );
                    })}
                  </select>
                );
              })}
          </div>
        </div> 
        <div id="123" className="mt-5  col-span-12">
          <div id="freesize" className="hidden">
            <FreeSize
              SizeDeCount={SizeDeCount}
              IsFREEactive={IsFREEactive}
              OnFreesizeHandler={FreesizeHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="ss" className="hidden">
            <SizeSS
              SizeDeCount={SizeDeCount}
              IsSSactive={IsSSactive}
              OnSSHandler={SSHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="s" className="hidden">
            <SizeS
              SizeDeCount={SizeDeCount}
              IsSactive={IsSactive}
              OnSHandler={SHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="m" className="hidden">
            <SizeM
              SizeDeCount={SizeDeCount}
              IsMactive={IsMactive}
              OnMHandler={MHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="l" className="hidden">
            <SizeL
              SizeDeCount={SizeDeCount}
              IsLactive={IsLactive}
              OnLHandler={LHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="xl" className="hidden">
            <SizeXL
              SizeDeCount={SizeDeCount}
              IsXLactive={IsXLactive}
              OnXLHandler={XLHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="xxl" className="hidden">
            <SizeXXL
              SizeDeCount={SizeDeCount}
              IsXXLactive={IsXXLactive}
              OnXXLHandler={XXLHandler}
              sizeDetail={sizeDetail}
            />
          </div>
          <div id="xxxl" className="hidden">
            <SizeXXXL
              SizeDeCount={SizeDeCount}
              IsXXXLactive={IsXXXLactive}
              OnXXXLHandler={XXXLHandler}
              sizeDetail={sizeDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Size;
