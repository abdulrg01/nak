import Link from "next/link";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white py-40">
      {/* Left sidebar with vertical text */}
      <div className="w-full md:w-[200px] md:flex flex-col items-center p-8 hidden ">
        <div className="flex flex-row items-start">
          <div className="flex flex-col items-center">
            <span className="text-[#002b5c] text-5xl font-bold tracking-wider">
              A
            </span>
            <span className="text-[#002b5c] text-5xl font-bold tracking-wider mt-2">
              W
            </span>
            <span className="text-[#002b5c] text-5xl font-bold tracking-wider mt-2">
              A
            </span>
            <span className="text-[#002b5c] text-5xl font-bold tracking-wider mt-2">
              R
            </span>
            <span className="text-[#002b5c] text-5xl font-bold tracking-wider mt-2">
              M
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-8">
              W
            </span>
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-2">
              E
            </span>
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-2">
              L
            </span>
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-2">
              C
            </span>
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-2">
              O
            </span>
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-2">
              M
            </span>
            <span className="text-[#4ba3c3] text-5xl font-bold tracking-wider mt-2">
              E
            </span>
          </div>
        </div>
      </div>

      {/* Center image section */}
      <div className="w-full md:w-[400px]">
        <div className="h-full">
          <Image
            src="/nak2.jpg"
            alt="School representative"
            width={500}
            height={800}
            className="h-full w-full md:w-[500px] object-cover"
          />
        </div>
      </div>

      {/* Right content section */}
      <div className="w-full md:flex-1 p-8">
        <div className="max-w-2xl space-y-10">
          <p className="text-[#002b5c] text-sm">
            We have been welcoming international students for over 100 years and
            with so many educational pathways to choose from, there is no better
            time to join us on our stunning 56-acre campus in the heart of
            beautiful Somerset in the Southwest of England.
          </p>

          <p className="text-[#002b5c] text-sm">
            Our unique offerings and family friendly ethos set us apart from
            many other UK boarding schools. We are a very inclusive, progressive
            and successful school with a genuine global outlook, where all
            students are afforded an exceptional education and support in order
            that they may reach their full potential.
          </p>

          <p className="text-[#002b5c] text-sm">
            Depending on age and level of English, International students will
            enter the{" "}
            <Link href="#" className="text-[#4ba3c3]">
              Pre-Prep
            </Link>{" "}
            (0–7 years old),{" "}
            <Link href="#" className="text-[#4ba3c3]">
              Prep
            </Link>{" "}
            (7–13 years old),{" "}
            <Link href="#" className="text-[#4ba3c3]">
              Senior
            </Link>
            (13–16 years old),{" "}
            <Link href="#" className="text-[#4ba3c3]">
              Sixth Form
            </Link>{" "}
            (16–18 years old) or our International School{" "}
            <Link href="#" className="text-[#4ba3c3]">
              Taunton School International
            </Link>{" "}
            (14–18 years old), where we offer the greatest range of educational
            pathways at secondary level as compared to any other school in the
            UK.
          </p>

          <p className="text-[#002b5c] text-sm">
            Whether you have a very low level of English or are a first-language
            English speaker, we are confident that we can find the right course
            to meet your needs. If you would like to contact us for further
            information, please do so by emailing our{" "}
            <Link href="#" className="text-[#4ba3c3]">
              Admissions Team
            </Link>
            , who will be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
}
