import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/DashboardPage';
import { LoginPage } from './routes/LoginPage';
import { SchedulePage } from './routes/SchedulePage'
import { MessagePage } from './routes/MessagePage'
import { EarningPage } from './routes/EarningPage'
import { AccountPage } from './routes/AccountPage'
import { ProfilePage } from './routes/ProfilePage'
import { WarningsPage } from './routes/WarningsPage'
import { NotFound } from './routes/NotFound';
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
                    <Route path='/panel/mensajes' element={<MessagePage/>}/>
                    <Route path='/panel/ganancias' element={<EarningPage/>}/>
                    <Route path='/panel/advertencias' element={<WarningsPage/>}/>
                    <Route path='/cuenta' element={<AccountPage/>}/>
                    <Route path='/perfil' element={<ProfilePage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </ProvideUserContext>
    </ProvideThemeContext>
);