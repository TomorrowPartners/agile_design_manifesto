import React, { Component } from 'react';
import Link from "gatsby-link";

class PostLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false,
      copyState:{border:"0px solid red"}
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){


    /*this.setState( prevState => {
      isToggleOn: !prevState.isToggleOn
    })*/




      if(!this.state.isToggleOn ){

        this.setState({
          isToggleOn: true,
          copyState:{border:"0px solid red"},
          activeClass:"on"
        })


      } else {
        this.setState({
          isToggleOn: false,
          copyState:{border:"0px solid red"},
          activeClass:"off"
        })

      }
  }

  render(){

    return(
  <div  onMouseEnter={() => this.handleClick() } onMouseLeave={() => this.handleClick() } className="principle" style={{backgroundColor:this.props.post.frontmatter.color}}>
      <div className="container-fluid">
            <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div dangerouslySetInnerHTML={{ __html:this.props.post.html}} style={this.state.copyState} className={this.state.activeClass}/>
    </div>
    </div>
    </div>
  </div>
)
}
}



export default PostLink;
