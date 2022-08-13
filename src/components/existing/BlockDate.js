
import './BlockDate.css';

function BlockDate(props) {
  
  /* console.log('props.date=' + props.date); */

  const type = props.type;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='block-date'>
      <div className='block-date__month'>{month}</div>
      <div className='block-date__year'>{year}</div>
      <div className='block-date__day'>{day}</div>
      <div className='block-date__type'>{type}</div>
    </div>
  );
}

export default BlockDate;
