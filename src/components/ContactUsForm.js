import React from 'react'
import styled from 'styled-components';

const ContactUsForm = () => {
  return (
    <Form>
      <Input className="form-control" placeholder="Name" />
      <Input className="form-control" placeholder="Phone" type="number" />
      <Input className="form-control" placeholder="Countery" />
      <Input className="form-control" placeholder="Email" type="Email" />
      <Area className="form-control" placeholder="Message content" rows="7" />
      <Button >Send</Button>
    </Form>
  )
}

export default ContactUsForm

const Form = styled.div`
flex:.6;
display: flex;
flex-direction: column;
align-items:center;
background-color: #858585;
border-radius:20px;
padding: 25px;
@media (max-width: 1000px) {
    padding: 20px;
}
@media (max-width: 770px) {
width: 100%;
margin-bottom: 40px;

}
@media (max-width: 500px) {
    padding: 10px;

}
`;

const Input = styled.input`
margin-bottom: 15px;
width: 85%;
padding: 13px 10px ;
border-radius: 17px;
@media (max-width: 1000px) {
    width: 85%;
}
@media (max-width: 770px) {
    width: 90%;
padding: 10px ;

}
@media (max-width: 500px) {
    width: 95%;
}
`;
const Area = styled.textarea `
margin-bottom: 15px;
width: 85%;
padding: 13px 10px ;
border-radius: 17px;
@media (max-width: 1000px) {
    width: 85%;
}
@media (max-width: 770px) {
    width: 90%;
padding: 10px ;

}
@media (max-width: 500px) {
    width: 95%;
}
`;
const Button = styled.button`
border: none;
border-radius: 20px;
padding:15px 50px;
font-weight: bold;
font-size:16px;
 `;