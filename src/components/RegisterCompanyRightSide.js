import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const RegisterCompanyRightSide = ({ content1, content2, pic }) => {
    const language = useSelector(state => state.language.value)

    return (

        <Container className="shadow">
            {content1 && (
                language === "E"
                    ? <p>Choosing the right location for your business gives you the opportunity to manage your financial, legal and tax affairs in a different way (more accessible) as follows
                        <ul>
                            <li> More suitable tax rates</li>
                            <li> More flexible rights for investors </li>
                            <li>Easiness in managing the company's structure</li>
                        </ul></p>

                    : <p style={{ textAlign: "right", }}>
                        يمنحك اختيار الموقع المناسب لعملك الفرصة لإدارة شؤونك المالية والقانونية والضريبية بطريقة مختلفة (يسهل الوصول إليها) على النحو التالي
                        <ul style={{ textAlign: "right", }}>
                            <li> معدلات ضريبية أكثر ملاءمة</li>
                            <li> حقوق أكثر مرونة للمستثمرين </li>
                            <li>سهولة إدارة هيكل الشركة</li>
                        </ul>
                    </p>

            )}
            {content2 && (
                language === "E"
                    ? <p>here we have decscription for the qustion to make it simple and clear for the user to answer the questions and finish the form</p>
                    : <p style={{ textAlign: "right" }}>هنا لدينا فك شفرة السؤال لجعله بسيطًا وواضحًا للمستخدم للإجابة على الأسئلة وإنهاء النموذج                </p>


            )}
            <img src={pic} alt="illustration" />
        </Container>
    )
}

export default RegisterCompanyRightSide;

const Container = styled.div`
flex: 1;
padding: 50px 35px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #fff;
border-radius: 20px;
margin-left: 20px;
@media (max-width: 1000px) {
    padding:25px 15px;
    justify-content: space-around;

    }
    @media (max-width: 770px) {
 display:none;
}
>p{
    font-size: 20px;
    @media (max-width: 1000px) {
        font-size: 16px;

    }
}
>img{
    width: 100%;
}
`;