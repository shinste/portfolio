import { useEffect } from 'react';

const useIntersectionAnimation = (className = 'animate', inViewClass = 'in-view') => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(inViewClass);
				} else {
					entry.target.classList.remove(inViewClass);
				}
			});
		});

		// Select all elements with the specified class
		const elements = document.querySelectorAll(`.${className}`);

		elements.forEach((element) => observer.observe(element));

		// Cleanup observer on component unmount
		return () => observer.disconnect();
	}, [className, inViewClass]);
};

export default useIntersectionAnimation;
