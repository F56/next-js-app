import React, { useState } from "react";
import Card from "../components/Card";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["4/4/2021", "4/5/2021", "4/6/2021", "4/7/2021", "4/8/2021"],
  datasets: [
    {
      label: "",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [0, 10, 20, 10, 10],
    },
  ],
};

const UsersChart = () => {
  return (
    <div>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: "Average Users per Day",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
};

const EstateChart = () => {
  return (
    <div>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: "Average Estate Views per Day",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  
  function playAudio() {
    if (toggle === false) {
      
    } 
  }
  return (
    <div>
      <div className="w-full bg-transparent px-5 py-2 text-sm">
        <div
          className={`transition ease-in-out flex flex-row bg-white w-full rounded-md py-2 px-5 gap-2 items-center shadow-md`}
        >
          <div className="text-xl">
            <i className="uil uil-chat"></i>
          </div>
          <div
            className={`transition ease-in-out duration-200 flex flex-row rounded-full p-1 w-12 cursor-pointer ${
              toggle ? `bg-green-400` : `bg-gray-400`
            }`}
            onClick={() => {
              setToggle(!toggle);
              playAudio();
            }}
          >
            <div
              className={`select-none shadow-md rounded-full py-2 px-2 bg-white text-center text-xs w-min h-max transform ease-in-out duration-200 ${
                toggle ? `translate-x-6` : ``
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-5 py-2 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white w-full rounded-md py-2 gap-5 items-center flex-wrap justify-center relative">
          <Card>
            <Card.Title>New Users</Card.Title>
            <Card.Body>
              <UsersChart />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card>
            <Card.Title>Estate Views</Card.Title>
            <Card.Body>
              <EstateChart />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
