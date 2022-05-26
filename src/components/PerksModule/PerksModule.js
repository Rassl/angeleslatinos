import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"
import Counter from '../Counter/Counter';

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Counter end={4} text={'Лет школе'}  />
        <Counter end={2000} text={'Людей обученных танцевать'} />
        <Counter end={10} text={'Лет преподавания'} />
        <Counter end={10} text={'Учеников ставших преподавателями'} />
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
