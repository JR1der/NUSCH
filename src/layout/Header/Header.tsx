import { useEffect, useState } from "react";
import logo from "../../assets/nuschLogo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  const cls = visible ? "translate-y-0" : "-translate-y-full";

  return (
    <header
      className={`${cls} sticky top-0 z-20 flex justify-between items-center text-black py-2 px-8 md:px-28 bg-lightBlue drop-shadow-md transition-all`}
    >
      {/* Logo */}
      <a onClick={() => handleScrollToSection("start")}>
        <img
          src={logo}
          alt="logo"
          className="w-12 hover:scale-105 transition-all"
        />
      </a>

      {/* Centered Navigation */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li
          onClick={() => handleScrollToSection("about-us")}
          className="p-3 hover:bg-darkBlue hover:text-white text-darkBlue hover:scale-105 rounded-lg transition-all cursor-pointer"
        >
          Про нас
        </li>
        <li
          onClick={() => handleScrollToSection("studying")}
          className="p-3 hover:bg-darkBlue hover:text-white text-darkBlue hover:scale-105 rounded-lg transition-all cursor-pointer"
        >
          Навчання
        </li>
        <li
          onClick={() => handleScrollToSection("schedule")}
          className="p-3 hover:bg-darkBlue hover:text-white text-darkBlue hover:scale-105 rounded-lg transition-all cursor-pointer"
        >
          Розклад
        </li>
        <li
          onClick={() => handleScrollToSection("join")}
          className="p-3 hover:bg-darkBlue hover:text-white text-darkBlue hover:scale-105 rounded-lg transition-all cursor-pointer"
        >
          Приєднатись
        </li>
      </ul>

      {/* Right Section */}
      <div className="hidden xl:flex items-center gap-4">
        <div className="group hover:bg-darkBlue hover:text-white p-1 rounded-lg hover:scale-105 transition-all">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-darkBlue pr-1 group-hover:text-white   text-4xl hover:scale-105 rounded-lg transition-all cursor-pointer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-darkBlue pl-1 group-hover:text-white text-4xl hover:scale-105 rounded-lg transition-all cursor-pointer"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <i
        className="bx bx-menu xl:hidden text-4xl cursor-pointer text-darkBlue"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      <div
        className={`${cls} absolute xl:hidden top-full left-0 w-full border-y-2 border-darkBlue bg-lightBlue flex flex-col items-center gap-7 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li
          onClick={() => isMenuOpen && handleScrollToSection("about-us")}
          className="list-none w-full text-center p-4 hover:bg-darkBlue hover:text-white text-darkBlue transition-all cursor-pointer"
        >
          Про нас
        </li>
        <li
          onClick={() => isMenuOpen && handleScrollToSection("studying")}
          className="list-none w-full text-center p-4 hover:bg-darkBlue hover:text-white text-darkBlue transition-all cursor-pointer"
        >
          Навчання
        </li>
        <li
          onClick={() => isMenuOpen && handleScrollToSection("schedule")}
          className="list-none w-full text-center p-4 hover:bg-darkBlue hover:text-white text-darkBlue transition-all cursor-pointer"
        >
          Розклад
        </li>
        <li
          onClick={() => isMenuOpen && handleScrollToSection("join")}
          className="list-none w-full text-center p-4 hover:bg-darkBlue hover:text-white text-darkBlue transition-all cursor-pointer"
        >
          Приєднатись
        </li>
      </div>
    </header>
  );
};
