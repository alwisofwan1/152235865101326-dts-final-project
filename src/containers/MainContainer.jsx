import React from 'react';
import { useStateValue } from '../context/StateProvider';
import MenuContainer from '../components/MenuContainer';
import CartContainer from '../components/CartContainer';
import Banner from 'containers/Banner';
import FreshFoody from './FreshFoody';

const MainContainer = () => {
  const [{ cartShow }] = useStateValue();

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <Banner />
      <FreshFoody />
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
