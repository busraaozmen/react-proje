import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tabs, Tab} from "react-bootstrap";

import {useState} from 'react';

function Bootstrap() {

    const [key , setKey] = useState('home')
   return (
    <>
      <Button>Button</Button>
      <Button variant="success" >Button</Button>
<br/>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}onDragLeaveCapture
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
       <div>Home</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <div>Profile</div>
      </Tab>
      <Tab eventKey="demo" title="Demo" >
      <div>Demo</div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      <div>Contact</div>
      </Tab>
    </Tabs>
    </>
  );
}
export default Bootstrap;

// const Bootstrap = () => {
//  bu şekildede kullana biliriz.
// }
// export default Bootstrap
