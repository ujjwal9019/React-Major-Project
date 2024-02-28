import { useState  , useEffect} from "react"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login , logout } from "./store/authSlice"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
function App() {

  const [loading , setLoading] = useState(true)

  const  dispatch = useDispatch()


  // use eefect work in this is to ask if user is login or not
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

// conditional rendering
return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header/>
      {/* <Outlet/> */}
      <Footer/>  
    </div>
  </div>
) :(null) 
}

export default App
