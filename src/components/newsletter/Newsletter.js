import React from 'react'
import './Newsletter.scss';
import { Send } from '@mui/icons-material'

export const Newsletter = () => {
  return (
    <div className='container-news'>
        <h1 className='title-news'>Subscríbete!</h1>
        <div className='description-news'>Recibe noticias sobre descuentos y ofertas!</div>
            <div className='input-container'>
                <input placeholder='email' />
                <button className='button-news'><Send /></button>
            </div>
    </div>
  )
}

export default Newsletter;