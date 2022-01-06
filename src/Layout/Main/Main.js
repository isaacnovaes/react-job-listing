import React from "react";
import styles from "./Main.module.css";
import Job from "./Job";

const Main = props => {
	const jobs = props.jobs.map(job => <Job key={job.id} data={job} />);

	return <main className={styles.main}>{jobs}</main>;
};

export default Main;
