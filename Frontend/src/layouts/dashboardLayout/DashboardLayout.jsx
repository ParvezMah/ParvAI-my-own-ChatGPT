import  { useEffect } from 'react'
import "./dashboardLayout.css"
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

const DashboardLayout = () => {
  const {userId, isLoaded} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLoaded && !userId){
      navigate('/sign-in');
    }
  },[isLoaded,navigate,userId])

  if(!isLoaded) return "Loading........."
  return (
    <div className='dashboardLayout"'>
        <div className='menu'>MENU</div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  ) 
}

export default DashboardLayout