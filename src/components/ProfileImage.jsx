import Image from "../image/foto-removebg-preview.png";

import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <>
      <motion.figure
        initial={{ opacity: 0, scale: 0, x: "-200%" }}
        animate={{ x: 0, opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 2, type: "spring", bounce: 0.2 }}
        className=" relative flex items-center justify-center"
      >
        <img
          src={Image}
          alt="foto profilo"
          loading="lazy"
          className="z-10 w-[90%] rounded-full min-[600px]:w-[80%]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className={` dark:border-darkPrimary borderRadius absolute  left-0 top-0  h-full w-full animate-spin-slow border border-solid  border-primary`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className=" dark:border-darkSecondary borderRadius absolute left-0 top-0   h-full w-full animate-antirotate border border-solid border-secondary "
        ></motion.div>
      </motion.figure>
    </>
  );
};
export default ProfileImage;
