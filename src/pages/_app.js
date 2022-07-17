import "../styles/globals.css";
import { AppWrapper } from "../context/state";
import { SessionProvider } from 'next-auth/react'

function Application({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </SessionProvider>
  );
}

export default Application;
