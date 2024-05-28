import React from "react";
import { Link } from "react-router-dom";

function DepositsDetail() {
	return (
		<div className="px-24 font-noto text-3xl">
			<header>
				<h2 className="font-hana2 font-semibold text-6xl py-10">
					선택하신 <span className="text-hanaGreen">펫사랑 적금</span>{" "}
					안내드립니다.
				</h2>
				<hr />
			</header>
			<div className="py-10">
				<p className="font-hana2 font-semibold text-5xl pb-5">펫사랑 적금</p>
				<p className="font-hana2">우리 가족 댕냥이의 두근두근 첫 재테크 !!!</p>

				<div className="grid grid-cols-2 gap-5 my-10">
					<div className="bg-hanaGold rounded-lg p-10 text-white">
						<p className="mb-5 font-hana2">특징</p>
						<p className="text-5xl font-bold mb-5">보험서비스 무료가입</p>
						<p className="text-5xl font-bold">사랑의 서약서</p>
					</div>

					<div className="bg-hanaGold rounded-lg p-10 text-white">
						<p className="mb-5 font-hana2"> 최고 가입한도</p>
						<p className="text-5xl font-bold mb-5">월 50만원</p>
					</div>

					<div className="bg-hanaGold rounded-lg p-10 text-white">
						<p className="mb-5 font-hana2">최고 가입한도</p>
						<p className="text-5xl font-bold mb-5">보험서비스 무료가입</p>
					</div>

					<div className="bg-hanaGold rounded-lg p-10 text-white">
						<p className="mb-5 font-hana2">금리 (2023.11.13 기준, 세전)</p>
						<p className="text-5xl font-bold mb-5">기본 2.30%</p>
						<p className="text-5xl font-bold mb-5">최고 2.80%</p>
					</div>
				</div>

				<Link to="/deposit/sign/1">
					<button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
						가입하기
					</button>
				</Link>
				<button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
					상담예약
				</button>

				<ul role="list" class="divide-y divide-hanaSilver">
					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">
							01. 상품 특징
						</p>
						<p className="text-5xl mb-5 leading-snug">
							펫코노미 시대(반려인 1,500만명) 반려동물을 위한 목돈마련 저축상품
						</p>
					</li>

					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">
							02. 가입대상
						</p>
						<p className="text-5xl mb-5 leading-snug">
							실명의 개인 또는 개인사업자 (1인 1계좌)
						</p>
					</li>

					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">
							03. 예금종류
						</p>
						<p className="text-5xl mb-5 leading-snug">적립식예금(정액적립식)</p>
					</li>

					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">
							04. 가입기간
						</p>
						<p className="text-5xl mb-5 leading-snug">1년</p>
					</li>

					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">
							05. 가입금액
						</p>
						<p className="text-5xl mb-5 leading-snug text-hanaRed">
							월 10만원 ~ 50만원 (원단위)
						</p>
					</li>
					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">
							06. 이자지급방법
						</p>
						<p className="text-5xl mb-5 leading-snug">
							만기일시지급식 : 만기(후)해지시 이자를 지급
						</p>
					</li>
					<li className="justify-between gap-x-6 py-5">
						<p className="my-5 font-hana2 font-bold text-hanaGreen">07. 금리</p>
						<p className="text-5xl mb-5 leading-snug">2.3%</p>
					</li>
				</ul>

				<Link to="/deposits/join/1">
					<button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
						가입하기
					</button>
				</Link>
				<Link to="/deposits">
					<button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
						목록보기
					</button>
				</Link>
			</div>
		</div>
	);
}

export default DepositsDetail;