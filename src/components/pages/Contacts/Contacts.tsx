import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import "./Contacts.styles.scss";

const containerStyle = {
  width: "1665",
  height: "604px",
};

const center = {
  lat: 50.017387275425605,
  lng: 36.22984290804492,
};

const Contacts = () => {
  const themeClass = "b-contacts";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBq2FPpjqmMHUwyW5Qf6akWftKya77S_24",
  });

  return (
    <div className={themeClass}>
      <section className={`${themeClass}_section -green`}>
        <div className={`${themeClass}_section_inner`}>
          <h1 className={`${themeClass}_section_title`}>Контакти</h1>
          <h3 className={`${themeClass}_section_subtitle`}>
            Графік прийому <br /> Понеділок - субота 15:00 - 19:00 <br /> Графік
            call center <br />
            Понеділок - неділя 08:00 - 20:00
          </h3>
          <ul className={`${themeClass}_section_list`}>
            <li className={`${themeClass}_section_list_item`}>
              <a href="#map" className={`${themeClass}_section_list_item_link`}>
                Професора Отамановського(Коломенська), 15, Харків, Харківська
                область
              </a>
            </li>
            <li className={`${themeClass}_section_list_item`}>
              <a
                href="mailto:progastrokh@gmail.com"
                className={`${themeClass}_section_list_item_link`}
              >
                progastrokh@gmail.com
              </a>
            </li>
            <li className={`${themeClass}_section_list_item`}>
              <a
                href="tel:+380505554668"
                className={`${themeClass}_section_list_item_link`}
              >
                +38 (050) 555-46-68
              </a>
            </li>
            <li className={`${themeClass}_section_list_item`}>
              <a
                href="https://instagram.com/progastrokh?igshid=OGQ5ZDc2ODk2ZA=="
                target={"_blank"}
                className={`${themeClass}_section_list_item_link`}
              >
                @progastrokh
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={`${themeClass}_section -green`}>
        <div className={`${themeClass}_section_inner -map`}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              <Marker
                position={{ lat: 50.017387275425605, lng: 36.22984290804492 }}
              />
            </GoogleMap>
          )}
        </div>
      </section>
      <section className={`${themeClass}_section -green`}>
        <div className={`${themeClass}_section_inner -form`}>
          <h3 className={`${themeClass}_section_subtitle -big`}>
            Залиште свої дані і ми <br /> обов'язково вам <br />{" "}
            перетелефонуємо!
          </h3>
          <label htmlFor={"phone"}>Ваш номер телефона:</label>
          <input
            id={"phone"}
            name={"phone"}
            required
            type="tel"
            placeholder={"напр. 0505554668"}
            aria-required
            className={`${themeClass}_input`}
          />

          <label htmlFor={"name"}>Ваше ПІБ:</label>
          <input
            id={"name"}
            name={"name"}
            required
            type="text"
            placeholder={"напр. Меденець Віта"}
            aria-required
            className={`${themeClass}_input`}
          />

          <label htmlFor={"question"}>Ваше питання:</label>
          <textarea
            id={"question"}
            name={"question"}
            required
            className={`${themeClass}_textarea`}
          />
          <button type={"submit"} className={`${themeClass}_button`}>
            Надіслати
          </button>
        </div>
      </section>
    </div>
  );
};
export default Contacts;
