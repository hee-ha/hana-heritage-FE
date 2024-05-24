import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
			<div className="hidden sm:ml-6 sm:block">
				<div className="flex space-x-4">
					<Link
						to="/saving"
						className=" text-hanaBlack hover:text-white hover:bg-hanaGreen  font-hana2 font-medium rounded-md px-3 py-2 text-3xl"
						aria-current="page"
					>
						예금
					</Link>

					<Link
						to="/deposit"
						className=" text-hanaBlack hover:text-white hover:bg-hanaGreen  font-hana2 font-medium rounded-md px-3 py-2 text-3xl"
						aria-current="page"
					>
						적금
					</Link>

					<Link
						to="/simple-transaction"
						className=" text-hanaBlack hover:text-white hover:bg-hanaGreen  font-hana2 font-medium rounded-md px-3 py-2 text-3xl"
						aria-current="page"
					>
						간단거래
					</Link>
					<Link
						to="/inheritance"
						className=" text-hanaBlack hover:text-white hover:bg-hanaGreen  font-hana2 font-medium rounded-md px-3 py-2 text-3xl"
						aria-current="page"
					>
						상속
					</Link>
					<Link
						to="/retirement-management"
						className=" text-hanaBlack hover:text-white hover:bg-hanaGreen  font-hana2 font-medium rounded-md px-3 py-2 text-3xl"
						aria-current="page"
					>
						노후관리
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
