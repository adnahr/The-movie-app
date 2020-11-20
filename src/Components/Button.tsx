import React from 'react'
import { withRouter } from 'react-router'
import backButton from '../Pictures/back_logo.png'

const Button: React.FC = () => {
  return (
    <button className="backbutton" onClick={() => history.back()}>
      <img src={backButton} alt="Back" />
    </button>
  )
}

export default withRouter(Button)
