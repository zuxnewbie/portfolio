import React from 'react'
import './style.scss'
import Link from 'next/link'
function Section2() {
  return (
    <section className="section-2 ">
      <div className="section-2-content container-pub">
        <div className="about-me">
          <span className='title'>About Me</span>
          <span className='sub'>Tại đây bạn sẽ tìm thấy thêm thông tin về tôi, những gì tôi làm và các kỹ năng hiện tại của tôi chủ yếu về lập trình và công nghệ</span>
        </div>
        <div className="info-skill">
          <div className="infos">
            <h3>Get to know me!</h3>
            <div className='des'>
              <p>Tôi là một <strong>Frontend Developer</strong>, chuyên xây dựng và tối ưu giao diện người dùng cho các trang web và ứng dụng, góp phần quan trọng vào sự thành công của sản phẩm. Bạn có thể xem một số dự án tiêu biểu của tôi trong phần Dự án.</p>
              <p>Bên cạnh công việc phát triển, tôi cũng đam mê chia sẻ những kiến thức và kinh nghiệm tích lũy được trong hành trình <strong>Web Development</strong>. Tôi hy vọng những nội dung này có thể giúp ích cho cộng đồng lập trình viên. Bạn có thể kết nối hoặc theo dõi tôi trên <Link href={'https://fb.com/zux.004'} target='_blank' className=''>Facebook</Link> và <Link href={'https://instagram.com/zux.04'} target='_blank'>Instagram</Link>.</p>
              <p>Hiện tại, tôi sẵn sàng đón nhận những cơ hội mới, nơi tôi có thể đóng góp, học hỏi và phát triển hơn nữa. Nếu bạn có một vị trí phù hợp với kỹ năng và kinh nghiệm của tôi, đừng ngần ngại liên hệ!</p>
            </div>
            <Link href={'https://fb.com/zux.004'} className='btn-ct'>
              Contact
            </Link>
          </div>
          <div className="skills">
            <h3></h3>
            <div className="list">
              <div className='knowledge'>HTML</div>
              <div className='knowledge'>SCSS/CSS</div>
              <div className='knowledge'>JS</div>
              <div className='knowledge'>React</div>
              <div className='knowledge'>Responsive Design</div>
              <div className='knowledge'>NextJS</div>
              <div className='knowledge'>NestJS</div>
              <div className='knowledge'>Node/Express</div>
              <div className='knowledge'>MongoDb/Mysql</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2