import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {

  // const dispatch = useDispatch()
  // const products = useSelector(state => state.products.data);
  // const status = useSelector(state => state.products.status);


  // const {data: products} = useSelector(state => state.products)

  const [products, getProducts] = useState([]);

  const dispatch = useDispatch();


  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [status, dispatch]);



  useEffect(() => {

    // dispatch(getProducts())

    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result))
  }, [])

//   if (status === StatusCode.LOADING) {
//       return <p>Loading</p>
    
//   }

//   if (status === StatusCode.ERROR) {
//     return <p>Something Went Wrong! Please try again later</p>
  
// }

  const addToCart = (product) => {
    dispatch(add(product))
  }

  const cards = products.map(product => {
    return (
      <div className='col-md-3' style={{marginBottom: '10px'}}>
        <Card key={product.id} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} />
        </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>
              INR: {product.price}  
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card.Body>
        </Card>
      </div>
    );
  })
 
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </>
  )
}

export default Product;
