import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false)
  let menu;

  if(showMenu) {
    menu =
      <div className="mobile-menu">
          <ul>
            <li>
              <Link href="/">
                <a
                  className={
                    router.pathname == "/"
                      ? "link-active"
                      : ""
                  }>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about"
                      ? ""
                      : ""
                  }>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == "/contact"
                      ? "link-active"
                      : ""
                  }>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={
                    router.pathname == "/blog"
                      ? "link-active"
                      : ""
                  }>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a
                  className={
                    router.pathname == "/careers"
                      ? "link-active"
                      : ""
                  }>
                  Careers
                </a>
              </Link>
            </li>
          </ul>
        </div>
  }

  return (
    <header className="section nav">
      <a className="skip-link" href="#main" role="skip-link">
        Skip to content
      </a>
      <div className="container nav-container">
        <img src={/logo.svg} alt="Easybank logo">
        <nav>
          <ul className="navbar">
            <li>
              <Link href="/">
                <a
                  className={
                    router.pathname == "/"
                      ? "link-active"
                      : ""
                  }>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about"
                      ? ""
                      : ""
                  }>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == "/contact"
                      ? "link-active"
                      : ""
                  }>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={
                    router.pathname == "/blog"
                      ? "link-active"
                      : ""
                  }>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a
                  className={
                    router.pathname == "/careers"
                      ? "link-active"
                      : ""
                  }>
                  Careers
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="main-btn"
          type="button"
          onClick={requestInvite}>
          Request Invite
        </button>
        <FaBars className="menu-btn" onClick={() => setShowMenu(!showMenu)}/>
      </div>
      {menu}
    </header>
  );
}

export function requestInvite(e) {
  e.preventDefault();
  alert("You have requested an invite!");
}
