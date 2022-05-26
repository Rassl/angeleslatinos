import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { TeacherStyles } from "./TeacherStyles"
import '../../../src/images/bachata.jpg';

const data = {
  arley: {
    title: 'Арлей Томас Перез Гарсия',
    about: 'Основатель школы. Профессиональный кубинский танцор с 10-летним стажем преподавания в Москве. За годы работы у него научились танцевать больше 3 тысяч человек, а многие из его учеников уже сами стали успешными преподавателя!'
  },
  mishel: {
    title: 'Мишель Лара',
    about: 'Мишель получил профессиональное танцевальное образование, закончив Кубинскую Академию Танца по профессии хореограф! Работал во многочисленных театральных постановках и известных шоу группах'
  },
  yoel: {
    title: 'Йоэль Рамон Диаз Гонзалез',
    about: `Йоэль начал свой профессиональный танцевальный путь с самого детства, принимая участие и побеждая на фестивалях и танцевальных конкурсах в Guaimaro, Vertientes, Nuevitas, организуемых главным театром Кубы.`
  }
}

const Teacher = ({ feature, title, introduction }) => {

  return (
    <TeacherStyles>
      {feature === 'arley' ? <StaticImage
        src={`../../../src/images/arley.jpg`}
        alt="Banner Image"
        objectFit="cover"
        // height={'200px'}
        // layout="fixed"
        placeholder="blurred"
      /> : feature === 'mishel' ? (
        <StaticImage
          src={`../../../src/images/mishel.jpg`}
          alt="Banner Image"
          objectFit="cover"
          // height={'200px'}
          // layout="fixed"
          placeholder="blurred"
        />
      ) : feature === 'yoel' ? (
        <StaticImage
          src={`../../../src/images/yoel.jpg`}
          alt="Banner Image"
          objectFit="cover"
          // height={'200px'}
          // layout="fixed"
          placeholder="blurred"
        />
      ) : null}
      {data[feature] && (
        <div className="features__item--content">
          <h4>{data[feature].title}</h4>
          <p>{data[feature].about}</p>
        </div>
      )}
    </TeacherStyles>
  )
}

export default Teacher;
