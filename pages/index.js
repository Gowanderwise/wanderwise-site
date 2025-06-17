import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WanderWise | Plan Smarter. Wander Wiser.</title>
        <meta name="description" content="Explore unforgettable travel deals, family vacations, and adventure escapes with WanderWise." />
        <meta property="og:title" content="WanderWise" />
        <meta property="og:description" content="Plan Smarter. Wander Wiser." />
        <meta property="og:image" content="/assets/wanderwise-logo.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-100 to-yellow-50 p-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/wanderwise-logo.png"
              alt="WanderWise Logo"
              width={200}
              height={200}
              className="mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">Welcome to WanderWise</h1>
            <p className="text-lg mb-6">Plan Smarter. Wander Wiser.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/deals">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700">
                  Explore Deals
                </button>
              </Link>
              <Link href="/blog">
                <button className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600">
                  Travel Tips
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-gray-800 text-white px-5 py-2 rounded-full shadow hover:bg-gray-900">
                  About Us
                </button>
              </Link>
              {/* New affiliate button */}
              <Link href="https://gettransfer.tpk.ro/yD7JNc7o" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700">
                  Book a Transfer
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Deals Preview Section */}
        <section className="py-12 px-6">
          <h2 className="text-2xl font-semibold text-center mb-8">Featured Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Family Adventures", image: "/images/deals/family.jpg", link: "https://gettransfer.tpk.ro/yD7JNc7o" },
              { title: "Couples Escapes", image: "/images/deals/couples.jpg", link: "/deals/couples" },
              { title: "Adventure Travel", image: "/images/deals/adventure.jpg", link: "/deals/adventure" },
            ].map((deal) => (
              <Link href={deal.link} key={deal.title}>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    width={400}
                    height={250}
                    className="w-full object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold">{deal.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-12 bg-blue-50 px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Latest Tips & Stories</h2>
          <p className="text-center text-gray-600 mb-6">
            Learn how to travel smarter with insights, hacks, and destination guides.
          </p>
          <div className="flex justify-center">
            <Link href="/blog">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Visit Blog
              </button>
            </Link>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-12 px-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Why WanderWise?</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            WanderWise is your guide to unforgettable journeys. Whether you're planning a family vacation,
            a romantic escape, or a solo adventure, we help you find the best experiences with less hassle.
            Explore deals, read expert tips, and start your next chapter.
          </p>
        </section>
      </main>
    </>
  );
}
