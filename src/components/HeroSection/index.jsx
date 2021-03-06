import React , {useState} from 'react';
import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';
import{Button} from '../ButtonElement';
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

      const onHover = () => {
          setHover(!hover);
      }

    return (

        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='vide/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    У нас есть какие-то мелодии, какие-то тексты
                </HeroH1>
                <HeroP>
                    Моя делегация внесла ряд конструктивных предложений для того,
                    чтобы обеспечить какое-то подобие сбалансированности текста.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='singup' onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Начать {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}
export default HeroSection;

const HeroContainer = styled.div`
        background: #0c0c0c;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        height: 800px;
        position: relative;
        z-index: 1;
        
        :before {
        content: '';
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
        180deg,
        rgb(0,0,0,0.2) 0%,
        rgb(0,0,0,0.6) 100%
        ),
        linear-gradient(180deg, 
        rgb(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
        }
`;
const HeroBg = styled.div`
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
`;
const VideoBg = styled.video`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        background: #232a34;
`;
const HeroContent = styled.div`
z-index: 3;
nax-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

const HeroH1 = styled.h1`
color:#fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) { 
     font-size: 40px;
}

@media screen and (max-width: 480px) {
font-size: 32px;
}
`;

const HeroP = styled.p`
margin-top:24px;
color:#fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) { 
     font-size: 24px;
}

@media screen and (max-width: 480px) {
font-size: 18px;
}
`;
const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;
const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;


