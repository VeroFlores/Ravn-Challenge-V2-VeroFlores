import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Header = styled.h1`
text-align:center;
padding:25px 0px;
color:white;
background-color:#000000;
`;

export const TextBox = styled.div`
padding:1rem;
`;
export const PersonTitle = styled.h2`
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.0125em;
text-align: left;
`;
export const LowEmphasis = styled.p`
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 17px;
letter-spacing: 0.0125em;
text-align: left;
color:#828282;
`;
export const Item = styled.li`
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    border-bottom:1px solid rgba(0,0,0,0.1);
`;
export const Link = styled(LinkRouter)`
color :#000000;
`;
