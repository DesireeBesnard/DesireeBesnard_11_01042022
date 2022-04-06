import Gallery from '../../components/Gallery'
import '../../style/index.css';
import '../../style/Home.css';

function Home() {
  return (
    <main className='container'>
      <section className='banner home-banner'>
        <div className="banner-overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <Gallery />
    </main>
  )
}

export default Home;
