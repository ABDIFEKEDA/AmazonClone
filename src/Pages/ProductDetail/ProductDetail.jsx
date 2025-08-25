import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LayOut from '../../Components/LayOut/LayOut';
import axios from 'axios';
import { productUrl } from '../../Api/Endpoint';
import ProductCard from '../../Components/Products/ProductCard';

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [productId]);

  return (
    <LayOut>
      <div>
        <ProductCard 
        product={product}/>
      </div>
    </LayOut>
  );
}

export default ProductDetail;
