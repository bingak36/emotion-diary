import React, {useEffect} from 'react'

const useTItle = (title) => {
  useEffect(() => {

    const $title = document.getElementsByTagName('title')[0]
    $title.innerText = title



  }, [title])
}

export default useTItle