import React from 'react'
import './style.scss'

function Section4() {
  return (
    <div className="section-4 ">
      <div className="section-4-content container-pub">
          <h2 className="heading">
            <span className='title'>Contact</span>
            <span className='des'>abcd</span>
          </h2>
          <div className="form">
            <form action="">
              <div className="field">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" placeholder='Enter your name'/>
              </div>
              <div className="field">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" placeholder='Enter your email'/>
              </div>
              <div className="field">
                <label htmlFor="">Email</label>
                <textarea name="" id="" cols={30} rows={10} placeholder='Enter your message'></textarea>
              </div>
              <button className='btn-contact'>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Section4