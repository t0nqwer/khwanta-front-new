import { useState, useEffect } from "react";
import { Pagination, ProductCard } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GetviewDesign } from "../Action/product";

const ViewDesign = () => {
  const { Design, page } = useSelector((state) => state.product);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const qurey = useQuery();
  const dispatch = useDispatch();
  const pagee = qurey.get("page") || 1;
  useEffect(() => {
    dispatch(GetviewDesign(pagee));
  }, [pagee]);

  //<============================State============================>
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const navito = "/ViewDesign";

  //<============================Function============================>
  const DeleteConfirmation = (e) => {
    setDeleteConfirmationModal(true);
  };
  return (
    <div className=" ml-10">
      <h2 className=" text-lg font-medium mt-10">แบบเสื้อผ้า</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {Design.map((Design) => (
          <div key={Design?.code} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <ProductCard
              product={Design}
              deleteConfirmationModal={DeleteConfirmation}
              img={Design.cloth_front_img}
              pictag1={Design?.design_name}
              pigtag2={Design?.code?.toUpperCase()}
              Detail1={"ประเภท"}
              Info1={Design?.cloth_category?.category_name}
              Detail2={"แพทเทิร์น"}
              Info2={Design?.pattern_design?.pattern_design_name}
              Detail3={"แบรนด์"}
              Info3={Design?.brand?.brand_name}
              navigatTo={`/ViewDesign/${Design.code}`}
            />
          </div>
        ))}
      </div>
      <Pagination limit={page} Navito={navito} pagee={pagee} />
    </div>
  );
};

export default ViewDesign;
