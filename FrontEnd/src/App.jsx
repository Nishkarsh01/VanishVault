import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUP from './pages/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUP />} />
            </Routes>
        </Router>
    );
}

export default App;
