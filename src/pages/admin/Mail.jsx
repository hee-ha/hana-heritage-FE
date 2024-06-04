import React from "react";
import { Button, Textarea, Datepicker } from "flowbite-react";

const Mail = () => {
  const customerList = [
    { id: 1, name: "황유진", email: "youjin@naver.com" },
    { id: 2, name: "정찬수", email: "ccss112@naver.com" },
    { id: 3, name: "이지후", email: "lee1212@naver.com" },
    { id: 4, name: "변정흠", email: "hhheum@naver.com" },
    { id: 5, name: "유민아", email: "ouou144@naver.com" },
    { id: 6, name: "황혜림", email: "hyerm@google.com" },
    { id: 7, name: "김똥꾸", email: "a134a@google.com" },
  ];

  return (
    <div className="w-full space-y-16">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            메일 발송 예약
          </span>{" "}
          화면입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          메일 수신 동의한 손님 목록에서, 메일을 발송할 손님을 선택하고
          예약하세요. 💌
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="relative rounded-lg">
          <h1 className="mb-8 text-2xl font-semibold font-sans leading-none tracking-tight text-gray-700  dark:text-white">
            ➊ 메일 수신 동의한{" "}
            <mark className="px-2 text-white bg-sky-400 rounded">
              손님 목록
            </mark>{" "}
            선택
          </h1>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  고객 성함
                </th>
                <th scope="col" className="px-6 py-3">
                  이메일
                </th>
              </tr>
            </thead>
            <tbody>
              {customerList.map((customer) => (
                <tr
                  key={customer.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${customer.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${customer.id}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {customer.name}
                  </th>
                  <td className="px-6 py-4">{customer.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="mb-8 text-2xl font-semibold font-sans leading-none tracking-tight text-gray-700  dark:text-white">
            ➋ 선택한 손님에게 발송할{" "}
            <mark className="px-2 text-white bg-emerald-600 rounded">
              내용 작성 후 예약
            </mark>
          </h1>
          <div className="max-w-md">
            <Textarea
              id="comment"
              className="resize-none font-noto mb-4"
              placeholder="Leave a comment..."
              required
              rows={15}
            />
            <Datepicker title="메일 발송 예약일" />

            <Button type="submit" className="w-full mt-4 bg-emerald-600">
              예약전송
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
