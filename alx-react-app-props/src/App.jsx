import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'

import MainContent from './components/MainContent.jsx'

import Footer from './components/Footer.jsx'

import UserProfile from './components/UserProfile.jsx'


//prop drilling example

import ProfilePage from './components/ProfilePage.jsx'
// import UserInfo from './components/UserInfo.jsx'
// import UserDetails from './components/UserDetails.jsx'
// import UserData from './data/userData.js'
// import User from './components/User.jsx'
import UserContext from './UserContext.js'


function App() {
  const [count, setCount] = useState(0);
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com" };

  return (
    <>
      <div>

        
         <WelcomeMessage />

        <Header />

       

        <MainContent />
        <UserContext.Provider value={userData}>
           <ProfilePage userData={userData} />
        </UserContext.Provider>
       

        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        

        <Footer />

        {/*

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

        




        */}



        </div>
    </>
  )
}

export default App
