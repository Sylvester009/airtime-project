import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header mobile-header">
          <img src="Meet-Image/logo.svg" alt="meet logo" className="logo" />
          <div className="people-div">
            <img
              src="Meet-Image/image-hero-left.png"
              alt="people"
              className="people-left"
            />
            <img
              src="Meet-Image/image-hero-right.png"
              alt="people"
              className="people-right"
            />
          </div>
          <div className="hero-div">
            <h1 className="hero-title">Lorem dolor sit ipsum</h1>
            <p className="hero-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              molestiae quo veritatis ullam corrupti commodi doloremque
            </p>
            <div className="button-div">
              <Link href="/form" title="button" className="download-button">
                Buy Airtime
              </Link>

              <Link href="/" title="button" className="ques-button">
                What is it?
              </Link>
            </div>
          </div>
        </header>

        <header className="header desktop-header">
          <img src="Meet-Image/logo.svg" alt="meet logo" className="logo" />
          <div className="people-div">
            <img
              src="Meet-Image/image-hero-left.png"
              alt="people"
              className="people-left"
            />
            <div className="hero-div">
              <h1 className="hero-title">Lorem dolor sit ipsum</h1>
              <p className="hero-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae quo veritatis ullam corrupti commodi doloremque
              </p>

              <div className="button-div">
                <Link href="/form" title="button" className="download-button">
                  Buy Airtime
                </Link>
                <Link href="/" title="button" className="ques-button">
                  What is it?
                </Link>
              </div>
            </div>
            <img
              src="Meet-Image/image-hero-right.png"
              alt="people"
              className="people-right"
            />
          </div>
        </header>

        <div className="divider">
          <div className="line"></div>
          <div className="number">
            <p>01</p>
          </div>
        </div>

        {children}

        <div className="divider divider-2">
          <div className="line"></div>
          <div className="number">
            <p>02</p>
          </div>
        </div>

        <footer className="footer">
          <h2 className="footer-title">Lorem ipsum dolor adipisicing elit.</h2>
          <p className="footer-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestiae quo veritatis ullam corrupti commodi doloremque
          </p>
          <button
            type="button"
            title="button"
            className="download-button footer-button"
          >
            Download <span>v1.3</span>
          </button>
        </footer>
      </body>
    </html>
  );
}
