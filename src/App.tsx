import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout/Layout';
import AboutView from '@/pages/about/views';
import { lazy, Suspense } from 'react';
import DetailsCountry from '@/pages/country/views/DetailsCountry';
import NotFoundPage from '@/pages/404';
const LazyCountryListView = lazy(
  () => import('@/pages/country/views/list/index')
);
const LazyContactView = lazy(() => import('@/pages/contact/views/index'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route
              path="countries"
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
            <Route path="countries/country/:id" element={<DetailsCountry />} />

            <Route path="about" element={<AboutView />} />

            <Route
              path="contact"
              element={
                <Suspense
                  fallback={
                    <div>
                      <h1>Loading ...</h1>
                    </div>
                  }
                >
                  <LazyContactView />
                </Suspense>
              }
            />
          </Route>
          <Route path="/" element={<Navigate to={`/ka/countries`} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
