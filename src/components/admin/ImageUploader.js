import React, { useImperativeHandle } from 'react';
import ImageUploading from 'react-images-uploading';
import styled from 'styled-components';
export function ImageUploader({ section, length }) {
    const [images, setImages] = React.useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <Uploader>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={length}
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
                        {imageList.length != length &&
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
        </Uploader>
    );
}
const Uploader = styled.div`
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