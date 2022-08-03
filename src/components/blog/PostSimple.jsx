// import Link from '@/components/Link';
// import PageTitle from '@/components/PageTitle';
// import SectionContainer from '@/components/SectionContainer';
// import { BlogSEO } from '@/components/SEO';
// import siteMetadata from '@/data/siteMetadata';
import { Link } from 'react-router-dom';
// import formatDate from '@/lib/utils/formatDate';
// import Comments from '@/components/comments';

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  // const { date, title } = frontMatter;

  return (
    <div className='mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-6xl xl:px-0'>
      {/* <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        {...frontMatter}
      /> */}
      <article>
        <div>
          <header>
            <div className='dark:border-gray-700 space-y-1 border-b border-gray-200 pb-10 text-center'>
              <dl>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='dark:text-gray-400 text-base font-medium leading-6 text-gray-500'>
                    {/* <time dateTime={date}>{formatDate(date)}</time> */}
                    time
                  </dd>
                </div>
              </dl>
              <div>
                {/* <PageTitle>{title}</PageTitle> */}
                Title
              </div>
            </div>
          </header>
          <div
            className='dark:divide-gray-700 divide-y divide-gray-200 pb-8 xl:divide-y-0 '
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className='dark:divide-gray-700 divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              <div className='dark:prose-dark prose max-w-none pt-10 pb-8'>
                {/* {children} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam est, officiis sunt quos ratione nemo tempore vel nulla
                animi ut ex perferendis a esse ipsam corrupti itaque eligendi ab
                necessitatibus.
              </div>
            </div>
            <footer>
              <div className='flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base'>
                {prev && (
                  <div className='pt-4 xl:pt-8'>
                    <Link
                      to={`/blog/${prev.slug}`}
                      className='dark:hover:text-primary-400 text-primary-500 hover:text-primary-600'
                    >
                      Sebelumnya
                    </Link>
                  </div>
                )}
                {next && (
                  <div className='pt-4 xl:pt-8'>
                    <Link
                      to={`/blog/${next.slug}`}
                      className='dark:hover:text-primary-400 text-primary-500 hover:text-primary-600'
                    >
                      Selanjutnya
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}
