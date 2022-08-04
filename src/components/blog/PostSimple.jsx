// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

export default function PostLayout({ data }) {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0'>
      <article>
        <div>
          <header>
            <div className='dark:border-gray-700 space-y-1 border-b border-gray-200 pb-10 text-center'>
              <dl>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='dark:text-gray-400 text-base font-medium leading-6 text-gray-500'>
                    {data?.author?.datePublished}
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className='dark:text-gray-100 text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14'>
                  {data?.title}
                </h1>
              </div>
            </div>
          </header>

          <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4'>
            <div
              className='flex justify-center items-start lg:items-center'
              data-columns='4'
              style={{ opacity: 1, transition: 'opacity 0.25s ease-in-out 0s' }}
            >
              <figure className='w-full'>
                <div className='relative overflow-hidden'>
                  <img src={data?.thumb} alt='' loading='lazy' />
                </div>
              </figure>
            </div>

            <div className='float-right width-[48%] clear-none'>
              <div className='flex justify-start flex-col'>
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Penulis:{' '}
                  <span className='text-[#212121] font-medium capitalize'>
                    {data?.author?.user}
                  </span>
                </span>
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Tingkat Kesulitan:{' '}
                  <span className='text-[#212121] font-medium capitalize'>
                    {data?.dificulty}
                  </span>
                </span>
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Yang harus disiapkan:{' '}
                  <span className='text-[#212121] font-medium capitalize'>
                    {data?.needItem?.map((item) => item.item_name).join(', ') ||
                      '-'}
                  </span>
                </span>
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Jumlah Porsi:{' '}
                  <span className='text-[#212121] font-medium capitalize'>
                    {data?.servings}
                  </span>
                </span>
                <span className='text-[#5a5a5a] mb-[15px]'>
                  Durasi:{' '}
                  <span className='text-[#212121] font-medium capitalize'>
                    {data?.times}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className='dark:divide-gray-700 divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0'>
            <div className='mt-8 prose prose-slate dark:prose-dark text-[#5a5a5a] text-[16px]'>
              <p dangerouslySetInnerHTML={{ __html: data?.desc }} />
              {/* <br />
              <p>{data?.desc}</p> */}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
