import React from 'react'
import { TvShowType } from '../../Types'
import Card from '../Card'

const TvShowList: React.FC<{ tvShows: TvShowType[] }> = ({ tvShows }) => {
  if (tvShows.length === 0) return <div className="no-avaliable-list">No TV Shows avaliable!</div>
  return (
    <div className="containter">
      <div className="list">
        {tvShows.slice(0, 10).map((value, index) => {
          const id = index
          return <Card key={`card-${id}`} details={value} />
        })}
      </div>
    </div>
  )
}

export default TvShowList
