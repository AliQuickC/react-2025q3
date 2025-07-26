import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.sass';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundaryPage/ErrorBoundaryPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx';
import About from './components/About/About.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
