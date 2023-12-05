import React from 'react';
import MailingListSignupForm from "../components/MailingListSignupForm";

const Contact = props => {
  return (
    <section id={"contact"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-sm-12 padding_all"}>
            <div className={"contact_1"}>
              <h1 className={"text-center"}>Contact Us</h1>
              <div className={"col-sm-8 text-right"}>
                <p>If you'd like to discuss having us perform at your venue, event, private party, etc.,
                  please email: </p>
              </div>
              <div className={"col-sm-4"}>
                <p><a href={"mailto: booking@lovemedicineband.com"}>booking@lovemedicineband.com</a></p>
              </div>
              <div className={"col-sm-12"}><p></p></div>
              <div className={"col-sm-8 text-right"}>
                <p>For other inquiries, please email:</p>.
              </div>
              <div className={"col-sm-4"}>
                <p><a href={"mailto: info@lovemedicineband.com"}>info@lovemedicineband.com</a></p>.
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailingListSignupForm/>
    </section>
  );
};

export default Contact;