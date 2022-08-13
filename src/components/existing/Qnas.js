import './Qnas.css';
import Card from '../ui/Card.js';
import HistoryList from './HistoryList.js';

function Qnas(props) {
  
  console.log('qnas JSON.stringify(props.qnaData)=' + JSON.stringify(props.qnaData));

  return (
    <div>
      <Card className="qnas">
        <HistoryList qnaData={props.qnaData} key={props.qnaData.id}/>
      </Card>
    </div>
  );
}

export default Qnas;
