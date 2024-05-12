import ScriptTag from "./ScriptTag";

const Footer = () => {
  return (
    <footer className=" mx-auto flex h-full w-full flex-col items-center justify-center   bg-primary p-8 dark:bg-darkSecondary ">
      <p className=" text-background">
        Copyright &#169; 2023 Donatello Fantauzzi. Tutti i diritti riservati
      </p>
      <ScriptTag />
    </footer>
  );
};
export default Footer;
