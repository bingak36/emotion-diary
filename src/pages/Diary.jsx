import React from 'react'
import { useParams } from 'react-router-dom'

const Diary = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>{params.id} Diary</div>
  )
}

export default Diary