import { Space,Input,Button } from "antd";
import { Values } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Sendform() {
    const {title,price} = useContext(Values);
    const navigate = useNavigate();
    function handleClick(){
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: {title},
              /* other product data */
            })
          })
          .then(res => res.json())
          .then(console.log);
        alert('Product Added');
        navigate('/');

    }

    return(
        <>
            <h1>Sendform</h1>
            <Space direction='vertical'>
            <label> Title: </label>
            <Input style={{width:200}} value={title}/>
            <label> Price: </label>
            <Input style={{width:200}} value={price}/>
            <Button type='primary' onClick={handleClick} >Confirm</Button>
            </Space>

        </>
    )
}