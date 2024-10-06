import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout/Layout';
import AboutView from '@/pages/about/views';
import ContactPage from '@/pages/contact/views';
import { lazy, Suspense } from 'react';
import DetailsCountry from '@/pages/home/views/DetailsCountry';

const LazyCountryListView = lazy(() => import('@/pages/home/views/list/index'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={
                    <div>
                      <h1>Loading ...</h1>
                    </div>
                  }
                >
                  <LazyCountryListView />
                </Suspense>
              }
            />
            <Route path="/:id" element={<DetailsCountry />} />
            <Route path="about" element={<AboutView />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
