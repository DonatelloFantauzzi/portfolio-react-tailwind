import Form from "./Form";

import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Contatti = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(isInView);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section
      id="contatti"
      className=" mx-auto flex  h-full w-full max-w-7xl flex-col items-center gap-12 p-8 "
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <p className=" dark:text-darkPrimary text-center text-lg font-bold text-secondary">
          Get In Touch
        </p>
        <h1 className=" dark:text-darkSecondary text-center text-4xl text-primary  md:text-6xl">
          Contattami
        </h1>
      </motion.div>

      <Form />
    </section>
  );
};
export default Contatti;
