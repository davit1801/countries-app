import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout/Layout';
import AboutView from '@/pages/about/views';
import { lazy, Suspense } from 'react';
import DetailsCountry from '@/pages/country/views/DetailsCountry';

const LazyCountryListView = lazy(
  () => import('@/pages/country/views/list/index')
);
const LazyContactView = lazy(() => import('@/pages/contact/views/index'));

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
            <Route path="country/:id" element={<DetailsCountry />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
