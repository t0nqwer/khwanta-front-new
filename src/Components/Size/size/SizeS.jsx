import React, { useState, useEffect } from "react";
const SizeS = (props) => {
  const [Data, setData] = useState([]);
  const sizeDetail = props.sizeDetail;
  const DataHandler = (e) => {
    const size = "S";
    let id = e.target.id;
    const Objdata = { name: size, id: e.target.id, data: e.target.value };

    if (~~e.target.value === 0) {
      document.getElementById(`${id}danger`).classList.remove("hidden");
      document.getElementById(`${id}`).classList.add("border-red-400");
      console.log(1);
      return;
    }
    document.getElementById(`${id}danger`).classList.add("hidden");
    document.getElementById(`${id}`).classList.remove("border-red-400");

    if (Data.length === 0) {
      setData([Objdata]);

      return;
    }

    let found = false;
    for (let i = 0; Data.length > i; i++) {
      if (Data[i].id === id) {
        found = true;
        break;
      }
    }

    const Sizede = sizeDetail.map((e) => {
      return `${e}${size}`;
    });
    if (!found) {
      const addData = Data;
      addData.push(Objdata);
      const finalData = addData.filter((data) => Sizede.includes(data.id));

      setData(finalData);
      return;
    }

    const updatedata = Data.map((data) => {
      if (data.id === id) {
        return (data = Objdata);
      }
      return data;
    });

    const finaldata = updatedata.filter((data) => Sizede.includes(data.id));

    setData(finaldata);
  };

  useEffect(() => {
    props.OnSHandler(Data);
  }, [Data]);

  useEffect(() => {
    sizeDetail.map((e) => {
      document.getElementById(`${e}S`).value = "";
      props.OnSHandler([]);
    });
  }, [sizeDetail]);
  useEffect(() => {
    sizeDetail.map((e) => {
      if (!props.IsSactive) document.getElementById(`${e}S`).value = "";
    });
  }, [props.IsSactive]);

  return (
    <div className="border border-gray-200 ">
      <div className="m-5">
        <div className="grid items-center  grid-cols-10">
          <div className=" col-span-1  content-center   text-center">
            <span className="shadow-none">S</span>
          </div>
          <div className="w-full col-span-7 mt-3 xl:mt-0 flex-1">
            <div className="relative pl-5 pr-5 xl:pr-10 py-5 bg-slate-50 dark:bg-transparent dark:border rounded-md">
              <div>
                {sizeDetail.length !== props.SizeDeCount.length
                  ? ""
                  : props.SizeDeCount.map((i) => {
                      return (
                        <div key={i} className="sm:flex  items-center mt-5  first:mt-0">
                          <label
                            htmlFor="horizontal-form-1 "
                            className="sm:w-30 text-center w-28 mr-0"
                          >
                            {sizeDetail[i - 1]}
                          </label>
                          <input
                            id={`${sizeDetail[i - 1]}S`}
                            type="text"
                            className="w-full p-2"
                            placeholder="36.00"
                            onChange={DataHandler}
                          />
                          <span
                            id={`${sizeDetail[i - 1]}Sdanger`}
                            className={`text-danger ml-3 hidden`}
                          >
                            ????????????????????????????????????????????????
                          </span>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeS;
