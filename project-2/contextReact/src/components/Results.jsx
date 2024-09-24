import { useContext ,useState} from "react";
import { Values } from "../App";
import { bmiCalculator } from "../util/bmiCalculator";
import {styled} from 'styled-components';

const Wrapper = styled.div`
text-transform:uppercase;
margin :2rem auto;
max-width:15rem;
color:${(props) => (props.color)}
`

export default function Results(){
    const {weight,height} = useContext(Values);
    const bmi = bmiCalculator(weight,height);
    let fontColor = 'white';
    if(bmi<18){
        fontColor = 'red';
    }
    else if (bmi <25) {
        fontColor = 'green';
    } else if (bmi < 30){
        fontColor = 'yellow';
    }
    else{
        fontColor = 'red';
    }
    return(
        <>
        <Wrapper color={fontColor}>
            your bmi index is : {bmi}
        </Wrapper>
        </>
    );
}