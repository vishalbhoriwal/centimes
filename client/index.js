import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/home.jsx';
import './style/style.css';
import Details from './pages/details';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
