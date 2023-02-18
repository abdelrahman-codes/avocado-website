import React from 'react'
import styled from 'styled-components';
import FilePic from '../../assets/file.png'
const FilesSection = ({ pics, files }) => {
    return (
        <Files className='container'>
            {pics
                ? pics?.map((pic, index) => (
                    <Link key={pic + index} href={pic} target="_blank" rel="noreferrer">
                        <Img  src={pic} alt="picture" />
                    </Link>
                ))
                : files?.map((file, index) => (
                    <a key={file + index} href={file} target="_blank" rel="noreferrer">
                        <img src={FilePic} alt="file-pic" />
                        <h6>file name</h6>
                    </a>
                ))
            }
        </Files>

    )
}

export default FilesSection;

const Files = styled.div`
background-color: #DCDCDC;
width: 70%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
border-radius: 25px;
margin-top: 25px;
@media (max-width: 768px) {
    width: 90%;
}
>a{
    text-decoration: none;
    text-align: center;
    color: #000;
    margin: 20px;
    transition: all 0.3s ease;
    :hover{
        transform: scale(.9,.9);
    }

}
`;
const Link = styled.a`
width: 25%;
@media (max-width:900px) {
width: 40%;
    
}
@media (max-width:500px) {
width: 100%;
}
`;
const Img = styled.img`
width: 100%;
border-radius: 20px;
`;