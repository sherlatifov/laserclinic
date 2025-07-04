import { NavLink, Link } from 'react-router-dom';
import styles from './Footer.module.css';
import footerLogo from '../../assets/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="d-flex flex-column" style={{background: `radial-gradient(50% 50% at 50% 50%, #3D3C3D 0%, #262626 100%), #FFFFFF`}}>
        <div className="container-fluid">
            <div className="navbar py-4 w-100">
                <ul className="px-0 mb-0 d-flex align-items-center flex-column flex-lg-row gap-4 w-100">
                    <li className='d-block  '>
                        <Link to='/'><img src={footerLogo} alt="" /></Link>
                    </li>
                    <li className=''>
                        <Link className="btn btn-outline-light py-2 px-4">Получить консультацию</Link>
                    </li>
                </ul>
                <ul className="px-0 mb-0 d-flex align-items-center gap-5">
                    <li className=''>
                        <Link className='text-white'>+7 (958) 760-32-85</Link>
                    </li>
                    <li className=''>
                        <Link className='text-white'>lazerklinick@yandex.ru</Link>
                    </li>
                    <li className="">
                        <div className={`${styles.footerSocials} d-flex gap-3 justify-content-center w-100`}>
                            <a href="http://vk.com" className="d-flex align-items-center justify-content-center py-4 w-100 w-md-auto">
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0924 12.7634C4.25918 12.7634 0.361617 7.9859 0.199219 0.0361328H3.62208C3.73451 5.87106 6.25793 8.34262 8.25668 8.85222V0.0361328H11.4797V5.06844C13.4534 4.85186 15.5271 2.55866 16.2267 0.0361328H19.4497C19.1861 1.34438 18.6606 2.58309 17.9061 3.67477C17.1517 4.76645 16.1844 5.68762 15.0649 6.38066C16.3146 7.01391 17.4183 7.91022 18.3033 9.01045C19.1883 10.1107 19.8345 11.3898 20.1992 12.7634H16.6514C16.3241 11.5703 15.6587 10.5023 14.7387 9.69325C13.8187 8.88417 12.685 8.37002 11.4797 8.21522V12.7634H11.0924Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="http://youtube.com" className='d-flex align-items-center justify-content-center py-4 w-100 w-md-auto'>
                                <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48844 9.58611V3.9743C10.4806 4.91173 12.0236 5.81731 13.8485 6.79363C12.3433 7.62835 10.4806 8.56492 8.48844 9.58611ZM19.591 1.18328C19.2474 0.730524 18.6617 0.378089 18.0381 0.261409C16.2053 -0.0866411 4.77099 -0.0876311 2.93915 0.261409C2.43911 0.355149 1.99384 0.581732 1.61133 0.933772C-0.000362515 2.42967 0.504666 10.4517 0.893147 11.7512C1.05651 12.3136 1.26769 12.7193 1.53365 12.9855C1.87631 13.3376 2.34547 13.58 2.88436 13.6887C4.39345 14.0008 12.168 14.1753 18.0062 13.7355C18.5441 13.6418 19.0202 13.3916 19.3958 13.0246C20.8859 11.5347 20.7843 3.06213 19.591 1.18328Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`${styles.footerBorder} py-5`}>
            <div className='container-fluid'>
                <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className={styles.footerNavTitle}>Страницы</h3>
                        <ul className={`${styles.footerNav} nav flex-column mt-4 gap-3`}>
                            <li>
                                <Link to="/about">О Нас</Link>
                            </li>
                            <li>
                                <Link to="/">Услуги</Link>
                            </li>
                            <li>
                                <Link to="/">Подобрать услуги</Link>
                            </li>
                            <li>
                                <Link to="/">Полезное</Link>
                            </li>
                            <li>
                                <Link to="/specialists">Наши специалисты</Link>
                            </li>
                            <li>
                                <Link to="/">Сведения об организации</Link>
                            </li>
                            <li>
                                <Link to="/">Версия для слабовидящих</Link>
                            </li>
                            <li>
                                <Link to="/">Налоговый вычет</Link>
                            </li>
                            <li>
                                <Link to="/"><span className='text-red'>Франшиза «Лазер Клиник»</span></Link>
                            </li>
                            <li className="d-inline d-lg-none">
                                <Link to="/">Подарочный сертификат</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className={styles.footerNavTitle}>Услуги</h3>
                        <ul className={`${styles.footerNav} nav flex-column mt-4 gap-3`}>
                            <li>
                                <NavLink>Лазерная александритовая эпиляция</NavLink>
                            </li>
                            <li>
                                <NavLink>Микроигольчатый фракционный RF-лифтинг</NavLink>
                            </li>
                            <li>
                                <NavLink>Лифтинг лица Vela Shape</NavLink>
                            </li>
                            <li>
                                <NavLink>Коррекция фигуры Vela Shape</NavLink>
                            </li>
                        </ul>
                        <div className={styles.footerCard}>
                            <h2>
                                Карьера в ЛазерКлиник
                            </h2>
                            <Link className=''>Смотреть вакансии</Link>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-12 col-lg-6">
                        <h3 className={styles.footerNavTitle}>Адреса в Краснодаре <span>16</span></h3>
                        <ul className={`${styles.footerNav}  mt-4 px-0 row`}>
                            {[
                            "1 Мая, 186",
                            "Бочарникова 1",
                            "Восточно-Кругликовская, 30",
                            "Душистая 77, к 1",
                            "Западный Обход 39/2, к 7",
                            "Зиповская 31",
                            "Игнатова 10/1",
                            "Красная, 160",
                            "Кубанская Набережная,130",
                            "Платановый бульвар, 3",
                            "Сормовская 122",
                            "Ставропольская, 110/1",
                            "ул. Петра Метальникова 28",
                            "Уральская 75 к 2",
                            "Чернобыльцев, 1",
                            "респ. Адыгея, пгт. Яблоновский, ул. Гагарина 157а"
                            ].map((address, i) => (
                            <li key={i} className="d-flex align-items-start gap-3 col-6 mb-3">
                                <span>
                                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                                        <path d="M14.3467 15.1014C14.3467 15.3161 14.2737 15.4995 14.1279 15.6519C13.9822 15.8047 13.8029 15.8809 13.5898 15.8809H12.0257C11.8128 15.8809 11.6307 15.8047 11.4794 15.6519C11.328 15.4995 11.2522 15.3161 11.2522 15.1014V6.35589H9.25121C8.72408 6.35589 8.26449 6.50573 7.87209 6.80505C7.47972 7.1045 7.21634 7.5083 7.08182 8.01685L5.19811 15.1014C5.1422 15.3273 5.01897 15.5138 4.8283 15.6604C4.63762 15.8075 4.43579 15.8809 4.22292 15.8809H2.5581C2.36755 15.8809 2.21888 15.8104 2.11256 15.6692C2.00601 15.5277 1.97505 15.3669 2.01992 15.1861L4.10521 7.23716C4.6657 5.09028 6.48194 4.01688 9.5537 4.01688H13.6571C13.8476 4.01688 14.0102 4.09583 14.1446 4.25428C14.2791 4.41245 14.3467 4.59326 14.3467 4.79654V15.1014Z" fill="#525152"/>
                                        <path d="M19.8208 15.8809H18.2738C18.0609 15.8809 17.8785 15.802 17.7273 15.6436C17.5759 15.4854 17.5 15.2989 17.5 15.0845V4.79654C17.5 4.58189 17.5759 4.39552 17.7273 4.23734C17.8785 4.07914 18.0609 3.99994 18.2738 3.99994H19.8208C20.034 3.99994 20.2162 4.07914 20.3676 4.23734C20.5187 4.39552 20.5946 4.58189 20.5946 4.79654V8.76254H22.3603C22.8423 8.76254 23.2656 8.62963 23.6299 8.36428C23.9943 8.09871 24.3389 7.6723 24.6642 7.08453L25.9421 4.79654C26.2337 4.26539 26.6259 3.99994 27.1193 3.99994H29.0196C29.2327 3.99994 29.3587 4.07626 29.398 4.22861C29.4373 4.38149 29.3952 4.57063 29.2721 4.79654L27.4895 8.05081C27.2314 8.52527 26.943 8.91781 26.6235 9.22861C26.3037 9.53932 25.8859 9.757 25.3705 9.88121C25.7293 9.96004 26.0991 10.189 26.4803 10.5675C26.8612 10.946 27.1979 11.3611 27.4895 11.8132L29.5412 15.1014C29.6754 15.3273 29.7147 15.5138 29.6588 15.6604C29.6026 15.8075 29.4681 15.8809 29.2552 15.8809H27.3715C27.1586 15.8809 26.9288 15.8047 26.6822 15.6519C26.4355 15.4995 26.2447 15.3161 26.1105 15.1014L24.6642 12.7964C24.3165 12.2314 23.9691 11.8077 23.6213 11.525C23.2739 11.2426 22.8537 11.1015 22.3603 11.1015H20.5946V15.1184C20.5946 15.333 20.5187 15.5138 20.3676 15.6604C20.2162 15.8075 20.034 15.8809 19.8208 15.8809Z" fill="#525152"/>
                                    </svg>
                                </span>
                                <Link className=''>{address}</Link>
                            </li>
                            ))}
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className='py-5 d-flex justify-content-between align-items-center flex-md-row flex-column gap-3'>
                <Link to='' className={styles.footerBtmLink}>
                    Политика конфиденциальности
                </Link>
                <Link to='' className={styles.footerBtmLink}>
                    Обработка файлов cookie
                </Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;