import * as React from "react"
import {
  FaFacebookSquare as Facebook, FaInstagram as Instagram,
  FaLinkedin as Linkedin
} from "react-icons/fa"
import { FooterMenuStyles, FooterStyles } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      {/* <div className="container container__tight">
        {siteMeta.twitterUsername ||
        siteMeta.facebookUsername ||
        siteMeta.instagramUsername ||
        siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Подпишитесь на нас<span>.</span>
            </h5>
            <ul>
              {siteMeta.facebookUsername && (
                <li>
                  <a
                    href={`https://www.facebook.com/${siteMeta.facebookUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Facebook />
                  </a>
                </li>
              )}
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMeta.linkedinUsername && (
                <li>
                  <a
                    href={`https://www.linkedin.com/${siteMeta.linkedinUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Linkedin />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div> */}
      {/* <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Developed by{"rasulsah"}
          </p>
        </div>
      </CopyrightStyles> */}
    </FooterStyles>
  )
}

export default Footer
