import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUP from './pages/SignUp';
import Loggedin from './pages/Loggedin';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUP />} />
                <Route path='/successin' element={<Loggedin />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
