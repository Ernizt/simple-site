import React from 'react';
import {
    BtnWrap,
    Colom1, Colom2,
    Heading, Img, ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    SubTitile,
    TextWrapper,
    TopLine
} from "./infoElements";
import {Button} from "../ButtonElement";


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
                         description, buttonLable, img ,alt, primary , dark, dark2}) => {

    return (
        <>
        <InfoContainer  lightBg={lightBg} id = {id}>
            <InfoWrapper>
                <InfoRow imgStart = {imgStart}>
                    <Colom1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitile darkText={darkText}>{description}</SubTitile>
                            <BtnWrap>
                                <Button to = 'home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                               /* primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2 {dark2 ? 1 : 0}>{buttonLable}*/></Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Colom1>
                    <Colom2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt}/>
                        </ImgWrap>
                    </Colom2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
    )
}
export default InfoSection;