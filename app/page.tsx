import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blogs />
    </div>
  );
};

export default HomePage;
