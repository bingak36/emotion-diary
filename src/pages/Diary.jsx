import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { getStringedDate } from "../util/getStringedDate";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    } else {
      setCurDiaryItem(currentDiaryItem);
    }
  }, [params.id, data, nav]);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = `${getStringedDate(new Date(Number(createdDate)))} 기록`;

  return (
    <div>
      <Header
        title={title}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
