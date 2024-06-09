'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import Dropdown from "@/components/dropdown";

import routes from "@/data/routes";
import { useSidebarContext } from "@/providers/SidebarProvider";
import { useThemeContext } from "@/providers/ThemeProvider";

type Props = {
}

const Navbar = ({ }: Props) => {
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  const pathname = usePathname()
  const { setOpenSidebar } = useSidebarContext()
  const { theme, setTheme } = useThemeContext()

  useEffect(() => {
    getActiveRoute(routes);
  }, [pathname]);

  const getActiveRoute = (routes: any) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <Link className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white" href=" " >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </Link>
          <Link className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white" href="#" >
            {currentRoute}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link href="#" className="font-bold capitalize hover:text-navy-700 dark:hover:text-white" >
            {currentRoute}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden" onClick={() => setOpenSidebar(true)} >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        {/* DARK MODE */}
        <div className="cursor-pointer text-gray-600"
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          {theme === 'dark' ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>

        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src={'/img/avatars/avatar4.png'}
              alt="Elon Musk"
            />
          }
          className={"py-2 top-8 -left-[180px] w-max"}
        >
          <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  👋 Hey, Adela
                </p>{" "}
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

            <div className="flex flex-col p-4">
              <Link href="/profile" className="text-sm text-gray-800 dark:text-white hover:dark:text-white" >
                Profile Settings
              </Link>
              <Link href="/auth" className="mt-3 text-sm font-medium text-red-500 hover:text-red-500" >
                Log Out
              </Link>
            </div>
          </div>
        </Dropdown>

      </div>

    </nav>
  );
};

export default Navbar;
