import Home from "../components/Home"
import Head from 'next/head';
const root = () => {
 
    return (
        <div>
            <Head>
                <title>Tailwind integration</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <Home />
            </main>
        </div>
    );
}

export default root