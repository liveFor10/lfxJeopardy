import './Qnas.css';
import Card from '../ui/Card.js';
import HistoryList from './HistoryList.js';

function Qnas(props) {
  
  return (
    <div>
      <Card className="qnas">
        <HistoryList qnaData={props.qnaData} key={props.qnaData.id}/>
      </Card>
    </div>
  );
}

export default Qnas;
