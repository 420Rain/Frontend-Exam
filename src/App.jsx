import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar';
import { fetchProducts, searchProduct } from './hooks/ProductUtils';
import Spinner from './components/Spinner';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts(setAllProducts, setProducts, setLoading, setError);
  }, []);

  return (
    <div>
      <Navbar />

      <div className='mx-15 sm:mx-20 my-8'>
        <p className='font-semibold font-lato text-4xl ml-2 mb-3'>Products for Sale</p>
        <SearchBar
          searched={searchedProduct}
          setSearched={setSearchedProduct}
          onSearch={() => searchProduct(allProducts, setProducts, searchedProduct)}
          onReset={() => { searchProduct(allProducts, setProducts, ""); setSearchedProduct(""); }}
        />

        {loading && <Spinner loading={loading} loadText="Loading Products..." />}

        {error && (
          <div className='display-msg'>
            <p className='text-4xl text-gray-500'>Failed to Load Products. An Error Occurred</p>
            <p className='text-gray-400 text-2xl'>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-7'>
            {products.length === 0 ? (
              <div className='display-msg'>
                <p className='text-5xl text-gray-500'>No Products Available</p>
              </div>
            ) : (
              products?.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  rating={product.rating.rate}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App