import { Route, Routes } from 'react-router-dom'
import PostView from './Components/PostView'
import { useEffect, useState } from 'react'
import Header from './Components/Header'
import ProfilePage from './Components/ProfilePage'
import Side from './Components/Side'

import './App.css'
import Homepage from './Components/HomePage'

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/post')
      .then(res => res.json())
      .then((data) => {
        const reversedArray = []
        data.forEach((post) => {
          reversedArray.unshift(post)
        })
        setPosts(reversedArray)
      })
  }, [])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
    <Header users={users}/>
    <Side />
     <div>
      <Routes>
        <Route path = '/' element={<Homepage posts={posts} users={users} setPosts={setPosts}/>}/>
        <Route path='/post/:id' element={<PostView users={users} posts={posts} setPosts={setPosts}/>}/>
        <Route path='/profile' element={<ProfilePage loggedIn={users[0]}/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
