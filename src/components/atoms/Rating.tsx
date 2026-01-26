import React from 'react';

interface RatingProps {
	value?: number;
	className?: string;
}

const Rating: React.FC<RatingProps> = ({ value = 4.5, className = '' }) => {
	const fullStars = Math.floor(value);
	const hasHalfStar = value % 1 !== 0;
	const totalStars = 5;

	const getStarPath = (index: number) => {
		const offsetX = index * 16;
		return `M${9.90089 + offsetX} 6.24999H${14.0415 + offsetX}C${14.3019 + offsetX} 6.24999 ${14.5363 + offsetX} 6.43228 ${14.6144 + offsetX} 6.6927C${14.7186 + offsetX} 6.92707 ${14.6144 + offsetX} 7.21353 ${14.4061 + offsetX} 7.36978L${10.9946 + offsetX} 10.026L${12.3228 + offsetX} 14.1927C${12.4269 + offsetX} 14.4531 ${12.3228 + offsetX} 14.7396 ${12.0884 + offsetX} 14.8958C${11.8801 + offsetX} 15.0521 ${11.5676 + offsetX} 15.0521 ${11.3592 + offsetX} 14.8698L${7.99985 + offsetX} 12.2656L${4.61443 + offsetX} 14.8698C${4.4061 + offsetX} 15.0521 ${4.0936 + offsetX} 15.0521 ${3.88527 + offsetX} 14.8958C${3.65089 + offsetX} 14.7396 ${3.54672 + offsetX} 14.4531 ${3.65089 + offsetX} 14.1927L${4.97902 + offsetX} 10.026L${1.56756 + offsetX} 7.36978C${1.35922 + offsetX} 7.21353 ${1.25506 + offsetX} 6.92707 ${1.35922 + offsetX} 6.6927C${1.43735 + offsetX} 6.43228 ${1.67172 + offsetX} 6.24999 ${1.95818 + offsetX} 6.24999H${6.07277 + offsetX}L${7.40089 + offsetX} 2.10936C${7.47902 + offsetX} 1.84895 ${7.71339 + offsetX} 1.66666 ${7.99985 + offsetX} 1.66666C${8.26027 + offsetX} 1.66666 ${8.49464 + offsetX} 1.84895 ${8.57277 + offsetX} 2.10936L${9.90089 + offsetX} 6.24999Z`;
	};

	const getHalfStarPath = (index: number) => {
		const offsetX = index * 16;
		return `M${71.9998 + offsetX} 1.66666C${71.7134 + offsetX} 1.66666 ${71.479 + offsetX} 1.84895 ${71.4009 + offsetX} 2.10936L${70.0728 + offsetX} 6.24999H${65.9582 + offsetX}C${65.6717 + offsetX} 6.24999 ${65.4373 + offsetX} 6.43228 ${65.3592 + offsetX} 6.6927C${65.2551 + offsetX} 6.92707 ${65.3592 + offsetX} 7.21353 ${65.5676 + offsetX} 7.36978L${68.979 + offsetX} 10.026L${67.6509 + offsetX} 14.1927C${67.5467 + offsetX} 14.4531 ${67.6509 + offsetX} 14.7396 ${67.8853 + offsetX} 14.8958C${68.0936 + offsetX} 15.0521 ${68.4061 + offsetX} 15.0521 ${68.6144 + offsetX} 14.8698L${71.9998 + offsetX} 12.2656V1.66666Z`;
	};

	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < totalStars; i++) {
			const isFull = i < fullStars;
			const isHalf = i === fullStars && hasHalfStar;
			const fill = isFull ? '#1C58EE' : '#717171';

			if (isHalf) {
				stars.push(
					<React.Fragment key={i}>
						<path d={getStarPath(i)} fill="#717171" />
						<path d={getHalfStarPath(i)} fill="#1C58EE" />
					</React.Fragment>
				);
			} else {
				stars.push(<path key={i} d={getStarPath(i)} fill={fill} />);
			}
		}
		return stars;
	};

	return (
		<div className={`flex items-center gap-1${className ? ` ${className}` : ''}`}>
			<svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				{renderStars()}
			</svg>

			<span className="text-sm">({value})</span>
		</div>
	);
};

export default Rating;
