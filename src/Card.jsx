import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Card = ({card,handlecart}) => {
    
  
    return (
       <div className='ml-16 my-10 bg-white rounded-3xl '>
        <div className='border-2 w-[380px]  text-center '>
            <div className='my-6'>
            <img className='mx-auto my-8' src={card.image} alt="" />
            <h4 className='text-lg font-bold my-2'>{card.course_title}</h4>
            <p className='my-2'><small >{card.course_description}</small></p>
<div className='flex justify-between items-center text-xl mx-3'>
    <p >$ Price: {card.price}</p>
    <p> <button> <FaBookmark></FaBookmark> </button> Credit: {card.credit} hr</p>
</div>
<button onClick={()=>handlecart(card)} className="border bg-blue-700 p-2 my-6 w-[280px] rounded-2xl " >Selected</button>
</div>
        </div>
        </div>
        
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired
  };

export default Card;