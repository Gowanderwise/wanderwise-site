import Head from "next/head";

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
    description: "Find great deals on flights, hotels, and tours.",
    logo: "/images/affiliates/tripcom.png",
  },
  {
    name: "EconomyBookings",
    url: "https://economybookings.tpk.ro/uBH3UiLi",
    description: "Affordable hotel and travel bookings across the globe.",
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
    description: "Book personalized airport and city transfers with local drivers.",
    logo: "/images/affiliates/welcomepickups.png",
  },
];

export default function TravelBookings() {
  return (
    <>
      <Head>
        <title>Travel Booking Partners | WanderWise</title>
        <meta
          name="description"
          content="Book your travel with trusted partners including GetTransfer, Trip.com, EconomyBookings, Searadar, Welcome Pickups, and more."
        />
      </Head>
      <main className="min-h-screen p-6 bg-white font-sans text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Travel Booking Partners</h1>
        <p className="text-center max-w-xl mx-auto mb-10 text-gray-600">
          Use our trusted booking partners below to plan your perfect journey. All links open in a new tab.
        </p>
        <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {affiliates.map(({ name, url, description, logo }) => (
            <div
              key={name}
              className="p-6 border rounded-xl shadow-lg flex flex-col items-center bg-white hover:shadow-2xl transition"
            >
              {logo && (
                <div className="mb-4">
                  <img
                    src={logo}
                    alt={name + " logo"}
                    className="h-16 w-auto object-contain"
                    style={{ maxHeight: "64px" }}
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2 text-blue-700 text-center">{name}</h2>
              <p className="mb-4 text-center text-gray-700">{description}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener sponsored nofollow"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
