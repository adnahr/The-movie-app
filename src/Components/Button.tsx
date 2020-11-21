import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import backButton from '../Pictures/back_logo.png'

const Button: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <button className="back-button" onClick={() => history.go(-1)} type="button">
      <img src={backButton} alt="Back" />
    </button>
  )
}

export default withRouter(Button)
