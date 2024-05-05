import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/ContactMe/Contact";
import MyProjects from "./Components/MyProjects/MyProjects";
import MySelf from "./Components/MySelf/MySelf";

export default function Home() {
  return (
    <div
      className="
          pt-10 pb-10 lg:ml-36 "
    >
      <MySelf />
      <AboutMe />
      <MyProjects />
      <Contact />
    </div>
  );
}
