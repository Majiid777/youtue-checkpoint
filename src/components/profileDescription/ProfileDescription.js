import React from 'react'
import { Accordion, Button, ButtonGroup, NavDropdown } from 'react-bootstrap'
import { AiOutlineDislike, AiOutlineLike, AiOutlineScissor } from 'react-icons/ai'
import {BiShare} from  'react-icons/bi'
const channel = {
    imageurl:"https://jamaity.org/wp-content/uploads/2022/05/gomycode.jpg",
    channelName:"GoMyCode",
    subNum:"100k"
}


const ProfileDescription = () => {
  return (
    <div style={{width:"730px"}}>

    
    <div  style={{display:"flex",width:"730px", justifyContent:"space-between"}}>
        <div style={{display:"flex", width:"250px", justifyContent:"space-between"}} id='container-profile'>
        <img style={{width:"30px",height:"30px", borderRadius:"100%"}} src={channel.imageurl} alt='profImg'></img>
        <div>
            <h4 style={{fontSize:"14px"}}>{channel.channelName}</h4>
            <p style={{fontSize:"12px"}}>{channel.subNum}</p>
        </div>
        <Button  style={{height:"40px"}} variant="light">S'abonner</Button>
         </div> 
         <div id='viewer-reaction' style={{display:"flex",width:"380px",height:"40px", justifyContent:"space-evenly"}}>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary"><AiOutlineLike/> 12k</Button>
            <Button variant="secondary"><AiOutlineDislike/></Button>
          </ButtonGroup>
          <Button variant="secondary"><BiShare/> Partager</Button> 
          <Button variant="secondary"><AiOutlineScissor/> Extrait</Button>

           <NavDropdown style={{backgroundColor:"#6C757D", borderRadius:"8px", width:"40px",height:"40px"}} title="..." id="navbarScrollingDropdown">
              < NavDropdown.Item href="#action3">Historiques</ NavDropdown.Item>
              < NavDropdown.Item href="#action4">
                Enregistrer
              </ NavDropdown.Item>
              < NavDropdown.Item href="#action3">Signaler</ NavDropdown.Item>
              
              < NavDropdown.Item href="#action5">
                .....
              </NavDropdown.Item>
            </NavDropdown>      
         </div>
        
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default ProfileDescription