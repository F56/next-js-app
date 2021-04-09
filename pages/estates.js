import Head from 'next/head'
import { useState } from 'react';
const Estates = () => {
    const [onSearch, setOnSearch] = useState(false);
    return (
      <>
        <Head>
          <title>Boston - Estates</title>
        </Head>
        <div className="w-full bg-gray-200 px-5 py-2 text-sm">
          <div
            className={`transition ease-in-out flex flex-row bg-white w-full rounded-md py-2 px-5 gap-2 items-center ${
              onSearch ? `ring-2 ring-indigo-400` : ``
            }`}
          >
            <div className="text-xl text-gray-400">
              <div
                className={`transition ease-in-out rounded-full text-center px-1 ${
                  onSearch ? `text-gray-500` : ``
                }`}
              >
                <i class="uil uil-filter"></i>
              </div>
            </div>
            <div className="flex-1 font-base">
              <input
                onFocus={(e) => setOnSearch(!onSearch)}
                onBlur={(e) => setOnSearch(!onSearch)}
                type="text"
                placeholder="filter estate by name, id, address, city, university, ect..."
                className="focus:outline-none w-full"
              />
            </div>

            <div className="text-2xl text-gray-400">
              <button
                className={`transition ease-in-out rounded-full hover:bg-indigo-400 hover:text-white text-center px-1 focus:outline-none ${
                  onSearch ? `bg-indigo-400 text-white` : ``
                }`}
              >
                <i class="uil uil-search-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Estates;