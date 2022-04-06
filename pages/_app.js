import React from 'react';
import '../styles/globals.css';
import { wrapper } from '../middleware/configureStore';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);