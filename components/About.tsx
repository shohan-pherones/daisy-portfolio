import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="#about" className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/girl.jpg"
          alt="Nishi"
          width={1280}
          height={1920}
          className="max-w-full sm:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-3">
            I am an experienced web developer with a strong expertise in
            JavaScript and a focus on modern frameworks like React and Next.js.
            My technical background allows me to create intuitive and responsive
            front-end applications that meet the highest standards of user
            experience.
          </p>
          <p className="pb-3">
            In addition to front-end development, I have a deep understanding of
            backend technologies, particularly Node.js. This enables me to build
            scalable and efficient server-side solutions that complement the
            front-end, ensuring seamless performance and integration across all
            aspects of a project.
          </p>
          <p className="pb-3">
            I am passionate about working on innovative projects that push the
            boundaries of web technology. I am committed to continuous learning
            and professional growth, always seeking to stay ahead in the
            fast-paced world of web development by exploring new tools,
            techniques, and best practices.
          </p>
          <Link href="/#contact" className="btn btn-accent">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
