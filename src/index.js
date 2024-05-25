import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/Chatters/DashboardPage';
import { LoginPage } from './routes/LoginPage';
import { SchedulePage } from './routes/Chatters/SchedulePage'
import { NotificationPage } from './routes/Chatters/NotificationPage'
import { EarningPage } from './routes/Chatters/EarningPage'
import { AccountPage } from './routes/AccountPage'
import { ProfilePage } from './routes/ProfilePage'
import { WarningsPage } from './routes/Chatters/WarningsPage'
import { AdminPage } from './routes/Administration/AdminPage';
import { NotFound } from './routes/NotFound';
import { RegisterPage } from './routes/RegisterPage';
import { ProvideUserContext } from './context/userContext'
import { ProvideThemeContext } from './context/themeContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProvideThemeContext>
        <ProvideUserContext>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/panel' element={<App/>}/>
                    <Route path='/panel/horario' element={<SchedulePage/>}/>
                    <Route path='/panel/mensajes' element={<NotificationPage/>}/>
                    <Route path='/panel/ganancias' element={<EarningPage/>}/>
                    <Route path='/panel/advertencias' element={<WarningsPage/>}/>
                    <Route path='/cuenta' element={<AccountPage/>}/>
                    <Route path='/perfil' element={<ProfilePage/>}/>
                    <Route path='/registro' element={<RegisterPage/>}/>
                    <Route path='/administracion' element={<AdminPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </ProvideUserContext>
    </ProvideThemeContext>
);