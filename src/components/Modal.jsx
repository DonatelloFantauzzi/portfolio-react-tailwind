import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  {
    id: 1,
    name: <FaLinkedinIn size={40} color="#fff" />,
    href: "https://www.linkedin.com/in/donatello-fantauzzi-0724b4168/",
  },
  {
    id: 2,
    name: <FaGithub size={40} color="#fff" />,
    href: "https://github.com/DonatelloFantauzzi",
  },
];

const links = [
  {
    id: 1,
    name: "home",
    href: "home",
  },
  {
    id: 2,
    name: "skills",
    href: "skills",
  },
  {
    id: 3,
    name: "portfolio",
    href: "portfolio",
  },
  {
    id: 4,
    name: "contatti",
    href: "contatti",
  },
];

const Modal = ({ openMenu, setOpenMenu }) => {
  //   const [openMenu, setOpenMenu] = useState(true);

  return (
    <ul
      className={` bg-primary text-background fixed  left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center gap-6 text-white ${
        openMenu ? "" : "hidden"
      } `}
    >
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className="group relative text-2xl font-semibold  capitalize"
            onClick={() => setOpenMenu(false)}
          >
            <a href={`#${link.href}`}>{link.name} </a>
          </li>
        );
      })}
      <div>
        <ul className="  z-50 flex items-center justify-center gap-8">
          {socials.map((social) => {
            return (
              <li
                key={social.id}
                className="duration-300 hover:scale-110"
                onClick={() => setOpenMenu(false)}
              >
                <a
                  className=" text-primary "
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </ul>
  );
};
export default Modal;
