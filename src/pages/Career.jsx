import { NavLink, Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className='container'>
        <div>
            <div className="d-flex flex-column gap-4">
                <div className='row'>
                    <div className="col-12 col-lg-6">
                        <h3>
                            Станьте частью нашей команды!
                        </h3>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <p>
                            Мы объединяем профессионалов, для которых эстетическая медицина – это наука, искусство и призвание. Если вы разделяете наш подход к качеству и заботе о пациентах – давайте развиваться вместе!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-5'>
                <div className="d-flex flex-column gap-4">
                  <h1 className='section-title'>
                    Преимущества работы у нас
                  </h1>
                  <div className='row g-3'>
                    <div className="col-12 col-lg-6">
                      <div className="card h-100">
                        <div className="card-body d-flex flex-column justify-content-end gap-0">
                          <div>
                            <h3 className='card-title text-white'>
                              Работа на оборудовании премиум-класса
                            </h3>
                            <p className='card-text text-white'>
                              Доступ к лучшим аппаратам (Lumenis, Candela, Fotona) и авторским протоколам лечения
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="row g-3">
                          <div className="col-12 col-sm-6">
                            <div className="card h-100">
                              <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                                        <path d="M35.6679 21.6666V28.6666M17.0012 24.5833V28.6666C17.0012 29.5949 17.7387 30.4851 19.0515 31.1415C20.3642 31.7979 22.1447 32.1666 24.0012 32.1666C25.8577 32.1666 27.6382 31.7979 28.951 31.1415C30.2637 30.4851 31.0012 29.5949 31.0012 28.6666V24.5833M34.9912 22.7423C35.2001 22.6502 35.3773 22.4988 35.501 22.3069C35.6246 22.115 35.6893 21.8911 35.6869 21.6628C35.6846 21.4346 35.6153 21.212 35.4877 21.0227C35.3601 20.8335 35.1798 20.6858 34.9691 20.598L24.9696 16.0433C24.6656 15.9046 24.3353 15.8329 24.0012 15.8329C23.6671 15.8329 23.3369 15.9046 23.0329 16.0433L13.0346 20.5933C12.8269 20.6843 12.6502 20.8338 12.5261 21.0236C12.402 21.2134 12.3359 21.4352 12.3359 21.662C12.3359 21.8887 12.402 22.1106 12.5261 22.3004C12.6502 22.4901 12.8269 22.6397 13.0346 22.7306L23.0329 27.29C23.3369 27.4286 23.6671 27.5004 24.0012 27.5004C24.3353 27.5004 24.6656 27.4286 24.9696 27.29L34.9912 22.7423Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                  <h3 className="card-title fs-5 fw-semibold">
                                    Обучение за счет клиники
                                  </h3>
                                  <p className='card-text'>
                                    Постоянное обучение у мировых экспертов
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="card h-100">
                              <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                                        <path d="M31.1076 22.0984C32.2105 22.5095 33.1918 23.1922 33.961 24.0831C34.7301 24.9741 35.2622 26.0446 35.508 27.1956C35.7538 28.3467 35.7053 29.5411 35.3672 30.6685C35.029 31.7959 34.412 32.8198 33.5733 33.6456C32.7345 34.4713 31.7011 35.0723 30.5686 35.3928C29.4361 35.7133 28.241 35.7431 27.0939 35.4794C25.9468 35.2157 24.8847 34.667 24.0059 33.884C23.1271 33.1011 22.4598 32.1092 22.0659 31M18.1693 17H19.3359V21.6667M29.4976 26.1934L30.3143 27.0217L27.0243 30.3117M26.3359 19.3334C26.3359 23.1994 23.2019 26.3334 19.3359 26.3334C15.4699 26.3334 12.3359 23.1994 12.3359 19.3334C12.3359 15.4674 15.4699 12.3334 19.3359 12.3334C23.2019 12.3334 26.3359 15.4674 26.3359 19.3334Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                  <h3 className="card-title fs-5 fw-semibold">
                                    Доход выше рынка + бонусы
                                  </h3>
                                  <p className='card-text'>
                                    Конкурентная зарплата, премии за результаты и % от рекомендаций
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="card h-100">
                              <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                                        <path d="M28.6667 24H13.5M28.6667 17H13.5M21.6667 31H13.5M34.5 17V28.6667C34.5 29.2855 34.2542 29.879 33.8166 30.3166C33.379 30.7542 32.7855 31 32.1667 31H26.3333M26.3333 31L28.6667 28.6667M26.3333 31L28.6667 33.3333" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                  <h3 className="card-title fs-5 fw-semibold">
                                    Гибкий график и соцпакет
                                  </h3>
                                  <p className='card-text'>
                                    Возможность выбрать смены, оформление по ТК и ДМС
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="card h-100">
                              <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                                        <path d="M31.0026 20.5L24.0026 13.5M24.0026 13.5L17.0026 20.5M24.0026 13.5V29.8333M15.8359 34.5H32.1693" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                  <h3 className="card-title fs-5 fw-semibold">
                                    Карьера без потолка
                                  </h3>
                                  <p className='card-text'>
                                    От стажера до руководителя  – прозрачная система роста 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <div className='d-flex flex-column gap-4'>
            <h1 className='section-title'>Как присоединиться к команде?</h1>
            <div className='row g-3'>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column justify-content-between gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title'>
                                    Обучение за счет клиники
                                </h5>
                                <h5>
                                    01
                                </h5>
                            </div>
                            <p className='card-text'>
                                Постоянное обучение у мировых экспертов
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex justify-content-between flex-column gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title'>
                                    Участвуйте в собеседовании
                                </h5>
                                <h5>
                                    02
                                </h5>
                            </div>
                            <p className='card-text'>
                                Очная встреча с руководителем направления 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex justify-content-between flex-column gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title'>
                                    Пройдите адаптацию
                                </h5>
                                <h5>
                                    03
                                </h5>
                            </div>
                            <p className='card-text'>
                                3 месяца с наставником обучение стандартам и работе на оборудовании
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex justify-content-between flex-column gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title'>
                                    Добро пожаловать!
                                </h5>
                                <h5>
                                    04
                                </h5>
                            </div>
                            <p className='card-text'>
                                Доступ к закрытым тренингам, участие в конференциях за счет клиники и расширенный соцпакет
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section-dark d-flex flex-column gap-4'>
            <h1 className='section-title'>Актуальные вакансии</h1>
        </div>
    </div>
  );
};

export default Career;