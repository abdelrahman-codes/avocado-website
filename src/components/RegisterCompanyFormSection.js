import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageUploading from 'react-images-uploading';
import { useSelector } from 'react-redux';
const RegisterCompanyFormSection = () => {
    const language = useSelector(state => state.language.value)

    const [images, setImages] = React.useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    const navigate = useNavigate();
    const [answer, setAnswer] = useState([]);
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyType, setcompanyType] = useState("");

    const [sections, setSections] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [error, setError] = useState(false);


    const [details, setdetails] = useState([])
    const [files, setFiles] = useState([])
    const [finish, setFinish] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchData(localStorage.getItem("AvocadoCountry"));
    }, [])
    const fetchData = async (country) => {
        if (!country)
            country = "مصر"
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}template`);
        const temp = [];
        data?.template?.map(ele => {
            if (ele.country === country) {
                temp.push(ele)
            }
        })
        setTemplates(temp)
    }
    const fetchSections = async (id, name) => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}template/section/${id}`);
        setSections(data.templateSection)
        fetchQuestions(id)
        setcompanyType(name)
    }
    const fetchQuestions = async (id) => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}question/${id}`);
        setQuestions(data.question)
    }

    const handleInput = (question, answer) => {
        let check = false;
        let temp = {
            question,
            answer
        }
        let tempArr = details
        tempArr.forEach(ele => {
            if (ele.question === question) {
                ele.answer = answer;
                check = true
            }
        })
        if (!check)
            tempArr.push(temp)
        setdetails(tempArr)
        check = false;
    }

    const handleFiles = (file) => {
        let temp = [];
        temp = files;
        temp.push(file)
        setFiles(temp)
    }


    const previous = () => {
        !answer.length && navigate('/register-company');
    }

    const addRequest = async () => {
        if (name !== "" && companyName !== "" && details.length && images.length) {
            setLoading(true)
            let temp = files;
            images.forEach(image => temp.push(image.file));
            setFiles(temp)
            const formData = new FormData();
            files.forEach(file => formData.append("files", file))
            formData.append("details[]", JSON.stringify(details))

            formData.append("name", name)
            formData.append("companyName", companyName)
            formData.append("country", localStorage.getItem("AvocadoCountry"))
            formData.append("companyType", companyType)

            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}request`, formData);
            setError(false)
            setLoading(false)
            setFinish(true)

        } else {
            setError(true)

        }
    }
    return (

        finish
            ? <div className="d-flex justify-content-center align-items-center h-100" style={{ minHeight: "50vh" }}>
                {language === "E"
                    ? <h4 style={{ textAlign: "center" }}>Thank you for your registration
                        We will contact you soon</h4>
                    : <h4 style={{ textAlign: "center" }}>شكرا لتسجيلك
                        سوف نتواصل معك قريبا</h4>
                }
            </div>
            : <Section>
                {language === "E"
                    ? <h2>Please fill the form</h2>
                    : <h2 style={{ textAlign: 'right' }}>من فضلك املأ الاستمارة</h2>
                }

                {sections.length
                    ? questions.length
                        ? <>
                            {language === "E"
                                ? <>
                                    <h4>General Information</h4>
                                    <div>
                                        <h6>Name</h6>
                                        <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
                                        <h6>Company name</h6>
                                        <input className="form-control" type="text" onChange={(e) => setCompanyName(e.target.value)} />
                                    </div>
                                </>
                                : <>
                                    <h4 style={{ textAlign: 'right', borderLeft: "none", borderRight: "10px solid #89664C", marginRight: "5px", marginLeft: "0px" }}>معلومات عامة</h4>
                                    <div className="d-flex flex-column align-items-end" style={{ marginLeft: "0px", marginRight: "20px" }}>
                                        <h6>الاسم</h6>
                                        <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
                                        <h6>اسم الشركة</h6>
                                        <input className="form-control" type="text" onChange={(e) => setCompanyName(e.target.value)} />
                                    </div>
                                </>
                            }


                            {sections.map((section, index) => (
                                <>
                                    {language === "E"
                                        ? <h4 key={section.title + index}>{section.title}</h4>
                                        : <h4 key={section.title + index} style={{ textAlign: 'right', borderLeft: "none", borderRight: "10px solid #89664C", marginRight: "5px", marginLeft: "0px" }}>{section.titleAr || section.title}</h4>
                                    }

                                    {questions.map((question, index) => {
                                        if (question.section === section._id)
                                            return <>

                                                <div key={question._id} style={language === "A" ? { marginLeft: "0px", marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "flex-end" } : { marginLeft: "20px" }}>
                                                    {language === "E"
                                                        ? <h6>{question.question}</h6>
                                                        : <h6 style={{ textAlign: 'right', }}>{question.questionAr}</h6>
                                                    }

                                                    {question.type === "text" &&
                                                        <input className="form-control" type="text" onChange={(e) => { handleInput(question.question + "-Q" + index, e.target.value) }} />
                                                    }
                                                    {question.type === "pic" &&
                                                        <ImageUploading
                                                            multiple
                                                            value={images}
                                                            onChange={onChange}
                                                            maxNumber={5}
                                                            dataURLKey="data_url"
                                                        >
                                                            {({
                                                                imageList,
                                                                onImageUpload,
                                                                onImageUpdate,
                                                                onImageRemove,
                                                                isDragging,
                                                                dragProps,
                                                            }) => (
                                                                // write your building UI
                                                                <>
                                                                    {imageList.length != 5 &&
                                                                        <MainButton
                                                                            style={isDragging ? { backgroundColor: 'red' } : undefined}
                                                                            onClick={onImageUpload}
                                                                            {...dragProps}
                                                                        >
                                                                            Click or Drop here
                                                                        </MainButton>
                                                                    }
                                                                    {imageList.map((image, index) => (
                                                                        <ImageContainer key={index} >
                                                                            <BtnContainer >
                                                                                <Button onClick={() => onImageUpdate(index)}>Update</Button>
                                                                                <Button onClick={() => onImageRemove(index)}>Remove</Button>
                                                                            </BtnContainer>
                                                                            <Img src={image['data_url']} alt="" />

                                                                        </ImageContainer>
                                                                    ))}
                                                                </>
                                                            )}
                                                        </ImageUploading>
                                                    }
                                                    {question.type === "file" &&
                                                        <div className="w-100">
                                                            <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e) => handleFiles(e.target.files[0])} />
                                                        </div>
                                                    }
                                                </div>

                                            </>
                                    })}
                                </>

                            ))}

                        </>
                        : <div className=" h-100 d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    : <>
                        {language === "E"
                            ? <h4>Choose Template</h4>
                            : <h4 style={{ textAlign: 'right', borderLeft: "none", borderRight: "10px solid #89664C", marginRight: "5px", marginLeft: "0px" }}>اختار ناموذج</h4>
                        }
                        <div className={`d-flex align-items-start  ${language === "A" && "justify-content-end"}`}>
                            {templates?.map(ele => (
                                <Card key={ele._id} onClick={() => fetchSections(ele._id, ele.name)}>
                                    <h4>{language === "E" ? ele?.name : (ele?.nameAr || ele?.name)}</h4>
                                </Card>
                            ))}
                        </div>
                    </>
                }

                {error && <h6 className="text-center my-2" style={{ color: 'red' }}>Please fill all fields</h6>}


                <Btn className={`${language === "A" && "justify-content-start"}`}>
                    <button
                        className='btn btn-outline-success mx-3'
                        onClick={() => { previous() }}
                    >
                        {!sections.length
                            ? language === "E" ? "Previous" : "السابق"

                            : language === "E" ? "Cancel" : "الغاء"
                        }

                    </button>
                    <button
                        className='btn btn-success '
                        onClick={() => { addRequest() }}
                    >

                        {!sections.length
                            ? language === "E" ? "Next" : "التالي"

                            : loading ? language === "E" ? "loading..." : "تحميل..." : language === "E" ? "Save" : "حفظ"
                        }
                    </button>
                </Btn>

            </Section>

    )
}

export default RegisterCompanyFormSection;

const Section = styled.div`
   >h4{
        border-left: 10px solid #89664C;
        padding: 5px;
        margin-top  :40px ;
        margin-left  :5px ;
    }
    
       
   >div{
    margin-left:20px;
    margin-top:10px;
    >h6{
        margin-top:20px;
        margin-bottom:15px;
    }
    >input{
        padding:10px;
        border-radius:10px;
        width: 70%;
        @media (max-width: 500px) {
            width: 95%;
        }
        background-color: rgba(217, 217, 217, 0.34);
        :focus{
            background-color: rgba(217, 217, 217, 0.34);
        }
    }
   }

`;
const Btn = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
padding-right: 20px;
`;

const Card = styled.div`
display: flex;
justify-content:center;
align-items:center;
text-align: center;
padding: 20px;
background-color: #C7DBA8;
border-radius: 15px;
margin: 5px;
cursor: pointer;
`

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
const Button = styled.button`
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