import {Button,Input, Space} from 'antd';
import { Values } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export default function AddData(props){

    const navigate = useNavigate();
    
    const {setTitle,setPrice} = useContext(Values);
    function handleClick(e){

        props.changeState(false);
        navigate('/sendform');
    }

    function handlePrice(e){
        const k = e.target.value;
        setPrice(+k);
    }

    function handleTitle(e){
        const l = e.target.value;
        setTitle(l);
    }

    return(
        <>
            <h1>Item Details</h1>
            <p>Fill the below inputs to add a new item</p>
            <Space direction='vertical'>
            <label> Title: </label>
            <Input style={{width:200}} placeholder='Title' onChange={handleTitle} />
            <label> Price: </label>
            <Input style={{width:200}} placeholder='Price' onChange={handlePrice}/>
            <Button type='primary' onClick={handleClick} >Submit</Button>
            </Space>

        </>
    )
}