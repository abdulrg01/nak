import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function NakLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="about" className="py-16 bg-[#56a747]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-28">
              <h1 className="text-4xl md:text-7xl uppercase text-white font-medium tracking-wider transition-all duration-1000 mb-16">
                Your Nak <br /> Academy <span>Journey</span>
              </h1>
              <div className="flex items-center gap-5 justify-center flex-wrap text-white">
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center rounded-none border-2 text-[#56a747] border-white bg-primary px-8 py-3 uppercase font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Nursery
                </Link>
                <Link
                  href="#admissions"
                  className="inline-flex items-center justify-center rounded-none border-2 border-white bg-transparent hover:text-blue-950 uppercase px-8 py-3 font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Primary
                </Link>
                <Link
                  href="#admissions"
                  className="inline-flex items-center justify-center rounded-none border-2 border-white bg-transparent hover:text-blue-950 uppercase px-8 py-3 font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Junior
                </Link>
                <Link
                  href="#admissions"
                  className="inline-flex items-center justify-center rounded-none border-2 border-white bg-transparent hover:text-blue-950 uppercase px-8 py-3 font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Senior
                </Link>
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nursery
                </h2>
                <div className="w-full h-1 bg-white mt-4"></div>
                <p className="text-primary md:text-lg">For ages 0-4</p>
                <p className="text-primary md:text-lg">
                  At Nak Academy, we believe every child deserves a supportive
                  and stimulating environment to grow and learn. Our dedicated
                  teachers and staff are committed to providing an exceptional
                  educational experience that fosters creativity, critical
                  thinking, and a love for learning.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Student-centered learning approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Small class sizes for personalized attention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Comprehensive curriculum with arts and sciences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Safe and inclusive community</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/nak/nak.jpg"
                  alt="Students in classroom"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Admissions Section */}
        <section id="admissions" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10 text-blue-950">
              <div className="inline-block rounded-lg px-3 py-1 bg-[#56a747] text-white text-sm">
                Admissions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Our School Family
              </h2>
              <p className="mx-auto max-w-[700px] md:text-lg">
                We welcome families who share our vision for education and
                community. Our admissions process is designed to ensure a good
                fit for both students and our school.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 text-blue-950">
              <div className="bg-gray-200 rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#56a747]">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold">Inquire</h3>
                <p className="mt-2">
                  Contact our admissions office to learn more about our programs
                  and schedule a tour.
                </p>
              </div>
              <div className="bg-gray-200 rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#56a747]">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold">Apply</h3>
                <p className="mt-2">
                  Complete our online application form and submit the required
                  documents.
                </p>
              </div>
              <div className="bg-gray-200 rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#56a747]">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold">Enroll</h3>
                <p className="mt-2">
                  Upon acceptance, complete the enrollment process and join our
                  vibrant community.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center bg-[#56a747] justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start Application
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-[#56a747] px-3 py-1 text-sm text-primary">
                Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">
                Upcoming School Events
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-950 md:text-lg">
                Stay connected with our school community through these exciting
                events.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Science Fair",
                  date: "April 15, 2025",
                  description:
                    "Students showcase their scientific experiments and discoveries.",
                  time: "9:00 AM - 3:00 PM",
                  location: "School Gymnasium",
                },
                {
                  title: "Parent-Teacher Conferences",
                  date: "April 22-23, 2025",
                  description:
                    "Schedule a meeting with your child's teacher to discuss progress.",
                  time: "1:00 PM - 7:00 PM",
                  location: "Classrooms",
                },
                {
                  title: "Spring Concert",
                  date: "May 10, 2025",
                  description:
                    "Enjoy performances by our talented music students.",
                  time: "6:00 PM - 8:00 PM",
                  location: "Auditorium",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-white p-6 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-blue-950">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl text-blue-950 font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-blue-950">{event.description}</p>
                  <div className="mt-4 text-sm text-blue-950">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        color="#56a747"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-900"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center bg-[#56a747] text-white justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-[#56a747] px-3 py-1 text-sm text-primary">
                Gallery
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">
                School Life in Pictures
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-950 md:text-lg">
                Explore moments from our vibrant school community.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={`/nak.jpg`}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full aspect-square transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Image</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center bg-[#56a747] text-white justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* school event */}

        <div className="flex flex-col md:flex-row h-screen w-full">
          {/* Left content panel */}
          <div className="relative bg-white p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="mb-6">
                <span className="block text-[#0a4a6e] text-4xl md:text-5xl font-medium leading-tight">
                  WE LOOK FORWARD TO
                </span>
                <span className="block text-[#a8a1c2] text-4xl md:text-5xl font-light leading-tight">
                  WELCOMING YOU
                </span>
              </h1>

              <div className="h-px w-full bg-gray-300 my-6"></div>

              <div className="space-y-6 text-[#0a4a6e]">
                <p className="text-base">
                  Join our Headmaster, James Johnson, and the Taunton School
                  Team at an upcoming open event.
                </p>

                <p className="text-base">
                  This is the best way for prospective families to experience
                  Taunton School with the opportunity to meet members of staff,
                  tour the state-of-the-art facilities and ask questions.
                </p>

                <p className="text-base">
                  We offer in-person and virtual options to suit everyone&apos;s
                  needs including tailored events for pre-prep and nursery,
                  military families, international families, sixth form as well
                  whole school open mornings.
                </p>

                <p className="text-base">
                  The events will give you the chance to experience life at
                  Taunton School for yourself.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="#book-event"
                  className="bg-[#0a4a6e] text-white px-6 py-3 font-medium text-sm tracking-wide hover:bg-[#083a58] transition-colors"
                >
                  BOOK AN OPEN EVENT
                </Link>
                <Link
                  href="#view-prospectus"
                  className="bg-white text-[#0a4a6e] border border-[#0a4a6e] px-6 py-3 font-medium text-sm tracking-wide hover:bg-gray-50 transition-colors"
                >
                  VIEW PROSPECTUS
                </Link>
              </div>
            </div>
          </div>

          {/* Right image panel */}
          <div className="relative h-[300px] md:h-auto md:w-1/2">
            <img
              src="/nak/nak.jpg"
              alt="Taunton School building"
              className="object-cover"
            />
            <Link
              href="#core-prospectus"
              className="absolute top-[30%] right-8 text-[#4a7dff] hover:underline"
            >
              Core Prospectus
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#56a747] px-3 py-1 text-sm text-primary">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="text-blue-950 md:text-lg">
                  We&apos;re here to answer your questions and help you learn
                  more about our school.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-blue-950">
                        123 Sunshine Avenue, Anytown, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-blue-950">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-blue-950">
                        info@sunshineelementary.edu
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <ul className="space-y-1 text-blue-950">
                    <li>Monday - Friday: 7:30 AM - 4:00 PM</li>
                    <li>Saturday - Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/nak/nak.jpg"
                  alt="Nak Academy School Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Nak Academy</span>
              </div>
              <p className="text-blue-950">
                Nurturing minds, building futures since 1985.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-blue-950 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-blue-950 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-blue-950 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-blue-950 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-blue-950 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#admissions"
                    className="text-blue-950 hover:text-primary"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="text-blue-950 hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#news"
                    className="text-blue-950 hover:text-primary"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-blue-950 hover:text-primary"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blue-950 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-950 hover:text-primary">
                    Parent Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-950 hover:text-primary">
                    Student Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-950 hover:text-primary">
                    Staff Directory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-950 hover:text-primary">
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-950 hover:text-primary">
                    Lunch Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-950 hover:text-primary">
                    Forms & Documents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-blue-950 mb-4">
                Subscribe to our newsletter to receive updates and news.
              </p>
              <form className="space-y-2">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-blue-950">
              &copy; {new Date().getFullYear()} Nak Academy School. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
