import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

const Button = ({ text, to, as, color, arrow, onClick }) => {
  return (
    <ButtonStyles color={color} onClick={onClick} className="btn" as={as} to={to}>
      {text}
      {arrow || to ?
        <Arrow style={{ marginLeft: "10px" }} />
       : null }
    </ButtonStyles>
  )
}

export default Button
