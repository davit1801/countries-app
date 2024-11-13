// import { useEffect, useReducer, useRef, useState } from 'react';
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
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { useVirtualizer } from '@tanstack/react-virtual';
// import Loading from '@/components/Loading';

// const CountryListView: React.FC = () => {
//   const [editingCountry, setEditingCountry] = useState<CountryType | null>(
//     null,
//   );

//   const {
//     status,
//     data,
//     error,
//     isFetching,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//   } = useInfiniteQuery({
//     queryKey: ['countries'],
//     queryFn: ({ pageParam }) => getCountries({ page: pageParam, limit: 10 }),
//     getNextPageParam: (lastGroup) => lastGroup.nextOffset,
//     initialPageParam: 1,
//   });

//   const [countriesList, dispatch] = useReducer(countriesReducer, []);

//   const parentRef = useRef(null);

//   const allRows = data ? data.pages.flatMap((d) => d.rows) : [];

//   const rowVirtualizer = useVirtualizer({
//     count: hasNextPage ? allRows.length + 1 : allRows.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 420,
//     overscan: 3,
//   });

//   const virtualItems = rowVirtualizer.getVirtualItems();

//   useEffect(() => {
//     if (data) {
//       const newCountries = data.pages.flatMap((d) => d.rows);
//       if (newCountries.length !== countriesList.length) {
//         dispatch({
//           type: 'setCountries',
//           payload: { countriesData: newCountries },
//         });
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data]);

//   useEffect(() => {
//     const [lastItem] = [...virtualItems].reverse();

//     if (!lastItem) {
//       return;
//     }

//     if (
//       lastItem.index >= allRows.length - 1 &&
//       hasNextPage &&
//       !isFetchingNextPage
//     ) {
//       fetchNextPage();
//     }
//   }, [
//     hasNextPage,
//     fetchNextPage,
//     allRows.length,
//     isFetchingNextPage,
//     virtualItems,
//   ]);

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
//         {status === 'pending' ? (
//           <Loading />
//         ) : status === 'error' ? (
//           <span>Error: {error.message}</span>
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
//               className={styles.countries}
//             >
//               {rowVirtualizer.getVirtualItems().map((virtualRow) => {
//                 const isLoaderRow = virtualRow.index > allRows.length - 1;
//                 const country = countriesList[virtualRow.index];

//                 return country ? (
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
//                     {isLoaderRow ? (
//                       hasNextPage ? (
//                         'Loading more...'
//                       ) : (
//                         'Nothing more to load'
//                       )
//                     ) : (
//                       <Card country={country} editingCountry={editingCountry}>
//                         <CardInfo country={country} />
//                         <LikeButton country={country} dispatch={dispatch} />
//                         <div className={styles.countries_btns}>
//                           <CountryEditBtn
//                             country={country}
//                             setEditingCountry={setEditingCountry}
//                           />
//                           <CountryDelateBtn
//                             country={country}
//                             dispatch={dispatch}
//                           />
//                         </div>
//                       </Card>
//                     )}
//                   </li>
//                 ) : null;
//               })}
//             </ul>
//           </div>
//         )}
//         <div>
//           {isFetching && !isFetchingNextPage ? 'Background Updating...' : null}
//         </div>
//       </CountrySection>
//       <OTPInputs inputQnty={4} />
//     </>
//   );
// };

// export default CountryListView;
