import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css";


function App() {
   
  const name = 'Clinton'

  return (
    <div className="site-shell">
      <Navbar />
      

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Technology for what's next</p>
            <h1>Build your future with <span>{name} Tech.</span></h1>
            <p className="hero-description">
              Practical tech education, useful digital skills, and the confidence
              to turn your next big idea into something real.
            </p>
            <a className="button button-primary" href="#programs">Explore our programs <span aria-hidden="true">→</span></a>
            <div className="hero-note">
              <span className="note-mark" aria-hidden="true">CT</span>
              <p>Learn by doing.<br /><strong>Grow at your pace.</strong></p>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration representing connected technology">
            <div className="art-glow" />
            <div className="art-card art-card-back"><span>01</span><i /></div>
            <div className="art-card art-card-front">
              <div className="art-topline"><span>CLINTON TECH</span><span>✳</span></div>
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-core">C<span>.</span></div>
              <div className="art-bottomline"><span>IDEAS IN MOTION</span><span>EST. FOR THE FUTURE</span></div>
            </div>
            <div className="floating-tag tag-top">CREATE <span>↗</span></div>
            <div className="floating-tag tag-bottom"><span className="status-dot" /> YOUR NEXT CHAPTER</div>
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✳</span>
          </div>
        </section>

        <section className="programs section-wrap" id="programs">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Where curiosity becomes capability</p>
              <h2>Make technology <span>work for you.</span></h2>
            </div>
            <p>Explore the skills that help people and businesses move forward in a digital world.</p>
          </div>

          <div className="program-grid">
            <article className="program-card">
              <span className="program-number">01 / DIGITAL SKILLS</span>
              <div className="program-icon icon-grid" aria-hidden="true"><i /><i /><i /><i /></div>
              <h3>Get confidently connected.</h3>
              <p>Build everyday computer and online skills, one clear step at a time.</p>
              <a href="#about" className="text-link">Explore digital skills <span aria-hidden="true">↗</span></a>
            </article>
            <article className="program-card card-featured">
              <span className="program-number">02 / WEB &amp; DESIGN</span>
              <div className="program-icon icon-code" aria-hidden="true">&lt;/&gt;</div>
              <h3>Bring your ideas to life.</h3>
              <p>Discover how design and web technology can turn a blank page into something useful.</p>
              <a href="#about" className="text-link">Explore creative tech <span aria-hidden="true">↗</span></a>
            </article>
            <article className="program-card">
              <span className="program-number">03 / TECH SUPPORT</span>
              <div className="program-icon icon-signal" aria-hidden="true"><i /><i /><i /></div>
              <h3>Make tech feel simple.</h3>
              <p>Find practical guidance for choosing, using, and getting more from technology.</p>
              <a href="#contact" className="text-link">See how we can help <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-inner section-wrap">
            <div className="about-stamp" aria-hidden="true">
              <span>THINK</span><span className="stamp-star">✳</span><span>MAKE</span><span className="stamp-star">✳</span><span>GROW</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">A better way to learn tech</p>
              <h2>Technology should open doors, <span>not add hurdles.</span></h2>
              <p>At Clinton Tech, we make learning approachable and useful. Whether you're starting fresh or levelling up, you'll find practical guidance designed to help you take the next step with confidence.</p>
              <a className="button button-light" href="#contact">Get to know us <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div>
            <p className="eyebrow">Your next step starts here</p>
            <h2>Ready to make something <span>happen?</span></h2>
          </div>
          <a className="button button-primary" href="mailto:hello@clintontech.com">Talk to Clinton Tech <span aria-hidden="true">→</span></a>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
