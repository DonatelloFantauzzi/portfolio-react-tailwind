import { Link } from "react-scroll";

const Links = () => {
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
  return (
    <>
      <ul className="  hidden items-center justify-around gap-8 capitalize md:flex ">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="dark:text-darkPrimary group relative text-xl font-normal text-primary duration-300 hover:scale-110"
            >
              <Link
                to={link.href}
                smooth
                duration={900}
                href={link.href}
                title={link.name}
              >
                {link.name}
              </Link>
              {/* <a href={`#${link.href}`}>{link.name} </a> */}
              <span className=" ease dark:bg-darkSecondary absolute bottom-0.5 left-0 inline-block h-[1px] w-0 bg-secondary transition-[width] duration-500 group-hover:w-full   "></span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Links;
