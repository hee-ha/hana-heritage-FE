import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Tabs } from "flowbite-react";
import { ListCard } from "../../../components/inheritance/card";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { getMyProperty } from "../../../apis/inheritance/getMyProperty";
import { getChartData } from "../../../apis/inheritance/getChartData";

function Property() {
  const [properties, setProperties] = useState({
    cash: [],
    security: [],
    bond: [],
    realty: [],
  });

  const [chartData, setChartData] = useState([]);

  const data = {
    labels: ["금전", "유가증권", "채권", "부동산"],
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#FFCDD2", "#C5CAE9", "#B2DFDB", "#FFF9C4"],
        hoverBackgroundColor: ["#FF8A80", "#7986CB", "#4DB6AC", "#FFF176"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#000000",
        font: {
          family: "Hana2",
          weight: "bold",
          size: 16,
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  };
  const barOptions = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#000000",
        font: {
          family: "Hana2",
          weight: "bold",
          size: 16,
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      legend: {
        display: false, // Hide legend for bar chart
      },
    },
  };
  const doProperty = async () => {
    try {
      const response = await getMyProperty(2);
      setProperties(response.result);
      console.log(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };
  const doGetChartData = async () => {
    try {
      const response = await getChartData(2);
      setChartData(response.result);
      console.log(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doProperty();
    doGetChartData();
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <section className="mr-14 w-3/5">
          <div className="flex bg-gray-100 mt-6 p-2 rounded-t-lg font-noto">
            <div className="mr-4">
              <ListCard title="금전" data={properties.cash} />
            </div>
            <div>
              <ListCard title="부동산" data={properties.realty} />
            </div>
          </div>
          <div className="flex bg-gray-100 p-2 rounded-b-lg font-noto text-3xl">
            <div className="mr-4">
              <ListCard title="채권" data={properties.bond} />
            </div>
            <div>
              <ListCard title="유가증권" data={properties.security} />
            </div>
          </div>
        </section>
        <div
          className="flex flex-col items-center mt-6 bg-white p-6 rounded-lg shadow-md"
          style={{ height: "925px" }}
        >
          <h2 className="font-hana2 text-3xl font-bold mb-6 text-center mb-10">
            이땡땡님의 자산현황입니다.
          </h2>
          <div className="flex flex-col items-center h-full w-[450px]">
            <div className="h-1/2 w-full mb-12">
              <Pie data={data} options={options} plugins={[ChartDataLabels]} />
            </div>
            <div className="h-1/2 w-full">
              <Bar
                data={data}
                options={barOptions}
                plugins={[ChartDataLabels]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
