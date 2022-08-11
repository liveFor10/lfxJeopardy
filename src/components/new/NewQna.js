
import './NewQna.css'
import QnaForm from './QnaForm.js';
import {v4 as createNewUUID } from 'uuid';
import { useState } from 'react';

const NewQna = (props) => {

  const [isAdding, setIsAdding] = useState(false);

  const onSaveQnaHandler = (qna) => {
    const qnaWithID = {
      ...qna,
      id: createNewUUID()
    }
    props.onAddQna(qnaWithID);
    setIsAdding(false);
  }

  const editModeHandler = () => {
    setIsAdding(true);
  }

  const cancelHandler = () => {
    setIsAdding(false);
  }

  if (isAdding) {
    return (
      <div className='new-qna'>
        <QnaForm
          onSaveQna={onSaveQnaHandler}
          onCancel={cancelHandler}
        />
      </div>
    );
  } else {
    return (
      <div className='new-qna'>
        <button onClick={editModeHandler} >Play</button>
      </div>
    );
  }
}


export default NewQna;