import React from "react";
import Link from "gatsby-link";
import {css} from 'glamor';

let intro = css(
  {
  'font-size': '2.8rem',
  'margin': '0 0 20rem 0',

  '& p' : {'margin':'4rem 0 4rem 0'}
},
{
  '@media(max-width: 992px)':
  {
      'margin': '0 0 10rem 0',
      'font-size': '2.4rem'

  }
},
{

    '@media(max-width: 768px)': {
        'margin': '0 0 10rem 0',
      'font-size': '2rem',
        '& p' : {'margin':'3rem 0 3rem 0'}
    }
  },
{

    '@media(max-width: 576px)': {
      'margin': '0 0 5rem 0',
      'font-size': '1.8rem',
      'line-height':'2.2rem',
        '& p' : {'margin':'0rem 0 2rem 0'}
    }
  }

)

const Intro = () => (
  <div className="container-fluid">
    <div className="row">
    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
  <div {...intro}>

  <p>
  Software drives every sphere of society, yet our processes are still leading to failures, some with serious consequences. We need to stop iterating solely for the sake of iterating, and instead iterate based on learning. From these failures, we designers, technologists, product and service leaders propose the Manifesto for Agile Design and Development, an attempt to make the agile process
laser-focused on product vision and user needs.
</p>

<p>
We are uncovering better ways of creating human-centered
products and services by doing it and helping others do it.
Through this work we have come to value:
</p>

<p>
Individuals and interactions over processes and tools
Building the right product over building the product right
Delivering iterations over comprehensive pre-planning
Customer collaboration over contract negotiation
Discovering customer needs over pre-determining a solution
Responding to change over following a plan
</p>
  </div>
  </div>
  </div>
  </div>
);

export default Intro;
