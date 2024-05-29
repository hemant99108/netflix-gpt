export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR="https://tse1.mm.bing.net/th?id=OIP.lrXIZMWkZLUwC1X5rlEjKgHaHa&pid=Api&P=0&h=180";

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY,
    }
  };


export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg';


export const SUPPORTED_LANGUAGES=[
  {identifier:"en",name:"english"},
  {identifier:"hindi",name:"hindi"},
  {identifier:"spanish",name:"spanish"},]



export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;