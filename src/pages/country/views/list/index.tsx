// import { useReducer, useRef, useState } from 'react';
// import styles from './index.module.css';
// import HeroSection from '@/pages/country/components/HeroSection/HeroSection';
// import CountrySection from '@/pages/country/components/CountrySection/CountrySection';
// import Card from '@/pages/country/components/Card/Card';
// import CardInfo from '@/pages/country/components/Card/CardInfo/CardInfo';
// import LikeButton from '@/components/Buttons/LikeButton/LikeButton';
// import SortSelect from '@/pages/country/components/Form/SortSelect/SortSelect';
// import { countriesReducer } from '@/pages/country/views/list/reducer/reducer';
// import CountryCreateForm from '@/pages/country/components/Form/CountryCreateForm/CountryCreateForm';
// import CountryDelateBtn from '@/components/Buttons/CountryDelateBtn/CountryDelateBtn';
// import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
// import OTPInputs from '@/pages/country/components/OTPInputs/OTPInputs';
// import CountryEditBtn from '@/components/Buttons/CountryEditBtn/CountryEditBtn';
// import { getCountries } from '@/api/countries';
// import { useQuery } from '@tanstack/react-query';
// import { useVirtualizer } from '@tanstack/react-virtual';

// const CountryListView: React.FC = () => {
//   const [editingCountry, setEditingCountry] = useState<CountryType | null>(
//     null,
//   );

//   const {
//     data = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ['countries-list'],
//     queryFn: getCountries,
//     staleTime: 0,
//   });

//   const [countriesList, dispatch] = useReducer(countriesReducer, data);

//   if (!isLoading && data.length && countriesList.length === 0) {
//     dispatch({
//       type: 'setCountries',
//       payload: { countriesData: data },
//     });
//   }

//   const parentRef = useRef(null);

//   const rowVirtualizer = useVirtualizer({
//     count: countriesList.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 420,
//     // overscan: 5,
//   });

//   return (
//     <>
//       <HeroSection />
//       <CountrySection>
//         <SortSelect dispatch={dispatch} />
//         <CountryCreateForm
//           dispatch={dispatch}
//           countriesList={countriesList}
//           editingCountry={editingCountry}
//           setEditingCountry={setEditingCountry}
//         />
//         {isError ? (
//           <p className={styles.error}>
//             Failed to load countries. Please try again.
//           </p>
//         ) : (
//           <div
//             ref={parentRef}
//             style={{
//               height: `1000px`,
//               width: `270px`,
//               overflow: 'auto',
//             }}
//           >
//             <ul
//               style={{
//                 height: `${rowVirtualizer.getTotalSize()}px`,
//                 width: '100%',
//                 position: 'relative',
//               }}
//             >
//               {rowVirtualizer.getVirtualItems().map((virtualRow) => {
//                 const country = countriesList[virtualRow.index];
//                 return (
//                   <li
//                     key={country.id}
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       height: `${virtualRow.size}px`,
//                       transform: `translateY(${virtualRow.start}px)`,
//                     }}
//                   >
//                     <Card country={country} editingCountry={editingCountry}>
//                       <CardInfo country={country} />
//                       <LikeButton country={country} dispatch={dispatch} />
//                       <div className={styles.countries_btns}>
//                         <CountryEditBtn
//                           country={country}
//                           setEditingCountry={setEditingCountry}
//                         />
//                         <CountryDelateBtn
//                           country={country}
//                           dispatch={dispatch}
//                         />
//                       </div>
//                     </Card>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}
//       </CountrySection>
//       <OTPInputs inputQnty={4} />
//     </>
//   );
// };

// export default CountryListView;
import { useReducer, useRef, useState } from 'react';
import styles from './index.module.css';
import HeroSection from '@/pages/country/components/HeroSection/HeroSection';
import CountrySection from '@/pages/country/components/CountrySection/CountrySection';
import Card from '@/pages/country/components/Card/Card';
import CardInfo from '@/pages/country/components/Card/CardInfo/CardInfo';
import LikeButton from '@/components/Buttons/LikeButton/LikeButton';
import SortSelect from '@/pages/country/components/Form/SortSelect/SortSelect';
import { countriesReducer } from '@/pages/country/views/list/reducer/reducer';
import CountryCreateForm from '@/pages/country/components/Form/CountryCreateForm/CountryCreateForm';
import CountryDelateBtn from '@/components/Buttons/CountryDelateBtn/CountryDelateBtn';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import OTPInputs from '@/pages/country/components/OTPInputs/OTPInputs';
import CountryEditBtn from '@/components/Buttons/CountryEditBtn/CountryEditBtn';
import { getCountries } from '@/api/countries';
import { useQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';

const CountryListView: React.FC = () => {
  const [editingCountry, setEditingCountry] = useState<CountryType | null>(
    null,
  );

  const { data = [], isError } = useQuery({
    queryKey: ['countries-list'],
    queryFn: getCountries,
  });

  const [countriesList, dispatch] = useReducer(countriesReducer, data);

  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: countriesList.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 420,
    // overscan: 5,
  });

  return (
    <>
      <HeroSection />
      <CountrySection>
        <SortSelect dispatch={dispatch} />
        <CountryCreateForm
          dispatch={dispatch}
          countriesList={countriesList}
          editingCountry={editingCountry}
          setEditingCountry={setEditingCountry}
        />
        {isError ? (
          <p className={styles.error}>
            Failed to load countries. Please try again.
          </p>
        ) : (
          <div
            ref={parentRef}
            style={{
              height: `1000px`,
              width: `270px`,
              overflow: 'auto',
            }}
          >
            <ul
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const country = countriesList[virtualRow.index];
                return (
                  <li
                    key={country.id}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <Card country={country} editingCountry={editingCountry}>
                      <CardInfo country={country} />
                      <LikeButton country={country} dispatch={dispatch} />
                      <div className={styles.countries_btns}>
                        <CountryEditBtn
                          country={country}
                          setEditingCountry={setEditingCountry}
                        />
                        <CountryDelateBtn
                          country={country}
                          dispatch={dispatch}
                        />
                      </div>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </CountrySection>
      <OTPInputs inputQnty={4} />
    </>
  );
};

export default CountryListView;
