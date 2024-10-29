import { lazy, Suspense, useReducer } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout/Layout';
import AboutView from '@/pages/about/views';
import DetailsCountry from '@/pages/country/views/DetailsCountry';
import NotFoundPage from '@/pages/404';
import { countriesReducer } from '@/pages/country/views/list/reducer/reducer';
import Loading from '@/components/Loading';
import { defaultLang } from '@/static/siteContent';
import { countriesInitialState } from '@/pages/country/views/list/reducer/CountriesState';

const HomePage = lazy(() => import('@/pages/country/views/list/index'));
const ContactPage = lazy(() => import('@/pages/contact/views/index'));

function App() {
  const [countriesList, dispatch] = useReducer(
    countriesReducer,
    countriesInitialState,
  );

  return (
    <>
      <Routes>
        <Route path="/:lang" element={<Layout />}>
          <Route
            path="countries"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage countriesList={countriesList} dispatch={dispatch} />
              </Suspense>
            }
          />
          <Route
            path="countries/country/:id"
            element={<DetailsCountry countriesList={countriesList} />}
          />

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
