
import './HistoryItem.css';
import BlockDate from './BlockDate.js';
import Card from '../ui/Card.js'

function HistoryItem(props) {

  console.log('hi props.airDate=' + props.airDate);
  console.log('hi props.rePlayedDate=' + props.rePlayedDate);

  return (
    <li key={props.id}>
      <Card className='history-item'>
        <div className='history-item__description'>
          <BlockDate date={props.airDate} type={'originally aired'}></BlockDate>
          <BlockDate date={props.rePlayedDate} type={'re-played'}></BlockDate>
          <h2>{props.category}</h2>
          <div>{props.question}</div>
          <div>{props.hint}</div>
          <div className='history-item__price'>{props.pointValue}</div>
        </div>
      </Card>
    </li>
  );
}


export default HistoryItem;
