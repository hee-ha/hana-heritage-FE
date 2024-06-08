import { React, useEffect, useState } from "react";
import DatePicker from "../../components/common/DatePicker/DatePicker";
import GradientButton from "../../components/common/Button/GradientButton";
import { getCustomerContact } from "../../apis/customer/getCustomerContact";
import { reserveSms } from "../../apis/sms/reserveSms";
import GreenBadge from "../../components/common/Badge/GreenBadge";
import GrayBadge from "../../components/common/Badge/GrayBadge";
import { getReservationList } from "../../apis/sms/getReservationList";

const SmsReservationResult = () => {
  const [reservationList, setReservationList] = useState([]);

  const doGetReservationList = async () => {
    try {
      const response = await getReservationList();
      setReservationList(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doGetReservationList();
  }, []);

  return (
    <div className="w-full space-y-10">
      <div className="space-y-2">
        <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            문자 예약 발송 결과
          </span>{" "}
          화면입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          예약한 문자 목록과 발송 결과를 확인해보세요! 🌈
        </p>
      </div>

      <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              no
            </th>
            <th scope="col" className="px-6 py-3">
              문자 내용
            </th>
            <th scope="col" className="px-6 py-3">
              발송 예약일
            </th>
            <th scope="col" className="px-6 py-3">
              작성일
            </th>
            <th scope="col" className="px-6 py-3">
              결과
            </th>
          </tr>
        </thead>
        <tbody>
          {reservationList &&
            reservationList.map((reservation, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{reservation.content}</td>
                <td className="px-6 py-4">{reservation.sendingDate}</td>
                <td className="px-6 py-4">
                  {reservation.created_at.split("T")[0]}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {reservation.isSent ? (
                      <GreenBadge
                        label="발송됨"
                        className="px-3 py-2 font-bold"
                      />
                    ) : (
                      <GrayBadge
                        label="발송대기"
                        className="px-3 py-2 font-bold"
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmsReservationResult;
