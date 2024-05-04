import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import { LoginPage } from './routes/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<App/>}/>
        </Routes>
    </Router>
);