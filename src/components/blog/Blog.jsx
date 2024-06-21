import React from 'react'
import './blog.scss'
import { cloudName, mainBlog } from '../cloudimages/Cloud'
import { Image, Transformation } from 'cloudinary-react'

const Blog = () => {
  return (
    <div>
      <div className="mainBlog">

      </div>
      <div className="blog">
    <Image className='blog1' cloudName={cloudName} publicId={mainBlog.blog1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
    <h2 className='blog1'>Going all-in with millennial design</h2>
    <p className='blog1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    <Image className='blog2' cloudName={cloudName} publicId={mainBlog.blog2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
 <h2 className='blog1'>Exploring new ways of decorating</h2>
 <p className='blog1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
 <Image className='blog2' cloudName={cloudName} publicId={mainBlog.blog3}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
 <h2 className='blog1'>Handmade pieces that took time to make</h2>
 <p className='blog1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>
    <div className="pagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                    <span>Next</span>
                    </div>
    </div>
  )
}

export default Blog