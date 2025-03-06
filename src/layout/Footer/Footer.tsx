import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="w-full bg-lightYellow p-8 border-t-4 border-darkBlue">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          src={logo}
          alt="logo-ct"
          className="w-10 hover:scale-105 cursor-pointer"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li className="hover:scale-105">
            <Typography
              as="a"
              href="#"
              className="font-normal text-darkBlue transition-all hover:text-white"
            >
              Про нас
            </Typography>
          </li>
          <li className="hover:scale-105">
            <Typography
              as="a"
              href="#"
              className="font-normal text-darkBlue transition-all hover:text-white"
            >
              Колектив
            </Typography>
          </li>
          <li className="hover:scale-105">
            <Typography
              as="a"
              href="#"
              className="font-normal text-darkBlue transition-all hover:text-white"
            >
              Школа
            </Typography>
          </li>
          <li className="hover:scale-105">
            <Typography
              as="a"
              href="#"
              className="font-normal text-darkBlue transition-all hover:text-white"
            >
              Приєднатись
            </Typography>
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
              href="https://www.instagram.com"
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
      <Typography className="text-darkBlue text-center font-normal">
        &copy; 2024 New Ukrainian School
      </Typography>
    </footer>
  );
}
