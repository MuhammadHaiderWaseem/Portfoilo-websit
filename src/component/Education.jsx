import React from 'react'
import { bb, college, school, uni } from './images'
import experience from './data/experience.json'

const Education = () => {
  return (
    <>
      <div>
        <h1 className='exp' id='education' >EDUCATION</h1>
      </div>
      <div className='exboxone'
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className='unipic' >
          <img src={uni} width='120px' />
        </div>
        <div className='righttext' >
          <h2>ADP Computer Science</h2>
          <h3><span>University Of Punjab</span></h3>
          <h4>Continue</h4>
        </div>
      </div>
      <div className='exboxone'
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className='colpic' >
          <img src={college} width='100px' height="80px" />
        </div>
        <div className='righttext' >
          <h2>Intermediate</h2>
          <h3><span>Aspire College Pattoki</span></h3>
          <h4> 2020 to 2022 </h4>
        </div>

      </div><div className='exboxone'
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className='scpic' >
          <img src={school} width='100px' />
        </div>
        <div className='righttext' >
          <h2>Matriculatiuon</h2>
          <h3><span>First Nation School Pattoki</span></h3>
          <h4>2007 to 2020</h4>
        </div>
      </div>
    </>
  )
}

export default Education