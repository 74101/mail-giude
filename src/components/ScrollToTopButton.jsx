import { useState, useEffect } from 'react'

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.scrollY > 200) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<div className={`fixed bottom-4 right-4 transition-transform ${isVisible ? 'translate-x-0' : 'translate-x-40'}`}>
			<button
				onClick={scrollToTop}
				title="В начало"
				className="w-16 h-16 p-3 rounded-full bg-emerald-500 text-3xl text-white shadow-lg hover:bg-emerald-700 transition"
			>
				↑
			</button>
		</div>
	)
}
