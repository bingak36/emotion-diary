import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'
import { DiaryDispatchContext, DiaryStateContext } from '../App'

const Edit = () => {
  const params = useParams()
  const nav = useNavigate()
  const data = useContext(DiaryStateContext)
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)
  const [curDiaryItem, setCurDiaryItem] = useState()

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    )

    if (!currentDiaryItem) {
      alert("존재하지 않는 일기입니다.")
      nav("/", { replace: true })
    } else {
      setCurDiaryItem(currentDiaryItem)
    }
  }, [params.id, data, nav])

  const onClickDelete = () => {
    if (window.confirm("일기를 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(params.id)
      nav("/", { replace: true })
    }
  }

  const onSubmit = (input) => {
    onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content)
    nav("/", { replace: true })
  }

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  )
}

export default Edit
