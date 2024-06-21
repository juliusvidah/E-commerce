import React from 'react'
import './contact.scss'
import { cloudName, contact2 } from '../cloudimages/Cloud'
import { Image, Transformation } from 'cloudinary-react'

const Contact = () => {
  return (
    <div>
      <div className="contact">

      </div>
      <div className='contact1'>
        <h2>Get In Touch With Us</h2>
        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us </p>
        <p>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className="contact2">
   <div className="add">
   <Image className='contact3' cloudName={cloudName} publicId={contact2.vector1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
     <h3>Address</h3>
     <p>236 5th SE Avenue,</p>
     <p> New York NY10000, United States</p>
   </div>
     <Image className='contact3' cloudName={cloudName} publicId={contact2.vector2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
 <h3>Phone</h3>
 <p>Mobile: +(84) 546-6789</p>
 <p>Hotline: +(84) 456-6789</p>
 <Image className='contact3' cloudName={cloudName} publicId={contact2.vector3}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
 <h3>Working Time</h3>
 <p>Monday-Friday: 9:00 - 22:00</p>
 <p>Saturday-Sunday: 9:00 - 21:00</p>
      </div>

    </div>
    
  )
}

export default Contact