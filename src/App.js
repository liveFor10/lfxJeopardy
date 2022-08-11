
import Qnas from './components/existing/Qnas.js';
import NewQna from './components/new/NewQna.js';
import { useState } from 'react';

const starterQnas = [
  {id: 9, category: 'question:', question: 'how', hint: 'does', airDate: new Date(1977, 8, 2), pointValue: 900},
  {id: 10, category: 'one', question: 'deal', hint: 'with', airDate: new Date(1977, 8, 3), pointValue: 1000},
  {id: 11, category: 'front', question: 'end', hint: 'ui', airDate: new Date(1977, 8, 4), pointValue: 100},
  {id: 12, category: 'components', question: 'answer:', hint: '"react"',  airDate: new Date(1977, 8, 5), pointValue: 200}
];

const App = () => {

  const [qnaData, setQnaData] = useState(starterQnas);

  const addQnaHandler = (qnaToBeAdded) => {
    setQnaData((previousStateSnapshop) => {
      return [qnaToBeAdded, ...qnaData];
    });
  }

  return (
    <div key={qnaData.id}>
      <NewQna onAddQna={addQnaHandler} />
      <Qnas qnaData={qnaData} key={qnaData.id} ></Qnas>
    </div>
  );
}

export default App;
