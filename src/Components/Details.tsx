import React from 'react'
import Image from './Image'
import '../Style/detail.css'
import { MovieType, TvShowType } from '../Types'

const Details: React.FC<{ data: MovieType & TvShowType }> = ({ data }) => {
  const firstRelease = data.first_air_date ? `First release:${data.first_air_date}` : ''
  return (
    <div className="detail-container">
      {data.videos && data.videos.results && data.videos.results.length ? (
        <iframe  src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
        title={`${data.videos.results[0].key}`}
        />
      ) : (
        <Image source={data.poster_path} />
      )}

      <h1>{data.original_title ? data.original_title : data.original_name}</h1>
      {firstRelease ? (
        <div>
          <h2>{firstRelease}</h2>
          <p>{data.overview}</p>
        </div>
      ) : (
        <p>{data.overview}</p>
      )}
    </div>
  )
}

export default Details
