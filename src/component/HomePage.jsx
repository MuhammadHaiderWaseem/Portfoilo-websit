import React, { useEffect, useRef } from 'react'
import pdf from './pdf/resume.pdf'
import hero from './data/hero.json'
import { aa, bb, gg, Haider } from './images'
import Typed from 'typed.js'

export const HomePage = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Muhammad Haider Waseem",
        "I'am a Front End Developer in (React.JS)"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="container home" id='home' >
        <div className="left"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef} >

          </h1>
          <a href={pdf} download="resume.pdf" className="a btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
          <div className="img"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img src={Haider} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
