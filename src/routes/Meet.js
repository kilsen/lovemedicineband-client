import React from 'react';

const Meet = props => {
  return (
    <>
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 padding_all">
              <div className="copies_1">
                {/*<h6>Love Medicine</h6>*/}
                <h1 className="text-center">Meet The Band</h1>
                {/*<p></p>*/}
              </div>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-3">
                <div className="team_1">
                  <div className="ih-item square effect7"><a href={""}>
                    <div className="img"><img src="img/biopics/dean.jpg" alt="img"/></div>
                    <div className="info">
                      <h3>Dean Adler</h3>
                      <p>Dean was born in Miami and took his first drum lessons at the University of Miami at age 10
                        from Steve Bagby of the Bakers Dozen. He’s been in several bands since high school. After
                        taking several life years off for family and career as a successful sport fishing Captain, 8
                        years ago he reconnected with his love of music. He’s also played with other local bands
                        including TAG and Fox Maple Band in addition to Love Medicine.</p>
                    </div>
                  </a></div>
                </div>
                <div className="team_2">
                  <h3 className="text-center">Dean Adler</h3>
                  <p className="text-center">Drums</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="team_1">
                  <div className="ih-item square effect7"><a href={""}>
                    <div className="img"><img src="img/biopics/lewjack.jpg" alt="img"/></div>
                    <div className="info">
                      <h3>Lewjack Dorrance</h3>
                      <p>Lewjack was born in Nairobi Kenya, and is a Physician Assistant specializing in orthopedics,
                        living in Tequesta since the late 1980s. Lewjack enjoys playing an eclectic collection of music
                        from the classic rock and roll of his youth to techno modern bass lines on his American Fender
                        P-bass. He loves the synergy of a four piece band where every member plays a critical role.</p>
                    </div>
                  </a></div>
                </div>
                <div className="team_2">
                  <h3 className="text-center">Lewjack Dorrance</h3>
                  <p className="text-center">Bass</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="team_1">
                  <div className="ih-item square effect7"><a href={""}>
                    <div className="img"><img src="img/biopics/kevin.jpg" alt="img"/></div>
                    <div className="info">
                      <h3>Kevin Ilsen</h3>
                      <p>Kevin started guitar lessons at age 10 and played bass in an original band in college. He
                        continued playing acoustic guitar as a life-long hobby, and dove more seriously into lead guitar
                        about 6 years ago. His main influences include ‘60s pop, Motown, British Invasion, ‘70s classic
                        rock, new wave, and singer-songwriters in various genres. Kevin only recently relocated to Palm
                        Beach County, and joined the vibrant local open mic scene, where he met other like-minded
                        musicians to form Love Medicine.</p>
                    </div>
                  </a></div>
                </div>
                <div className="team_2">
                  <h3 className="text-center">Kevin Ilsen</h3>
                  <p className="text-center">Lead Guitar</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="team_1">
                  <div className="ih-item square effect7"><a href={""}>
                    <div className="img"><img src="img/biopics/pat.jpg" alt="img"/></div>
                    <div className="info">
                      <h3>Pat Magee</h3>
                      <p>Pat says that he likes to write and perform songs that have some “medicine” in them and wants
                        to bring something positive to people through music. Originally from Miami, Pat is a long time
                        Physical Therapist and has spent his career doing what he loves most – helping people. Pat
                        believes that music is a fantastic way to bring people together and make life richer.</p>
                    </div>
                  </a></div>
                </div>
                <div className="team_2">
                  <h3 className="text-center">Pat Magee</h3>
                  <p className="text-center">Guitar and Lead Vocals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Meet;