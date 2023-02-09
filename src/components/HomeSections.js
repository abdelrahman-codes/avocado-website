import React from 'react'
import styled from 'styled-components';
import sectionPic from '../assets/section.png'
const HomeSections = ({ right }) => {
    return (
        < >
            {!right ?
                <RightSections>
                    <SectionContainer>
                        <SectionPicture>
                            <Image
                                src={sectionPic}
                                alt="sectionPic"
                            />
                        </SectionPicture>
                        <SectionDetails>
                            <SectionTile>
                                Section title
                            </SectionTile>
                            <SectionDesc>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in
                                some form, by injected humour, or randomised
                                words which don't look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum,
                                you need to be sure there isn't anything embarrassing
                                hidden in the middle of text. All the Lorem Ipsum
                                generators on the Internet tend to repeat predefined chunks as
                                necessary, making thiwords etc.
                            </SectionDesc>
                        </SectionDetails>
                    </SectionContainer>
                </RightSections>
                :
                <LeftSections>
                    <SectionContainerRight>
                        <SectionDetails>
                            <SectionTile>
                                Section title
                            </SectionTile>
                            <SectionDesc>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in
                                some form, by injected humour, or randomised
                                words which don't look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum,
                                you need to be sure there isn't anything embarrassing
                                hidden in the middle of text. All the Lorem Ipsum
                                generators on the Internet tend to repeat predefined chunks as
                                necessary, making thiwords etc.
                            </SectionDesc>
                        </SectionDetails>
                        <SectionPicture>
                            <Image
                                src={sectionPic}
                                alt="sectionPic"
                                style={{ borderTopRightRadius: '70px', borderTopLeftRadius: '0px' }}
                            />
                        </SectionPicture>

                    </SectionContainerRight>
                </LeftSections>
            }





        </>
    )
}

export default HomeSections;

const RightSections = styled.div`
display: flex;
justify-content: flex-end;
margin: 20px;
margin-bottom: 90px;
`;
const LeftSections = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px;
margin-bottom: 90px;

`;
const SectionContainer = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #DCDCDC;
border-radius: 20px;
border-top-left-radius: 70px;
min-height: 429px;
@media (max-width: 577px) {
    width: 95%;
    flex-direction: column;
  }

`;
const SectionContainerRight = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #DCDCDC;
border-radius: 20px;
border-top-right-radius: 70px;
min-height: 429px;
@media (max-width: 577px) {
    width: 95%;
    flex-direction: column-reverse;
  }

`;
const SectionDetails = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
align-items:flex-start;
height: 100%;
@media (max-width: 400px) {
    font-size: 15px;
  }
`;
const SectionTile = styled.h2`
margin-bottom: 20px;
@media (max-width: 400px) {
    font-size: 20px;
  }
`;
const SectionDesc = styled.p``;
const SectionPicture = styled.div``;
const Image = styled.img`
height:100%;
width:100%;
border-top-left-radius: 70px;
min-height: 429px;
`;