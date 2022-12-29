import { useState } from "react";

export const ThemeSwitchComponent = () => {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
      }}
    >
      {dark ? (
        <svg
          width="32px"
          height="32px"
          viewBox="-2 0 24 24"
          id="meteor-icon-kit__regular-moon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.68 20.0771C18.8676 20.1476 19.0359 20.275 19.1565 20.4538C19.4654 20.9116 19.3447 21.5331 18.8868 21.842C16.8964 23.1849 14.5451 23.9149 12.0869 23.9149C5.41374 23.9149 0 18.5644 0 11.958C0 5.35064 5.41353 0 12.0869 0C14.5451 0 16.8964 0.72996 18.8868 2.07286C19.3447 2.38174 19.4654 3.00329 19.1565 3.46112C19.0359 3.6399 18.8676 3.76728 18.68 3.83774C15.3297 5.1507 13.0869 8.34728 13.0869 11.9568C13.0869 15.5674 15.3295 18.7641 18.68 20.0771zM16.1861 21.0572C13.0732 19.1309 11.0869 15.7296 11.0869 11.9568C11.0869 8.18497 13.0733 4.78392 16.1861 2.85769C14.9123 2.29688 13.5225 2 12.0869 2C6.5129 2 2 6.46047 2 11.958C2 17.4546 6.51308 21.9149 12.0869 21.9149C13.5225 21.9149 14.9123 21.618 16.1861 21.0572z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          id="meteor-icon-kit__regular-sun"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 0C12.5523 0 13 0.447715 13 1V2C13 2.55228 12.5523 3 12 3C11.4477 3 11 2.55228 11 2V1C11 0.447715 11.4477 0 12 0ZM12 21C12.5523 21 13 21.4477 13 22V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V22C11 21.4477 11.4477 21 12 21ZM22 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H22C21.4477 13 21 12.5523 21 12C21 11.4477 21.4477 11 22 11ZM1 11H2C2.55228 11 3 11.4477 3 12C3 12.5523 2.55228 13 2 13H1C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11ZM20.4853 3.51472C20.8758 3.90524 20.8758 4.53841 20.4853 4.92893L19.7782 5.63604C19.3876 6.02656 18.7545 6.02656 18.364 5.63604C17.9734 5.24551 17.9734 4.61235 18.364 4.22183L19.0711 3.51472C19.4616 3.12419 20.0948 3.12419 20.4853 3.51472ZM5.63604 18.364C6.02656 18.7545 6.02656 19.3876 5.63604 19.7782L4.92893 20.4853C4.53841 20.8758 3.90524 20.8758 3.51472 20.4853C3.12419 20.0948 3.12419 19.4616 3.51472 19.0711L4.22183 18.364C4.61235 17.9734 5.24551 17.9734 5.63604 18.364ZM19.7782 18.364L20.4853 19.0711C20.8758 19.4616 20.8758 20.0948 20.4853 20.4853C20.0948 20.8758 19.4616 20.8758 19.0711 20.4853L18.364 19.7782C17.9734 19.3876 17.9734 18.7545 18.364 18.364C18.7545 17.9734 19.3876 17.9734 19.7782 18.364ZM4.92893 3.51472L5.63604 4.22183C6.02656 4.61235 6.02656 5.24551 5.63604 5.63604C5.24551 6.02656 4.61235 6.02656 4.22183 5.63604L3.51472 4.92893C3.12419 4.53841 3.12419 3.90524 3.51472 3.51472C3.90524 3.12419 4.53841 3.12419 4.92893 3.51472Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};