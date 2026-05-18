import { useEffect } from 'react'

const useTItle = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

export default useTItle
