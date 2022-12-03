import { useState, useEffect } from "react";
import { Pagination, ProductCard, Loading } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DelProduct, GetProduct } from "../Action/product";
import { useStateContext } from "../Context/ContextProvider";

const ViewProduct = () => {
  const { Prodata2, page, isLoading } = useSelector((state) => state.product);
  const { currentColor } = useStateContext();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  console.log(Prodata2);
  const qurey = useQuery();
  const dispatch = useDispatch();
  const pagee = qurey.get("page") || 1;
  console.log(Prodata2, page);
  //<============================State============================>
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [DelID, setDelID] = useState("");

  const navito = "/ViewProduct";
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
      {isLoading ? (
        <div
          className=" fixed w-full justify-center min-w-min left-0 top-0 items-center op  "
          style={{ zIndex: "10000" }}
        >
          <div className=" w-screen relative h-screen items-center justify-center flex bg-orange-200 bg-opacity-50">
            <div className="w-60">
              <Loading iconColor={currentColor} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" ml-10">
        <h2 className=" text-lg font-medium mt-10">แบบเสื้อผ้า</h2>
        <div className="grid grid-cols-12 gap-6 mt-5">
          {Prodata2.map((Design) => (
            <div
              key={Design.product_id}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              {Design?.product_category?.product_category_type_id == 1 ? (
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
                  navigatTo={`/ViewProduct/${Design.product_id}`}
                />
              ) : Design?.product_category?.product_category_type_id == 2 ? (
                <ProductCard
                  product={Design}
                  deleteConfirmationModal={DeleteConfirmation}
                  img={
                    Design?.Front_img.length === 0
                      ? Design?.cloth_design?.cloth_front_img
                      : Design?.Front_img
                  }
                  pictag1={`${Design?.title} `}
                  pigtag2={Design?.procode}
                  Detail1={"แบรนด์"}
                  Info1="Khwanta"
                  Detail2={"ประเภท"}
                  Info2={Design?.product_category?.product_category_name}
                  Detail3={"ราคา"}
                  Info3={Design?.price}
                  navigatTo={`/ViewProduct/${Design.product_id}`}
                />
              ) : (
                <ProductCard
                  product={Design}
                  deleteConfirmationModal={DeleteConfirmation}
                  img={
                    Design?.Front_img.length === 0
                      ? Design?.cloth_design?.cloth_front_img
                      : Design?.Front_img
                  }
                  pictag1={`${Design?.title} `}
                  pigtag2={Design?.procode}
                  Detail1={"แบรนด์"}
                  Info1={Design?.brand?.brand_name}
                  Detail2={"ประเภท"}
                  Info2={Design?.product_category?.product_category_name}
                  Detail3={"ราคา"}
                  Info3={Design?.price}
                  navigatTo={`/ViewProduct/${Design.product_id}`}
                />
              )}
            </div>
          ))}
        </div>
        <Pagination limit={page} Navito={navito} pagee={pagee} />
      </div>
    </div>
  );
};

export default ViewProduct;
