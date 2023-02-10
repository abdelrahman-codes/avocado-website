import React from 'react'
import styled from 'styled-components';
import ServiceFooter from '../../components/footer/ServiceFooter';

const ServiceDetails = () => {
    return (
        <>
            <Details className="container">
                Nearly all great ideas follow a similar creative process and this article explains how this process works. Understanding this is important because creative thinking is one of the most useful skills you can possess. Nearly every problem you face in work and in life can benefit from innovative solutions, lateral thinking, and creative ideas.

                Anyone can learn to be creative by using these five steps. That’s not to say being creative is easy. Uncovering your creative genius requires courage and tons of practice. However, this five-step approach should help demystify the creative process and illuminate the path to more innovative thinking.
                To explain how this process works, let me tell you a short story.
                A Problem in Need of a Creative Solution

                In the 1870s, newspapers and printers faced a very specific and very costly problem. Photography was a new and exciting medium at the time. Readers wanted to see more pictures, but nobody could figure out how to print images quickly and cheaply.

                For example, if a newspaper wanted to print an image in the 1870s, they had to commission an engraver to etch a copy of the photograph onto a steel plate by hand. These plates were used to press the image onto the page, but they often broke after just a few uses. This process of photoengraving, you can imagine, was remarkably time consuming and expensive.

                The man who invented a solution to this problem was named Frederic Eugene Ives. He went on to become a trailblazer in the field of photography and held over 70 patents by the end of his career. His story of creativity and innovation, which I will share now, is a useful case study for understanding the 5 key steps of the creative process.

                A Flash of Insight
                Ives got his start as a printer’s apprentice in Ithaca, New York. After two years of learning the ins and outs of the printing process, he began managing the photographic laboratory at nearby Cornell University. He spent the rest of the decade experimenting with new photography techniques and learning about cameras, printers, and optics.

                In 1881, Ives had a flash of insight regarding a better printing technique.
                “While operating my photostereotype process in Ithaca, I studied the problem of halftone process,” Ives said. “I went to bed one night in a state of brain fog over the problem, and the instant I woke in the morning saw before me, apparently projected on the ceiling, the completely worked out process and equipment in operation.”
                Ives quickly translated his vision into reality and patented his printing approach in 1881. He spent the remainder of the decade improving upon it. By 1885, he had developed a simplified process that delivered even better results. The Ives Process, as it came to be known, reduced the cost of printing images by 15x and remained the standard printing technique for the next 80 years.

                Alright, now let’s discuss what lessons we can learn from Ives about the creative process.
            </Details>
            <ServiceFooter />
        </>

    )
}

export default ServiceDetails;
const Details = styled.div`
margin-top: 100px;
margin-bottom: 50px;
min-height:50vh;
`;