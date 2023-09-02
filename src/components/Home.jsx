import HomeContent from "./HomeContent";
import ProfileImage from "./ProfileImage";

const Home = () => {
  return (
    <section
      id="home"
      className=" relative  mx-auto flex h-screen w-full max-w-7xl flex-col  items-center gap-12 p-8  md:-mt-28 md:h-screen md:flex-row "
    >
      <ProfileImage />
      <HomeContent />
    </section>
  );
};
export default Home;
