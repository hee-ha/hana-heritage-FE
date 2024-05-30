import { React, useState } from "react";
import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

function DepositsDetail() {
	const [showModal, setShowModal] = useState(false);
	const [agreement, setAgreement] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");

	return (
		<div className="font-noto text-3xl">
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
					<p className="font-hana2">
						우리 가족 댕냥이의 두근두근 첫 재테크 !!!
					</p>

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

					<Link to="/deposits/join/1">
						<button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
							가입하기
						</button>
					</Link>
					<button
						onClick={() => setShowModal(true)}
						className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
					>
						상담예약
					</button>

					<ul role="list" className="divide-y divide-hanaSilver">
						<li className="justify-between gap-x-6 py-5">
							<p className="my-5 font-hana2 font-bold text-hanaGreen">
								01. 상품 특징
							</p>
							<p className="text-5xl mb-5 leading-snug">
								펫코노미 시대(반려인 1,500만명) 반려동물을 위한 목돈마련
								저축상품
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
							<p className="text-5xl mb-5 leading-snug">
								적립식예금(정액적립식)
							</p>
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
							<p className="my-5 font-hana2 font-bold text-hanaGreen">
								07. 금리
							</p>
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

			{/* 상담 예약 폼 */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-14 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-auto">
						<p className="font-hana2 font-semibold text-5xl pb-5 mb-5">
							상담 예약을 위해 작성해주세요.
						</p>
						<hr />

						<div className="my-10 text-3xl space-y-10">
							<div>
								<label className="font-hana2 font-bold text-hanaGreen">
									업무선택
								</label>
								<select
									id="country"
									name="country"
									autocomplete="country-name"
									className="w-full p-2 border rounded mt-2 text-5xl"
								>
									<option>예적금</option>
									<option>대출</option>
									<option>외환</option>
									<option>펀드, 보험, 연금, 일임형 ISA</option>
									<option>폰, 모바일, 인터넷뱅킹</option>
									<option>기업뱅킹</option>
									<option>퇴직연금</option>
								</select>
							</div>
							<div>
								<label className="font-hana2 font-bold text-hanaGreen">
									성명
								</label>
								<input
									type="text"
									value="황혜림"
									className="w-full p-2 border rounded mt-2 text-5xl text-gray-600"
									disabled
								/>
							</div>
							<div>
								<label className="font-hana2 font-bold text-hanaGreen">
									연락처
								</label>
								<input
									type="text"
									placeholder="010-1234-5678"
									className="w-full p-2 border rounded mt-2 text-5xl"
								/>
							</div>
							<div>
								<label className="font-hana2 font-bold text-hanaGreen">
									상담예약일시
								</label>
								<input
									type="text"
									placeholder="상담예약일시"
									className="w-full p-2 border rounded mt-2 text-5xl"
								/>
							</div>
						</div>

						<Accordion>
							<Accordion.Panel isOpen={true}>
								<Accordion.Title>개인정보 수집 및 이용 동의</Accordion.Title>
								<Accordion.Content>
									<p className="leading-snug mb-5">
										고객님의 상담업무를 처리하기 위해서는 개인정보보호법 제15조
										1항 및 제24조 1항에 따라 아래의 내용에 대하여 고객님의
										동의가 필요합니다 .<br />
									</p>
									<p className="leading-snug mb-5">
										<strong>1. 개인정보의 수집,이용목적</strong>
										<br />
										상담업무 처리를 위한 본인식별, 본인의사확인 및 상담결과 통보
									</p>

									<p className="leading-snug mb-5">
										<strong>2.수집하는 개인정보의 항목</strong>
										<br />
										성명, 전화번호
									</p>

									<p className="leading-snug mb-5">
										<strong>3. 개인정보의 보유 및 이용 기간</strong>
										<br />위 개인정보는 수집·이용에 관한 동의일로부터 처리
										종료일까지 위 이용목적을 위하여 보유·이용됩니다. 단,
										(금융)거래 종료일 후에는 금융사고 조사, 분쟁해결, 민원처리,
										볍령상 의무이행 및 당행의 리스크 관리업무만을 위하여 보유
										이용됩니다.
									</p>

									<p className="leading-snug mb-5">
										<strong>
											4. 고객님은 개인정보 수집 및 이용을 거부할 권리가 있으며
											권리행사 시 상담이 거부될 수 있습니다.
										</strong>
										<br />
									</p>

									<p className="leading-snug mb-5">
										<strong>제공 항목</strong>
										<br />
										일반개인정보 : 성명, 생년월일
									</p>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>

						<div className="bg-hanaRed/10 border border-hanaRed rounded-lg my-10 p-10">
							<p className="mb-3 font-hana2 font-bold text-hanaRed">
								개인정보 수집 및 이용 동의여부
							</p>
							<p className="leading-snug mt-10 mb-5">
								개인정보 수집 및 이용에 동의하셔야 상담이 가능합니다. 개인정보
								수집 및 이용에 동의하십니까?
							</p>
							<ul className="grid w-full gap-6 md:grid-cols-2">
								<li>
									<input
										type="radio"
										id="hosting-small3"
										name="hosting3"
										value="hosting-small3"
										className="hidden peer"
										required
									/>
									<label
										for="hosting-small3"
										className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white rounded-lg cursor-pointer  peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100 "
									>
										<div className="block">
											<div className="w-full">동의합니다.</div>
										</div>
										<svg
											className="h-8 w-8 rtl:rotate-180"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</label>
								</li>
								<li>
									<input
										type="radio"
										id="hosting-big3"
										name="hosting3"
										value="hosting-big3"
										className="hidden peer"
									/>
									<label
										for="hosting-big3"
										className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white rounded-lg cursor-pointer  peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100 "
									>
										<div className="block">
											<div className="w-full">동의하지 않습니다.</div>
										</div>
										<svg
											className="h-8 w-8 rtl:rotate-180"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</label>
								</li>
							</ul>
						</div>

						<div className="space-x-5 mt-4 flex justify-end">
							<button
								onClick={() => {
									setShowModal(false);
								}}
								className="p-5 bg-hanaGreen text-white rounded"
							>
								신청하기
							</button>
							<button
								onClick={() => {
									setShowModal(false);
								}}
								className="p-5 bg-gray-500 text-white rounded hover:bg-gray-600"
							>
								취소하기
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default DepositsDetail;
