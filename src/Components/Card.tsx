import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/card.css'
import Image from './Image'
import { MovieType, TvShowType } from '../Types'

const Card: React.FC<{ details: MovieType & TvShowType }> = ({ details }) => {
  return (
    <div>
      {details.original_title ? (
        <Link to={`/movies/${details.id}`}>
          <div className="card">
            <Image source={details.poster_path} />
            <h1>
              <b>{details.original_title}</b>
            </h1>
          </div>
        </Link>
      ) : (
        <Link to={`/tvshows/${details.id}`}>
          <div className="card">
            <Image source={details.poster_path} />
            <h1>
              <b>{details.original_name}</b>
            </h1>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Card
