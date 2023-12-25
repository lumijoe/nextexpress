import '@/styles/globals.css'

// import文はそのまま使用できます

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
