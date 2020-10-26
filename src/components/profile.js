import React from "react"
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./profile.scss"

export default () => {
  return (
    <section id="profile-root" className="pd-root">
      <h2>Author</h2>
      {/* TODO : require profile image */}
      <div>SeungDuk Seo</div>
      <ul>
        <li className="d-inlineblock">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </li>
        <li className="d-inlineblock">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </li>
        <li className="d-inlineblock">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </li>
      </ul>
    </section>
  )
}
