import React from 'react'
import Link from 'gatsby-link'
import {css} from 'glamor';
import logo from '../imgs/logo_tomorrow.svg';


let page_title = css(
  {
    'font-family': "Tiempos-Bold",
    'font-size': '6.8rem'
  },
  {
    '@media(max-width: 1140px)':
    {
      'font-size': '5.8rem',
      'margin':'4rem 0 4rem 0'
    }
  },
    {
      '@media(max-width: 992px)':
      {
        'font-size': '4.8rem',
        'margin':'2rem 0 2rem 0'
      }
    },
  {
    '@media(max-width: 768px)':
    {

    }
  },
{
    '@media(max-width: 576px)': {
      'font-size': '4rem',
      'margin':'2rem 0 2rem 0'
    }
  }


)
const Header = ({ siteTitle }) => (


<div className="container-fluid">
  <div className="row">
    <div className="col-12 col-sm-10 offset-sm-1 col-lg-9 offset-lg-1 col-xl-7">
        <img  className="logo" src={logo} />
        </div>
  </div>
  <div className="row">
  <div className="col-11 col-sm-10 offset-sm-1 col-lg-9 offset-lg-1 col-xl-7 offset-xl-2">

    <div className="page-title">
        <h1 {...page_title}>

              Manifesto for Agile <span className="blue">Design and</span> Development

            </h1>
      </div>
    </div>
  </div>
</div>

)

export default Header
