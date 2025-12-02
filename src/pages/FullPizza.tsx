import { addItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import '../scss/components/fullPizza.scss';
import { Pizza } from '../redux/pizza/types';
import PizzaSelector from '../components/PizzaSelector';

const typeNames = ['thin', 'traditional'];

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = React.useState<Pizza | null>(null);

	const [activeType, setActiveType] = React.useState(0);
	const [activeSize, setActiveSize] = React.useState(0);
	const [activePrice, setActivePrice] = React.useState(0);

	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					`https://67d0026e823da0212a8431d9.mockapi.io/items/${id}`,
				);
				setPizza(data);
			} catch (error) {
				alert('mistake');
				navigate('/');
			}
		}

		fetchPizza();
	}, [id, navigate]);

	if (!pizza) {
		return <p>Завантаження...</p>;
	}

	const onClickAdd = () => {
		const item: CartItem = {
			id: `${pizza.id}_${typeNames[activeType]}_${pizza.sizes[activeSize]}`,
			title: pizza.title,
			price: activePrice,
			imageUrl: pizza.imageUrl,
			type: typeNames[activeType],
			size: activeSize,
			count: 0,
		};
		dispatch(addItem(item));
	};

	return (
		<div className='fullPizza'>
			<img src={pizza.imageUrl} alt={pizza.title} />
			<div className='pizza-details'>
				<h2>{pizza.title}</h2>
				<p>
					<strong>Descrition:</strong> {pizza.description}
				</p>

				<PizzaSelector
					types={pizza.types}
					sizes={pizza.sizes}
					variants={pizza.variants}
					onChange={(type, size, price) => {
						setActiveType(type);
						setActiveSize(size);
						setActivePrice(price);
					}}
				/>

				<h4>Price: {activePrice} $</h4>

				<button onClick={onClickAdd} className='button button--outline button--add'>
					<svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='white'
						/>
					</svg>
					<span>to add</span>
				</button>
			</div>
		</div>
	);
};

export default FullPizza;
