import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'


export default function DiaryItems({ item, showModal, deleteItem }) {
  return (
    <div className="diary-row" >
      <span onClick={() => showModal(item)}>{item.title}</span>
      <div>
      </div>
        <span className='date'>{item.date}</span>
        <TiDeleteOutline  onClick={() => deleteItem(item.id)} className='delete' style={{ color: 'red' }} />
    </div>
  )
};

