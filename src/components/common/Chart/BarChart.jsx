import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import GradientButton from "../Button/GradientButton";
import ApexCharts from "apexcharts";

const BarChart = ({ mainText = "", subText = "" }) => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "입금",
          color: "#3b82f6",
          data: ["1420", "1620", "1820", "1420", "1650", "2120", "2120"],
        },
        {
          name: "출금",
          color: "#FB4A56",
          data: ["788", "810", "866", "788", "1100", "1200", "1200"],
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        type: "bar",
        width: "100%",
        height: "400",
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: "easeout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          borderRadiusApplication: "end",
          borderRadius: 5,
          dataLabels: {
            position: "top",
          },
        },
      },
      legend: {
        show: false,
        position: "bottom",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "14px",
          fontFamily: "noto, sans-serif",
        },
        offsetX: -50,
      },
      tooltip: {
        shared: true,
        intersect: false,
        formatter: function (value) {
          return value + "원";
        },
        style: {
          fontSize: "14px",
          fontFamily: "noto, sans-serif",
        },
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "noto, sans-serif",
            cssClass: "text-sm font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: function (value) {
            return value + "원";
          },
        },
        categories: [
          "6/3 (월)",
          "6/4 (화)",
          "6/5 (수)",
          "6/6 (목)",
          "6/7 (금)",
          "6/8 (토)",
          "6/9 (일)",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "noto, sans-serif",
            cssClass: "text-sm font-bold fill-gray-500 dark:fill-gray-400",
          },
        },
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 30,
          top: -10,
        },
      },
      fill: {
        opacity: 1,
      },
    };

    if (
      document.getElementById("bar-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("bar-chart"),
        options,
      );
      chart.render();
    }
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dt className="text-lg font-normal text-gray-900 dark:text-gray-400 pb-1">
            정산
          </dt>
          <dd className="leading-none text-2xl font-bold text-gray-900 dark:text-white">
            +5,405원
          </dd>
        </dl>
      </div>

      <div className="grid grid-cols-2 py-5">
        <dl>
          <dt className="text-lg font-normal text-gray-500 dark:text-gray-400 pb-1">
            입금
          </dt>
          <dd className="leading-none text-lg font-bold text-blue-500 dark:text-green-400">
            +23,635원
          </dd>
        </dl>
        <dl>
          <dt className="text-lg font-normal text-gray-500 dark:text-gray-400 pb-1">
            출금
          </dt>
          <dd className="leading-none text-lg font-bold text-red-600 dark:text-red-500">
            -18,230원
          </dd>
        </dl>
      </div>

      <div id="bar-chart"></div>
    </div>
  );
};

export default BarChart;
