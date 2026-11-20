import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css";
import PlayerCard from "./Utils/Playercard";
// import ProfileCard from "./Utils/profilecard";

type  status = "pending" | "approved" | "rejected"

function setstatus(status: status){
  console.log(`status set to: ${status}`)
}
setstatus("approved")

function App() {
   
  const name = 'Clinton'

  // type peopleprops = {
  //   id: number,
  //   name: String,
  //   role: String,
  //   location: String,
  // }

  // const people:peopleprops[] = [
  //   {
  //     id: 1,
  //     name: 'Ayoola',
  //     role: 'software Engineer',
  //     location: 'osogbo'
  //   },
  //   {
  //     id: 2,
  //     name: 'qodri',
  //     role: 'software developer',
  //     location: 'Ilobu'
  //   },
  //   {
  //     id: 3,
  //     name: 'clinton',
  //     role: 'Mobile app developer',
  //     location: 'Kobo'
  //   },
  //   {
  //     id: 4,
  //     name: 'David',
  //     role: 'Technical officer',
  //     location: 'Owode'
  //   }, 
  // ]

  
  type Playerinfo = {
    jersey : number,
    name: string,
    imgurl: string,
    position: string,
    country: string,
  }

  const player :Playerinfo[] = [
    {
      jersey: 7,
      name: 'christiano ronaldo',
      position: 'forward',
      imgurl: 'https://i.pinimg.com/1200x/18/60/67/186067c3c81040a68a049b9344b9f995.jpg',
      country: 'Portugal'
    },
    {
      jersey: 10,
      name: 'messi',
      position: 'L wing forward',
      imgurl: 'https://www.vedantu.com/seo/content-images/a2de1c30-d35c-40f2-8bbf-1c8905273394_compressed_2.jpg',
      country: 'Argentina'
    },
    {
      jersey: 10,
      name: 'neymar',
      position: 'right wing forward',
      imgurl: 'https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg',
      country: 'Brazil'
    },
    {
      jersey: 10,
      name: 'mbappe',
      position: ' Central forward',
      imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXXWPubcuGC1P-qB49klHKYWS0tlW_MgP73O35FBWO-qhYzBbITkf9FCk&s=10',
      country: 'France'
    },
  ]


  return ( 

    <div className="site-shell" >
      {/* {
         people.map((person)=>(
          <ProfileCard key={person.id}
            id={person.id}
            name= {person.name}
            role={person.role}
            location={person.location}
            
          />
         ))
      } */}

        
    <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
            Football Players
        </h1>

        <div className="flex flex-wrap justify-center gap-6">

            {player.map((p) => (
                <PlayerCard
                    key={`${p.name}-${p.jersey}`}
                    jersey={p.jersey}
                    name={p.name}
                    imgurl={p.imgurl}
                    position={p.position}
                    country={p.country}
                />
            ))}

        </div>

    </div>


      <Navbar />
       {/* <div>
        <ProfileCard 
          name="John Doe" 
          role="Software Engineer" 
         imageUrl="https://via.placeholder.com/150" 
         location="New York, USA" /> 
         <Button text= "follow me"/>
          </div> */}
        
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
