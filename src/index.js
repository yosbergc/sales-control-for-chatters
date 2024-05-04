import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/DashboardPage';
import { LoginPage } from './routes/LoginPage';
import { SchedulePage } from './routes/SchedulePage'
import { MessagePage } from './routes/MessagesPage'
import { EarningPages } from './routes/EarningsPage'
import { AccountPage } from './routes/AccountPage'
import { ProfilePage } from './routes/ProfilePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/panel' element={<App/>}/>
            <Route path='/panel/horario' element={<SchedulePage/>}/>
            <Route path='/panel/mensajes' element={<MessagePage/>}/>
            <Route path='/panel/ganancias' element={<EarningPages/>}/>
            <Route path='/cuenta' element={<AccountPage/>}/>
            <Route path='/perfil' element={<ProfilePage/>}/>
        </Routes>
    </Router>
);