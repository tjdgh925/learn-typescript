import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useCallback, useState } from 'react';
interface NewsPageProp {
  match: any;
}
const NewsPage = ({ match }: NewsPageProp) => {
  const onSelect = useCallback((category) => setCategory(category), []);
  const [category, setCategory] = useState<string>('all');
  // setCategory(match.params.category || 'all');

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
