import React from 'react'
import skills from './data/skills.json'
import Aos from 'aos'
import { bootstrap, css, html, javascript, json, react } from './images'

const Skils = () => {
  return (
    <>
      <h1 className='skilsheading' >
        SKILLS
      </h1>
      <div className='maincontainer' id='skils' >
        <div className='haider'>
          <div className='skillsdiv' data-aos="flip-left">
            <img src={html} style={{ width: '90px', height: '100px', marginLeft: '90px', marginTop: '25px' }} />
            <h3 className='imgdata'>HTML</h3>
          </div>
          <div className='skillsdiv' data-aos="flip-right">
            <img src={css} style={{ width: '90px', height: '100px', marginLeft: '90px', marginTop: '25px' }} />
            <h3 className='imgdata'>CSS</h3>
          </div>
        </div>
        <div className='haider' >
          <div className='skillsdiv' data-aos="flip-left">
            <img src={javascript} style={{ width: '90px', height: '100px', marginLeft: '90px', marginTop: '25px' }} />
            <h3 className='imgdata'>JAVASCRIPT</h3>
          </div>
          <div className='skillsdiv' data-aos="flip-right">
            <img src={bootstrap} style={{ width: '90px', height: '100px', marginLeft: '90px', marginTop: '25px' }} />
            <h3 className='imgdata'>bootstrap</h3>
          </div>
        </div>
        <div className='haider' >
          <div className='skillsdiv' data-aos="flip-left">
            <img src={react} style={{ width: '90px', height: '100px', marginLeft: '90px', marginTop: '25px' }} />
            <h3 className='imgdata'>REACT</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skils