import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { requestInvite } from "../components/Navbar";

export default function Home() {
  return (
    <main id="main">
      <Head>
        <title>Easybank - Landing Page</title>
        <meta
          name="description"
          content="A landing page created for Easybank as part of Frontend Mentor"
        />
      </Head>
      <Navbar />
      <section className="section hero-section">
        <div className="container">
          <div className="hero-left">
            <h1>
              Next generation digital banking
            </h1>
            <p>
              Take your financial life online.
              Your Easybank account will be a
              one-stop-shop for spending, saving,
              budgeting, investing, and much more.
            </p>
            <button
              type="button"
              className="main-btn"
              onClick={requestInvite}>
              Request Invite
            </button>
          </div>
        </div>
        <img
          src={"/image-mockups.png"}
          alt="Four iphone screens displaying the Easybank app"
          className="hero-image"
        />
      </section>
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn
              your bank account into your
              financial hub. Control your finances
              like never before.
            </p>
          </div>
          <div className="section-grid">
            <article className="col">
              <img
                src={"/icon-online.svg"}
                alt="Hand holding money icon inside a green circle"
              />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile
                applications allow you to keep
                track of your finances wherever
                you are in the world.
              </p>
            </article>
            <article className="col">
              <img
                src={"/icon-budgeting.svg"}
                alt="Hand holding money icon inside a green circle"
              />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes
                each month. Receive notifications
                when you’re close to hitting your
                limits.
              </p>
            </article>
            <article className="col">
              <img
                src={"/icon-onboarding.svg"}
                alt="Hand holding money icon inside a green circle"
              />
              <h3>Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your
                account in minutes online and
                start taking control of your
                finances right away.
              </p>
            </article>
            <article className="col">
              <img
                src={"/icon-api.svg"}
                alt="Hand holding money icon inside a green circle"
              />
              <h3>Open API</h3>
              <p>
                Manage your savings, investments,
                pension, and much more from one
                account. Tracking your money has
                never been easier.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section latest-section">
        <div className="container">
          <h4 className="latest-header">
            Latest Articles
          </h4>
          <div className="latest-grid">
            <article className="col">
              <figure className="latest-article-image" />
              <div className="latest-article-content">
                <h5>By Claire Robinson</h5>
                <h6>
                  Receive money in any currency
                  with no fees
                </h6>
                <p>
                  The world is getting smaller and
                  we’re becoming more mobile. So
                  why should you be forced to only
                  receive money ...
                </p>
              </div>
            </article>
            <article className="col">
              <figure className="latest-article-image restaurant-bg" />
              <div className="latest-article-content">
                <h5>By Wilson Hutton</h5>
                <h6>
                  Treat yourself without worrying
                  about money
                </h6>
                <p>
                  Our simple budgeting feature
                  allows you to separate out your
                  spending and set realistic
                  limits ...
                </p>
              </div>
            </article>
            <article className="col">
              <figure className="latest-article-image plane-bg" />
              <div className="latest-article-content">
                <h5>By Wilson Hutton</h5>
                <h6>
                  Take your Easybank card wherever
                  you go
                </h6>
                <p>
                  We want you to enjoy your
                  travels. This is why we don’t
                  charge any fees on purchases
                  while you’re ...
                </p>
              </div>
            </article>
            <article className="col">
              <figure className="latest-article-image confetti-bg" />
              <div className="latest-article-content">
                <h5>By Claire Robinson</h5>
                <h6>
                  Our invite-only Beta accounts
                  are now live!
                </h6>
                <p>
                  After a lot of hard work by the
                  whole team, we’re excited to
                  launch our closed beta. It’s
                  easy to request ...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
