import React from "react";
import residentImage from "./images/resident.png";
import bondImage from "./images/phone.png";

const AccountPrepList = () => {
  const documents = [
    { name: "주민등록증", image: residentImage },
    { name: "핸드폰", image: bondImage },
  ];

  return (
    <div className="mx-auto px-24 border rounded-lg shadow-lg bg-white">
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10 text-center">
          <span className="text-hanaGreen">계좌 개설에 필요한 준비물</span>을
          안내드립니다.
        </h2>
        <hr />
      </header>
      <div className="text-center text-hana2 p-10 bg-hanaGreen rounded-lg shadow-md ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 place-items-center">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/2 h-80 bg-hanaGold p-10 rounded-lg shadow-lg"
            >
              <div className="w-full h-48  flex items-center justify-center mb-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <li className="flex items-center text-white  font-hana2 font-semibold text-3xl">
                <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-white rounded-full shrink-0">
                  {index + 1}
                </span>
                <p className="text-4xl font-hana2 text-white mt-2">
                  {doc.name}
                </p>

                <svg
                  className="w-7 h-7 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                ></svg>
              </li>
              {/* <p className="text-4xl font-hana2 text-white mt-2">{doc.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPrepList;
