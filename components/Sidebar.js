import { useRouter } from "next/router";
import { useState } from "react";

export default function Sidebar() {
  const [onEstate, setOnEstate] = useState(false);
  const [onEstateAdd, setOnEstateAdd] = useState(false);
  const [onUsers, setOnUsers] = useState(false);
  const [onHelp, setOnHelp] = useState(false);
  const [onChats, setOnChats] = useState(false);
  const [onSettings, setOnSettings] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col bg-indigo-400 h-screen w-max isolate fixed p-5 gap-5 z-50">
      <div className="text-white text-2xl relative">
        <button
          className="transition duration-300 ease-in-out rounded-full hover:bg-white hover:text-indigo-400 text-center px-1 focus:outline-none transform hover:scale-125"
          onMouseEnter={(e) => setOnEstate(!onEstate)}
          onMouseLeave={(e) => setOnEstate(!onEstate)}
          onClick={() => router.push("/")}
        >
          <i className="uil uil-apps"></i>
        </button>
        <div
          className={`transition ease-in-out flex flex-row items-center absolute -top-0 left-9 ${
            onEstate ? `` : `hidden`
          }`}
        >
          <div className="opacity-80 square" />
          <div className="bg-black opacity-80 rounded-md text-white text-xs py-2 px-5 w-max">
            Dashboard
          </div>
        </div>
      </div>
      <div className="text-white text-2xl relative">
        <button
          className="transition duration-300 ease-in-out rounded-full hover:bg-white hover:text-indigo-400 text-center px-1 focus:outline-none transform hover:scale-125"
          onMouseEnter={(e) => setOnEstateAdd(!onEstateAdd)}
          onMouseLeave={(e) => setOnEstateAdd(!onEstateAdd)}
          onClick={(e) => {
            router.push("/estates");
          }}
        >
          <i className="uil uil-estate"></i>
        </button>
        <div
          className={`transition ease-in-out flex flex-row items-center absolute -top-0 left-9 z-10 ${
            onEstateAdd ? `` : `hidden`
          }`}
        >
          <div className="opacity-80 square" />
          <div className="bg-black opacity-80 rounded-md text-white text-xs py-2 px-5 w-max">
            Estates
          </div>
        </div>
      </div>
      <div className="text-white text-2xl relative">
        <button
          className="transition duration-300 ease-in-out rounded-full hover:bg-white hover:text-indigo-400 text-center px-1 focus:outline-none transform hover:scale-125"
          onMouseEnter={(e) => setOnUsers(!onUsers)}
          onMouseLeave={(e) => setOnUsers(!onUsers)}
        >
          <i className="uil uil-user-circle"></i>
        </button>
        <div
          className={`transition ease-in-out flex flex-row items-center absolute -top-0 left-9 z-10 ${
            onUsers ? `` : `hidden`
          }`}
        >
          <div className="opacity-80 square" />
          <div className="bg-black opacity-80 rounded-md text-white text-xs py-2 px-5 w-max">
            Users
          </div>
        </div>
      </div>
      <div className="text-white text-2xl relative">
        <button
          className="transition duration-300 ease-in-out rounded-full hover:bg-white hover:text-indigo-400 text-center px-1 focus:outline-none transform hover:scale-125 relative"
          onMouseEnter={(e) => setOnChats(!onChats)}
          onMouseLeave={(e) => setOnChats(!onChats)}
          onClick={() => router.push("/")}
        >
          <i className="uil uil-chat"></i>
          <span class="absolute top-0 right-0 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
        <div
          className={`transition ease-in-out flex flex-row items-center absolute -top-0 left-9 ${
            onChats ? `` : `hidden`
          }`}
        >
          <div className="opacity-80 square" />
          <div className="bg-black opacity-80 rounded-md text-white text-xs py-2 px-5 w-max">
            Chats
          </div>
        </div>
      </div>
      <div className="text-white text-2xl relative">
        <button
          className="transition duration-300 ease-in-out rounded-full hover:bg-white hover:text-indigo-400 text-center px-1 focus:outline-none transform hover:scale-125"
          onMouseEnter={(e) => setOnHelp(!onHelp)}
          onMouseLeave={(e) => setOnHelp(!onHelp)}
          onClick={() => router.push("/")}
        >
          <i className="uil uil-question-circle"></i>
        </button>
        <div
          className={`transition ease-in-out flex flex-row items-center absolute -top-0 left-9 ${
            onHelp ? `` : `hidden`
          }`}
        >
          <div className="opacity-80 square" />
          <div className="bg-black opacity-80 rounded-md text-white text-xs py-2 px-5 w-max">
            Helpdesk
          </div>
        </div>
      </div>
      <div className="flex-1 text-white text-2xl relative" />
      <div className="text-white text-2xl relative">
        <button
          className="transition duration-300 ease-in-out rounded-full hover:bg-white hover:text-indigo-400 text-center px-1 focus:outline-none transform hover:scale-125"
          onMouseEnter={(e) => setOnSettings(!onSettings)}
          onMouseLeave={(e) => setOnSettings(!onSettings)}
        >
          <i className="uil uil-cog"></i>
        </button>
        <div
          className={`transition ease-in-out flex flex-row items-center absolute -top-0 left-9 z-10 ${
            onSettings ? `` : `hidden`
          }`}
        >
          <div className="opacity-80 square" />
          <div className="bg-black opacity-80 rounded-md text-white text-xs py-2 px-5 w-max">
            Settings
          </div>
        </div>
      </div>
      <div className="text-white text-2xl relative">
        <button className="transition duration-300 ease-in-out rounded-full hover:bg-red-400 hover:text-white text-center px-1 focus:outline-none transform hover:scale-125">
          <i className="uil uil-sign-out-alt"></i>
        </button>
      </div>
    </div>
  );
}
