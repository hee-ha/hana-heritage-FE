import React, { useEffect, useState } from "react";
import { InheritanceReviewCard } from "./InheritanceReviewCard";
import InheritanceModal from "../../components/common/Modal/InheritanceModal";
import { livingTrustContract } from "../../apis/admin/livingTrustContract";
import { approveLivingTrustContract } from "../../apis/admin/approveLivingTrustContract"; // 승인 처리 API import

const InheritanceReview = () => {
  const [showModal, setShowModal] = useState(false);
  const [contracts, setContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);

  const fetchContracts = async () => {
    try {
      const response = await livingTrustContract();
      setContracts(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const handleShowModal = (contract) => {
    setSelectedContract(contract);
    setShowModal(true);
  };

  const handleApprove = async (id) => {
    try {
      await approveLivingTrustContract(id);
      // 승인 후, 상태 업데이트
      setContracts((prevContracts) =>
        prevContracts.map((contract) =>
          contract.id === id ? { ...contract, isApproved: true } : contract
        )
      );
    } catch (error) {
      console.error("Failed to approve contract:", error);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          검토 대기중인{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            상속 계약
          </span>{" "}
          요청 목록 입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          온라인으로 신청된 상속 계약 목록입니다. 서류를 검토 후 승인 처리를
          진행해주세요. 🔥
        </p>
      </div>
      <div className="w-full">
        <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-3">
          {contracts.length > 0 ? (
            contracts.map((contract) => (
              <InheritanceReviewCard
                key={contract.id}
                contract={contract}
                setShowModal={() => handleShowModal(contract)}
                handleApprove={() => handleApprove(contract.id)} // 승인 처리 함수 전달
              />
            ))
          ) : (
            <p className="text-center col-span-3">검토 대기중인 계약이 없습니다.</p>
          )}
        </div>
      </div>

      {showModal && (
        <InheritanceModal setShowModal={setShowModal} contract={selectedContract} />
      )}
    </div>
  );
};

export default InheritanceReview;
