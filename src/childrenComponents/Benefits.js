import Arrow from '../assets/img/arrow.svg';

export default function Benefits() {
  return (
    <section className="benefits">
      <section className="benefitsToLearn">
        <article className="benefit">
          <figure className="benefit-figure">
            <img src={Arrow} alt="Arrow Pointing Up" />
          </figure>
          <p>Increase Skill</p>
        </article>
        <article className="benefit">
          <figure className="benefit-figure">
            <img src={Arrow} alt="Arrow Pointing Up" />
          </figure>
          <p>Increase Laning</p>
        </article>
        <article className="benefit">
          <figure className="benefit-figure">
            <img src={Arrow} alt="Arrow Pointing Up" />
          </figure>
          <p>Increase Countering</p>
        </article>
        <article className="benefit">
          <figure className="benefit-figure">
            <img src={Arrow} alt="Arrow Pointing Up" />
          </figure>
          <p>Increase Wins</p>
        </article>
      </section>
    </section>
  );
}
