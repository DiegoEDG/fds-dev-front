import React from 'react';

type Variant = 'new' | 'best_seller' | 'top_rated';

interface BadgeProps {
	label?: string;
	variant?: Variant;
	className?: string;
	children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'best_seller', className = '', children }) => {
	const variantClasses: Record<Variant, string> = {
		new: 'bg-blue-700 text-white rounded-sm py-1 px-2 text-xs font-bold',
		best_seller:
			'bg-gradient-to-r from-blue-900 via-blue-700 to-blue-700 text-white rounded-sm py-1 px-2 text-xs font-bold italic',
		top_rated:
			'bg-gradient-to-r from-green-900 via-green-500 to-green-400 text-white rounded-sm py-1 px-2 text-xs font-bold italic'
	};

	const defaultLabels: Record<Variant, string> = {
		new: 'NEW',
		best_seller: 'Best Seller',
		top_rated: 'Top Rated'
	};

	const finalClassName = `${variantClasses[variant]}${className ? ` ${className}` : ''}`;

	return <span className={finalClassName}>{children ?? label ?? defaultLabels[variant]}</span>;
};

export default Badge;
