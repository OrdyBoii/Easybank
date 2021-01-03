import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-container">
      <a
        href="www.facebook.com"
        target="_blank"
        aria-label="social link Facebook"
        role="navigation"
        className="social-links">
        <FaFacebookSquare />
      </a>
      <a
        href="www.youtube.com"
        target="_blank"
        aria-label="social link Youtube"
        role="navigation"
        className="social-links">
        <FaYoutube />
      </a>
      <a
        href="www.twitter.com"
        target="_blank"
        aria-label="social link Twitter"
        role="navigation"
        className="social-links">
        <FaTwitter />
      </a>
      <a
        href="www.pinterest.com"
        target="_blank"
        aria-label="social link Pinterest"
        role="navigation"
        className="social-links">
        <FaPinterest />
      </a>
      <a
        href="www.instagram.com"
        target="_blank"
        aria-label="social link Instagram"
        role="navigation"
        className="social-links">
        <FaInstagram />
      </a>
    </div>
  );
}
