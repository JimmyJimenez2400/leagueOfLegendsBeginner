import Title from '../assets/img/Title.png';
import backgroundVideo from '../assets/video/LOL.mp4';

export default function Hero() {
  const heroSectionText =
    'The guide that will make sure you keep up with the team';
  return (
    <section className="Heromain">
      <div className="videoContainer">
        <video loop autoPlay muted className="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <section className="heroSection">
          <img src={Title} alt="League Of Legends Logo" />
          <p className="secondaryText">{heroSectionText}</p>
          <button className="learnNowBtn">
            <p>Learn Now</p>
          </button>
        </section>
      </div>
    </section>
  );
}
