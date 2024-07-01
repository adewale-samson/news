import './Article.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const Articles = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location);

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className='article-container'>
        <div className='article-img'>
            <img src={location.state.cardState.urlToImage} alt='image' />
        </div>
        <div className='article-sub-container'>
            <h1 className='article-para'>{location.state.cardState.title}</h1>
            <p className='article-text'>{location.state.cardState.description}</p>
        </div>
        <button className='article-btn' onClick={goBack}><FaArrowLeftLong /> Back to homepage</button>
    </div>
  )
}

export default Articles