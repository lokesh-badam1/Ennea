import Input from "./Input";
import {styled} from 'styled-components'
import { Values } from "../App";
import { useContext } from "react";

const Wrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  gap:1.5rem;
  background: linear-gradient(180deg, #307e6c, #2b996d);
  padding: 2rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius:4px;
  flex-wrap:wrap;

`
export default function Inputs(){
    const {weight,setWeight,height,setHeight} = useContext(Values)
    return(
        <Wrapper>
        <Input name={"Weight"}  units={"Kg"} value={weight} setValue={setWeight}/>
        <Input name={"Height"}  units={"cm"} value={height} setValue={setHeight}/>
        </Wrapper>
    );
}