import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Search = ({ articles }) => {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const clearInput = () => {
		setQuery('')
		setResults([])
	}

	const handleSearch = (event) => {
		const query = event.target.value.toLowerCase()
		setQuery(query)

		if (query === '') {
			setResults([])
		} else {
			const filteredArticles = articles.filter(article =>
				article.keywords.toLowerCase().includes(query)
			)
			setResults(filteredArticles)
		}
	}

	return (
		<div className="sticky top-0 flex-shrink-0 w-96 h-screen p-5">
			<div className="group relative mb-4">
				<svg width="20" height="20" fill="currentColor"
						 className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-emerald-500"
						 aria-hidden="true">
					<path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
				</svg>
				<input
					type="text"
					value={query}
					onChange={handleSearch}
					placeholder="Поиск..."
					className="focus:ring-2 focus:ring-emerald-500 focus:outline-none appearance-none w-full text-lg leading-6 rounded-md py-2 px-10 ring-1 ring-slate-200 shadow-sm bg-transparent"
					aria-label="Filter projects" />
				<button
					onClick={clearInput}
					className="absolute top-2 right-2 w-6 h-6 m-0 p-0 flex items-center justify-center outline-none hover:border-0">
					<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" xml:space="preserve" fill="currentColor"
							 className="block text-slate-400 pointer-events-none group-focus-within:text-emerald-500">
						<path fillRule="evenodd" clipRule="evenodd" d="M457 0 245 213 33 0 1 32l212 213L1 458l32 32 212-213 212 213 32-32-212-213L489 32z"/>
					</svg>
				</button>
			</div>
			<ul className="list-disc pl-6">
				{results.map(article => (
					<li key={article.id} className="mb-2 text-emerald-500 hover:text-emerald-600">
						<Link onClick={handleClick} to={`/${article.path}`}
									className="text-emerald-500 hover:underline hover:text-emerald-600">
							{article.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}