import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero_section">
          <img src="../public/hero-img.webp" className="hero_img" alt="" />
          <h1 className="main_heading">THE ONLY WAY TO TRAVEL</h1>
        </section>
        <section className="country_section">
          <div className="countries">
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
