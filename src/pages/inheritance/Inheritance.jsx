import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Tabs } from "flowbite-react";
import { ListCard } from "../../components/inheritance/card";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import "../../styles/transaction.css";

function Inheritance() {
  const data = {
    labels: ["현금", "부동산", "주식", "자동차"],
    datasets: [
      {
        data: [55, 25, 10, 10],
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

  const customerData1 = [
    {
      icon: "hi",
      name: "Neil Sims",
      email: "email@windster.com",
      amount: "$320",
    },
    {
      icon: "hi",
      name: "Bonnie Green",
      email: "email@windster.com",
      amount: "$3467",
    },
    {
      icon: "hi",
      name: "Michael Gough",
      email: "email@windster.com",
      amount: "$67",
    },
    {
      icon: "hi",
      name: "Thomes Lean",
      email: "email@windster.com",
      amount: "$2367",
    },
  ];

  const customerData2 = [
    {
      avatar: "hello",
      fullname: "Jane Doe",
      contact: "jane@windster.com",
      balance: "$120",
    },
    {
      avatar: "hello",
      fullname: "John Smith",
      contact: "john@windster.com",
      balance: "$1467",
    },
    {
      avatar: "hello",
      fullname: "Chris Johnson",
      contact: "chris@windster.com",
      balance: "$200",
    },
    {
      avatar: "hello",
      fullname: "Emma Wilson",
      contact: "emma@windster.com",
      balance: "$3167",
    },
  ];

  const customerData3 = [
    {
      picture: "hi",
      firstName: "Alice",
      emailAddress: "alice@windster.com",
      total: "$220",
    },
    {
      picture: "hi",
      firstName: "Bob",
      emailAddress: "bob@windster.com",
      total: "$467",
    },
    {
      picture: "hi",
      firstName: "Charlie",
      emailAddress: "charlie@windster.com",
      total: "$500",
    },
    {
      picture: "hi",
      firstName: "David",
      emailAddress: "david@windster.com",
      total: "$3167",
    },
  ];

  return (
    <>
      <div className="px-24 min-h-screen p-6 w-full">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="신탁 계약 조회" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item
            title="자산 조회"
            icon={HiClipboardList}
            className="custom-tab-title"
          >
            <div className="flex flex-row">
              <section className="mr-20 w-7/12">
                <div className="flex bg-gray-100 mt-6 px-12 py-6 rounded-t-lg font-noto text-3xl">
                  <div className="w-96 mr-10">
                    <ListCard
                      title="Latest Customers"
                      customers={customerData1}
                      keyMapping={{
                        icon: "icon",
                        name: "name",
                        email: "email",
                        amount: "amount",
                      }}
                    />
                  </div>
                  <div className="w-96">
                    <ListCard
                      title="New Customers"
                      customers={customerData2}
                      keyMapping={{
                        icon: "avatar",
                        name: "fullname",
                        email: "contact",
                        amount: "balance",
                      }}
                    />
                  </div>
                </div>
                <div className="flex bg-gray-100 px-12 py-6 rounded-b-lg font-noto text-3xl">
                  <div className="w-96 mr-10">
                    <ListCard
                      title="Latest Customers"
                      customers={customerData1}
                      keyMapping={{
                        icon: "icon",
                        name: "name",
                        email: "email",
                        amount: "amount",
                      }}
                    />
                  </div>
                  <div className="w-96">
                    <ListCard
                      title="New Customers"
                      customers={customerData2}
                      keyMapping={{
                        icon: "avatar",
                        name: "fullname",
                        email: "contact",
                        amount: "balance",
                      }}
                    />
                  </div>
                  {/* <div className="w-80">
                    <ListCard
                      title="Returning Customers"
                      customers={customerData3}
                      keyMapping={{
                        icon: "picture",
                        name: "firstName",
                        email: "emailAddress",
                        amount: "total",
                      }}
                    />
                  </div> */}
                </div>
              </section>
              <div
                className="flex flex-col items-center mt-6 bg-white p-6 rounded-lg shadow-md"
                style={{ height: "880px" }}
              >
                <h2 className="font-hana2 text-3xl font-bold mb-6 text-center mb-10">
                  이땡땡님의 자산현황입니다.
                </h2>
                <div className="flex flex-col items-center h-full w-[450px]">
                  <div className="h-1/2 w-full mb-12">
                    <Pie
                      data={data}
                      options={options}
                      plugins={[ChartDataLabels]}
                    />
                  </div>
                  <div className="h-1/2 w-full">
                    <Bar
                      data={data}
                      options={options}
                      plugins={[ChartDataLabels]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
}

export default Inheritance;
