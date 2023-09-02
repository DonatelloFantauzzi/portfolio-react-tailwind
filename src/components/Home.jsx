import HomeContent from "./HomeContent";
import ProfileImage from "./ProfileImage";

const Home = () => {
  return (
    <section
      id="home"
      className=" relative  mx-auto mb-28 flex h-screen w-full max-w-7xl flex-col  items-center gap-12 p-8 sm:mt-12  md:-mt-28 md:h-screen md:flex-row "
    >
      <ProfileImage />
      <HomeContent />
    </section>
  );
};
export default Home;
