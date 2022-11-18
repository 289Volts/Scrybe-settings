import React from "react";
import PersonalInfo from "./PersonalInformation.module.scss";
import { Link } from "react-router-dom";

const PersonalInformation = () => {
	// const formDetail = [
	// 	{
	// 		name: "firstName",
	// 		label: "First name",
	// 	},
	// 	{
	// 		name: "lastName",
	// 		label: "Last name",
	// 	},
	// 	{
	// 		name: "PhoneNumber",
	// 		label: "Phone number",
	// 	},
	// 	{
	// 		name: "email",
	// 		label: "Email address",
	// 	},
	// 	{
	// 		name: "EDIT",
	// 		img: "./assets/icons/pencil.svg",
	// 		link: "/personal-information/edit",
	// 	},
	// 	{
	// 		verified: false,
	// 		failure: "Unverified",
	// 		success: "Verified",
	// 	},
	// ];
	return (
		<div className="container">
			<div className={PersonalInfo.header}>
				<img src="" alt="" />
				<div className={PersonalInfo.changeImg}>
					<img src="./assets/icons/blue-pencil.png" alt="pencil icon to edit profile image" />
					<Link to="/">Change profile picture</Link>
				</div>
			</div>
nwsm
			{/* <div className={PersonalInfo.form}>
				<form
					action="
              "
				>
                    <div className={l}>
                        <label htmlFor="">First name</label>
                        <input type="text" />
                    </div>
				</form>
			</div> */}
		</div>
	);
};

export default PersonalInformation;
