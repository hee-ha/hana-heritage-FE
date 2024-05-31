import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AccountCreation2() {
	const [accountName, setAccountName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			accountName,
			password,
		};
		navigate("/account/creation/3", { state: { formData } });
	};

	return (
		<div className="px-24 font-noto text-3xl">
			<header className="my-10">
				<h2 className="font-hana2 font-semibold text-6xl py-10">
					<span className="text-hanaGreen">계좌 개설</span> 진행 중입니다.
				</h2>
				<hr />
			</header>

			{/* Stepper */}
			<ol className="my-10 flex items-center w-full p-4 space-x-4 text-sm font-medium text-center bg-white border border-hanaSilver rounded-lg shadow-sm sm:text-base  rtl:space-x-reverse">
				<li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
					<span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
						1
					</span>
					약관동의
					<svg
						className="w-7 h-7 ms-2 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 12 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m7 9 4-4-4-4M1 9l4-4-4-4"
						/>
					</svg>
				</li>
				<li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
					<span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
						2
					</span>
					정보입력
					<svg
						className="w-7 h-7 ms-2 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 12 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m7 9 4-4-4-4M1 9l4-4-4-4"
						/>
					</svg>
				</li>
				<li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
					<span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
						3
					</span>
					정보확인
					<svg
						className="w-7 h-7 ms-2 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 12 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m7 9 4-4-4-4M1 9l4-4-4-4"
						/>
					</svg>
				</li>
				<li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
					<span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
						4
					</span>
					개설완료
				</li>
			</ol>

			<form className="mb-10 rounded-lg">
				<div className="rounded-lg overflow-hidden">
					<div className="font-bold bg-hanaGold text-white p-5 text-5xl rounded-t-lg font-hana2">
						기본정보
					</div>
					<div className="my-8 border-b border-gray-300 font-hana2">
						<label>
							<span className="font-semibold">계좌 별명</span>을 설정해주세요.
						</label>
						<input
							type="text"
							value={accountName}
							onChange={(e) => setAccountName(e.target.value)}
							className="w-full p-5 border rounded mt-4 text-3xl font-sans"
							placeholder="예) 제주도 여행용 저축계좌"
						/>
					</div>
					<div className="my-8 border-b border-gray-300 text-3xl font-hana2">
						<label>
							<span className="font-semibold">계좌 비밀번호</span>를 입력하세요.
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-5 border rounded mt-4 text-3xl font-sans"
							placeholder="숫자 4자리"
						/>
					</div>
				</div>
			</form>

			<div className="flex justify-between">
				<div className="flex-grow">
					<button
						onClick={handleSubmit}
						className="w-full text-white font-hana2 font-semibold text-5xl border-4 border-hanaRed bg-hanaRed py-3 transform rounded-lg"
					>
						다음
					</button>
				</div>
				<Link to={"/deposits"} className="flex-grow ml-4">
					<button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3  transform  rounded-lg">
						취소
					</button>
				</Link>
			</div>
		</div>
	);
}

export default AccountCreation2;
