import PropTypes from 'prop-types';

const Card = ({card}) => {
   
    return (
        <div className='border-2 w-[312px] h-[402px]'>
            <div className='mt-2'>
            <img src={card.image} alt="" />
            <h4>{card.course_title}</h4>
            <p><small>{card.course_description}</small></p>
<div className='flex'>
    <p>$ price: {card.price}</p>
    <p> Credit: {card.credit} hr</p>
</div>

</div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired
  };

export default Card;