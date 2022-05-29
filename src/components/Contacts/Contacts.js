import * as React from "react"
import { ContactsStyles } from "./ContactsStyles";

const Contacts = () => {

  return (
    <ContactsStyles className="section">
      <div className="container container__tight">
        <div className="intro__area">
          <h2>Как нас найти?</h2>
        </div>
      </div>

      <div className="container">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A20ff14072feef6baf9758a4f7b2985f84f2d686b638445a9bffb50bfb474267c&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </div>
    </ContactsStyles>
  )
}

export default Contacts;
