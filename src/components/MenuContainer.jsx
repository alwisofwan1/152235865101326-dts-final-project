import React from 'react';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import Categories from 'containers/Categories';
import { useSearch } from 'context/search/use-search';
import { useSearchable } from 'utils/use-searchable';

const MenuContainer = () => {
  const [{ foodItems }] = useStateValue();

  const { searchTerm } = useSearch();
  const searchableItems = useSearchable(foodItems, searchTerm, (item) => [
    item.category,
    item.title,
  ]);

  return (
    <section className='w-full my-6' id='menu'>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
          Hidangan Favorit Kami
        </p>
        <Categories />

        <div className='w-full'>
          <RowContainer flag={false} data={searchableItems} />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
