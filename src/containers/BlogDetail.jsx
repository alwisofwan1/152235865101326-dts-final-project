import PostLayout from 'components/blog/PostSimple';

// export async function getStaticPaths() {
//   const posts = await sanityClient.fetch(query.articleSlug)

//   const paths = posts.map((post) => ({
//     params: { slug: post.slug.current },
//   }))

//   return {
//     paths,
//     fallback: 'blocking',
//   }
// }

// export async function getStaticProps({ params }) {
//   const relatedPost = await sanityClient.fetch(query.allArticle)
//   const postIndex = relatedPost.findIndex((post) => post?.slug?.current === params.slug)

//   const allPosts = await sanityClient.fetch(query.articleDetail, {
//     slug: params?.slug,
//   })

//   const prev = relatedPost[postIndex - 1] || null
//   const next = relatedPost[postIndex + 1] || null

//   // rss
//   if (relatedPost.length > 0) {
//     const rss = generateRss(relatedPost)
//     fs.writeFileSync('./public/feed.xml', rss)
//   }

//   return { props: { allPosts, prev, next }, revalidate: 60 }
// }

export default function Blog({ allPosts, prev, next }) {
  return (
    <>
      <PostLayout frontMatter={allPosts} prev={1} next={2} />
    </>
  );
}
