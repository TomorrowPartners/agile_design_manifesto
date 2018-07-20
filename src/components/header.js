import React from 'react'
import Link from 'gatsby-link'
import {css} from 'glamor';



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
      'font-size': '3rem',
    }
  },
{
    '@media(max-width: 576px)': {
      'font-size': '3rem',
      'margin':'2rem 0 2rem 0'
    }
  }


)
const Header = ({ siteTitle }) => (
<div className="container-fluid">
  <div className="row">
  <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">

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
