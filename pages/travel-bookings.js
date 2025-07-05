import Head from "next/head";
import Image from "next/image";

const affiliates = [
  {
    name: "GetTransfer",
    url: "https://gettransfer.tpk.ro/yD7JNc7o",
    description: "Book airport transfers and private rides worldwide.",
    logo: "/images/affiliates/gettransfer.png",
  },
  {
    name: "Trip.com",
    url: "https://trip.tpk.ro/DR87JZXT",
    description: "Deals on flights, hotels, and tours.",
    logo: "/images/affiliates/tripcom.png",
  },
  {
    name: "EconomyBookings",
    url: "https://economybookings.tpk.ro/uBH3UiLi",
    description: "Affordable hotel and car bookings across the globe.",
    logo: "/images/affiliates/economybookings.png",
  },
  {
    name: "Searadar",
    url: "https://searadar.tpk.ro/iY6JLQs1",
    description: "Yacht and boat rentals worldwide.",
    logo: "/images/affiliates/searadar.png",
  },
  {
    name: "Welcome Pickups",
    url: "https://tpk.ro/jxIp4QX1",
    description: "Personalized airport and city transfers with local drivers.",
    logo: "/images/affiliates/welcomepickups.png",
  },
];

export default function TravelBooking() {
  return (
    <>
      <Head>
        <title>Travel Booking Partners | WanderWise</title>
        <meta
          name="description"
          content="Book your travel with trusted partners including GetTransfer, Trip.com, EconomyBookings, Searadar, Welcome Pickups, and more."
        />
      </Head>

      <main className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-yellow-50 font-sans text-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/assets/wanderwise-logo.png"
              alt="WanderWise Logo"
              width={120}
              height={120}
              className="mb-3 rounded-full shadow"
              priority
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-800 tracking-tight">Travel Booking Partners</h1>
            <p className="text-lg text-gray-700 mb-4 text-center">Plan Smarter. Wander Wiser.</p>
            <p className="text-center max-w-2xl text-gray-600">
              Use our trusted booking partners below to plan your perfect journey. All links open in a new tab.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {affiliates.map(({ name, url, description, logo }) => (
              <div
                key={name}
                className="group bg-white border border-blue-100 rounded-2xl shadow-md p-6 flex flex-col items-center transition hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="mb-4 h-16 w-full flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={90}
                    height={64}
                    className="object-contain h-16 w-auto max-h-16"
                    onError={(e) => { e.target.src = "/images/affiliates/fallback.png"; }}
                  />
                </div>
                <h2 className="text-lg font-semibold text-blue-700 mb-1 text-center">{name}</h2>
                <p className="mb-4 text-center text-gray-600 text-sm">{description}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener sponsored nofollow"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
