import React from "react";
import { useNavigate } from "react-router-dom";

function DepositsList() {
  const navigate = useNavigate();
  
  const navigateToPurchase = () => {
    navigate("/deposits/detail");
  };
  
	// 배열 초기화
	const savingslist = [
		{
			id: 1,
			savingName: "펫적금",
			savingDetail: "우리 가족 댕냥이의 두근두근 첫 재테크 !!",
			period: "연(세전, 1년)",
			interest: "2.30%~2.80%",
		},
		{
			id: 2,
			savingName: "급여하나 월복리 적금",
			savingDetail: "급여 하나로 우대금리 OK! 월복리로 이자에 이자가 OK!",
			period: "연(세전, 1년)",
			interest: "3.55%~5.85%",
		},
		{
			id: 3,
			savingName: "(내맘) 적금",
			savingDetail:
				"저축금액, 만기일, 자동이체 구간까지 내맘대로 디자인하는 DIY 적금",
			period: "연(세전, 5년)",
			interest: "3.65%~4.15%",
		},
		{
			id: 4,
			savingName: "펫적금",
			savingDetail: "우리 가족 댕냥이의 두근두근 첫 재테크 !!",
			period: "연(세전, 1년)",
			interest: "2.30%~2.80%",
		},
		{
			id: 5,
			savingName: "급여하나 월복리 적금",
			savingDetail: "급여 하나로 우대금리 OK! 월복리로 이자에 이자가 OK!",
			period: "연(세전, 1년)",
			interest: "3.55%~5.85%",
		},
		{
			id: 6,
			savingName: "(내맘) 적금",
			savingDetail:
				"저축금액, 만기일, 자동이체 구간까지 내맘대로 디자인하는 DIY 적금",
			period: "연(세전, 5년)",
			interest: "3.65%~4.15%",
		},
	];

	return (
		<div className="px-24 mb-24">
			<div className="flex flex-col mt-20 font-hana2 font-semibold text-6xl">
				황혜림님이 가입 가능한
			</div>
			<div className="flex flex-row mt-5 font-hana2 font-semibold text-6xl">
				<span className="text-hanaGreen">예·적금 상품 목록</span> &nbsp; 입니다.
			</div>
			<input
				type="text"
				id="success"
				className="mt-12 border font-hana2 placeholder-Gray dark:placeholder-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 block w-1/2 p-3 dark:bg-gray-700 dark:border-green-500 shadow-md hover:shadow-lg duration-300 ease-in-out text-3xl"
				placeholder="검색"
			/>
			{/* <div style={{ textAlign: "left" }}> */}
			{/* <div class="rounded-lg bg-hanaGreen w-1/6 text-white text-center font-semibold text-3xl mt-5">
          <TiThumbsUp className="w-9 h-9 inline-block" />
          금리가 높아요!
        </div> */}
			<ol>
				{savingslist.map((saving) => (
					<li key={saving.id}>
						<hr className="mt-12 mb-12"></hr>
						<span className="text-center font-semibold font-hana2 text-5xl mb-5">
							{saving.savingName}
							<br />
						</span>
						<span
							style={{
								display: "inline-block",
								textAlign: "right",
								width: "100%",
							}}
							className="font-hana2 text-3xl"
						>
							{saving.period}
							<br />
						</span>
						<div className="flex justify-between w-full">
							<span className="font-hana2 text-3xl">{saving.savingDetail}</span>
							<span className="font-hana2 text-5xl font-bold text-hanaRed">
								{saving.interest}
							</span>
						</div>
						<span className="text-3xl font-hana2 flex items-center justify-end w-full">
							<button
								onClick={navigateToPurchase}
								type="submit"
								className="w-1/5 text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
							>
								가입하기
							</button>
						</span>
					</li>
				))}
			</ol>
		</div>
		// </div>
	);
}

export default DepositsList;
