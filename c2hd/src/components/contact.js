// import './index.scss'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
// import emailjs from '@emailjs/browser'
// import { MapContainer, TileLayer, Marker} from 'react-leaflet'



const Contact = () => {

  const refForm = useRef()



  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs
    //   .sendForm(
    //     'service_qexfzem',
    //     'template_z2uigvc',
    //     refForm.current,
    //     'USYJzVW1eY88G4eMQ'
    //   )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">

          <p>
          Are you in need of a professional for your plumbing or furniture assembly needs?
        Look no further! Contact me for all of your installation, repair, and maintenance needs.
        I am reliable, efficient, and always happy to answer any questions you may have.
        Don't hesitate to reach out for a quote or consultation today.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Rick Szeto
          <br />
          California
          <br />
          Los Angeles <br />
          <br />
          <br />
          <span>c2yp@gmail.com</span>
        </div> */}
        {/* <div className="map-wrap">
          <MapContainer center={[34.0392359,-118.2662891]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[34.0392359,-118.2662891]}>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
    </>
  )
}

export default Contact
