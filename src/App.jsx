import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BookPage';
import ContactPage from './pages/ContactPage/ContactPage';

export default function App() {
  return (
    <div>
      <Header />

      <main >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}