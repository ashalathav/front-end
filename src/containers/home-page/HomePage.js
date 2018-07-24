import React, { Component } from 'react'
import axios from "axios"
import SiteHeader from "../../components/site-header/SiteHeader"
import AlbumCard from "../../components/album-card/AlbumCard"

export default class HomePage extends  Component {

  constructor(props){
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/albums')
      .then(response => {
        const albums = response.data.albums
        this.setState({
          albums: albums
        })
      })
  }


  render() {
    return (
      <div>
        <SiteHeader/>
        <div className="container">
          <div className='row'>
            {this.state.albums.map((album) => {
              return (
                <div key={album.id} className='col-sm-12 col-md-6 col-lg-4'>
                  <AlbumCard album={album}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}