import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {

  const products = useSelector(state => state.cart)

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id))
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
              INR: {product.price}  
            </Card.Text>
            <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
          </Card.Body>
        </Card>
      </div>
    );
  })

  return (
    <>
    <div className='row'>
      {cards}
    </div>
    </>
  )
}

export default Cart