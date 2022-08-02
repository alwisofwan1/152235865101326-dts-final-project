/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase.config';
import { getFoodItemById, getRelatedFoodItems } from 'utils/firebaseFunctions';
import { useParams } from 'react-router-dom';
import { currencyFormatter } from 'utils/currencyFormatter';
import { CartContainer, Loader, RowContainer } from 'components';
import { useStateValue } from 'context/StateProvider';

const ProductDetail = () => {
  let { id } = useParams();
  const [{ cartShow }] = useStateValue();
  const [isLoading] = useAuthState(auth);
  const [loadingData, setLoadingData] = useState(true);

  const [relatedData, setRelatedData] = useState([]);
  const [data, setData] = useState({});

  const tempData = relatedData.filter((item) => item.id !== id);

  const fetchData = async () => {
    setLoadingData(true);
    await getFoodItemById(id).then(async (data) => {
      setLoadingData(false);
      setData(data);

      await getRelatedFoodItems(data?.category).then((data) => {
        setRelatedData(data);
      });
    });
  };

  useEffect(() => {
    id && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Handle buat scroll to top ketika loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return (
    <motion.div id='section-1' className='scroll-smooth'>
      {loadingData ? (
        <div className='grid place-items-center min-h-[75vh]'>
          <Loader />
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=' grid grid-cols-1 md:grid-cols-2'
          >
            <div
              className='flex justify-center items-start lg:items-center'
              data-columns='4'
              style={{ opacity: 1, transition: 'opacity 0.25s ease-in-out 0s' }}
            >
              <figure className='w-full md:w-[30vw]'>
                <div className='relative overflow-hidden'>
                  <img
                    width='600'
                    height='600'
                    src={data?.imageURL}
                    alt=''
                    loading='lazy'
                  />
                </div>
              </figure>
            </div>

            <div className='float-right width-[48%] clear-none'>
              <h1
                className='text-2xl font-medium mb-2 clear-none mt-0 p-0'
                style={{
                  lineHeight: 1.6,
                  letterSpacing: '.2px',
                }}
              >
                {data?.title}
              </h1>
              <p className='text-xl font-medium mb-7 mt-0'>
                <span className='woocommerce-Price-amount amount'>
                  {currencyFormatter(data?.price, 'IDR')}
                </span>
              </p>
              <div className='woocommerce-product-details__short-description'>
                <p className='text-[#5a5a5a] mb-0'>{data?.description}</p>
              </div>

              <form
                className='flex mt-12 mb-8 gap-2'
                action='https://cartsy.redq.io/shop/organic-strawberries-1-pint-container/'
                method='post'
                encType='multipart/form-data'
              >
                <div>
                  <input
                    type='number'
                    id='first_name'
                    className='bg-gray-50 border max-w-[100px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                    min={1}
                    placeholder='Qty'
                  />
                </div>

                <button
                  type='button'
                  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                >
                  Tambahkan Keranjang
                </button>
              </form>

              <div
                className='flex justify-start flex-col'
                style={{
                  padding: '10px 0 30px',
                }}
              >
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Kategori:{' '}
                  <a
                    href='https://cartsy.redq.io/product-category/fresh-fruits/berries/'
                    rel='tag'
                    className='text-[#212121] font-medium capitalize'
                  >
                    {data?.category}
                  </a>
                </span>
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Kalori:{' '}
                  <a
                    href='https://cartsy.redq.io/product-category/fresh-fruits/berries/'
                    rel='tag'
                    className='text-[#212121] font-medium capitalize'
                  >
                    {data?.calories === '0' ? '-' : data?.calories}
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <div className='mt-12 mb-16 clear-both '>
            <section className='w-full my-6'>
              <div className='w-full flex items-center justify-between'>
                <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mb-10'>
                  Produk Serupa
                </p>
              </div>
              <RowContainer data={tempData} />
            </section>
          </div>
        </>
      )}
      {cartShow && <CartContainer />}
    </motion.div>
  );
};

export default ProductDetail;
