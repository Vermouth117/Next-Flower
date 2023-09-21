
import styles from "./page.module.css";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.homeImage}></div>
      </main>
      <Footer />
    </>
  );
};
