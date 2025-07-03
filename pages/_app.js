// pages/_app.js
import '../styles/globals.css'; // Adjust if your CSS file is named differently

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
