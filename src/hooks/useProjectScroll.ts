import { useEffect } from 'react';

const useProjectScroll = () => {
	useEffect(() => {
		const track = document.getElementById('image-track');
		const projectDiv = document.getElementById('projects-section');
		console.log(track);
		if (track) {
			track.onmousedown = (e) => {
				track.dataset.mouseDownAt = e.clientX.toString();
			};
			if (projectDiv) {
			}
			window.onmouseup = () => {
				track.dataset.mouseDownAt = '0';
				track.dataset.prevPercentage = track.dataset.percentage;
				if (track.dataset.prevPercentage === '0') {
					const scrollMessage = document.getElementById('scroll-to-view');
					if (scrollMessage) {
						scrollMessage.style.display = 'block';
					}
				}
			};
			window.onmousemove = (e) => {
				if (track.dataset.mouseDownAt !== '0') {
					const mouseDownAt = track?.dataset.mouseDownAt;
					const prevPercentage = track.dataset.prevPercentage;
					if (mouseDownAt !== undefined && prevPercentage !== undefined) {
						const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
						const maxDelta = window.innerWidth / 2;
						const percentage = (mouseDelta / maxDelta) * -100;
						let nextPercentage = parseFloat(prevPercentage) + percentage;
						nextPercentage = Math.min(nextPercentage, 0);
						nextPercentage = Math.max(nextPercentage, -100);
						track.dataset.percentage = nextPercentage.toString();
						track.style.transform = `translate(${nextPercentage}%, -50%)`;
						track.animate(
							{
								transform: `translate(${nextPercentage}%, -50%)`
							},
							{ duration: 1200, fill: 'forwards' }
						);
						const scrollMessage = document.getElementById('scroll-to-view');
						if (scrollMessage) {
							scrollMessage.style.display = 'none';
						}
						const images = Array.from(track.getElementsByClassName('image'));
						images.forEach((image) => {
							const imgElement = image as HTMLElement;
							imgElement.animate(
								{
									objectPosition: `${nextPercentage + 100}% 50%`
								},
								{ duration: 1200, fill: 'forwards' }
							);
						});
					}
				}
			};
		}
	}, []);
};

export default useProjectScroll;
