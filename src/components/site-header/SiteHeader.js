import React, { Component } from 'react'

export class SiteHeader extends Component {

  constructor(props){
    super(props)
    // this.state = {
    //   siteName: 'Music system'
    // }
  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({
    //     siteName: 'Music system 2'
    //   })
    // },3000)
  }

  render() {
    return (
      <div>
        <div>
          {/*<h1>{this.state.siteName}</h1>*/}
          <h1>{this.props.siteName}</h1>
        </div>
      </div>

    )
  }
}


export class SiteFooter extends Component {
  render() {
    return(
      <div>
        This is the footer
      </div>
    )
  }
}