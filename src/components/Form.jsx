import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Form = () => {
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
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className=" w-full  sm:w-[80%] lg:w-2/3"
    >
      <form
        action="https://getform.io/f/fff1e451-5d39-423a-806f-d4c2ac8341c8"
        method="POST"
        className=" flex w-full flex-col gap-5  "
      >
        <input
          type="text"
          name="nome"
          placeholder="Inserisci il tuo nome"
          className="  rounded-md border border-primary bg-background px-2 py-1 text-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Inserisci la tua email"
          className="rounded-md border border-primary bg-background py-1 text-primary"
          required
        />
        <textarea
          name="messaggio"
          placeholder="Inserisci il tuo messaggio"
          cols="30"
          rows="5"
          className=" rounded-md border bg-background px-2 py-1 text-primary"
        ></textarea>
        <button className=" dark:bg-darkSecondary flex items-center justify-center self-center rounded-md bg-secondary px-6 py-3  text-lg font-semibold text-background duration-300 hover:scale-110">
          Let's Talk
        </button>
      </form>
    </motion.div>
  );
};
export default Form;
