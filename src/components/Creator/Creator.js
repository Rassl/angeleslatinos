import * as React from "react"
import { Link, navigate } from "gatsby"
import { CreatorStyles } from "./CreatorStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import Plx from 'react-plx';

const parallaxData = [
  {
    start: 0,
    end: 1500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: 'scale',
      },
    ],
  },
];

const TYPOS = ['Reggeton', 'Bachata', 'Salsa'];

const Creator = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <CreatorStyles>
        {/* <Plx
          className='MyAwesomeParallax'
          parallaxData={parallaxData}
        > */}
        <StaticImage
          className="banner__image"
          imgClassName="banner__image--content"
          src="../../../src/images/arley.png"
          alt="Banner Image"
          width={900}
          placeholder="blurred"
        />
        {/* </Plx> */}
        <div className="container">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <div className="banner__content">
            <h2>
              <p>Ola amigos</p>
              Меня зовут Арлей, Я профессиональный кубинский танцор и основатель школы Angele's latinos.
              <p>Зимой 2009 года, я приехал в Россию.
                У меня были кроссовки, летняя куртка, 10$ в кармане и мечта. Сейчас я знаю, что нет ничего невозможного, а самое главное - это вера в себя, смелость, упорство и люди, которые окружают тебя на пути к цели.</p>
              <p> Мои ученики - это моя вторая семья, за 10 лет преподавания в Москве их наверное больше 2000. Многие из них уже сами стали успешными преподавателями или танцорами.
                Я с удовольствием жду тебя в своей школе, где вы научитесь классно танцевать, никогда не сдаваться, раскрепоститесь и просто  будете чаще улыбаться! Возраст, опыт не имеют значения, важно только желание.</p>  До встречи на занятиях!
            </h2>
          </div>
        </div>
        <div className="gradient"></div>
      </CreatorStyles>
      <span id="topContent"></span>
    </>
  )
}

export default Creator;
