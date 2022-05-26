import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"
import '../../../src/images/bachata.jpg'

const FeaturedProduct = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <FeaturedProductStyles>
      <Link to={gatsbyPath}>
        {feature === 'bachata' ? <StaticImage
          src={`../../../src/images/bachata.jpg`}
          alt="Banner Image"
          objectFit="cover"
          // height={'200px'}
          // layout="fixed"
          placeholder="blurred"
        /> : feature === 'salsa' ? (
            <StaticImage
              src={`../../../src/images/salsa.jpg`}
              alt="Banner Image"
              objectFit="cover"
              // height={'200px'}
              // layout="fixed"
              placeholder="blurred"
            />
        ) : (
              <StaticImage
                src={`../../../src/images/reggeton.jpg`}
                alt="Banner Image"
                objectFit="cover"
                // height={'200px'}
                // layout="fixed"
                placeholder="blurred"
              />
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
