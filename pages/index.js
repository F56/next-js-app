import Head from "next/head";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Boston - Dashboard</title>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
        />
      </Head>
      <Dashboard />   
    </div>
  );
}
