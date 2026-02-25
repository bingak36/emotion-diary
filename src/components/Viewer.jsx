import React from 'react'
import './Viewer.css'
import { emotionListData } from '../util/constants'
import { getEmotionImage } from '../util/getEmotionImage'

const Viewer = ({ emotionId, content }) => {
    const emotionItem = emotionListData.find(
        (item) => String(item.emotionId) === String(emotionId)
    )

  return (
    <div className='Viewer'>
        <section className="viewer-img-section">
            <h4>오늘의 감정</h4>
            <div className={`emotion-img-wrapper emotion_img_wrapper_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt="icon" />
            </div>
            <div>
                {emotionItem.emotionName}
            </div>
        </section>
        <section className="content-section">
            <h4>오늘의 일기</h4>
            <div className="content-wrapper">
                <p>{content}</p>
            </div>
        </section>
    </div>
  )
}

export default Viewer