import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <Link to = "/">
            <div>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png'
                        alt=''
                        className='img-top'
                        />
                </div>
                <div>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/198._TTD_.jpg'
                        alt=''
                        className='img-bottom'
                        />
            </div>
        </Link>
      
    </div>
  )
}

export default NotFound
