import React from 'react'
import styled from 'styled-components';
const HomeSections = ({ right, section }) => {
    return (
        < >
            {!right ?
                <RightSections>
                    <SectionContainer>
                        <SectionPicture>
                            <Image
                                src={process.env.REACT_APP_SECTION_IMAGES + section?.pic}
                                alt="sectionPic"
                            />
                        </SectionPicture>
                        <SectionDetails>
                            <SectionTile>
                                {section?.title}
                            </SectionTile>
                            <SectionDesc>
                                {section?.desc}
                            </SectionDesc>
                        </SectionDetails>
                    </SectionContainer>
                </RightSections>
                :
                <LeftSections>
                    <SectionContainerRight>
                        <SectionDetails>
                            <SectionTile>
                                {section?.title}
                            </SectionTile>
                            <SectionDesc>
                                {section?.desc}
                            </SectionDesc>
                        </SectionDetails>
                        <SectionPicture>
                            <Image
                                src={process.env.REACT_APP_SECTION_IMAGES + section?.pic}
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
const SectionPicture = styled.div`
`;
const Image = styled.img`
height:100%;
width:100%;
border-top-left-radius: 70px;
min-height: 429px;
`;