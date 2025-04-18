import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';
import { selectCartItemById } from '../../redux/cart/selectors';
import { PizzaVariant } from '../../redux/pizza/types';
import PizzaSelector from '../PizzaSelector';

const typeNames = ['thin', 'traditional'];

type PizzaBlockProps = {
  id: string;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
  variants: PizzaVariant[];
  rating: number;
  description: string;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, variants, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(types[0] ?? 0);
  const [activeSize, setActiveSize] = useState(sizes[0] ?? 0);
  const [activePrice, setActivePrice] = useState<number>(0);

  const variantId = `${id}_${typeNames[activeType]}_${sizes[activeSize]}`;
  const cartItem = useSelector(selectCartItemById(variantId));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    if (activePrice === undefined) return;

    const item: CartItem = {
      id: variantId,
      title,
      price: activePrice,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={id} to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>

        <PizzaSelector
          types={types}
          sizes={sizes}
          variants={variants}
          onChange={(type, size, price) => {
            setActiveType(type);
            setActiveSize(size);
            setActivePrice(price);
          }}
        />

        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> from {activePrice} $</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span> to add </span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
