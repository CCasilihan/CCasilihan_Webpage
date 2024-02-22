import * as React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import "./Card.jsx";
import backgroundImage1 from './images/fam2.jpg';
import backgroundImage2 from './images/bros.jpg'; 
// import backgroundImage3 from './images/best.jpg'; 
import backgroundImage4 from './images/Vball.jpg'; 
import backgroundImage5 from './images/Bike.jpg'; 
import backgroundImage6 from './images/lambo.jpeg'; 


function About() {
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
        <h1>Welcome to My World</h1>
        <p>
        Hello and welcome! I'm thrilled you've stopped by to 
        learn a little bit more about me.
        </p>
        <p>
        My name is Charisse Casilihan, and I'm a 3rd Year College Student at Naga College Foundation
        based in San Fernando Camarines Sur. Here on this page,
        I aim to give you a glimpse into my world - my journey, 
        passions, and what makes me tick.
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
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>My Family</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/media/set/?set=a.1519169328626235&type=3" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View</a>
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
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>My Siblings</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/media/set/?set=a.1431040264105809&type=3" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View</a>
    </div>
  </Card.Body>
</Card>

        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage3})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>My BestFriend</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    {/* </Card.Text> */}
    {/* <div style={{ textAlign: 'right' }}> */}
      {/* Updated button with a link */}
      {/* <a href="https://www.facebook.com/media/set/?set=a.786818871861288&type=3" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View</a>
    </div>
  </Card.Body>
</Card> */}

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
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>My Sports</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/photo/?fbid=1482881782254990&set=a.1322868681589635" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View</a>
    </div>
  </Card.Body>
</Card>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage5})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>My Hobbies</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/media/set/?set=a.773728576503651&type=3" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View</a>
    </div>
  </Card.Body>
</Card>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card style={{ 
  width: '60rem', 
  marginRight: '20px', 
  marginBottom: '40px',
  backgroundImage: `url(${backgroundImage6})`,
  backgroundSize: 'cover'
}}>
  <Card.Body>
    <Card.Title style={{ color: 'white', fontWeight: 'bold' }}>My Dream</Card.Title>
    <Card.Text style={{ color: 'white', fontWeight: 'bold' }}>
      {/* Adding some line breaks to create space */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </Card.Text>
    <div style={{ textAlign: 'right' }}>
      {/* Updated button with a link */}
      <a href="https://www.facebook.com/photo/?fbid=5478063978876981&set=p.5478063978876981" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View</a>
    </div>
  </Card.Body>
</Card>
        {/* Repeat for other cards... */}
      </div>
     </div>
     </div>
     </div>
     </div>
   </div>
 </div>
 </div>
 </div>
</div>
// </div>
// </div>



  );
}

export default About;

  
