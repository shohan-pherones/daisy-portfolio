import Link from "next/link";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="wrapper">
      <SectionTitle title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex flex-col gap-5">
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt
            fugit cumque iusto aliquid laboriosam?
          </p>
          <div className="flex flex-wrap gap-2">
            <p>
              <b>Phone:</b>{" "}
              <Link href="tel:+8801712001122">+8801712001122</Link>
            </p>
            <p>
              <b>Email:</b>{" "}
              <Link href="mailto:example@gmail.com">example@gmail.com</Link>
            </p>
          </div>
          <p>
            <b>Address:</b> Ullapara, Sirajganj-6760, Rajshahi Division,
            Bangladesh
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              GitHub
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              LinkedIn
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Leetcode
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              HackerRank
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              freeCodeCamp
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Stack Overflow
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Facebook
            </Link>
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Twitter
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
