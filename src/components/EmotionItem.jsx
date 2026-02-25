import "./EmotionItem.css";
import { getEmotionImage } from "../util/getEmotionImage";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
       <div 
       onClick={onClick}
       className={`EmotionItem ${isSelected ? `item_on_${emotionId}` : ""}`}
       >
        <img src={getEmotionImage(emotionId)} alt={emotionName} />
<<<<<<< HEAD
        <div className="emotion_name">{emotionName}</div>
=======
        <div>{emotionName}</div>
>>>>>>> 8bd7b814aa7e0c87f06d7637c97dd584cceb36eb
    </div>
  );
};

export default EmotionItem;
