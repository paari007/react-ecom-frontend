import axios from 'axios';
import { useEffect,useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './productsGrid.jsx';
import { useSearchParams } from 'react-router';
import './HomePage.css';

export function HomePage({cart,loadCart}) {

  const [products,setProducts]=useState([]);
   const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
 
  useEffect( () => {
    
    const getHomeData = async()=>{
         const urlPath = search ? `https://react-ecom-backend-a19y.onrender.com/api/products?search=${search}` : '/api/products';
         const response = await axios.get(urlPath);
        setProducts(response.data )
    };

   getHomeData();
     
  }, [search]);


  return (
    <>

      <title>Ecommerce project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
       <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
};