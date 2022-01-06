import React, { useReducer } from "react";
import filterContext from "./filter-context";

const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			const filter = state.filter.includes(action.item)
				? state.filter
				: [...state.filter, action.item];
			return { filter };
		case "remove":
			return {
				filter: state.filter.filter(filterItem => filterItem !== action.item),
			};
		case "clear":
			return {
				filter: [],
			};
		default:
			return new Error("Something went wrong");
	}
};

const FilterProvider = props => {
	const initialState = {
		filter: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const data = {
		filter: state.filter,
		addFilterItem: filterItem => dispatch({ type: "add", item: filterItem }),
		removeFilterItem: filterItem =>
			dispatch({ type: "remove", item: filterItem }),
		clearFilter: () => dispatch({ type: "clear" }),
	};

	return (
		<filterContext.Provider value={data}>
			{props.children}
		</filterContext.Provider>
	);
};

export default FilterProvider;
