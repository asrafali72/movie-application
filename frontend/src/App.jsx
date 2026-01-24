import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin/add" element={<AddMoviePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;