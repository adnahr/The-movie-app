import React from 'react'
import '../Style/loading.css'

const Loading: React.FC = () => {
  return (
    <div>
      <div className="infinity-loader">
        <div className="bg">
          <div className="left-bg" />
          <div className="right-bg" />
        </div>
        <div className="fg">
          <div className="top-left-rect">
            <div />
          </div>
          <div className="bottom-right-rect">
            <div />
          </div>
          <div className="top-right-rect">
            <div />
          </div>
          <div className="bottom-left-rect">
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
