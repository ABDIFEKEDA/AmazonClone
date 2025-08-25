import React, { useEffect, useState } from 'react';
import classes from './Result.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/Endpoint';
import LayOut from '../../Components/LayOut/LayOut';
import ProductCard from '../../Components/Products/ProductCard';

function Result() {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>{`category/${categoryName}`}</p>
        <hr />
        <div className={classes.products_container}>
          {result?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Result;
