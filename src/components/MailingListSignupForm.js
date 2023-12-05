import React, {useState} from 'react';
import axios from 'axios';

const MailingListSignupForm = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await axios
        .post(`/api/v1/mailingList/subscribe`, {
            email, firstName, lastName
          }
        );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Unable to subscribe");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <section id={"footer"}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 padding_all">
              <div className="col-sm-6">
                <div className="contact_1">
                  <h6>Subscribe to our</h6>
                  <h1>Mailing List</h1>
                  <h4>We'll send you announcements about all of our shows.</h4>
                  <p>You'll never have to skip a dose of Love Medicine!</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact_main clearfix">
                  <div className="col-sm-12">
                    <div className="contact_2">
                      <p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your First Name*"
                          value={firstName}
                          name={"firstName"}
                          id={"firstName"}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="contact_2">
                      <p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Last Name*"
                          value={lastName}
                          name={"lastName"}
                          id={"lastName"}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="contact_2">
                      <p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email*"
                          value={email}
                          name={"email"}
                          id={"email"}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  {error &&
                    <div className="col-sm-12">
                      <div className="contact_4">
                        <p>
                          <div>{error}</div>
                        </p>
                      </div>
                    </div>
                  }
                  <div className="col-sm-12">
                    <div className="contact_4">
                      <p>
                        {!submitted &&
                          <button type="submit" disabled={!firstName || !lastName || !email}>
                            Subscribe
                          </button>
                        }
                        {submitted &&
                          <div>Thank you for subscribing!</div>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default MailingListSignupForm;