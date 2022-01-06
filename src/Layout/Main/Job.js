import React, { useContext } from "react";
import styles from "./Job.module.css";
import images from "./images/images";
import filterContext from "../../context/filter-context";

const Job = props => {
	const context = useContext(filterContext);

	const filterHandler = event =>
		context.addFilterItem(event.target.textContent);

	const languages = props.data.languages.map(lang => (
		<span key={Math.random()} onClick={filterHandler}>
			{lang}
		</span>
	));

	const tools = props.data.tools.map(tool => (
		<span key={Math.random()} onClick={filterHandler}>
			{tool}
		</span>
	));

	return (
		<div
			className={`${styles.job} ${props.data.featured ? styles.featured : ""}`}
		>
			<img src={images[props.data.id]} alt={`${props.data.company} logo`} />
			<div className={styles["job-description"]}>
				<span>{props.data.company}</span>
				{props.data.new && <span>NEW!</span>}
				{props.data.featured && <span>FEATURED</span>}
				<h1>{props.data.position}</h1>
				<div>
					<span>{props.data.postedAt} </span>
					<span>&#8226; {props.data.contract} &#8226;</span>
					<span> {props.data.location}</span>
				</div>
			</div>
			<div className={styles.separator}></div>
			<div className={styles["job-filter"]}>
				<span onClick={filterHandler}>{props.data.role}</span>
				<span onClick={filterHandler}>{props.data.level}</span>
				{languages}
				{tools}
			</div>
		</div>
	);
};
// "id": 1,
// "company": "Photosnap",
// "logo": "./images/photosnap.svg",
// "new": true,
// "featured": true,
// "position": "Senior Frontend Developer",
// "role": "Frontend",
// "level": "Senior",
// "postedAt": "1d ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages": ["HTML", "CSS", "JavaScript"],
// "tools": []
export default Job;
