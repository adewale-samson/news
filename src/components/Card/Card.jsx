import './Card.css'
import { CiCalendar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";


const Card = ({element}) => {
  return (
    <div className='card-container'>
        <div className='card-img'>
            <img src={element.urlToImage} alt='image' />
        </div>
        <div className='card-half'>
            <div className='date'>
                <CiCalendar />
                <span>June 29th, 2021</span>
            </div>
            <h3 className='card-heading'>{element.title}</h3>
            <p className='text'>{element.description}</p>
            <button className='card-btn'>Read more <FaArrowRightLong /></button>
        </div>
    </div>
  )
}

export default Card