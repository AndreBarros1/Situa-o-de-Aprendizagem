import React from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/Products.css';

const Products = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Produtos e Serviços</h1>
      <ul>
        {data.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
