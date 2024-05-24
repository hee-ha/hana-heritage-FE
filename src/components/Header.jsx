import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-white shadow">
			<div className="flex container mx-auto justify-between items-center sm:px-6 py-6 lg:px-8">
				<div className="flex items-center">
					<Link to="/">
						<img
							src="/png/Hana_Bank.png"
							alt="하나은행 로고"
							className="h-12 mr-2"
						/>
					</Link>
					<Nav />
				</div>
				<Link
					to="/login"
					className="text-white bg-hanaRed  font-hana2 font-medium rounded-md px-3 py-2 text-3xl"
					aria-current="page"
				>
					로그인
				</Link>
			</div>
		</header>
	);
};

export default Header;
