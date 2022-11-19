import React from "react";
import NotificationCss from "./notification.module.scss";
import RedirectNav from "../../RedirectNav/RedirectNav";
import { Link } from "react-router-dom";

const Notification = () => {
	const cardDetails = [
		{
			title: "Stay Up-to-date",
			description: "Frequently send me App updates and new feature release.",
		},
		{
			title: "Sign up to newsletter",
			description: "Stay engaged with App news, updates and organization events around you.",
		},
		{
			title: "Get periodic summary",
			description:
				"Allow us to send you a weekly/monthly summary of all your activities including transcriptions and sentiment analysis conducted.",
		},
		{
			title: "Distribute report",
			description:
				"Automatically send reports and summaries to officers within your organization via their organization’s email address.",
		},
	];

	return (
		<div>
			<div className={NotificationCss.container}>
				<RedirectNav />
				<div className={NotificationCss.wrapper}>
					<h2>Notification</h2>
					<div className={NotificationCss.card}>
						<p>Your primary notification email is set to:</p>
						<h3>johndoe.admin@businessemail...</h3>
						<Link to="">Change email</Link>
					</div>
					<div className={NotificationCss.options}>
						<h3>Custom settings</h3>
						<div className={NotificationCss.option}>
							{cardDetails.map((card, index) => (
								<div key={index} className={NotificationCss.optionCard}>
									<div className={NotificationCss.header}>
										<h3>{card.title}</h3>
										<div className={NotificationCss.toggleBtn}>
											<label htmlFor={index} className={NotificationCss.toggle}>
												<input id={index} type="checkbox" className={NotificationCss.toggleSwitch} />
												<span className={NotificationCss.slider}></span>
											</label>
										</div>
									</div>
									<p>{card.description}</p>
								</div>
							))}
						</div>
					</div>

					<Link to="">Save changes</Link>
				</div>
			</div>
		</div>
	);
};

export default Notification;
