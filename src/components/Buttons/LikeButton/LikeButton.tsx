import React, { Dispatch } from 'react';
import icon from '@/assets/images/like-btn.svg';
import styles from './LikeButton.module.css';
import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import { encreaseLikes } from '@/api/countries';
import { useMutation } from '@tanstack/react-query';

interface ComponentProps {
  country: CountryType;
  dispatch: Dispatch<countriesReducerAction>;
}

const LikeButton: React.FC<ComponentProps> = ({ country, dispatch }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: encreaseLikes,
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    dispatch({
      type: 'like',
      payload: {
        id: country.id,
      },
    });

    mutate({ id: country.id, payload: { likes: country.likes + 1 } });
  };

  return (
    <button
      className={styles.like_btn}
      onClick={handleClick}
      disabled={isPending}
    >
      <img src={icon} alt="like icon" />
      <span className={styles.btn_text}>Like</span>
      <span className={styles.count_num}>{country.likes}</span>
    </button>
  );
};

export default LikeButton;

// import React, { Dispatch } from 'react';
// import icon from '@/assets/images/like-btn.svg';
// import styles from './LikeButton.module.css';
// import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
// import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
// import { encreaseLikes } from '@/api/countries';
// import { useMutation } from '@tanstack/react-query';

// interface ComponentProps {
//   country: CountryType;
//   dispatch: Dispatch<countriesReducerAction>;
// }

// const LikeButton: React.FC<ComponentProps> = ({ country, dispatch }) => {
//   const { mutate, isPending } = useMutation({
//     mutationFn: encreaseLikes,
//     onSuccess: (updatedCountry: CountryType) => {
//       // Update the state with the latest count from the server
//       dispatch({
//         type: 'updateCountry',
//         payload: { country: updatedCountry },
//       });
//     },
//   });

//   const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
//     e.preventDefault();
//     // Optimistically update the local state
//     dispatch({
//       type: 'like',
//       payload: {
//         id: country.id,
//       },
//     });

//     // Trigger the mutation to update the server
//     mutate({ id: country.id, payload: { likes: country.likes + 1 } });
//   };

//   return (
//     <button
//       className={styles.like_btn}
//       onClick={handleClick}
//       disabled={isPending}
//     >
//       <img src={icon} alt="like icon" />
//       <span className={styles.btn_text}>Like</span>
//       <span className={styles.count_num}>{country.likes}</span>
//     </button>
//   );
// };

// export default LikeButton;
