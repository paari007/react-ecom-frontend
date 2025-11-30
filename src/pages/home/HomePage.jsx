import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './productsGrid.jsx';
import { useSearchParams } from 'react-router';
import { Loader } from "lucide-react";   // <-- added
import './HomePage.css';

export function HomePage({ cart, loadCart }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      try {
        setLoading(true);

        const urlPath = search
          ? `https://react-ecom-backend-a19y.onrender.com/api/products?search=${search}`
          : `https://react-ecom-backend-a19y.onrender.com/api/products`;

        const response = await axios.get(urlPath);
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">

       {loading ? (
  <div className="loader-container">
    <Loader className="loader-icon" />
  </div>
) : (
  <ProductsGrid products={products} loadCart={loadCart} />
)}


      </div>
    </>
  );
};
