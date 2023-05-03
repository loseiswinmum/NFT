import styles from '../style';
import {arrowUp} from '../assets';

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-pink p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter}
        flex-col bg-pink-gradient w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="fout-poppins font-medium text-[22px] leading-[27px]">
                    <span className='text-white-gradient font-bold'>Get</span>
                    
                </p>
                <img src={arrowUp} alt="arrow" className="w-[27px] h-[27px] object-contain"/>
            </div>
            <p className="fout-poppins font-medium text-[22px] leading-[27px]">
                <span className='text-white-gradient font-bold'>Started</span>
            </p>
        </div>
    </div>
  )

export default GetStarted