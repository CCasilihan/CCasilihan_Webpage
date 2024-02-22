import * as React from "react";
import Card from 'react-bootstrap/Card';

import backgroundImage1 from './images/rar.jpg'; 
import backgroundImage2 from './images/SFNHS.jpg'; 
import backgroundImage3 from './images/SFNHS.jpg'; 
import backgroundImage4 from './images/sfcs.png'; 

function Education() {
  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

      <div className="content" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh', 
        backgroundSize: 'cover'
      }}>

    <h1>Welcome to my Educational Journey!</h1>
        <p>
        I dedicated to sharing my educational experiences, insights, and resources. 
        Throughout this platform, I aim to provide a glimpse into my 
        educational journey, featuring reflections on my learning experiences and 
        tips for academic success.
        </p>
        <p>
        Together, let's embark on a journey to discover the joys of lifelong learning, 
        exchange ideas, and foster a community dedicated to knowledge sharing and growth. 
        Thank you for visiting, and I hope you find inspiration and value in the content shared here.
        </p>
        </div>

        <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage1})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>College</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link and background color */}
      <a href="https://www.facebook.com/nagacollegefoundation1947" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', width: 'auto', height: '20px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
    </div>
  </Card.Body>
</Card>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage2})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>Senior High School</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/sanfernandonhs1966" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
    </div>
  </Card.Body>
</Card>



    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage3})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>Junior High School</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/sanfernandonhs1966" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
    </div>
  </Card.Body>
</Card>



        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage4})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>Elementary</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/sfcentralschool" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
    </div>
  </Card.Body>
</Card>

      
     </div>
   </div>
 </div>
 </div>
 </div>
</div>
</div>
</div>



  );
}

export default Education;

  
