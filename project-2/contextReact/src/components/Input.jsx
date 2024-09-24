import {styled} from "styled-components";


const Wrapper = styled.div`
    label{
        font-size:0.5rem;
        display:block;
        margin-bottom:0.25rem;
        text-transform:uppercase;
        font-weight:bold;
    }

    input{
        width:80%;
        padding:0.5rem;
        border: 1px solid #76c0ae;
        border-radius:4px;
        background-color:transparent;
        font-size:1rem;
        color: #c2e9e0;
        margin-right:0.25rem;
    }
`

 

export default function Input({name,units,value,setValue}){

    
    function handleInput(event){
        const val = event.target.value;
        setValue(+val);
    }
    
    return(
        <Wrapper>
        <label>{name}</label>
        <input type="number" onChange={handleInput} />{units}
        </Wrapper>
    );
}