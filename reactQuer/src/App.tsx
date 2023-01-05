import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
function App() {
  const [title, setTitle] = useState('')
  const fetchTodoList =async()=>{
    const getData = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return getData.data
  }
  const { status, data} = useQuery({
    queryKey: ['list'],
    queryFn: fetchTodoList,
  })
  const {isLoading, isError,error, mutate} = useMutation(fetchTodoList)

  if (status === 'loading') {
    return <span>Loading...</span>
  }
  return (
    <ul>
      {data.map((el:any) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  //   <div>
  //   <input
  //     value={title}
  //     onChange={(e) => setTitle(e.target.value)}
  //     disabled={isLoading}
  //   />
  //   <button
  //     onClick={() => {
  //       mutate({ title })
  //     }}
  //     disabled={isLoading || !title}
  //   >
  //     Add Article
  //   </button>
  //   <div>
  //     {isLoading
  //       ? "Saving..."
  //       : isError
  //       ? error.message
  //       : "Saved!"}
  //   </div>
  // </div>
  )
}

export default App
