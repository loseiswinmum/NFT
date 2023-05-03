import styles from './style';
import './index.css';
import {Navbar,Gallery,Game,MarketPlace,WorldView,NFT,Footer,Hero} from './components';


const App = () =>(
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-image ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <NFT />
          {/*<Game />*/}
          <Gallery />
          <MarketPlace />
          {/*<WorldView />*/}
          <Footer />
        </div>
      </div>
    </div>

);

export default App