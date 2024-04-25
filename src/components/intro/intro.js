import React from 'react'
import './intro.css';
import bg from '../../assets/wasik.jpeg'
import btnimg from '../../assets/hire me.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
      <section id='intro' >
      <div className='introContent'>
        <span className='hello'> Asalamuallikum  </span>
<span className='introtext' > I'm <span className='introname'>Wasik Rehman</span> <br />Website Designer</span>
<p className='intropara'>I am a Skilled Web Designer with Experience in Creating <br></br>Visual appealing & user freindly Websites </p>
   <Link><button className='btn'><img src={btnimg} alt='' className='btnim' /></button></Link>
      </div>
<img src={bg} alt='wasik' className='bg'/>
      </section>
      

    )
}
export default Intro;