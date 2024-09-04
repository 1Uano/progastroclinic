import "./AboutUs.styles.scss";

const AboutUs = () => {
  const themeClass = "b-aboutUsPage";

  return (
    <div className={themeClass}>
      <section className={`${themeClass}_section`}>
        <div className={`${themeClass}_section_inner`}>
          <p className={`${themeClass}_section_text -no_indent -center`}>
            ProGastro – це медичний центр гастроентеролога Меденець Віти
            Вікторівни, заснований у 2023 році. Професіоналізм наших лікарів
            вимірюється десятками років медичної практики та постійним
            розвитком. Регулярно наші співробітники відвідують конференції та
            курси підвищення категорії.
          </p>
          <p className={`${themeClass}_section_text -no_indent -center`}>
            Робота ProGastro схвалена ліцензією МОЗ України. Гастроентерологія є
            головною ланкою нашої клініки, але так само Ви можете отримати
            допомогу від професіоналів у сферах ендокринології та травматології.
          </p>
        </div>
      </section>
      <section className={`${themeClass}_section -green`}>
        <div className={`${themeClass}_section_inner`}>
          <p className={`${themeClass}_section_text -white`}>
            У період з 1994-2000 років – Меденець Віта Вікторівна навчалася у
            Харківському державному медичному університеті за спеціальністю
            «Лікувальна справа». Після успішного закінчення навчання пройшла
            інтернатуру при Харківському державному медичному університеті.
          </p>
          <p className={`${themeClass}_section_text -white`}>
            У 2004 році отримала спеціалізацію по «Гастроентерології» на базі
            Харківської медичної академії післядипломної освіти.
          </p>
          <p className={`${themeClass}_section_text -white`}>
            У 2014 присвоєно вищу кваліфікаційну категорію по спеціальності
            «Гастроентерологія».
          </p>
          <p className={`${themeClass}_section_text -white`}>
            З 2016 року має спеціалізацію по «Ендоскопії» на базі Харківської
            медичної академії післядипломної освіти.
          </p>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
