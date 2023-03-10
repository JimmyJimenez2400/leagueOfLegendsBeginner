import Title from '../assets/img/Title.png';
import backgroundVideo from '../assets/video/LOL.mp4';

export default function Main() {
  return (
    <section id="main">
      <video autoPlay loop muted id="main-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <section className="main">
        <section className="heroSection">
          <img src={Title} alt="League Of Legends Logo" />
          <p>The beginner's guide that will help you understand the game!</p>
          <button className="learnNow-btn">
            <p>Learn Now</p>
          </button>
        </section>
      </section>
    </section>
  );
}
