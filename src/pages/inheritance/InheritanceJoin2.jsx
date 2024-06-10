import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import OcrAuthenticationModal from "./OcrAuthentication";
import { getMyAccount } from "../../apis/account/getMyAccount";
import { Pie } from "react-chartjs-2";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import PicComponent from "../../components/common/FaceId/PicComponent";


function InheritanceJoin2() {
  const [settlor, setSettlor] = useState("");
  const [trustee, setTrustee] = useState("");
  const [trustContractStartDate, setTrustContractStartDate] = useState(dayjs());
  const [trustContractEndDate, setTrustContractEndDate] = useState(dayjs());
  const [isPicModalOpen, setIsPicModalOpen] = useState(false);

  const [realEstate, setRealEstate] = useState({
    title: "",
    material: "",
    value: "",
  });
  const [bond, setBond] = useState({ title: "", material: "", value: "" });
  const [securities, setSecurities] = useState({
    title: "",
    material: "",
    value: "",
  });

  const [postBeneficiary, setPostBeneficiary] = useState([
    {
      name: "",
      birth: "",
      contact: "",
      address: "",
      relation: "",
      ratio: "",
    },
  ]);

  const [deathNotifier, setDeathNotifier] = useState([
    {
      name: "",
      birth: "",
      contact: "",
      address: "",
      relation: "",
    },
  ]);

  const [contractDetails, setContractDetails] = useState({
    trustContractStartDate: trustContractStartDate,
    trustContractEndDate: trustContractEndDate,
    settlor: settlor,
    trustee: trustee,
    realEstate: realEstate,
    bond: bond,
    securities: securities,
    postBeneficiaries: postBeneficiary,
    deathNotifiers: deathNotifier,
    specialNotes: "",
  });

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [ocrData1, setOcrData1] = useState(null);
  const [ocrData2, setOcrData2] = useState(null);
  const [ocrData3, setOcrData3] = useState(null);

  const handleOpenModal1 = () => setShowModal1(true);
  const handleOpenModal2 = () => setShowModal2(true);
  const handleOpenModal3 = () => setShowModal3(true);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleCloseModal3 = () => setShowModal3(false);

  const handleSaveModal1 = (data) => {
    setOcrData1(data);
    setShowModal1(false);
  };
  const handleSaveModal2 = (data) => {
    setOcrData2(data);
    setShowModal2(false);
  };
  const handleSaveModal3 = (data) => {
    setOcrData3(data);
    setShowModal3(false);
  };

  useEffect(() => {
    if (ocrData1) {
      setRealEstate({
        title: ocrData1.title.name,
        address: ocrData1.fields[1]?.inferText || "",
        value: ocrData1.fields[0]?.inferText || "",
      });
    }
  }, [ocrData1]);

  useEffect(() => {
    if (ocrData2) {
      setBond({
        title: ocrData2.title.name,
        value: ocrData2.fields[0]?.inferText || "",
      });
    }
  }, [ocrData2]);

  useEffect(() => {
    if (ocrData3) {
      setSecurities({
        title: ocrData3.title.name,
        value: ocrData3.fields[0]?.inferText || "",
      });
    }
  }, [ocrData3]);

  const handleBeneficiaryChange = (index, e) => {
    const { name, value } = e.target;
    const update = [...postBeneficiary];
    update[index] = { ...update[index], [name]: value };
    setPostBeneficiary(update);
  };

  const handleBeneficiaryAdd = () => {
    let update = [...postBeneficiary];
    update.push({
      name: "",
      birth: "",
      contact: "",
      address: "",
      relation: "",
      ratio: "",
    });
    setPostBeneficiary(update);
  };

  const handleBeneficiaryDelete = () => {
    let update = [...postBeneficiary];
    if (update.length !== 1) {
      update.pop();
    }
    setPostBeneficiary(update);
  };

  const handleDeathNotiChange = (index, e) => {
    const { name, value } = e.target;
    const update = [...deathNotifier];
    update[index] = { ...update[index], [name]: value };
    setDeathNotifier(update);
  };

  const handleDeathNotiAdd = () => {
    let update = [...deathNotifier];
    update.push({
      name: "",
      birth: "",
      contact: "",
      address: "",
      relation: "",
    });
    setDeathNotifier(update);
  };

  const handleDeathNotiDelete = () => {
    let update = [...deathNotifier];
    if (update.length !== 1) {
      update.pop();
    }
    setDeathNotifier(update);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      [section]: {
        ...prevDetails[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contractDetails);
  };

  const formatCurrency = (number) => {
    let str = number.toString();
    let formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatted;
  };

  const calculateTotalBalance = (accounts) => {
    let totalBalance = 0;
    for (var key in accounts) {
      totalBalance += accounts[key].balance;
    }
    return formatCurrency(totalBalance);
  };

  const [totalBalance, setTotalBalance] = useState(0);

  const doAccounts = async () => {
    try {
      const response = await getMyAccount();
      setTotalBalance(calculateTotalBalance(response.result));
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doAccounts();
  }, []);

  const formatToInteger = (numberString) => {
    numberString = numberString ? numberString : "0";
    // 쉼표를 제거하고 정수로 변환
    const formattedNumber = parseInt(numberString?.replace(/,/g, ""), 10);
    return formattedNumber;
  };

  console.log(formatToInteger(totalBalance));
  console.log(totalBalance);
  console.log(realEstate.value);
  console.log(bond.value);
  console.log(securities.value);
  const chartData = {
    labels: ["금전신탁", "부동산", "채권", "유가증권"],
    datasets: [
      {
        data: [
          formatToInteger(totalBalance),
          formatToInteger(realEstate.value),
          formatToInteger(bond.value),
          formatToInteger(securities.value),
        ],
        // data: [1000000, 1000000, 1400000, 4000000],
        backgroundColor: ["#FF8A80", "#7986CB", "#4DB6AC", "#FFF176"],
      },
    ],
  };

  return (
    <div className="mx-auto px-24 font-noto text-3xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          <span className="text-hanaGreen">신탁계약 세부내역</span>을
          작성합니다.
        </h2>
        <hr />
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-6 mb-6">
          <label className="font-hana2 font-semibold text-5xl">신탁기간</label>
          <div className="flex space-x-4 mt-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={trustContractStartDate}
                onChange={(newValue) => setTrustContractStartDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      style: {
                        height: "3.5rem",
                        fontFamily: "hana2, sans-serif",
                        fontSize: "2.25rem",
                        fontWeight: "bold",
                      },
                    }}
                    className="w-40 p-2 border rounded"
                    placeholder="신탁기간 시작"
                  />
                )}
              />
              <span className="text-4xl">부터</span>
              <DatePicker
                value={trustContractEndDate}
                onChange={(newValue) => setTrustContractEndDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      style: {
                        height: "3.5rem",
                        fontFamily: "hana2, sans-serif",
                        fontSize: "2.25rem",
                        fontWeight: "bold",
                      },
                    }}
                    className="w-40 p-2 border rounded"
                    placeholder="신탁기간 끝"
                  />
                )}
              />
            </LocalizationProvider>
            <span className="text-4xl">까지</span>
          </div>
        </div>

        <div className="form-group mt-6 mb-6">
          {postBeneficiary.map((beneficiary, index) => (
            <div key={index} className="mb-4">
              <legend className="font-hana2 font-semibold text-5xl mb-5">
                사후수익자 {index + 1}
              </legend>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="성명"
                  value={beneficiary.name}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="date"
                  name="birth"
                  placeholder="생년월일"
                  value={beneficiary.birth}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="연락처"
                  value={beneficiary.contact}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="주소"
                  value={beneficiary.address}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="relation"
                  placeholder="위탁자와의 관계"
                  value={beneficiary.relation}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="ratio"
                  placeholder="상속비율"
                  value={beneficiary.ratio}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleBeneficiaryAdd}
            className="font-hana2 w-full mt-4 p-2 bg-hanaGreen text-white rounded"
          >
            항목 추가
          </button>
          <button
            type="button"
            onClick={handleBeneficiaryDelete}
            className="font-hana2 w-full mt-4 p-2 bg-hanaRed text-white rounded"
          >
            항목 삭제
          </button>
        </div>

        <div className="form-group mt-6 mb-6">
          {deathNotifier.map((notifier, index) => (
            <div key={index} className="mb-4">
              <legend className="font-hana2 font-semibold text-5xl mb-5">
                사망통지인 {index + 1}
              </legend>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="성명"
                  value={notifier.name}
                  onChange={(e) => handleDeathNotiChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="birth"
                  placeholder="생년월일"
                  value={notifier.birth}
                  onChange={(e) => handleDeathNotiChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="연락처"
                  value={notifier.contact}
                  onChange={(e) => handleDeathNotiChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="주소"
                  value={notifier.address}
                  onChange={(e) => handleDeathNotiChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="relation"
                  placeholder="위탁자와 관계"
                  value={notifier.value}
                  onChange={(e) => handleDeathNotiChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleDeathNotiAdd}
            className="font-hana2 w-full mt-4 p-2 bg-hanaGreen text-white rounded"
          >
            항목 추가
          </button>
          <button
            type="button"
            onClick={handleDeathNotiDelete}
            className="font-hana2 w-full mt-4 p-2 bg-hanaRed text-white rounded"
          >
            항목 삭제
          </button>
        </div>

        <div className="form-group mt-6 mb-6">
          <legend className="font-hana2 font-semibold text-5xl mb-5">
            금전신탁
          </legend>
          <input
            type="text"
            name="amount"
            value={totalBalance}
            onChange={handleChanges}
            className="w-full mt-2 p-2 border rounded"
          />
          <div className="mt-4"></div>

          <legend className="font-hana2 font-semibold text-5xl mb-5">
            부동산
          </legend>
          <div className="mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="type"
                placeholder="이름"
                value={"부동산"}
                onChange={(e) =>
                  setRealEstate({ ...realEstate, material: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="type"
                placeholder="재산종류"
                value={realEstate.title}
                onChange={(e) =>
                  setRealEstate({ ...realEstate, material: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="material"
                placeholder="소재지"
                value={realEstate.address}
                onChange={(e) =>
                  setRealEstate({ ...realEstate, material: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="hidden"
                name="quantity"
                placeholder="수량"
                value={1}
                onChange={(e) =>
                  setRealEstate({ ...realEstate, quantity: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="value"
                placeholder="부동산가액"
                value={realEstate.value ? `${realEstate.value} 원` : ""}
                onChange={(e) =>
                  setRealEstate({ ...realEstate, value: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={handleOpenModal1}
              className="mt-2 p-2 bg-hanaGreen text-white rounded"
            >
              OCR 데이터로 설정
            </button>
          </div>

          <legend className="font-hana2 font-semibold text-5xl mb-5">
            채권
          </legend>
          <div className="mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="type"
                placeholder="이름"
                value={"채권"}
                onChange={(e) => setBond({ ...bond, material: e.target.value })}
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="type"
                placeholder="재산종류"
                value={bond.title}
                onChange={(e) => setBond({ ...bond, material: e.target.value })}
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="material"
                placeholder="소재지"
                value={realEstate.address}
                onChange={(e) => setBond({ ...bond, material: e.target.value })}
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="hidden"
                name="quantity"
                placeholder="수량"
                value={1}
                onChange={(e) => setBond({ ...bond, quantity: e.target.value })}
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="value"
                placeholder="채권가액"
                value={bond.value ? `${bond.value} 원` : ""}
                onChange={(e) => setBond({ ...bond, value: e.target.value })}
                className="w-full mt-2 p-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={handleOpenModal2}
              className="mt-2 p-2 bg-hanaGreen text-white rounded"
            >
              OCR 데이터로 설정
            </button>
          </div>

          <legend className="font-hana2 font-semibold text-5xl mb-5">
            유가증권
          </legend>
          <div className="mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="type"
                placeholder="이름"
                value={"유가증권"}
                onChange={(e) =>
                  setSecurities({ ...securities, type: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="name"
                placeholder="재산종류"
                value={securities.title}
                onChange={(e) =>
                  setSecurities({ ...securities, material: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="소재지"
                value={realEstate.address}
                onChange={(e) =>
                  setSecurities({ ...securities, material: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="hidden"
                name="quantity"
                placeholder="수량"
                value={1}
                onChange={(e) =>
                  setSecurities({ ...securities, quantity: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
              <input
                type="text"
                name="amount"
                placeholder="신탁가액"
                value={securities.value ? `${securities.value} 원` : ""}
                onChange={(e) =>
                  setSecurities({ ...securities, value: e.target.value })
                }
                className="w-full mt-2 p-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={handleOpenModal3}
              className="mt-2 p-2 bg-hanaGreen text-white rounded"
            >
              OCR 데이터로 설정
            </button>
          </div>
          <div className="flex items-center w-1/2 h-1/2">
            <Pie data={chartData} />
          </div>
        </div>

        <OcrAuthenticationModal
          show={showModal1}
          handleClose={handleCloseModal1}
          handleSave={handleSaveModal1}
        />
        <OcrAuthenticationModal
          show={showModal2}
          handleClose={handleCloseModal2}
          handleSave={handleSaveModal2}
        />
        <OcrAuthenticationModal
          show={showModal3}
          handleClose={handleCloseModal3}
          handleSave={handleSaveModal3}
        />

        <div className="form-group mt-6 mb-6">
          <legend className="font-hana2 font-semibold text-5xl mb-5">
            특약사항
          </legend>
          <textarea
            type="text"
            name="amount"
            rows={10}
            value={contractDetails.specialNotes}
            onChange={handleChanges}
            className="w-full mt-2 p-2 border rounded"
          />
          <div className="mt-4"></div>
        </div>

        <div className="form-group mt-6 mb-6">
          <legend className="font-hana2 font-semibold text-5xl mb-5">
            위탁자 정보
          </legend>
          <input
            type="text"
            name="address"
            placeholder="주소"
            value={contractDetails.representative?.address || ""}
            onChange={(e) => handleNestedChange(e, "representative")}
            className="w-full mt-2 p-2 border rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="연락처"
            value={contractDetails.representative?.contact || ""}
            onChange={(e) => handleNestedChange(e, "representative")}
            className="w-full mt-2 p-2 border rounded"
          />
          <input
            type="date"
            name="birthDate"
            placeholder="생년월일"
            value={contractDetails.representative?.birthDate || ""}
            onChange={(e) => handleNestedChange(e, "representative")}
            className="w-full mt-2 p-2 border rounded"
          />
          <input
            type="text"
            name="name"
            placeholder="성명"
            value={contractDetails.representative?.name || ""}
            onChange={(e) => handleNestedChange(e, "representative")}
            className="w-full mt-2 p-2 border rounded"
          />
          <div className="mt-4"></div>

          <legend className="font-hana2 font-semibold text-5xl mb-5">
            수탁자
          </legend>
          <input
            type="text"
            name="signature"
            placeholder="하나은행"
            value={contractDetails.trustee?.signature || ""}
            onChange={(e) => handleNestedChange(e, "trustee")}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className=" font-hana2 w-full p-4 bg-hanaGreen text-white rounded"
        >
          제출
        </button>
        {isPicModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <PicComponent closeModal={() => setIsPicModalOpen(false)} />
              </div>
            </div>
          )}
      </form>
    </div>
  );
}

export default InheritanceJoin2;
