import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import Slider from "../Slider/Slider"
import Plx from 'react-plx';

const parallaxData = [
  {
    start: 0,
    end: 500,
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

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles>
        <ul className="typo">
          <Plx
            className='MyAwesomeParallax'
            parallaxData={parallaxData}
          >
            {TYPOS.map(i => <li key="i">{i}</li>)}
          </Plx>
        </ul>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../../src/images/not-arley.png"
            alt="Banner Image"
            layout="fixed"
            width={700}
            placeholder="blurred"
          />
          // <video loop muted autoplay>
          //   <source src={videoUrl} type="video/mp4" />
          // </video>
        )}

        {/* <Slider /> */}
        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                Добро пожаловать в Angeles Latinos
                <span style={{ color: "var(--primary)" }}>!</span>
              </h1>
            )}
            <h2>
              Солнечный уголок Кубы в Москве, где вы научитесь танцевать, забывать обо всех проблемах,
              расслабляться и радоваться каждому мгновению так, как это умеют только в Латинской Америке
            </h2>
            <div className="banner__btns">
              <Button onClick={() => navigate('#enroll')} text="Записаться" />
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
