import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const LoadingDiv = styled.div`
display:flex;
flex-direction:row;
justify-items: center;
color:#828282;
`;
export const Header = styled.div`
text-align:center;
padding:25px 16px;
color:white;
background-color:#000000;
display:grid;
grid-template-columns:15% 80% 15%;
`;
export const Header1 = styled.div`
    text-align: center;
    padding: 25px 0px;
    color: white;
    background-color: #000000;
`;
export const Subtitle = styled.p`
padding:1rem;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.0125em;
text-align: left;
color:#333333;
`;
export const LowEmphasis = styled.p`
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.0125em;
text-align: left;
color:#828282;
`;
export const DetailText = styled.p`
color:#333333;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.0125em;
`;
export const InfoCell = styled.div`
    display: grid;
    grid-template-columns: 83% 17%;
padding:1rem;
border-bottom:1px solid rgba(0,0,0,0.1);
`;
export const Link = styled(LinkRouter)`
color :white;
`;
