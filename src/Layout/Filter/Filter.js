import React, { useContext } from "react";
import styles from "./Filter.module.css";
import FilterItem from "./FilterItem";
import filterContext from "../../context/filter-context";

const Filter = props => {
	const context = useContext(filterContext);

	const clearHandler = () => context.clearFilter();
	return (
		<div className={styles.filter}>
			<div>
				{props.filterItems.map((item, index) => (
					<FilterItem key={index} filter={item} />
				))}
			</div>
			<button type="button" onClick={clearHandler}>
				Clear
			</button>
		</div>
	);
};

export default Filter;
