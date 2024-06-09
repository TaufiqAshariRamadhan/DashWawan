// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Perusahaan",
    layout: "/dashboard",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    path: "data-tables-com",
  },
  {
    name: "Mahasiswa",
    layout: "/dashboard",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables-mhs",
  },
  {
    name: "Lowongan",
    layout: "/dashboard",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables-job",
  },
  {
    name: "Interview",
    layout: "/dashboard",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables-int",
  },
  {
    name: "Profile",
    layout: "/dashboard",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
];

export default routes;
