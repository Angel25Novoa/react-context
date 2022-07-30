import { Route, Routes} from 'react-router-dom';
import { UserProvider } from '../context/UserProvider';
import { HomePage } from './HomePage';
import ProfilePage from './ProfilePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import SignInPage from './SignInPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="profile" element={ <ProfilePage /> } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="signin" element={ <SignInPage /> } />
      </Routes>
    </UserProvider>
  )
}