import React from 'react';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './profile.scss';

export default () => {
  return (
    <section id="profile-root" className="pd-root flex-g-1">
      <h2>Author</h2>
      <img
        src="https://source.unsplash.com/rU051J7-jqA/180x180"
        alt="profile_icon"
        style={{ borderRadius: '50%' }}
      />
      <div id="profile-name">SeungDuk Seo</div>
      <ul>
        <li className="d-inlineblock">
          <a href="https://github.com/seosd97">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li className="d-inlineblock">
          <a href="https://www.instagram.com/seosd97/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li className="d-inlineblock">
          <a href="mailto:seosd97@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </li>
      </ul>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
  );
};
