/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

const ProductDetail = () => {
  return (
    // <div className='min-h-[75vh] grid grid-cols-1 md:grid-cols-2'>
    //   <div className='bg-orange-400'>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
    //     doloribus atque beatae quod eum! Perspiciatis enim asperiores optio sed,
    //     debitis mollitia porro repudiandae quasi modi, rerum, dolore nihil
    //     aliquid eligendi?
    //   </div>
    //   <div className='bg-slate-500'>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, est.
    //     Odio laborum omnis non repellendus hic sit laudantium! Laudantium quo
    //     laborum provident temporibus beatae. Nihil ad quidem voluptas provident
    //     esse?
    //   </div>
    // </div>

    <div className=''>
      <div class=' grid grid-cols-1 md:grid-cols-2'>
        <div
          class=' woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images'
          data-columns='4'
          // style='opacity: 1; transition: opacity 0.25s ease-in-out 0s;'
          style={{ opacity: 1, transition: 'opacity 0.25s ease-in-out 0s' }}
        >
          <figure class='woocommerce-product-gallery__wrapper'>
            <div
              data-thumb='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09070316/fresh-fruits6.jpg'
              data-thumb-alt=''
              class='woocommerce-product-gallery__image relative overflow-hidden'
            >
              <a href='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09070316/fresh-fruits6.jpg'>
                <img
                  width='600'
                  height='600'
                  src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09070316/fresh-fruits6.jpg'
                  class='wp-post-image'
                  alt=''
                  loading='lazy'
                  title='fresh fruits6'
                  data-caption=''
                  data-src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09070316/fresh-fruits6.jpg'
                  data-large_image='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09070316/fresh-fruits6.jpg'
                  data-large_image_width='800'
                  data-large_image_height='800'
                />
              </a>
              <img
                role='presentation'
                alt=''
                src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09070316/fresh-fruits6.jpg'
                class='zoomImg'
                style={{
                  position: 'absolute',
                  top: '-72.1222px',
                  left: '-106.334px',
                  opacity: 0,
                  width: '800px',
                  height: '800px',
                  border: 'none',
                  maxWidth: 'none',
                  maxHeight: 'none',
                }}
              />
            </div>{' '}
          </figure>
        </div>

        <div class='float-right width-[48%] clear-none'>
          <h1
            class='text-2xl font-medium mb-2 clear-none mt-0 p-0'
            style={{
              lineHeight: 1.6,
              letterSpacing: '.2px',
            }}
          >
            Organic Strawberries 1 pint container
          </h1>
          <p class='text-xl font-medium mb-7 mt-0'>
            <span class='woocommerce-Price-amount amount'>
              <span class='woocommerce-Price-currencySymbol'>Rp. </span>5.96
            </span>{' '}
          </p>
          <div class='woocommerce-product-details__short-description'>
            <p class='text-[#5a5a5a] mb-0'>
              Fruits are the means by which angiosperms disseminate seeds.
              Edible fruits, in particular, have propagated with the movements
              of humans and animals in a symbiotic relationship as a means for
              seed dispersal and nutrition;
            </p>
          </div>

          <form
            class='flex mt-12 mb-8 gap-2'
            action='https://cartsy.redq.io/shop/organic-strawberries-1-pint-container/'
            method='post'
            enctype='multipart/form-data'
          >
            <div>
              <input
                type='number'
                id='first_name'
                class='bg-gray-50 border max-w-[100px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>

            <button
              type='button'
              class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              Tambahkan Keranjang
            </button>
          </form>

          <div
            class='flex justify-start flex-col'
            style={{
              padding: '50px 0 30px',
            }}
          >
            <span class='text-[#5a5a5a] mb-[15px]'>
              Kategori:{' '}
              <a
                href='https://cartsy.redq.io/product-category/fresh-fruits/berries/'
                rel='tag'
                className='text-[#212121] font-medium capitalize'
              >
                Berries
              </a>
            </span>
            <span class='text-[#5a5a5a] mb-[15px]'>
              Kalori:{' '}
              <a
                href='https://cartsy.redq.io/product-category/fresh-fruits/berries/'
                rel='tag'
                className='text-[#212121] font-medium capitalize'
              >
                10
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className='mt-12 mb-16 clear-both '>
        <div className='text-[#5a5a5a]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          nesciunt fugit laboriosam libero reprehenderit beatae dolor molestiae
          error excepturi, quod nostrum iusto cupiditate, ducimus ullam expedita
          est saepe quas adipisci?
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
