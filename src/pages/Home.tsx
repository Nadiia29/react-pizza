import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/skeleton';
import { useSelector } from 'react-redux';
import { initialState, setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';

import { SortType } from '@/redux/filter/types';
import { selectPizzaData } from '../redux/pizza/selectors';
import { fetchPizzas } from '../redux/pizza/asyncActions';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  // якщо був перший рендер то перевіряємо url параметри і зберігаємо в редуксі
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // якщо був перший рендер то запитуємо піци
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as {
        sortProperty?: string;
        categoryId?: string;
        currentPage?: string;
      };
      // Фільтруємо, щоб переконатися, що значення sortProperty є коректним
      const foundSort = list.find((obj) => obj.sortProperty === params.sortProperty);

      const sort: SortType = foundSort
        ? (foundSort as SortType) // Примусове приведення до SortType (безпечне, бо ми перевірили find)
        : initialState.sort; // Якщо значення некоректне, використовуємо значення за замовчуванням

      dispatch(
        setFilters({
          searchValue: '',
          categoryId: Number(params.categoryId) || 0,
          currentPage: Number(params.currentPage) || 1,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            an error occurred <span>😕</span>
          </h2>
          <p>please try again later</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onPageChange={onChangePage} />
    </div>
  );
};
