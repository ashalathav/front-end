import React, { Component } from 'react'
import './album-card.css'

export default class AlbumCard extends Component {

  playAlbum = () => {

  }

  render(){
    return(
      <div className='album-card'>
        <img className='image' src={this.props.album.image} alt=""/>
        <div className='content'>
          <p className='name'>
            {this.props.album.name}
          </p>
        </div>
      </div>
    )
  }
}