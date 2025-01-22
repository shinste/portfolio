import useIntersectionAnimation from '../hooks/useAnimate';

interface ImageProp {
	image: string;
	rectangle?: boolean;
	end?: boolean;
	small?: boolean;
}

const Logo: React.FC<ImageProp> = ({ image, rectangle, end, small }) => {
	useIntersectionAnimation();
	if (small) {
		return (
			<div className="Logo " style={{ padding: 0 }}>
				<img style={{ width: rectangle ? '1.5rem' : '3rem', height: '3rem' }} src={image} />
			</div>
		);
	}
	return (
		<div className="Logo " style={{ padding: 10 }}>
			<img style={{ width: rectangle ? '4rem' : '5rem', height: '5rem' }} src={image} />
		</div>
	);
};

export default Logo;
