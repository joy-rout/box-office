/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
import swal from 'sweetalert'
import './Contact.style.css'


const Alert= () => {
    swal("Your Message has been saved!", "THANK YOU");
  } 
  

function Contact() {
  return (
    <div>
            <section className="contact section" id="contact">
          <div className="container">
          <div className="row">
              <div className="section-title padd-15">
                <h2>Contact Me</h2>
              </div>
            </div>
            <h3 className="contact-title padd-15"> DO YOU HAVE ANY QUERIES ??</h3>
            <h4 className="contact-sub-title padd-15"> I'AM AT YOUR SERVICE ..</h4>
            <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-phone" /></div>
              <h4>Call Us On</h4>
              <p>+91 96588 71890</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-map-marker-alt" /></div>
              <h4>Home</h4>
              <p>Bhubaneswar</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-envelope" /></div>
              <h4>Email</h4>
              <p>jamejon15@gmail</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-globe-europe" /></div>
              <h4>Website</h4>
              <a href="https://gleaming-pony-3c3486.netlify.app/">Click Here</a>
            </div>
            </div>
            <h3 className="contact-title padd-15"> DROP ME A MAIL ..</h3>
            <h4 className="contact-sub-title padd-15">I RESPOND TO MAILS ASAP</h4>

            <div className="row">
              <div className="contact-form padd-15">
                <div className="row">
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                  </div>
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <textarea className="form-control" placeholder='Message' />
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <button type='submit'  onClick={Alert} className="btn">Drop Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact