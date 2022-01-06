import React from "react";

const filterContext = React.createContext({
	filter: [],
	addFilterItem: item => {},
	removeFilterItem: item => {},
	clearFilter: () => {},
});

export default filterContext;
