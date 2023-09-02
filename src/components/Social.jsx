import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  {
    id: 1,
    name: <FaLinkedinIn size={40} />,
    href: "https://www.linkedin.com/in/donatello-fantauzzi-0724b4168/",
    title: "linkedin",
  },
  {
    id: 2,
    name: <FaGithub size={40} />,
    href: "https://github.com/DonatelloFantauzzi",
    title: "github",
  },
];

const Social = () => {
  return (
    <ul className=" hidden items-center justify-between gap-12 md:flex ">
      {socials.map((social) => {
        return (
          <li
            key={social.id}
            className="cursor-pointer duration-300 hover:scale-110"
          >
            <a
              className=" dark:text-darkPrimary text-primary "
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.title}
            >
              {social.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Social;
