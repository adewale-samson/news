import './Card.css'
import { CiCalendar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Card = ({element}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/article', {state: {cardState: element}})
  }

  // Input date
// const dateStr = '2024-06-30T10:30:00Z';
const dateStr = element.publishedAt;

// Parse the date string
const date = new Date(dateStr);

// Define options for formatting
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

// Split the formatted date to insert "th"
let [month, day, year] = formattedDate.split(' ');
day = day.replace(',', 'th,');

// Combine into final format
const finalDate = `${month} ${day} ${year}`;
  return (
    <div className='card-container'>
        <div className='card-img'>
            <img src={element.urlToImage} alt='image' />
        </div>
        <div className='card-half'>
            <div className='date'>
                <CiCalendar />
                <span>{finalDate}</span>
            </div>
            <h3 className='card-heading'>{element.title}</h3>
            <p className='text'>{element.description.slice(0, 99)}...</p>
            <button className='card-btn' onClick={handleClick}>Read more <FaArrowRightLong /></button>
        </div>
    </div>
  )
}

export default Card