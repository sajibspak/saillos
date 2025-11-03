export default function Home() {
  return (
   <section className="min-h-screen flex flex-col justify-center items-center text-center px-5">
  <h1 className="text-5xl font-bold mb-4 text-gray-800">
    We Design Experiences, Not Just Interfaces
  </h1>
  <p className="text-lg text-gray-600 max-w-2xl">
    Saillos is a creative design agency that blends strategy, design, and technology
    to build brands that matter.
  </p>
  <button className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all">
    Get Started
  </button>

  {/* --- New message section --- */}
  <div className="mt-16 text-center">
    <h2 className="text-3xl font-semibold mb-3 text-gray-800">
      Big Changes Are Coming!
    </h2>
    <p className="text-lg text-gray-600 max-w-xl mx-auto">
      We're working on a brand-new experience for <span className="font-semibold text-orange-600">Saillos</span>.
      <br />
      Say hi or share your thoughts at{" "}
      <a
        href="mailto:thesaillos@gmail.com"
        className="text-orange-600 hover:underline"
      >
        thesaillos@gmail.com
      </a>
    </p>
  </div>
</section>

  );
}
