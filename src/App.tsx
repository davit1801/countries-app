import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout/Layout';
import AboutView from '@/pages/about/views';
import ContactPage from '@/pages/contact/views';
import CountryListView from '@/pages/home/views/list/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<CountryListView />} />
            <Route path="about" element={<AboutView />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
