import React from "react";
import "./team.css"
import  Sameer  from "../../assets/faizan (2).jpeg";
import  Faizan  from "../../assets/faizan (1).jpeg";
import Umar from "../../assets/WhatsApp Image 2024-04-17 at 2.43.20 AM.jpeg" 
const Team = () => {
return (
    <section id="work">
        <h2 className="workstitle"> My Team</h2>
<span className="workdesc"> Welcome to E-Verse Solution , where innovation meets excellence in web development! As a passionate team of developers, designers, and digital strategists, we are dedicated to crafting exceptional digital experiences tailored to meet your unique needs.</span>
  <span className="workdes"><br></br>With years of combined experience and a deep-rooted passion for all things web, we specialize in creating cutting-edge websites, scalable web applications, and intuitive user interfaces that leave a lasting impression. Whether you're a startup seeking to establish your online presence or an established enterprise looking to elevate your digital footprint, we have the expertise and creativity to bring your vision to life. <br></br>Our services encompass a wide range of web development solutions, including</span>
    <li>Custom website development</li>
    <li>E-commerce solutions</li>
    <li>Content management systems (CMS)</li>
    <li>Mobile-responsive design</li>
    <li>Web application development</li>
    <li>User experience (UX) design</li>
    <li>Search engine optimization (SEO)</li>
    <div className="sam">
    <div className="workimmg">
   <img  className="samimg" src={Faizan} alt=" Faizan Ahmad"></img>
   <p className="teamdesc">Greetings! I'm Faizan Ahmad , a passionate front-end developer with a keen eye for detail and a knack for crafting captivating digital experiences. With proficiency in HTML, CSS, SASS, and React, I specialize in bringing designs to life and creating seamless user interfaces that engage and inspire <br></br>Whether you're launching a new venture, refreshing your online presence, or seeking to enhance user engagement, I'm here to help you realize your vision and elevate your digital presence to new heights. Let's collaborate and create something extraordinary together!</p>
   </div>
   </div>
   <div className="sam">
   <img className="samimg" src={Sameer} alt=" Sameer Khan"></img>
   <p className="teamdesc">Hello there! I'm Sameer Qureshi, a backend developer with a passion for building robust and scalable digital solutions. Armed with a versatile toolkit that includes JavaScript, C++, Python, and expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in architecting and implementing server-side logic that powers dynamic web applications.<br></br> Whether you're launching a new venture, scaling your existing platform, or tackling complex technical challenges, I'm here to provide the backend expertise you need to succeed. Let's collaborate and transform your ideas into reality!</p>
   </div>
   <div className="sam">
   <img className="samimg" src={Umar} alt=" Sameer Khan"></img>
   <p className="teamdesc">Greetings! I'm Umar Asif, a seasoned database management professional proficient in MySQL, MongoDB, Oracle, and various other database technologies. With a wealth of experience in designing, implementing, and optimizing database systems, I specialize in ensuring data integrity, security, and scalability for businesses of all sizes. <br></br> Whether it's managing large volumes of structured data in traditional SQL databases or harnessing the flexibility of NoSQL databases for dynamic and unstructured data, I possess the skills and knowledge necessary to empower businesses to harness the full potential of their data assets.</p>
   </div>

    </section>
    
);
} 
 export default Team