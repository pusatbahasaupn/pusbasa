import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../styles/navbar.module.css";

export default function Navbar() {
  const [hamClick, setHamClick] = useState(false);

  return (
    <nav className=" flex justify-between w-[100%] md:items-center py-5">
      <div className="sm:w-[80%] hp:w-[80%] md:w-[40%] xl:w-[25%]  flex xl:text-lg md:text-sm  sm:items-center">
        <img
          className="sm:m-1 md:m-1 md:mb-2 md:ml-0 md:mr-2 md:w-[3em]  sm:w-[2.5em] hp:w-[2.2em] hp:m-1 hp:mr-2"
          src="logo.svg"
          alt="logo"
        />
        <div className="flex flex-col">
          <h1 className="font-bold xl:text-xl md:text-base sm:text-base hp:text-base">
            Language Center
          </h1>
          <p className="sm:text-xs xl:text-base hp:text-xs">
            UPN VETERAN JAWA TIMUR
          </p>
        </div>
      </div>
      <div
        onClick={() => setHamClick(!hamClick)}
        className=" w-[10%] sm:w-[8%] h-[2.5em] sm:flex flex-col hp:rotate-180  md:hidden hp:flex"
      >
        <span
          className={`bg-[#4F7DF3] w-[100%] h-[2em]  rounded-xl  mt-1  transition-all ease-in-out delay-150 duration-30 ${
            styles.hambar
          } ${hamClick ? styles.ham1 : ""} `}
        ></span>
        <span
          className={`bg-[#4F7DF3] w-[100%] h-[2em]  rounded-xl  mt-1  transition-all ease-in-out delay-150 duration-300 ${
            styles.hambar
          } ${hamClick ? styles.ham2 : ""}  `}
        ></span>
        <span
          className={`bg-[#4F7DF3] w-[100%] h-[2em]  rounded-xl  mt-1  transition-all ease-in-out delay-150 duration-300 ${
            styles.hambar
          } ${hamClick ? styles.ham3 : ""} `}
        ></span>
      </div>
      <div
        className={`flex sm:w-[10em] md:w-[60%]  justify-around hp:flex-col md:static md:flex-row sm:absolute  hp:absolute  ${
          styles.navSlide
        } ${
          hamClick ? styles.show : ""
        }   transition-all ease-in-out delay-150 duration-300 sm:top-[4em] sm:text-center hp:text-center  md:bg-[#ffff] md:items-center xl:w-[75%] xl:pl-[7em] bg-[#4F7DF3] opacity-2 bg-opacity-5`}
      >
        <Link
          className="sm:m-5 hp:m-3 md:mx-1 md:my-0 md:h-fit   font-bold text-[#4F7DF3]"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="sm:m-5 hp:m-3 md:mx-1 md:my-0 md:h-fit  "
          to={"/profiles"}
        >
          Profile
        </Link>
        <Link
          className="sm:m-5 hp:m-3 md:mx-1 md:my-0 md:h-fit  "
          to={"/programs"}
        >
          Program
        </Link>
        <Link
          className="sm:m-5 hp:m-3 md:mx-1 md:my-0 md:h-fit  "
          to={"/activities"}
        >
          Activities
        </Link>
        <button className="sm:m-5 hp:m-3 md:mx-1 md:my-0 md:h-fit   bg-[#4475F2] hover:bg-blue-700 text-white font-bold py-2 xl:py-2 md:py-1  px-4 md:text-sm border border-blue-700 rounded-sm xl:ml-[25%]">
          Check IPT
        </button>
      </div>
    </nav>
  );
}
