import { useState } from 'react';
import { Link } from 'react-router-dom'; // Используем Link из react-router-dom

export const Sidebar = () => {
	const [activeLink, setActiveLink] = useState(null); // Состояние для активной ссылки

	const handleLinkClick = (link) => {
		setActiveLink(link); // Обновляем состояние при клике на ссылку

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const links = [
		{ label: 'Microsoft Outlook', subLinks: [
				{ to: '/outlook-hosting', label: 'hosting' },
				{ to: '/outlook-corp', label: 'corp' },
				{ to: '/outlook-corp-ios', label: 'corp ios' }
			]},
		{ label: 'Mozilla Thunderbird', subLinks: [
				{ to: '/thunderbird-hosting', label: 'hosting' },
				{ to: '/thunderbird-corp', label: 'corp' }
			]},
		// { label: 'Mailbird', subLinks: [
		// 		{ to: '/mailbird-hosting', label: 'hosting' },
		// 		{ to: '/mailbird-corp', label: 'corp' }
		// 	]}
	];

	return (
		<aside className="sticky flex-shrink-0 top-0 w-80 h-screen p-5">
			<nav>
				<ul className="flex flex-col gap-4 text-2xl">
					{links.map((link, index) => (
						<li key={index}>
							{link.label}
							<ul className="mt-2 text-xl space-y-6 lg:space-y-2 border-l border-slate-400">
								{link.subLinks.map((subLink, subIndex) => (
									<li key={subIndex}>
										<Link
											to={subLink.to}
											onClick={() => handleLinkClick(subLink.to)}
											className={`${activeLink === subLink.to ? 'border-emerald-400 text-emerald-500' : 'text-slate-400 border-transparent'} inline-block border-l pl-4 -ml-px hover:border-emerald-400 hover:text-emerald-400`}
										>
											{subLink.label}
										</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}