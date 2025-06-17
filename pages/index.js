import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WanderWise | Plan Smarter. Wander Wiser.</title>
        <meta name="description" content="Explore unforgettable travel deals, family vacations, and adventure escapes with WanderWise." />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
        <h1>Welcome to WanderWise</h1>
        <p>Plan Smarter. Wander Wiser.</p>
      </main>
    </>
  );
}
