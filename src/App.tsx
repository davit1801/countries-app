import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import AboutView from '@/pages/about/views';
import DetailsCountry from '@/pages/country/views/DetailsCountry';
import NotFoundPage from '@/pages/404';
import Loading from '@/components/Loading';
import { defaultLang } from '@/static/siteContent';

const HomePage = lazy(() => import('@/pages/country/views/list/index'));
const ContactPage = lazy(() => import('@/pages/contact/views/index'));

function App() {
  return (
    <>
      <Routes>
        <Route path=":lang" element={<Layout />}>
          <Route
            path="countries"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path="countries/country/:id" element={<DetailsCountry />} />

          <Route path="about" element={<AboutView />} />

          <Route
            path="contact"
            element={
              <Suspense fallback={<Loading />}>
                <ContactPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/"
          element={<Navigate to={`/${defaultLang}/countries`} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
