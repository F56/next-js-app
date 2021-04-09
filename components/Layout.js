import Sidebar from "./Sidebar";
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
        />
      </Head>
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="flex flex-col w-full buttler">{children}</div>
      </div>
    </>
  );
};

export default Layout;
