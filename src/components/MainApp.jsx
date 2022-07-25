import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import { Navigate, Route, Routes} from 'react-router-dom';
import { UserProvider } from '../context/UserProvider';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import SignInPage from './SignInPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
  const { user } = useContext( UserContext );
  return (
    <UserProvider>
        <Navbar />
        <hr />
        <Routes>
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } render={()=>{
            return user !== null ? <Navigate to="/" /> : <LoginPage /> 
          }}/>
          <Route path="/" element={ <HomePage /> } />
          <Route path="signin" element={ <SignInPage /> } />
        </Routes>
    </UserProvider>
  )
}