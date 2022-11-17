import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Info from "./Info";
import Slider from "./Slider";
import Sizetable from "./Sizetable";

const Product = ({ Data, Sizede, SizeHead, SizeRow, img, ProDetail, DeDetail, IsSize }) => {
  return (
    <div className="grid grid-cols-8 gap-4 mt-5">
      <div className=" col-span-8 ">
        <div className="  ">
          <Info product={Data} />
          {IsSize ? <Sizetable SizeHead={SizeHead} SizeRow={SizeRow} /> : ""}
        </div>
      </div>
      <Slider
        className="grid col-span-8"
        product={img}
        imgdetail={ProDetail}
        imgdesigndetail={DeDetail}
      />
    </div>
  );
};

export default Product;
