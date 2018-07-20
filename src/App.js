import React, { Component } from 'react';
import './App.css';
import SiteHeader from "./components/site-header/SiteHeader"
import AlbumCard from "./components/album-card/AlbumCard"


const albums = [
  {
    id: 1,
    name: 'Dhadak',
    image: "https://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg",
    songs: [
      {
        id: 1,
        name: 'some name',
        musicFile: 'https://some.mp4'
      }
    ]
  },
  {
    id: 2,
    name: 'Sanju',
    image: "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
  },
  {
    id: 3,
    name: 'Bahubali',
    image: "https://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg"
  }
]

class App extends Component {



  componentDidMount(){

    const album = {
      name: 'Bahubali'
    }

    function test1(album){
      console.log(album.name)
    }

    const test2 = (album) => {
      console.log(album.name)
    }


    // test2(album)



  }


  render() {
    return (
      <div>
        <SiteHeader/>
        <div className="container">
          <div className='row'>
            {albums.map((album) => {
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

export default App;
