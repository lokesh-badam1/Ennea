import logo from "../assets/bmi.png"
import {styled} from 'styled-components'

const HeaderWraper = styled.header`
  text-align: center;
  margin: 3rem ;

img {
    width : 5rem;
    height : 5rem;
    object-fit : contain;
}

h1{
    font-size : 1.5rem;
}
`;

export default function Header() {
    return (
        <HeaderWraper >
        <img src={logo} alt="logo of bmi" />
        <h1>BMI Calculator</h1>
        </HeaderWraper>
    );
}