import axios from "axios";

export const fetchProducts = async (setAllProducts, setProducts, setLoading, setError) => {
  try {
    setLoading(true);
    setError("");

    await axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setAllProducts(res.data);
        setProducts(res.data);
      })
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

export const searchProduct = (allProducts, setProducts, searchedProduct) => {
  if (!searchedProduct) {
    setProducts(allProducts);
    return;
  }

  setProducts(allProducts.filter((p) => p.title.toLowerCase().includes(searchedProduct.toLowerCase())));
}