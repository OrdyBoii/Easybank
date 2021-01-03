import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialLinks from "../components/SocialLinks";
import { requestInvite } from "../components/Navbar";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="section footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="col">
            <div className="footer-align-end">
              <Image
                src="/logo-white.svg"
                alt="Easybank logo"
                width={140}
                height={20}
              />
              <SocialLinks />
            </div>
          </div>
          <div className="col">
            <ul>
              <li className="footer-list">
                <Link href="/about">
                  <a className="footer-link">
                    About
                  </a>
                </Link>
              </li>
              <li className="footer-list">
                <Link href="/contact">
                  <a className="footer-link">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="footer-list">
                <Link href="/blog">
                  <a className="footer-link">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="footer-list">
                <Link href="/careers">
                  <a className="footer-link">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="footer-list">
                <Link href="/support">
                  <a className="footer-link">
                    Support
                  </a>
                </Link>
              </li>
              <li className="footer-list">
                <Link href="/privacy-policy">
                  <a className="footer-link">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <button
            type="button"
            className="main-btn"
            onClick={requestInvite}>
            Request Invite
          </button>
          <p>
            &copy; Easybank, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
