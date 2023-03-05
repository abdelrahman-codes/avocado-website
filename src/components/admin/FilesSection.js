import React from 'react'
import styled from 'styled-components';
import FilePic from '../../assets/file.png'
const FilesSection = ({ pic, file }) => {
    return (
        pic ?
            <Link key={pic} href={process.env.REACT_APP_REQUEST_IMAGES + pic} target="_blank" rel="noreferrer">
                <Img src={process.env.REACT_APP_REQUEST_IMAGES + pic} alt="picture" />
            </Link>
            : <a key={file} href={process.env.REACT_APP_REQUEST_IMAGES + file} target="_blank" rel="noreferrer">
                <img src={FilePic} alt="file-pic" />
                <h6>{file}</h6>
            </a>
    )
}

export default FilesSection;


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