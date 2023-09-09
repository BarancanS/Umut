import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-12rem)] flex-col items-center">
      <section
        className="w-full h-[calc(100vh-12rem)] bg-cover bg-no-repeat bg-center  text-white"
        style={{ backgroundImage: "url(header-section.jpg)" }}
      >
        <div className="bg-black/[.42] flex flex-col justify-center items-center w-full h-[calc(100vh-12rem)]">
          <h1 className="text-4xl max-md:text-2xl">
            I Provide Confidence With My Excellent Work
          </h1>
          <div className="flex flex-row mt-6">
            <Link href="/about">
              <button className="bg-orange-700 p-4 rounded-xl">
                Learn More
              </button>
            </Link>
            <Link href="/contact" className="ml-6">
              <button className="bg-orange-700 p-4 rounded-xl">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
