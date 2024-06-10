import { Card } from "flowbite-react";

export function ListCard({ title, data = [] }) {
  return (
    <Card style={{ width: "380px", height: "450px" }}>
      <div className="my-4 flex items-center justify-between">
        <h5 className="text-4xl font-hana2 font-semibold leading-none text-gray-900 dark:text-white">
          {title}
        </h5>
        {/* <a
          href="#"
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          View all
        </a> */}
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((prop, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl shrink-0">
                  <span>{prop.name}</span>
                </div>
                <div className="min-w-0 flex-1">
                  {/* <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {prop.location}
                  </p> 
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {prop.quantity}
                  </p> */}
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <span class="bg-gray-100 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {prop.amount}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
