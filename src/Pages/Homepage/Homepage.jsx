import Card from '../../components/Card/Card';
import './Homepage.css'
import { CiSearch } from "react-icons/ci";
import axios from 'axios'
import { useEffect, useState } from 'react';

const Homepage = () => {
    const [data, setData] = useState('tesla')
    const [apiData, setApiData] = useState([])
    const handleChange = (e) => {
        setData(e.target.value)
    }
    const dataSlice = [...apiData].slice(0, 6)
    console.log(dataSlice);
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${data}&from=2024-06-15&sortBy=publishedAt&apiKey=6c4f02d3895b4639b40c9ccd895bc885`)
        .then(res => {
            console.log(res);
            setApiData(res.data.articles)
        })
        .catch(err => {
            console.log(err);
        })
    }, [data])
    
    return (
        <div>
            <h1 className='filter'>Filter by keywords</h1>
            <div className='homepage-input'>
                <input value={data} onChange={handleChange} type='search' placeholder='The most successful IT companies in 2020'/>
                <CiSearch className='goggle'/>
            </div>
            <h2 className='result'>Results: 6</h2>
            <div className='container-flex'>
                {dataSlice.map((element, i) => (
                    <Card key={i} element={element}/>
                ))}
            </div>
        </div>
    )
}

export default Homepage