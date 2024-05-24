import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <section className="img-section">
        <img
          src="/Meet-Image/image-woman-in-videocall.jpg"
          alt="woman-in-videocall"
          className="image-one image-sec"
        />
        <img
          src="/Meet-Image/image-women-videochatting.jpg"
          alt="women-videochatting"
          className="image-two image-sec"
        />
        <img
          src="/Meet-Image/image-men-in-meeting.jpg"
          alt="men-in-meeting"
          className="image-three image-sec"
        />
        <img
          src="/Meet-Image/image-man-texting.jpg"
          alt="man-texting"
          className="image-four image-sec"
        />
      </section>
      <section className="about">
        <p className="quote">Lorem ipsum dolor sit</p>
        <h2 className="about-title">
          Dolorum voluptatibus sit aliquid veritatis
        </h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui
          dolorum voluptatibus sit aliquid veritatis numquam unde doloribus quam
          pariatur nulla possimus autem.
        </p>
      </section>
    </main>
  );
}
