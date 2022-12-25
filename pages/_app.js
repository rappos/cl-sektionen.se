import "/styles/root.css";
import "/styles/nav.css";
import "/styles/footer.css";
import "/styles/kalender.css";
import "/styles/verksamhet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sektionen för Civilingenjör och Lärare</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
        <meta name="description" content="Sektionen för Civilingenjör och Lärare"/>
        <meta name="keywords" content="Clsektionen, CL-sektionen, cl-sektionen, Lärare, KTH, Student, CL"/>
        <meta name="author" content="Armin Baymani"/>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
