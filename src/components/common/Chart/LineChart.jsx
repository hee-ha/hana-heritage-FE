import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import GradientButton from "../Button/GradientButton";
import ApexCharts from "apexcharts";

const LineChart = ({ mainText = "", subText = "" }) => {
  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "line",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26,
        },
      },
      series: [
        {
          name: "Clicks",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
        {
          name: "CPC",
          data: [12, 33, 22, 55, 77, 23],
          color: "#7E3AF2",
        },
      ],
      legend: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "01 Feb",
          "02 Feb",
          "03 Feb",
          "04 Feb",
          "05 Feb",
          "06 Feb",
          "07 Feb",
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("line-chart"),
        options,
      );
      chart.render();
      return () => chart.destroy();
    }
  }, []);

  return (
    <div class="w-full flex-grow bg-white rounded-lg shadow dark:bg-gray-800 p-4">
      <div class="flex justify-between mb-5">
        <div class="grid gap-4 grid-cols-2">
          <div>
            <h5 class="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Clicks
              <svg
                data-popover-target="clicks-info"
                data-popover-placement="bottom"
                class="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div
                data-popover
                id="clicks-info"
                role="tooltip"
                class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
              >
                <div class="p-3 space-y-2">
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Clicks growth - Incremental
                  </h3>
                  <p>
                    Report helps navigate cumulative growth of community
                    activities. Ideally, the chart should have a growing trend,
                    as stagnating chart signifies a significant decrease of
                    community activity.
                  </p>
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Calculation
                  </h3>
                  <p>
                    For each date bucket, the all-time volume of activities is
                    calculated. This means that activities in period n contain
                    all activities up to period n, plus the activities generated
                    by your community in period.
                  </p>
                  <a
                    href="#"
                    class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Read more{" "}
                    <svg
                      class="w-2 h-2 ms-1.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
                <div data-popper-arrow></div>
              </div>
            </h5>
            <p class="text-gray-900 dark:text-white text-2xl leading-none font-bold">
              42,3k
            </p>
          </div>
          <div>
            <h5 class="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              CPC
              <svg
                data-popover-target="cpc-info"
                data-popover-placement="bottom"
                class="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div
                data-popover
                id="cpc-info"
                role="tooltip"
                class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
              >
                <div class="p-3 space-y-2">
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    CPC growth - Incremental
                  </h3>
                  <p>
                    Report helps navigate cumulative growth of community
                    activities. Ideally, the chart should have a growing trend,
                    as stagnating chart signifies a significant decrease of
                    community activity.
                  </p>
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Calculation
                  </h3>
                  <p>
                    For each date bucket, the all-time volume of activities is
                    calculated. This means that activities in period n contain
                    all activities up to period n, plus the activities generated
                    by your community in period.
                  </p>
                  <a
                    href="#"
                    class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Read more{" "}
                    <svg
                      class="w-2 h-2 ms-1.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
                <div data-popper-arrow></div>
              </div>
            </h5>
            <p class="text-gray-900 dark:text-white text-2xl leading-none font-bold">
              $5.40
            </p>
          </div>
        </div>
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            type="button"
            class="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Last week{" "}
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="lastDaysdropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  3·6·9 정기예금
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  하나 청년도약계좌
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  행복knowhow 연금예금
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="line-chart"></div>
    </div>
  );
};

export default LineChart;
