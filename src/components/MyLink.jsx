import {Link} from "react-router-dom";

export const MyLink = ({to, children}) => {
	return (
		<Link to={to} className="inline-block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">{children}</Link>
	)
}
