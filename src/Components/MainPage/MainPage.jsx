import React from "react";
import MainPageCss from "./mainpage.module.scss";
import PersonalInformation from "../SubPages/PersonalInformation/PersonalInformation";
import { Link } from "react-router-dom";

const MainPage = () => {
	const cardDetails = [
		{
			path: "/personal-information",
			title: "Personal information",
			description: "Change/verify your email address, and set your profile picture",
			img: "/assets/icons/chevron-right.svg",
		},
		{
			path: "/AccountSecurity",
			title: "Account security",
			description: "Change your password and manage your connected Apps",
			img: "/assets/icons/chevron-right.svg",
		},
		{
			path: "/Notification",
			title: "Notification",
			description: "Updates, Newsletter, period based summary report, change notification email, repory carbon copy.",
			img: "/assets/icons/chevron-right.svg",
		},
	];

	const [page, setPage] = React.useState(false)
	const togglePage = (page) => {
		if (page === "/personal-information") {
setPage(prevState => !prevState)
		}
	}
	return (
		<div className={`container ${MainPageCss.container} `}>
			<div className={MainPageCss.wrapper}>
				<div className={MainPageCss.header}>
					<h1>Settings</h1>
				</div>
				<div className={MainPageCss.profileCard}>
					<div className="l-side">
						<img src="../assets/images/pic.png" alt="" className="" />
					</div>
					<div className={MainPageCss.textContent}>
						<h2>John Doe</h2>
						<p className={MainPageCss.title}>Administrator</p>
						<p className={MainPageCss.email}>johndoe.admin@businessemail.com</p>
					</div>
				</div>
				<section className={MainPageCss.options}>
					{cardDetails.map((card, index) => (
						<div className={MainPageCss.card} key={index}>
							<div className={MainPageCss.header}>
								<Link onClick={()=>togglePage(card.path)} to="">{card.title}</Link>
								<img src={card.img} alt="" />
							</div>
							<p>{card.description}</p>
						</div>
					))}
				</section>
				<div className={MainPageCss.error}>
					<Link to="login" className={MainPageCss.errorBtn}>
						Delete Account
					</Link>
				</div>
			</div>
			<div className={MainPageCss.external}>{page && <PersonalInformation />}</div>
		</div>
	);
};

export default MainPage;
