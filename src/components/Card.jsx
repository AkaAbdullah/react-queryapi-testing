import React from 'react'
import { Button, Typography } from '@mui/material'
import './card.css'

const Card = (props) => {
  return (
    <>
      <div className='main'>
        <div className='heading'>
          <Typography variant='h2'>
            React Query Api passing data to props example
          </Typography>
          <hr></hr>

          <Typography variant='h6'>
            The below card data is coming form a api which have been created
            with fake json server and for styling React Material UI have been
            used
          </Typography>
          <hr></hr>
        </div>
        <div className='card'>
          <div className='card-title'>
            <Typography variant='h5'>{props.data.name}</Typography>
          </div>
          <div className='card-body'>
            <Typography variant='h6'>Price ={props.data.price}</Typography>
            <Typography variant='h6'>Description ={props.data.age}</Typography>
          </div>
          <div className='card-end'>
            <Button variant='contained'>Add to Cart</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
