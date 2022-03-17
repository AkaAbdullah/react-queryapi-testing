import React from 'react'
import { Typography } from '@mui/material'
import { useQuery } from 'react-query'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'
import BasicCard from './Card'
import './card.css'

const HomeScreen = () => {
  const { isLoading, data, isError, error } = useQuery('plans', () => {
    return axios.get('http://localhost:3000/test')
  })

  if (isLoading) {
    return (
      <>
        <div className='loader'>
          <TailSpin color='#00BFFF' height={80} width={80} />
          <Typography variant='h6'>Waiting for Api Responce</Typography>
        </div>
      </>
    )
  }
  if (isError) {
    return (
      <>
        <Typography variant='h5'>{error.message}</Typography>
      </>
    )
  }

  return (
    <>
      {data.data.map((hero) => {
        return (
          <>
            <BasicCard data={hero} />
          </>
        )
      })}
    </>
  )
}

export default HomeScreen
