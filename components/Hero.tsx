import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="#hero"
      className="hero min-h-[calc(100vh-4rem)]"
      style={{
        backgroundImage:
          "url(https://pbs.twimg.com/media/Fb31CE3UcAAPKAN?format=jpg&name=4096x4096)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Nishi Tabassum</h1>
          <p className="mb-5">
            I&apos;m a web developer with expertise in JavaScript, specializing
            in React, Next.js, and Node.js. I focus on creating innovative
            projects that deliver scalable and efficient web solutions.
          </p>
          <Link href="/#contact" className="btn btn-accent">
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
