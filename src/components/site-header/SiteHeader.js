import React, { Component } from 'react'
import './site-header.css'

export default class SiteHeader extends Component {

  render() {
    return (
      <div className='site-header'>
        <i className="material-icons">
          library_music
        </i>
        <span className='site-name'>
          My Music
        </span>
      </div>

    )
  }
}

