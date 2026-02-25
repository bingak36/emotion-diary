import React, {useState} from 'react'
import './Editor.css'
import Button from './Button'
import EmotionItem from './EmotionItem'
import { useNavigate } from 'react-router-dom'

const emotionListData = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "나쁨",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "화남",
  },
];

const getStringDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
}

const Editor = ({initData, onSubmit}) => {
  const nav = useNavigate()

  const [input, setInput] = useState({
    createdDate: initData ? new Date(Number(initData.createdDate)) : new Date(),
    emotionId: initData ? initData.emotionId : 3,
    content: initData ? initData.content : ''
  })

  const onChangeInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    if(name ==='createdDate'){
      value = new Date(value)
    }
    setInput({
      ...input,
      [name]:value
    })
  }

  const onClickSubmit = () => {
    onSubmit(input)
  }

  return (
    <div className='Editor'>
      <section className='date-section'>
        <h4>오늘의 날짜</h4>
        <input 
          type="date" 
          name="createdDate" 
          onChange={onChangeInput}
          value={getStringDate(input.createdDate)}
        />
      </section>
      <section className='emotion-section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
            {emotionListData.map((item)=>(
                <EmotionItem 
                key={item.emotionId}
                {...item}
                onClick={()=>setInput({
                  ...input,
                  emotionId: item.emotionId
                })}
                isSelected={item.emotionId === input.emotionId}
                />
            ))}
        </div>
      </section>
      <section className='content-section'>
        <h4>오늘의 일기</h4>
        <textarea 
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder='오늘은 어땠나요?'
        ></textarea>
      </section>
      <section className="button-section">
        <Button onClick={()=>nav(-1)} text={'취소하기'}/>
        <Button onClick={onClickSubmit} text={'작성완료'} type={'POSITIVE'}/>
      </section>
    </div>
  )
}

export default Editor