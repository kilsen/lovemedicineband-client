import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Gallery = props => {
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`/api/v1/media`)
      .then((res) => {
        setMedia(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  return (
    <section id="team" className={"gallery_page"}>
      <div className="container">
        <div className="row">
          <div className="gallery_main_1 clearfix">
            <div className="col-sm-12 padding_all">
              <div className="copies_1">
                <h1 className="text-center">Photo / Video Gallery</h1>
              </div>
            </div>
            {!loading &&
            <div className="col-sm-12">
              <div className="gallery_main clearfix">
                {media.map(photoOrVideo => (
                  <>
                    {photoOrVideo.photo &&
                      <div className="col-sm-6" key={photoOrVideo._id}>
                        <div className="gallery_1">
                          <p>
                            <img
                              src={`/api/v1/media/${photoOrVideo._id}/photo`}
                              alt={photoOrVideo.description}
                                 width="100%"
                            />
                          </p>
                        </div>
                      </div>
                    }
                    {photoOrVideo.video &&
                      <div className="col-sm-6" key={photoOrVideo._id}>
                        <div className="gallery_1">
                          <p className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                                    src={photoOrVideo.video}
                              title={photoOrVideo.description}
                                    allowFullScreen
                            ></iframe>
                          </p>
                        </div>
                      </div>
                    }
                  </>
                ))}
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;