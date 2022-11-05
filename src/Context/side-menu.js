import { AiOutlineBarcode, AiOutlineUnorderedList } from "react-icons/ai";

import { GiClothes } from "react-icons/gi";
import {
  MdDashboard,
  MdOutlineImportExport,
  MdAddShoppingCart,
  MdPlaylistAdd,
  MdOutlineDesignServices,
} from "react-icons/md";

// const sideMenu = atom({
//   key: "sideMenu",
//   default: {
//     menu: [
//       {
//         icon: "Home",
//         pathname: "/",
//         title: "Page 1",
//       },
//       {
//         icon: "Edit",
//         pathname: "/design",
//         title: "ดูแบบเสื้อผ้า",
//       },
//       {
//         icon: "ShoppingBag",
//         pathname: "/product?page=1",
//         title: "สินค้า",
//         subMenu: [
//           { icon: "List", pathname: "/product-cloth", title: "เสื้อผ้าขวัญตา" },
//           { icon: "List", pathname: "/product-other", title: "ขวัญตา" },
//           { icon: "List", pathname: "/product-import", title: "รับซื้อ" },
//         ],
//       },
//       {
//         icon: "ListPlus",
//         title: "เพิ่มสินค้า",
//         subMenu: [
//           { icon: "", pathname: "/add-design", title: "เพิ่มแบบเสื้อผ้า" },
//           { icon: "", pathname: "/add-cloth", title: "เพิ่มสินค้า(เสื้อผ้า)" },
//           { icon: "", pathname: "/add-Other-Product", title: "เพิ่มสินค้า(อื่นๆ)" },
//           { icon: "", pathname: "/add-Outside-Product", title: "เพิ่มสินค้า(รับซื้อ)" },
//           { icon: "", pathname: "/add-Fabric", title: "เพิ่มผ้า" },
//         ],
//       },
//       {
//         icon: "HardDrive",
//         pathname: "/Stock",
//         title: "สต๊อค",
//       },
//     ],
//   },
// });

// export { sideMenu };

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <MdDashboard />,
        pathname: "Dashboard",
      },
    ],
  },

  {
    title: "แบบเสื้อผ้า",
    links: [
      {
        name: "ดูแบบเสื้อผ้า",
        icon: <MdOutlineDesignServices />,
        pathname: "ViewDesign",
      },
      {
        name: "เพิ่มแบบเสื้อผ้า",
        icon: <MdPlaylistAdd />,
        pathname: "AddDesign",
      },
    ],
  },
  {
    title: "สินค้า",
    links: [
      {
        name: "รายการสินค้า",
        icon: <AiOutlineUnorderedList />,
        pathname: "ViewProduct",
      },
      {
        name: "เพิ่มสินค้าเสื้อผ้าขวัญตา",
        icon: <GiClothes />,
        pathname: "AddKhwantaCloth",
      },
      {
        name: "เพิ่มสินค้าขวัญตา",
        icon: <MdAddShoppingCart />,
        pathname: "AddKhwanta",
      },
      {
        name: "เพิ่มสินค้ารับซื้อ",
        icon: <MdOutlineImportExport />,
        pathname: "AddImport",
      },
    ],
  },
  {
    title: "สต๊อค",
    links: [
      {
        name: "ปริ้นบาร์โค้ด",
        icon: <AiOutlineBarcode />,
        pathname: "PrintBarcode",
      },
    ],
  },
];
