import * as React from "react"
import { Link, navigate } from "gatsby"
import { AboutStyles } from "./AboutStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import Plx from 'react-plx';
import Ticker from "react-ticker"

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

const About = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <AboutStyles>
        <div className="container">
          <Ticker speed={15}>
            {({ index }) => (
              <>
                <h1 className="running-line">Мы сами позаботимся о партнерах / будем не только танцевать, но и отдыхать вместе </h1>
              </>
            )}
          </Ticker>
          <Ticker speed={10} direction="toRight">
            {({ index }) => (
              <>
                <h1 className="running-line">Ты танцуешь с мужчиной, а не с колбасой</h1>
              </>
            )}
          </Ticker>
          <Ticker speed={15} direction="toLeft">
            {({ index }) => (
              <>
                <h1 className="running-line">1👣2👣3👣4👣5👣6👣7👣8👣</h1>
              </>
            )}
          </Ticker>
          <Ticker speed={10} direction="toRight">
            {({ index }) => (
              <>
                <h1 className="running-line">Не женщина, а 🐅</h1>
              </>
            )}
          </Ticker>
          <div className="gradient"></div>
        </div>
      </AboutStyles>
      <span id="topContent"></span>
    </>
  )
}

export default About;
