import useIntersectionAnimation from '../hooks/useAnimate';

interface ImageProp {
	image: string;
	title: string;
	rectangle?: boolean;
	end?: boolean;
	small?: boolean;
}

const Logo: React.FC<ImageProp> = ({ image, title, rectangle, end }) => {
	useIntersectionAnimation();
	// if (small) {
	// 	return (
	// 		<div className="Logo animate" style={{ padding: 0 }}>
	// 			<img style={{ width: rectangle ? '1.5rem' : '3rem', height: '3rem' }} src={image} />
	// 		</div>
	// 	);
	// }
	return (
		<div className="Logo animate">
			<img style={{ width: rectangle ? '4rem' : '5rem', height: '5rem' }} src={image} />
			<p className="Center-text" style={{ fontSize: '15px' }}>
				{title}
			</p>
		</div>
	);
};

export default Logo;
