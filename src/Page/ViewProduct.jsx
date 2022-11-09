import { useState, useEffect } from "react";
import { Pagination, ProductCard } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DelProduct, GetProduct, GetviewDesign } from "../Action/product";

const ViewProduct = () => {
  const { Prodata2, page } = useSelector((state) => state.product);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const qurey = useQuery();
  const dispatch = useDispatch();
  const pagee = qurey.get("page") || 1;

  //<============================State============================>
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [DelID, setDelID] = useState("");

  const navito = "/product-cloth";
  //<============================Function============================>
  const DeleteConfirmation = (e) => {
    setDeleteConfirmationModal(true);
  };

  useEffect(() => {
    dispatch(GetProduct(pagee));
  }, [pagee]);
  const DeleteProduct = () => {
    dispatch(DelProduct(DelID));
    setDeleteConfirmationModal(false);
    setDelID("");
    dispatch(GetProduct(pagee));
  };
  return (
    <div>
      <div className=" ml-10">
        <h2 className=" text-lg font-medium mt-10">แบบเสื้อผ้า</h2>
        <div className="grid grid-cols-12 gap-6 mt-5">
          {Prodata2.map((Design) => (
            <div
              key={Design.product_id}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <ProductCard
                product={Design}
                deleteConfirmationModal={DeleteConfirmation}
                img={
                  Design?.Front_img.length === 0
                    ? Design?.cloth_design?.cloth_front_img
                    : Design?.Front_img
                }
                pictag1={`${Design?.code} ${Design?.fabric?.title}`}
                pigtag2={Design?.procode}
                Detail1={"แบรนด์"}
                Info1={Design?.cloth_design?.brand?.brand_name}
                Detail2={"ผ้า"}
                Info2={Design?.fabric?.title}
                Detail3={"ราคา"}
                Info3={Design?.price}
                navigatTo={`/ViewDesign/${Design.code}`}
              />
            </div>
          ))}
        </div>
        <Pagination limit={page} Navito={navito} pagee={pagee} />
      </div>
    </div>
  );
};

export default ViewProduct;
