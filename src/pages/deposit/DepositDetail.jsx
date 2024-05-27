import React, { useState } from "react";

function DepositDetail() {
	const [formData, setFormData] = useState({
		fromAccount: "",
		toAccount: "",
		amount: "",
		startDate: "",
		endDate: "",
		memoToRecipient: "",
		memoToSelf: "",
		memo: "",
	});

	const accounts = [
		{
			id: 1,
			name: "Young 하나통장",
			number: "하나 111-111111-111111",
			balance: "1원",
		},
		{
			id: 2,
			name: "Savings Account",
			number: "국민 222-222222-222222",
			balance: "500,000원",
		},
		{
			id: 3,
			name: "Business Account",
			number: "신한 333-333333-333333",
			balance: "1,000,000원",
		},
	];

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const today = new Date();
	return (
		<div className="px-24">
			<header>
				<h2 className="font-hana2 font-semibold text-6xl py-10">
					선택하신 <span className="text-blue-500">적금</span> 상품 상세 소개입니다.
				</h2>
				<hr />
			</header>
			<div className="py-10">
				<label className="font-hana2 font-semibold text-5xl">
					어디서 보낼까요?
				</label>
				<div className="form-group mt-6 mb-6">
					<div className="font-hana2 text-3xl">
						<h4 className="mb-6">
							<img
								className="finImg"
								src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_HANA_Profile.png"
							/>
							{accounts[0].name}
						</h4>
					</div>
					<select
						id="fromAccount"
						name="fromAccount"
						value={formData.fromAccount}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 text-3xl rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
					>
						{accounts.map((account) => (
							<option key={account.id} value={account.id}>
								{account.number}
							</option>
						))}
					</select>
					<div className="balance font-hana2 mt-4">
						<span className="text-3xl mr-4">통장 잔액 </span>
						<span className="text-3xl"> 1,000,000원</span>
					</div>
				</div>

				<div className="form-group mb-6">
					<label className="font-hana2 font-semibold text-5xl block mb-2">
						누구에게 보낼까요?
					</label>
					<input
						type="text"
						name="toAccount"
						value={formData.toAccount}
						onChange={handleChange}
						placeholder="은행/계좌번호 입력"
						className="w-full font-noto text-3xl p-2 border border-gray-300 rounded-md mb-4"
					/>
					<div className="flex justify-between mb-4">
						<button className="font-hana2 flex-1 text-3xl text-black bg-white p-2 rounded-md border border-gray-300 mx-1">
							<img
								className="finImg"
								src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_HANA_Profile.png"
							/>
							하나
						</button>
						<button className="font-hana2 flex-1 text-3xl text-black bg-white p-2 rounded-md border border-gray-300 mx-1">
							<img
								className="finImg"
								src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_KB_Profile.png"
							/>
							국민
						</button>
						<button className="font-hana2 flex-1 text-3xl text-black bg-white p-2 rounded-md border border-gray-300 mx-1">
							<img
								className="finImg"
								src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_NH_Profile.png"
							/>
							농협
						</button>
						<button className="font-hana2 flex-1 text-black text-3xl bg-white p-2 rounded-md border border-gray-300 mx-1">
							<img
								className="finImg"
								src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_SHINHAN_Profile.png"
							/>
							신한
						</button>
					</div>
					<button className="transferbtn bg-hanaGreen w-full font-hana2 text-3xl text-white text-500">
						은행 더보기 ▼
					</button>
				</div>

				<div className="form-group mb-6">
					<label className="font-hana2 font-semibold text-5xl block mb-2">
						얼마를 보낼까요?
					</label>
					<input
						type="text"
						name="amount"
						value={formData.amount}
						onChange={handleChange}
						placeholder="1,000,000"
						className="w-full font-noto text-3xl p-2 border border-gray-300 rounded-md mb-4"
					/>
					<div className="flex text-3xl justify-between mb-4">
						<button className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1">
							+1만
						</button>
						<button className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1">
							+5만
						</button>
						<button className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1">
							+10만
						</button>
						<button className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1">
							+10만
						</button>
						<button className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1">
							+100만
						</button>
					</div>
				</div>

				<div className="form-group">
					<label className="font-hana2 font-semibold text-5xl block mb-2">
						언제부터 언제까지 보낼까요?
					</label>
					<div className="p-5">
						<div className="font-noto text-3xl flex items-center mb-8">
							<div className="p-2 bg-hanaGreen rounded-md text-white">
								<span className="font-hana2 font-semibold  mx-2">
									자동이체 시작일
								</span>
							</div>
							<input
								type="date"
								name="startDate"
								value={formData.startDate}
								onChange={handleChange}
								className="flex-1 border border-gray-300 rounded-md ml-10"
							/>
						</div>
						<div className="font-noto text-3xl flex items-center">
							<div className="p-2 bg-hanaGreen rounded-md text-white">
								<span className="font-hana2 font-semibold mx-2">
									자동이체 종료일
								</span>
							</div>
							<input
								type="date"
								name="endDate"
								value={formData.endDate}
								onChange={handleChange}
								className="flex-1 border border-gray-300 rounded-md ml-10"
							/>
						</div>
					</div>
				</div>

				<div className="form-group memo mb-6">
					<label className="font-hana2 font-semibold text-5xl block mb-2">
						통장에 표기할 내용 입력하기
					</label>
					<input
						type="text"
						name="memoToRecipient"
						value={formData.memoToRecipient}
						onChange={handleChange}
						placeholder="받는 분에게 표기"
						className="w-full p-2 border border-gray-300 rounded-md mb-4"
					/>
					<input
						type="text"
						name="memoToSelf"
						value={formData.memoToSelf}
						onChange={handleChange}
						placeholder="나에게 표기"
						className="w-full p-2 border border-gray-300 rounded-md mb-4"
					/>
					<input
						type="text"
						name="memo"
						value={formData.memo}
						onChange={handleChange}
						placeholder="메모"
						className="w-full p-2 border border-gray-300 rounded-md"
					/>
				</div>

				<button
					type="submit"
					className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
				>
					다음
				</button>
			</div>
		</div>
	);
}

export default DepositDetail;
