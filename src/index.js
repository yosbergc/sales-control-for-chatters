import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/DashboardPage';
import { LoginPage } from './routes/LoginPage';
import { SchedulePage } from './routes/SchedulePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<App/>}/>
            <Route path='/dashboard/horario' element={<SchedulePage/>}/>
        </Routes>
    </Router>
);