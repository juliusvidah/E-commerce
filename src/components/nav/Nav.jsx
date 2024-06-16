import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss';
import { useRecoilValue } from 'recoil';
import { cartNumber } from '../atoms/Cart';
import { navGroup1, navGroup2 } from './navData';
import { Image, Transformation } from 'cloudinary-react';
import { cloudName, logo } from '../cloudimages/Cloud';


const Nav = () => {
  let cart = useRecoilValue(cartNumber);
  let [toggle,setToggle] = useState(false);


  function handleToggle() {
    setToggle((prev)=> !prev);
  }

  useEffect(()=>{
     window.addEventListener('click',(e)=>{
      // console.log(e.target.className)
      if(!String(e.target.className).includes('menu')) {
        setToggle(false)
      }
     })
  },[])


  return (
    <div id ='Nav'>
        <ul>
            <li className='logo'> <Link to='/'>    <Image cloudName={cloudName} publicId={logo.logo1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
            </Link>Furniro</li>
            {/* <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/shop'>Shop</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to='/blog'>Blog</Link></li>
            <li> <Link to='/contact'>Contact</Link></li> */}
           <li className='group1'>
           {
              navGroup1.map(each=>(
                <Link key={each.id} to={each.path}> {each.text} </Link>
              ))
            }
           </li>
           <li className='group2'>
           {
              navGroup2.map(each=>(
              <img key={each.id} src={each.text} alt='icon1' />
              ))
            }
             {/* <span> Cart[{cart}] </span> */}
           </li>

           <li onClick={(e)=> handleToggle()} className="menu">
            &#9776;
           </li>
        </ul>
        <div style={{display: toggle?'block':  'none'}} className="popup">
        <li className='group1'>
           {
              navGroup1.map(each=>(
                <Link onClick={(e)=> handleToggle()} key={each.id} to={each.path}> {each.text} </Link>
              ))
            }
           </li>
           <li className='group2'>
           {
              navGroup2.map(each=>(
                // <Link onClick={(e)=> handleToggle()} to={each.path}> {each.text} </Link>
                <img key={each.id} src={each.text} alt='icon' />
              ))
            }
             <span> Cart[{cart}] </span>
           </li>
        </div>
    </div>
  )
}

export default Nav