import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar';
import { fetchProducts, searchProduct } from './hooks/ProductUtils';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState("");

  useEffect(() => {
    fetchProducts(setAllProducts, setProducts);
  }, []);

  return (
    <div>
      <Navbar />

      <div className='mx-20 my-8 bg-[#fdfbf7]'>
        <p className='font-semibold font-lato text-4xl ml-2 mb-3'>Products for Sale</p>
        <SearchBar
          searched={searchedProduct}
          setSearched={setSearchedProduct}
          onSearch={() => searchProduct(allProducts, setProducts, searchedProduct)}
          onReset={() => searchProduct(allProducts, setProducts, "")}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-7'>
          {products.length === 0 ? (
            <div className='col-span-full flex justify-center mt-10'>
              <p className='font-lato text-5xl text-[#a2a4aa]'>No Products Available</p>
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
      </div>
    </div>
  )
}

export default App