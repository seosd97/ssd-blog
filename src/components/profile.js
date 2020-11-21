import React from 'react';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/profile.scss';

export default () => {
  return (
    <section id="profile-root">
      <h2>Author</h2>
      <img src="images/profile_img.jpg" alt="profile_icon" style={{ borderRadius: '50%' }} />
      <div id="profile-name">SeungDuk Seo</div>
      <ul>
        <li className="d-inlineblock">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/seosd97">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li className="d-inlineblock">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/seo.seungduk/"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </li>
        <li className="d-inlineblock">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/seosd97/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li className="d-inlineblock">
          <a target="_blank" rel="noopener noreferrer" href="mailto:seosd97@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </li>
      </ul>
      <p>A programmer who slowly but surely seeking to learn. wanna be.</p>
    </section>
  );
};
