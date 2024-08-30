import React from "react";

import "./Home.styles.scss";

const Home = () => {
  const themeClass = "b-homePage";

  return (
    <div className={themeClass}>
      <section className={`${themeClass}_section`}>
        <div className={`${themeClass}_section_inner`}>
          <div className={`${themeClass}_section_imageWrapper`}>
            <img
              className={`${themeClass}_section_image`}
              src="/src/assets/images/home_1.webp"
              alt="Vita Medenets"
            />
          </div>
          <div className={`${themeClass}_section_content`}>
            <h1 className={`${themeClass}_section_content_title`}>
              Вітаю Вас на сторінці ProGastro!
            </h1>
            <p className={`${themeClass}_section_content_text -no_indent`}>
              Мене звати <b>Меденець Віта Вікторівна,</b>
            </p>
            <p className={`${themeClass}_section_content_text`}>
              Я лікар гастроентеролог вищої категорії та лікар ендоскопіст, з
              досвідом роботи вже понад 20 років.
            </p>
            <p className={`${themeClass}_section_content_text`}>
              Моя головна мета, як лікаря, це допомога людям, особливо у такий
              складний час.
            </p>
            <p className={`${themeClass}_section_content_text`}>
              У своїй роботі я використовую методики лікування, роблячи висновок
              на повному огляді характеру проблеми кожного клієнта.
            </p>
            <p className={`${themeClass}_section_content_text`}>
              Створення медичного центру ProGastro для мене не лише крок уперед,
              але і реальна можливість надавати професійну медичну допомогу тим,
              хто її потребує.
            </p>
          </div>
        </div>
      </section>
      <section className={`${themeClass}_section -green`}>
        <div className={`${themeClass}_section_inner`}>
          <div className={`${themeClass}_section_comment`}>
            <span className={`${themeClass}_section_comment_text`}>
              "У нашому медичному центрі ми будемо раді вітати усіх та наша
              співпраця змінить ваше життя лише на краще!"
            </span>
            <span className={`${themeClass}_section_comment_author`}>
              - Меденець В. В., лікар вищої категорії.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
