import React from 'react';
import './skills.css'
import Uidesign from "../../assets/uxui2.webp";
import Webpic from "../../assets/webdesign.png";
import Video from "../../assets/video.png";

const Skills = () => {
    return (
<section id='skills'>
<span className='Skilltitle'> What I Do </span>
<span className='skillDesc'>I am Skilled and Passionate Web designer with the Experience in Visually appealing and User-friendly Websites. I Have a strong understanding of design and a keen eye for details. I am proficient in HTML, Css, and Javascript, and React as well as Ux Ui designing like Figma  </span>
<div className='skillbar'>
    <img src={Uidesign} alt='hello' className='skillbarimg' />
    <div className='skillbartext'>
        <h2>UI/UX design</h2>
        <p>I am able to design the interface of your website by using Figma. I have 6 months Experience.</p>
    </div> 
</div>
<div className='skillbar'>
    <img src={Webpic} alt='webpic' className='skillbarimg' />
    <div className='skillbartext'>
        <h2>Website Designer</h2>
        <p> I am able to make your Website responsive and Visually apealling I have made several projects which includes<br></br> Med-Info a Medical website, Travel Blog, E-commerce Website </p>
    </div>
    
</div>
<div className='skillbar'>
    <img src={Video} alt='hello' className='skillbarimg' />
    <div className='skillbartext'>
        <h2>Video Edtior</h2>
        <p>I am Able to edit the videos you make in capcut and Adobe Premiere Rush. I have past 1 year Experience </p>
    </div>
    
</div>
</section>

    )
}
export default Skills;