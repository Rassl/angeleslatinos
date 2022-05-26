import * as React from "react"
import { Link } from "gatsby"
import { TeachersStyles } from "./TeacherStyles"
import Teacher from "./Teacher"
import useFeaturedProduct from "../../hooks/use-featured-product"
import Button from "../Button/Button"

const Teachers = ({ title, introduction, data = [] }) => {

  return (
    <TeachersStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {data.map((node, index) => {
          return <Teacher title="some" introduction={'someee'} feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight">
        <div className="intro__area">
          {introduction && <p>{introduction}</p>}
        </div>
      </div>
    </TeachersStyles>
  )
}

export default Teachers;
