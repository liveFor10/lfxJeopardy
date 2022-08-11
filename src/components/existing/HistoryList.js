
import './HistoryList.css';
import HistoryItem from './HistoryItem.js';

const HistoryList = (props) => {

  console.log('hlProps=' + JSON.stringify(props));

  return (
    <ul className='history-list'>
      {props.qnaData.map((item) => (
          <div>
            <HistoryItem
              key={item.id}
              id={item.id}
              category={item.category}
              question={item.question}
              hint={item.hint}
              airDate={item.airDate}
              pointValue={item.pointValue}
              rePlayedDate={item.rePlayedDate}
            ></HistoryItem>
          </div>
        ))
      }
    </ul>
  );
}


export default HistoryList;