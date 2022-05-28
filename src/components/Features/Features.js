import * as React from "react"
import FeaturedProduct from "./FeaturedProduct"
import { FeaturedProductsStyles } from "./FeaturesStyles"

const Features = ({ title, introduction, data = [] }) => {

  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {data.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight">
        <div className="intro__area">
          {introduction && <p>{introduction}</p>}
        </div>
      </div>
    </FeaturedProductsStyles>
  )
}

export default Features
