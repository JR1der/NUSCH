import logo from "../../assets/logo.png";

export function Footer() {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-lightYellow p-8 border-t-4 border-darkBlue">
      <div className="flex flex-col items-center justify-center gap-y-6 md:flex-row md:justify-between">
        <img
          src={logo}
          alt="logo-ct"
          className="w-10 hover:scale-105 cursor-pointer"
        />
        <ul className="flex flex-col md:flex-row items-center gap-y-2 gap-x-8">
          <li
            onClick={() => handleScrollToSection("about-us")}
            className="hover:scale-105 cursor-pointer"
          >
            <a className="font-normal text-darkBlue transition-all hover:text-white">
              Про нас
            </a>
          </li>
          <li
            onClick={() => handleScrollToSection("studying")}
            className="hover:scale-105 cursor-pointer"
          >
            <a className="font-normal text-darkBlue transition-all hover:text-white">
              Навчання
            </a>
          </li>
          <li
            onClick={() => handleScrollToSection("schedule")}
            className="hover:scale-105 cursor-pointer"
          >
            <a className="font-normal text-darkBlue transition-all hover:text-white">
              Рокзлад
            </a>
          </li>
          <li
            onClick={() => handleScrollToSection("join")}
            className="hover:scale-105 cursor-pointer"
          >
            <a className="font-normal text-darkBlue transition-all hover:text-white">
              Приєднатись
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="p-1 rounded-lg transition-all">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-darkBlue pr-1 text-4xl rounded-lg transition-all cursor-pointer"
            >
              <i className="hover:scale-105 bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-darkBlue pl-1 text-4xl rounded-lg transition-all cursor-pointer"
            >
              <i className="hover:scale-105 bx bxl-facebook-circle"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-darkBlue" />
      <p className="text-darkBlue text-center font-normal">
        &copy; 2024 New Ukrainian School
      </p>
    </footer>
  );
}
