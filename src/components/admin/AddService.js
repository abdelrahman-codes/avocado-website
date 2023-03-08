import React, { useState } from 'react'
import styled from 'styled-components';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import { set } from '../../slices/serviceArrSlice'
import { useDispatch } from 'react-redux';


const AddService = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [titleAr, setTitleAr] = useState("")
    const [desc, setDesc] = useState("")
    const [descAr, setDescAr] = useState("")

    const [loading, setLoading] = useState(false)
    const [saved, setSaved] = useState(false)

    const addService = async () => {
        if (title !== "" && desc !== "" && descAr !== "" && titleAr !== "") {
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}service`, {
                title, titleAr, desc, descAr
            });
            dispatch(set(data.service))
            setLoading(false)
            setSaved(true)
            setTimeout(() => {
                setSaved(false)
            }, "5000");

        }
    }


    return (
        <Section className="container-fluid">
            <Container>
                <Lable>عنوان الخدمة</Lable>
                <Input className="form-control" onChange={(e) => setTitleAr(e.target.value)} />
                <Lable> الوصف</Lable>
                <Input className="form-control" onChange={(e) => setDescAr(e.target.value)} />
                <Lable>title</Lable>
                <Input className="form-control" onChange={(e) => setTitle(e.target.value)} />

                <Lable> description</Lable>
                <Input className="form-control" onChange={(e) => setDesc(e.target.value)} />

                {saved &&
                    <div className="d-flex justify-content-center my-2">
                        <h6 style={{ color: "green" }}>تم الحفظ</h6>
                    </div>
                }

                <div className="d-flex justify-content-end">
                    <Button className='my-2 ' onClick={addService}>{loading ? "تحميل..." : "حفظ"}</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddService;
const Section = styled.div`
display: flex;
justify-content: flex-end;
margin: 30px 0px;
background-color: #DCDCDC;
border-radius:25px;
padding-bottom: 20px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 50%;
@media (max-width: 1000px) {
width: 75%;
}
@media (max-width: 500px) {
width: 85%;
}
@media (max-width: 400px) {
width: 95%;
}
@media (max-width: 360px) {
width: 100%;
}
`;

const Lable = styled.h6`
width: 100%;
text-align: right;
padding-right: 15px;
margin-top: 20px;
`;
const Input = styled.input`
border-radius: 15px;
`;

const Button = styled.button`
background-color:#00000080;
padding:7px 20px ;
margin-right: 10px;
border-radius: 15px;
border: none;
`;

const MainButton = styled.button`
border: none;
padding:50px;
border-radius:50px;
width: 100%;
margin-bottom: 20px;
`;
const ImageContainer = styled.div`
width: 100%;
`;
const BtnContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`;
const ButtonImg = styled.button`
border: none;
border-radius: 5px;
margin:5px;
width: 100%;
`;
const Img = styled.img`
height: 250px;
width: 100%;
border-radius: 25px;
margin-bottom: 20px;
margin-top: 20px;
`;