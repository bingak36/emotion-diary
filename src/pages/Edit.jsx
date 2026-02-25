import React ,{useContext,useEffect,useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'
import { DiaryDispatchContext,DiaryStateContext } from '../App'
const Edit = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const {onDelete,onUpdate}=useContext(DiaryDispatchContext)
  const data=useContext(DiaryStateContext)
  const [curDiaryItem, setCurDiaryItem]=useState(null)

  useEffect(()=>{

    const currentDiaryItem =data.find(
      (item)=>String(item.id)===String(id)
    )
    if(!currentDiaryItem){
      window.alert("존재하지 않는 일기입니다.")
      nav('/',{replace:true})
    }else{
      setCurDiaryItem(currentDiaryItem)
    }

  },[id,nav,data])




  const onClickDelete=()=>{
    if(window.confirm('일기를 정말 삭제할까요?')){
      onDelete(id)
      nav('/',{replace:true})
    }
  }

  const onSubmit=(input)=>{
    if(window.confirm('일기를 정말 수정할까요?')){
      onUpdate(
        id, 
        input.createdDate.getTime(), 
        input.emotionId, 
        input.content
      )
      nav('/',{replace:true})
    }
  }

  if(!curDiaryItem){
    return <div>데이터 로딩중...!</div>
  }
  return (
    <div>
      <Header
        leftChild={<Button
          text={'뒤로가기'}
          onClick={()=>nav(-1)}
        />}
        title={'일기 수정하기'}
        rightChild={<Button 
          text={'삭제하기'} 
          onClick={onClickDelete}
          type={'NEGATIVE'} />}
      />
      <Editor key={curDiaryItem.id} initData={curDiaryItem}  onSubmit={onSubmit} />
    </div>
  )
}

export default Edit