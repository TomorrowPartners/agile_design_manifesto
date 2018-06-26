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
    console.log("eye click");
    console.log(this.state.isToggleOn);

    /*this.setState( prevState => {
      isToggleOn: !prevState.isToggleOn
    })*/



      console.log(this.state.isToggleOn);
      if(!this.state.isToggleOn ){

        this.setState({
          isToggleOn: true,
          copyState:{border:"0px solid red"},
          activeClass:"on"
        })

        console.log(this.state.isToggleOn);

      } else {
        this.setState({
          isToggleOn: false,
          copyState:{border:"0px solid red"},
          activeClass:"off"
        })

      }
  }

  render(){
      console.log()
    return(
  <div  onMouseEnter={() => this.handleClick() } onMouseLeave={() => this.handleClick() } className="principle" style={{backgroundColor:this.props.post.frontmatter.color}}>
      <div className="container-fluid">
        <div className="col-8 offset-2">
    <div dangerouslySetInnerHTML={{ __html:this.props.post.html}} style={this.state.copyState} className={this.state.activeClass}/>
    </div>
    </div>
  </div>
)
}
}



export default PostLink;
