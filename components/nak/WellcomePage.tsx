import Link from "next/link";
import Image from "next/image";
import { SparklesPreview } from "../SparklesPreview";

export default function WelcomePage() {
  return (
    <div className="bg-white pb-24">
      <div className="py-20">
        <SparklesPreview />
      </div>

      <div className="container -mt-20 px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-[600px] overflow-hidden">
            <Image
              src="/nak/nak.jpg"
              alt="Students in classroom"
              width={800}
              height={1000}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-4 text-[#002b5c]">
            <div className="w-full h-1 bg-[#4ba3c3] my-4"></div>
            <p className="text-[#4ba3c3] text-xl">
              We have been welcoming international students for over 100 years
              and with so many educational pathways to choose from, there is no
              better time to join us on our stunning 56-acre campus in the heart
              of beautiful Somerset in the Southwest of England.
            </p>
            <p>
              Our unique offerings and family friendly ethos set us apart from
              many other UK boarding schools. We are a very inclusive,
              progressive and successful school with a genuine global outlook,
              where all students are afforded an exceptional education and
              support in order that they may reach their full potential.
            </p>
            <p>
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
              (14–18 years old), where we offer the greatest range of
              educational pathways at secondary level as compared to any other
              school.
            </p>

            <p className="text-[#002b5c] text-sm">
              Whether you have a very low level of English or are a
              first-language English speaker, we are confident that we can find
              the right course to meet your needs. If you would like to contact
              us for further information, please do so by emailing our{" "}
              <Link href="#" className="text-[#4ba3c3]">
                Admissions Team
              </Link>
              , who will be happy to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
