import React from 'react'
import './style.scss'

function Section4() {
  return (
    <div className="section-4 ">
      <div className="section-4-content container-pub">
          <h2 className="heading">
            <span className='title'>Liên Hệ</span>
            <span className='des'>Hãy liên hệ với tôi bằng cách gửi biểu mẫu bên dưới và tôi sẽ trả lời bạn sớm nhất có thể</span>
          </h2>
          <div className="form">
            <form action="">
              <div className="field">
                <label htmlFor="">Tên</label>
                <input type="text" name="" id="" placeholder='Vui lòng nhập tên của bạn'/>
              </div>
              <div className="field">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" placeholder='Vui lòng nhập Email của bạn'/>
              </div>
              <div className="field">
                <label htmlFor="">Lời nhắn</label>
                <textarea name="" id="" cols={30} rows={10} placeholder='Để lại lời nhắn ở đây'></textarea>
              </div>
              <button className='btn-contact'>Gửi</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Section4