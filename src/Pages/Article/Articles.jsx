import './Article.css'
import { FaArrowLeftLong } from "react-icons/fa6";

const Articles = () => {
  return (
    <div className='article-container'>
        <div className='article-img'>
            <img src='' alt='' />
        </div>
        <div className='article-sub-container'>
            <h1 className='article-para'>kfvjkdfnvdfvjvjnf</h1>
            <p className='article-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nisi aperiam voluptatum est rem odio eaque omnis autem, veniam, explicabo soluta. Praesentium iure ipsum nulla, est placeat cum voluptates amet.</p>
        </div>
        <button className='article-btn'><FaArrowLeftLong /> Back to homepage</button>
    </div>
  )
}

export default Articles