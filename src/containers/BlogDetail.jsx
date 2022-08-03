import PostLayout from 'components/blog/PostSimple';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const { key } = useParams();

  const baseUrl = 'https://masak-apa-tomorisakura.vercel.app';
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log('data', data);

  const getRecipeDetail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/recipe/${key}`);
      const data = await response.json();
      setIsLoading(false);

      const { results } = data;
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    key && getRecipeDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <>
      <PostLayout data={data} prev={1} next={2} />
    </>
  );
}
