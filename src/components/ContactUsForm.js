import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';

const ContactUsForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [saved, setSaved] = useState(false);

    const contactUs = async () => {
        if (name === "" || email === "" || country === "" || phone === "" || content === "") {
            setError(true)
        } else {
            setError(false)
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}contact-us`, {
                name, email, country, phone, content,
            });
            setSaved(true)
        }
        setLoading(false)
    }

    return (
        <Form>
            <Input className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <Input className="form-control" placeholder="Phone" type="number" onChange={(e) => setPhone(e.target.value)} />
            <Input className="form-control" placeholder="Countery" onChange={(e) => setCountry(e.target.value)} />
            <Input className="form-control" placeholder="Email" type="Email" onChange={(e) => setEmail(e.target.value)} />
            <Area className="form-control" placeholder="Message content" rows="7" onChange={(e) => setContent(e.target.value)} />
            {error && <Message >Please fill all fields</Message>}
            {saved
                ? "We will contact you soon!"
                : <Button
                    onClick={contactUs}
                >{loading ? "loading" : "Send"}</Button>
            }
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
const Area = styled.textarea`
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
const Message = styled.h6`
 color: red;
 `