import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TelaDeLogin from './components/TelaDeLogin/index.js';
import TelaDeCadastro from './components/TelaDeCadastro/index.js';
import Quiz from './components/Quiz/index.js';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaDeLogin />} />
                <Route path="/login" element={<TelaDeLogin />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/cadastro" element={<TelaDeCadastro />} />
            </Routes>
        </Router>
    );
}