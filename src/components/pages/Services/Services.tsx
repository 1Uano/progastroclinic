import React from "react";

import "./Services.styles.scss";

const Services = () => {
  const themeClass = "b-services";

  return (
    <div className={themeClass}>
      <section className={`${themeClass}_section`}>
        <div className={`${themeClass}_section_inner`}>
          <h2 className={`${themeClass}_section_subtitle`}>
            Ми проводимо медичні консультації у двох варіантах, онлайн та очно у
            нашому медцентрі. Але радимо для першого візиту до лікаря, обрати
            особисту присутність, адже треба провести огляд та фізично оцінити
            Ваш стан.
          </h2>
          <h1 className={`${themeClass}_section_title`}>
            Ви можете отримати допомогу у таких сферах:
          </h1>
        </div>
      </section>
      <section className={`${themeClass}_section -green`}>
        <div className={`${themeClass}_section_inner`}>
          <h3 className={`${themeClass}_section_list_title`}>
            Гастроенторологія
          </h3>
          <p className={`${themeClass}_section_text`}>
            Консультація головного лікаря Меденець Віти Вікторівни
          </p>
          <p className={`${themeClass}_section_text`}>
            Надання допомоги пацієнтам з різними захворюваннями
            шлунково-кишкового тракту:
          </p>
          <ul className={`${themeClass}_section_list`}>
            <li className={`${themeClass}_section_list_item`}>
              Гастроезофагеальна рефлюксна хвороба (ГЕРХ).
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Функціональна диспепсія.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Хронічний гастрит, дуоденіт.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Виразкова хвороба шлунку та дванадцятипалої кишки, в тому числі,
              асоційовані з H. Pylori інфекцією.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Хронічна дуоденальна непрохідність.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Хронічний холецистит.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Постхолецистектомічний синдром.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Жовчнокам’яна хвороба (ЖКХ).
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Хронічний панкреатит.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Дискінезія жовчовивідних шляхів (ДЖВШ).
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Хронічний гепатит.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Стеатогепатоз.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Алкогольна хвороба печінки.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Синдром роздратованого кишечника.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Запальні захворювання кишечника (неспецифічний виразковий коліт –
              НВК, Хвороба Крона).
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Хронічний коліт.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Дивертикулярная хвороба кишечника.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Консультативний прийом, огляд пацієнта, уточнення діагнозу за
              допомогою додаткових методів дослідження.
            </li>
            <li className={`${themeClass}_section_list_item`}>
              Призначення адекватного лікування і диспансерне спостереження за
              гастроентерологічної групою хворих.
            </li>
          </ul>
          <h3 className={`${themeClass}_section_list_title -center -italic`}>
            Консультація спеціаліста коштує <br /> 500 гривень, онлайн 400
            гривень
          </h3>
        </div>
      </section>
    </div>
  );
};
export default Services;
