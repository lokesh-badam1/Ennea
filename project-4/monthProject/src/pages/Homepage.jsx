import { DatePicker, Space,Input,Table,Button} from "antd";
import dayjs from 'dayjs';
import { useState } from "react";
import AddData from "../components/AddData";
import { Values } from "../App";


const { RangePicker } = DatePicker;
const date = dayjs();
const { Search } = Input;


const disabled7DaysDate = (current, { from, type }) => {
    if (from) {
      const minDate = from.add(-6, 'days');
      const maxDate = from.add(6, 'days');
      switch (type) {
        case 'year':
          return current.year() < minDate.year() || current.year() > maxDate.year();
        case 'month':
          return (
            getYearMonth(current) < getYearMonth(minDate) ||
            getYearMonth(current) > getYearMonth(maxDate)
          );
        default:
          return Math.abs(current.diff(from, 'days')) >= 7;
      }
    }
    return false;
  };



const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  
  
  
  
  export default function Homepage(){
      const [data,setData] = useState([]);
      const [clicked,setClicked] = useState(false);
      
      
      
      function handleClick(){
        setClicked(true);

        // navigate('/sendform');
      }

    function onSearch(val,e){
        fetch(`https://dummyjson.com/products/search?q=${val}`)
        .then(res => res.json())
        .then(response => setData(response.products));
        // console.log(k);
    }

    const dataSource = data.map((product) => ({
        
            key:product.id,
            title:product.title,
            price:product.price,
            id:product.id,
        
      }))

    if (clicked) {
        return (
            <>

                <AddData changeState = {setClicked}/>
            </>
        )
    }
    else{
        return(
        <>
            <Space direction="vertical">
            <RangePicker disabledDate={disabled7DaysDate} defaultValue={[dayjs().subtract(7, 'day'),dayjs()]} />
            {/* defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]} */}
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{width: 200}}
            />
            </Space>
            <Table dataSource={dataSource} columns={columns}/>
            <Button type="primary" onClick={handleClick}>Add Data</Button>
            
            
            <h1>Homepage</h1>
        </>
        )
    }
    
}