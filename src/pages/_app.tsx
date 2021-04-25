import '../styles/global.scss'

import { Header } from "../components/Header";
import Head from 'next/head';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext'

import styles from '../styles/app.module.scss'


function MyApp({ Component, pageProps }) {

  
  return (
    <>
      <Head>
        <title>Podcastr | Bem-Vindo</title>
      </Head>
      
      <PlayerContextProvider>

        <div className={styles.wrapper}>
            <main>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
        </div>

      </PlayerContextProvider>
    </>
  );
}


export default MyApp
