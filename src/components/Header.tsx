import { useState } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import logo from "../image/logom.png";
import { FaFacebook, FaGoogle, FaGithub, FaTelegram } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconType } from "react-icons/lib";

const navLink = [
  {
    name: "Trang chủ",
    link: "/",
  },

  {
    name: "Thiết kế ",
    link: "/thiet-ke",
  },

  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Liên hệ",
    link: "/lien-he",
  },
];


const icons: {
  icon: IconType,
  color: string,
  link: LinkProps['to'],
}[] = [
  {
    icon: FaFacebook,
    color: "text-blue-700",
    link: "https://www.facebook.com/mwebsitegiare",
  },
  {
    icon: FaGoogle,
    color: "text-red-500",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    icon: FaGithub,
    color: "text-black",
    link: '',
  },
  {
    icon: FaTelegram,
    color: "text-blue-600",
    link: 'https://t.me/mwebsite123',
  },
];

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="relative text-[18px] px-3">
      <div className="absolute  text-black top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Link to="/">
        <img
          className="w-[120px] hover:w-[130px] duration-100"
          src={logo}
          alt="logo"
        />
        </Link>
      </div>
      <div
        onClick={() => setIsShowMenu(!isShowMenu)}
        className={classNames("lg:hidden w-10 h-10", {
          "pb-20": isShowMenu,
        })}
      >
        {isShowMenu ? (
          <AiOutlineClose className="text-3xl" />
        ) : (
          <BsList className="text-3xl" />
        )}
      </div>
      <div className="lg:flex justify-between hidden text-2xl text-black text-[18px] px-3">
        <nav className="flex items-center xl:gap-x-10 lg:gap-x-4 space-x-3">
          {navLink.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-600 font-bold text-blue-600"
                    : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-600 duration-200 "
                }
                to={item.link}
                key={index}
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>
        <ul className="flex items-center xl:gap-x-10 lg:gap-x-4 h-[50px] space-x-3">
          {icons.map((item, index) => {
            // const { link, color, icon } = item;
            return (
              <Link to={item.link}>
                <li
                  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-600 duration-200   "
                  key={index}
                >
                  <item.icon className={`${item.color} w-[30px] h-[30px]`} />
                  {/* <div className={`${color} w-[30px] h-[30px]`}>{icon}</div> */}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {isShowMenu && (
        <div className=" bg-gray-500 text-2xl text-white text-[18px] lg:hidden px-3 my-10 p-20 rounded-xl ">
          <nav className=" flex flex-col w-[100px] text-center m-auto">
            {navLink.map((item, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-black font-bold text-[#000]"
                      : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-600 duration-200 "
                  }
                  to={item.link}
                  key={index}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
          <ul className="flex justify-center items-center xl:gap-x-10 space-x-5 mt-5">
            {icons.map((item, index) => {
              return (
                <Link to={`${item.link}`}>
                  <li
                    className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-600 duration-200   "
                    key={index}
                  >
                    <item.icon className={`${item.color} w-[30px] h-[30px]`} />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
