import React from 'react';

const typeNames = ['thin', 'traditional'];

type Variant = {
	type: number;
	size: number;
	price: number;
};

type PizzaSelectorProps = {
	types: number[];
	sizes: number[];
	variants: Variant[];
	onChange: (type: number, size: number, price: number) => void;
};

const PizzaSelector: React.FC<PizzaSelectorProps> = ({ types, sizes, variants, onChange }) => {
	const [activeType, setActiveType] = React.useState(types[0] ?? 0);
	const [activeSize, setActiveSize] = React.useState(0);

	React.useEffect(() => {
		const current = variants.find((v) => v.type === activeType && v.size === sizes[activeSize]);
		onChange(activeType, sizes[activeSize], current?.price ?? 0);
	}, [activeType, activeSize, sizes, variants, onChange]);

	return (
		<div className='pizza-block__selector'>
			<ul>
				{types.map((type) => (
					<li
						key={type}
						onClick={() => setActiveType(type)}
						className={activeType === type ? 'active' : ''}
					>
						{typeNames[type]}
					</li>
				))}
			</ul>
			<ul>
				{sizes.map((size, i) => (
					<li
						key={size}
						onClick={() => setActiveSize(i)}
						className={activeSize === i ? 'active' : ''}
					>
						{size} cm.
					</li>
				))}
			</ul>
		</div>
	);
};

export default PizzaSelector;
