import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {formatInTimeZone} from "date-fns-tz";

const Home = props => {
  const [nextShow, setNextShow] = useState({});
  useEffect(() => {
    axios
      .get(`/api/v1/shows/next`)
      .then((res) => setNextShow(res.data))
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  return (
    <>
      <section id="center" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-8">
                <p className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/uab99Wxl7hE?controls=0"
                    title="Love Medicine Promo Video!!!"
                    allowFullScreen
                  ></iframe>
                </p>
              </div>
              <div className="col-sm-4">
                <div className="center_1">
                  <h6>Introducing . . .</h6>
                  <h1>Love Medicine</h1>
                  <p>We're a band of
                    seasoned rockers in the
                    Jupiter / West Palm Beach area,
                    playing an eclectic mix of classic
                    rock, blues, R & B, country,
                    southern rock, pop, and
                    alternative tunes that gets a
                    crowd up and onto their feet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-3">
                  <div className="middle_1">
                    <h1>Love Medicine ...</h1>
                    <p>. . . a prescription for success at your next party, event, or venue!</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="middle_2">
                    <div className="ih-item square effect15 top_to_bottom">
                      <div className="img"><img src="img/lm_at_pool.jpg" alt="img"/></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="middle_2">
                    <div className="ih-item square effect15 top_to_bottom">
                      <div className="img"><img src="img/lm_brewhouse_2.jpg" alt="img"/></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="middle_2">
                    <div className="ih-item square effect15 top_to_bottom">
                      <div className="img"><img src="img/lm_vintage.jpg" alt="img"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {nextShow &&
          <section id="tour">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 padding_all">
                  <div className="tour_1">
                    <h1 className="text-center">Our Next Show</h1>
                  </div>
                  <div className="col-sm-4 col-sm-offset-2 padding_all">
                    {nextShow.photo &&
                      <div className="tour_2">
                        <div className="ih-item square effect13 left_to_right">
                          {nextShow.URL &&
                            <a href={nextShow.URL} target={"_blank"} rel={"noreferrer"}>
                              <div className="img"><img src={`/api/v1/shows/${nextShow._id}/photo`} alt="img"/></div>
                              <div className="info">
                                <h3>{nextShow.venue}</h3>
                                {nextShow.description &&
                                  <p>{nextShow.description}</p>
                                }
                              </div>
                            </a>
                          }
                          {!nextShow.URL &&
                            <>
                              <div className="img"><img src={`/api/v1/shows/${nextShow._id}/photo`} alt="img"/></div>
                              <div className="info">
                                <h3>{nextShow.venue}</h3>
                                {nextShow.description &&
                                  <p>{nextShow.description}</p>
                                }
                              </div>
                            </>
                          }
                        </div>
                      </div>
                    }
                  </div>
                  <div className={"col-sm-6 padding_all"}>
                    <div className="tour_3" style={{"marginLeft": "20px", "marginTop": "50px"}}>
                      <h2>
                        {nextShow.URL &&
                          <a href={nextShow.URL} target={'_blank'} rel={"noreferrer"}>{nextShow.venue}</a>
                        }
                        {!nextShow.URL &&
                          <>{nextShow.venue}</>
                        }
                      </h2>
                      <p>
                        {nextShow.startTime &&
                          <>
                            {formatInTimeZone(new Date(nextShow.startTime), 'UTC', 'p')}
                            {nextShow.endTime &&
                              <>
                                &nbsp;- {formatInTimeZone(new Date(nextShow.endTime), 'UTC', 'p')}
                              </>
                            }
                            <span> / </span>
                          </>
                        }
                        {/*<>*/}
                        {/*  {formatInTimeZone(new Date(nextShow.date), 'UTC', 'MMM d, yyyy')}*/}
                        {/*</>*/}
                        {nextShow.address &&
                          <>
                            <br/>
                            {nextShow.address}
                          </>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  <div className="ml-embedded" data-form="ajsfDx"></div>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;