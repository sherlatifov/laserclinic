import { Link } from 'react-router-dom';
import bgVideo from '../assets/bg-hero.mp4';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
    <main>
      <section>
        <video className={styles.video} src={bgVideo} autoPlay muted loop playsInline/>
        <div className="container-sm">
          <div className={styles.heroOverlay}>
            <h1>Новая эра лазерной косметологии</h1>
            <p>
              Используем передовые технологии и опыт экспертов, чтобы помочь вам выглядеть и чувствовать себя лучше каждый день.
            </p>
            <div className='heroBtnGroup'>
              <Link>
                Записаться онлайн
              </Link>
              <Link>
                Получить консультацию
              </Link>
            </div>
          </div>
          <div className='card'>
            ss
          </div>
        </div>
      </section>
    </main>
      <section>
        <div className="container">
          <h1 className='section-title'>
            Современные методики и опытный персонал для вашей красоты
          </h1>
          <p>
            Ведущий центр эстетической медицины.  Специализируемся на лазерных процедурах, помогающих добиться желаемого результата.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='section-title'>
            Качественные медицинские услуги с заботой о вашей красоте
          </h1>
        </div>
      </section>
      <section className='bg-dark'>
        <div className="container">
          <h1 className='section-title text-white'>
            Специальные предложения для вашей красоты
          </h1>
          <div className="card-layout">

          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='section-title'>
            Опытные врачи с индивидуальным подходом к каждому
          </h1>
          <div className="card-layout">

          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='section-title'>
            Все, что вы хотели спросить – коротко и ясно
          </h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='section-title'>
            Ваша оценка – наша мотивация быть лучше
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;