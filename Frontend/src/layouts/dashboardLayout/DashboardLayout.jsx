import  { useEffect } from 'react'
import "./dashboardLayout.css"
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import ChatList from '../../components/chatList/ChatList'

const DashboardLayout = () => {
  const {userId, isLoaded} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    // Clerk loads and initializes, will be set to false. 
    if(isLoaded && !userId){
      navigate('/sign-in');
    }
  },[isLoaded,navigate,userId])

  if(!isLoaded) return "Loading........."
  return (
    <div className='dashboardLayout'>
        <div className='menu'><ChatList/></div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  ) 
}

export default DashboardLayout