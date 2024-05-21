import {FcAbout} from "react-icons/fc";

export const Notice = ({children}) => {
	return (
		<div className="notice max-w-3xl mb-5 p-4 border-2 rounded-xl border-neutral-500 bg-neutral-700">
			<div className="notice__header">
				<span className="notice__type flex items-center font-bold"><FcAbout className="w-8 h-8 mr-1"/>На заметку:</span>
			</div>
			<div className="notice__content">
				{children}
			</div>
		</div>
	)
}