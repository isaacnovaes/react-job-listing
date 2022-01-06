import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import filterContext from "./context/filter-context";
import Filter from "./Layout/Filter/Filter";

const App = () => {
	const context = useContext(filterContext);
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("./data.json");
			const data = await response.json();
			setJobs(data);
		};
		fetchData();
	}, []);

	const showFilteredJobs = jobs => {
		return jobs.filter(job => {
			const jobDescriptions = [
				job.role,
				job.level,
				...job.languages,
				...job.tools,
			];
			const filterLength = context.filter.length;
			for (let index = 0; index < filterLength; index++) {
				if (!jobDescriptions.includes(context.filter[index])) return false;
			}
			return true;
		});
	};

	return (
		<>
			<Header />
			{context.filter.length > 0 && <Filter filterItems={context.filter} />}
			<Main jobs={context.filter.length > 0 ? showFilteredJobs(jobs) : jobs} />
		</>
	);
};

export default App;
