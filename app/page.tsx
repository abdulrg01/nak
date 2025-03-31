import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/nak.jpg"
              alt="Nak Academy School Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-primary">Nak Academy</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="#admissions"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Admissions
            </Link>
            <Link
              href="#events"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Events
            </Link>
            <Link
              href="#news"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              News
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground">
              <span className="sr-only">Open menu</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
          <div className="relative h-[500px] w-full overflow-hidden">
            <Image
              src="/nak.jpg"
              alt="School children learning"
              width={1920}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center space-y-4 px-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-md">
                Welcome to Nak Academy
              </h1>
              <p className="max-w-[700px] text-white text-lg md:text-xl drop-shadow-md">
                Where every child&aposs potential shines bright
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#admissions"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Apply Now
                </Link>
                <Link
                  href="#about"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nurturing Minds, Building Futures
                </h2>
                <p className="text-muted-foreground md:text-lg">
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
                  src="/nak.jpg"
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
        <section id="admissions" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Admissions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Our School Family
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                We welcome families who share our vision for education and
                community. Our admissions process is designed to ensure a good
                fit for both students and our school.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Inquire</h3>
                <p className="text-muted-foreground mt-2">
                  Contact our admissions office to learn more about our programs
                  and schedule a tour.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Apply</h3>
                <p className="text-muted-foreground mt-2">
                  Complete our online application form and submit the required
                  documents.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Enroll</h3>
                <p className="text-muted-foreground mt-2">
                  Upon acceptance, complete the enrollment process and join our
                  vibrant community.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start Application
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Upcoming School Events
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
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
                  className="group relative overflow-hidden rounded-xl border bg-background p-6 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
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
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                News
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                School News & Updates
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Stay informed about the latest happenings at Sunshine
                Elementary.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "New Library Collection Arrives",
                  date: "March 28, 2025",
                  excerpt:
                    "Our school library has received a donation of 500 new books covering various subjects and reading levels.",
                  image: "/nak.jpg",
                },
                {
                  title: "Students Win Regional Math Competition",
                  date: "March 15, 2025",
                  excerpt:
                    "Our 5th-grade math team took first place at the regional mathematics competition last weekend.",
                  image: "/nak.jpg",
                },
                {
                  title: "Summer Program Registration Now Open",
                  date: "March 10, 2025",
                  excerpt:
                    "Registration for our popular summer enrichment program is now open. Spaces fill quickly!",
                  image: "/nak.jpg",
                },
              ].map((news, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border bg-background transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {news.date}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{news.excerpt}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All News
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Gallery
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                School Life in Pictures
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
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
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  We're here to answer your questions and help you learn more
                  about our school.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        123 Sunshine Avenue, Anytown, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        info@sunshineelementary.edu
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Monday - Friday: 7:30 AM - 4:00 PM</li>
                    <li>Saturday - Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  src="/nak.jpg"
                  alt="Nak Academy School Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Nak Academy</span>
              </div>
              <p className="text-muted-foreground">
                Nurturing minds, building futures since 1985.
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
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
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
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
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
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
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
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
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#admissions"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#news"
                    className="text-muted-foreground hover:text-primary"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary"
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
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Parent Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Student Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Staff Directory
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Lunch Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Forms & Documents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to receive updates and news.
              </p>
              <form className="space-y-2">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Nak Academy School. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
