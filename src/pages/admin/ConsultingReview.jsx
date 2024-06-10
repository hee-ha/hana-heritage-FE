import React, { useEffect, useState } from "react";
import { Avatar } from "flowbite-react";
import GradientButton from "../../components/common/Button/GradientButton";
import { calculateConsulting } from "../../apis/admin/calculateConsulting";
import { consultingComplete } from "../../apis/admin/consultingComplete";
import { Link, useSearchParams, useNavigate } from "react-router-dom";


const ConsultingReview = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const response = await calculateConsulting();
      // console.log(response);
      if (Array.isArray(response.result)) {
        setReservations(response.result);
      } else {
        console.error("API 응답이 배열이 아닙니다.", response);
        setReservations([]);
      }
    } catch (error) {
      console.error("예약 목록을 가져오는 중 오류가 발생했습니다!", error);
    }
  };

  const handleComplete = async (id) => {
    console.log("handleComplete 호출됨: ", id); 
    
    try {
      const response = await consultingComplete(id);
      console.log(response);
      setReservations((prevReservations) => 
        // console.log(prevReservations)
        prevReservations.map(reservation => 
          reservation.id === id ? { ...reservation, isCompleted: true } : reservation
        )
      );
    } catch (error) {
      console.error("예약을 완료 처리하는 중 오류가 발생했습니다!", error);
    }
  };
  
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          오늘의{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            상담 대기
          </span>{" "}
          목록입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          바로 오늘, 상담을 기다리고 있는 손님 목록입니다. 전화를 걸어 상담을
          진행해주세요. 😇
        </p>
      </div>

      <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              고객 성함
            </th>
            <th scope="col" className="px-6 py-3">
              전화번호
            </th>
            <th scope="col" className="px-6 py-3">
              업무
            </th>
            <th scope="col" className="px-6 py-3">
              상담
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations?.length > 0 ? reservations.map(reservation => (
            <tr key={reservation.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Avatar />
                <div className="ps-3">
                  <div className="text-base font-semibold">{reservation.customerName}</div>
                </div>
              </th>
              <td className="px-6 py-4">{reservation.phoneNumber}</td>
              <td className="px-6 py-4">{reservation.workType}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {reservation.isCompleted ? (
                    <GradientButton
                      isDisabled={true}
                      label="완료됨"
                      width="w-32"
                    />
                  ) : (
                    <GradientButton
                      label="완료 처리하기"
                      width="w-32"
                      handleClickBtn={() => {handleComplete(reservation.id);}}
                    />
                  )}
                </div>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center">
                상담 대기 목록이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultingReview;





