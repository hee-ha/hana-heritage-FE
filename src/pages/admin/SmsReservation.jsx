import { React, useEffect, useState } from "react";
import DatePicker from "../../components/common/DatePicker/DatePicker";
import GradientButton from "../../components/common/Button/GradientButton";
import { getCustomerContact } from "../../apis/customer/getCustomerContact";
import { reserveSms } from "../../apis/sms/reserveSms";

const SmsReservation = () => {
  const [customerContactList, setCustomerContactList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedCustomers, setCheckedCustomers] = useState({});
  const [reservationDate, setReservationDate] = useState("");
  const [message, setMessage] = useState(""); // 새로운 상태 추가

  const doGetCustomerContact = async () => {
    try {
      const response = await getCustomerContact();
      setCustomerContactList(response.result);
      const newCheckedCustomers = {};
      response.result.forEach((customer) => {
        newCheckedCustomers[customer.id] = false;
      });
      setCheckedCustomers(newCheckedCustomers);
      console.log(newCheckedCustomers); // 상태가 업데이트된 이후의 값을 출력합니다.
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doGetCustomerContact();
  }, []);

  const handleAllCheckChange = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    setCheckedCustomers((prevCheckedCustomers) => {
      const newCheckedCustomers = {};
      customerContactList.forEach((customer) => {
        newCheckedCustomers[customer.id] = isChecked;
      });
      console.log(newCheckedCustomers); // 상태가 업데이트된 이후의 값을 출력합니다.
      return newCheckedCustomers;
    });
  };

  const handleIndividualCheckChange = (e, customerId) => {
    const isChecked = e.target.checked;
    setCheckedCustomers((prevCheckedCustomers) => {
      const newCheckedCustomers = {
        ...prevCheckedCustomers,
        [customerId]: isChecked,
      };
      setAllChecked(Object.values(newCheckedCustomers).every(Boolean));
      console.log(newCheckedCustomers); // 상태가 업데이트된 이후의 값을 출력합니다.
      return newCheckedCustomers;
    });
  };

  const handleSubmitReservation = async () => {
    const selectedCustomers = Object.entries(checkedCustomers)
      .filter(([customerId, isChecked]) => isChecked)
      .map(([customerId]) => Number(customerId));

    const requestBody = {
      customerIdList: selectedCustomers,
      sendingDate: reservationDate,
      content: message,
    };
    console.log(requestBody);

    try {
      console.log("Request Body:", requestBody);
      await reserveSms(requestBody);
    } catch (error) {
      console.error("Failed to submit reservation:", error);
    }
  };

  return (
    <div className="w-full space-y-10">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            문자 예약 발송
          </span>{" "}
          화면입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          광고 수신 동의한 손님 목록에서, 문자를 발송할 손님을 선택하고
          예약하세요. 💌
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="relative rounded-lg">
          <div className="mb-5">
            <p class="mb-2 text-lg leading-6 font-semibold text-gray-500 dark:text-sky-400">
              #1
            </p>
            <div class="flex items-center">
              <h1 class="inline-block text-xl sm:text-2xl font-extrabold text-emerald-500 tracking-tight dark:text-slate-200">
                발송 대상 선택
              </h1>
            </div>
          </div>

          <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={allChecked}
                      onChange={handleAllCheckChange}
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
                  전화번호
                </th>
              </tr>
            </thead>
            <tbody>
              {customerContactList &&
                customerContactList.map((customer) => (
                  <tr
                    key={customer.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-table-search-${customer.id}`}
                          type="checkbox"
                          className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          checked={checkedCustomers[customer.id] || false}
                          onChange={(e) =>
                            handleIndividualCheckChange(e, customer.id)
                          }
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
                    <td className="px-6 py-4">{customer.phoneNumber}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="mb-5">
            <p class="mb-2 text-lg leading-6 font-semibold text-gray-500 dark:text-sky-400">
              #2
            </p>
            <div class="flex items-center">
              <h1 class="inline-block text-xl sm:text-2xl font-extrabold text-emerald-500 tracking-tight dark:text-slate-200">
                문자 작성 후 예약 발송
              </h1>
            </div>
          </div>
          <div className="w-full">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              문자 내용
            </label>
            <textarea
              id="message"
              rows="10"
              class="resize-none font-noto text-base block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <label
              for="message"
              class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              예약일
            </label>

            <div class="w-full mb-4">
              <DatePicker
                value={reservationDate}
                onChange={setReservationDate}
              />
            </div>
            <GradientButton
              label="예약전송"
              width="w-full"
              handleClickBtn={handleSubmitReservation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsReservation;
