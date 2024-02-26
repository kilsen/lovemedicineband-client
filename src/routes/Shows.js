import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {formatInTimeZone} from 'date-fns-tz';

const Shows = props => {
  const [shows, setShows] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/api/v1/shows/upcoming`)
      .then((res) => {
        setShows(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  if (loading) {
    return '';
  }
  return (
    <section id="tour" className={'shows_page'}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 padding_all">
            <div className="tour_1">
              <h1 className="text-center">Upcoming Shows</h1>
            </div>
            {!shows.length &&
              <div className="tour_3">
                <h2 className="text-center">There are no upcoming shows scheduled at this time. Check back
                  later!</h2>
              </div>
            }
            {shows.map(show => (
              <>
                <div className="col-sm-4 padding_all" key={show._id}>
                  {show.photo &&
                    <div className="tour_2">
                      <div className="ih-item square effect13 left_to_right">
                        {show.URL &&
                          <a href={show.URL} target={"_blank"} rel={"noreferrer"}>
                            <div className="img"><img src={`/api/v1/shows/${show._id}/photo`} alt="img"/></div>
                            <div className="info">
                              <h3>{show.venue}</h3>
                              {show.description &&
                                <p>{show.description}</p>
                              }
                            </div>
                          </a>
                        }
                        {!show.URL &&
                          <>
                            <div className="img"><img src={`/api/v1/shows/${show._id}/photo`} alt="img"/></div>
                            <div className="info">
                              <h3>{show.venue}</h3>
                              {show.description &&
                                <p>{show.description}</p>
                              }
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  }
                  <div className="tour_3">
                    <h2 className="text-center">
                      {show.URL &&
                        <a href={show.URL} target={'_blank'} rel={"noreferrer"}>{show.venue}</a>
                      }
                      {!show.URL &&
                        <>{show.venue}</>
                      }
                    </h2>
                    <p className="text-center">
                      {show.startTime &&
                        <>
                          {formatInTimeZone(new Date(show.startTime), 'UTC', 'p')}
                          {show.endTime &&
                            <>
                              &nbsp;- {formatInTimeZone(new Date(show.endTime), 'UTC', 'p')}
                            </>
                          }
                          <span> / </span>
                        </>
                      }
                      <>
                        {formatInTimeZone(new Date(show.date), 'UTC', 'EEE MMM d, yyyy')}
                      </>
                      {show.address &&
                        <>
                          <br/>
                          {show.address}
                        </>
                      }
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
    ;
};

export default Shows;