import React, { Component } from 'react';
import Link from "gatsby-link";
import icon_eye from '../imgs/icon_eye.svg';
import icon_closed_eye from '../imgs/icon_closed_eye.svg';


class Principle extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false,
      copyState:{border:"0px solid red"},
      closedEyeState:{display:"none"},
      openEyeState:{display:"block"}
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
          activeClass:"on",
          closedEyeState:{display:"block"},
          openEyeState:{display:"none"}
        })


      } else {
        this.setState({
          isToggleOn: false,
          copyState:{border:"0px solid red"},
          activeClass:"off",
          closedEyeState:{display:"none"},
          openEyeState:{display:"block"}
        })

      }
  }

  render(){
    console.log(this.props.index)
    return(
  <div className="principle" style={{backgroundColor:this.props.post.frontmatter.color}}>
      <div className="container-fluid">
            <div className="row">


              <div className="offset-2 col-lg-9 offset-lg-2 col-xl-7 offset-xl-2">
                  <div className="number">{this.props.index}</div>
              </div>
              </div>
          <div className="row">
            <div className="col-2 col-lg-1 offset-lg-1">
              <div className="eye_container"  style={{border:`1px solid ${this.props.post.frontmatter.color}`}} onMouseEnter={() => this.handleClick() } onMouseLeave={() => this.handleClick() }>
                <img className="eye_icon"  src={icon_eye} style={this.state.openEyeState}/>
                <img className="eye_icon_closed" src={icon_closed_eye} style={this.state.closedEyeState}/>
              </div>
            </div>
        <div className="col-9 col-lg-9 col-xl-7">
            <div dangerouslySetInnerHTML={{ __html:this.props.post.html}} style={this.state.copyState} className={this.state.activeClass}/>
          </div>
        </div>
    </div>
  </div>
)
}
}



export default Principle;
