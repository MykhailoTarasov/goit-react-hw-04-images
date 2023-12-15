import { useEffect, useState } from 'react';
import { Layout, StyledError } from './Layout';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

const handleSearch = queryName => {
    setQuery(queryName);
    setPage(1);
    setImages([]);
    setLoadMore(false);
};

const handleButton = () => {
  setPage(prevState => prevState + 1);
};

useEffect(() => {
  if (query === '') {
    return;
  }
  async function fechImgs() {
    try {
      setIsLoading(true);
      setError(false);
      const searchImg = await fetchImages(query, page);
      toast.success('Images found successfully!');
      setImages(prevState =>
        page === 1 ? searchImg.hits : [...prevState, ...searchImg.hits]
      );
      setLoadMore(page < Math.ceil(searchImg.totalHits / 12));
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  fechImgs();
}, [query, page]);


  return (
    <Layout>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}

      {isLoading && <Loader />}
      {loadMore && <Button onButtonClick={handleButton} />}
      {error && (
        <StyledError>Whoops... Error! Please, reload this page!</StyledError>
      )}
      <Toaster position="top-right" />
    </Layout>
  );
}

export default App;
