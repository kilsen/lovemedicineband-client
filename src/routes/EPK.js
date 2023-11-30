import React from 'react';

import LoveMedicineBandMemberBios from '../assets/epk/Love Medicine Band Bios.pdf';
import LoveMedicineLogos from '../assets/epk/Love Medicine Logos.zip';
import LoveMedicineQRCode from '../assets/epk/Love Medicine QR Code.zip';
import LoveMedicineBandMembers from '../assets/epk/Love Medicine Band Members Cutout.zip';

const EPK = props => {
  return (
    <section id="tour" className={"epk_page"}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 padding_all">
            <div className="tour_1">
              <h1 className="text-center">Electronic Press Kit</h1>
            </div>
            <div className={"tour_2"}>
              <p>With an eclectic song list that includes favorites as well as hidden gems from the '50's through today,
                every Love Medicine show delivers a healthy dose of toe-tappin', foot-stompin', bone-shakin',
                crowd-pleasin',
                good-time, high-energy ROCK AND ROLL. The atmosphere is infectious and the vibe is contagious.</p>
              <p>We actively promote every show to our hundreds of followers via social media, an up-to-date email
                list, and word-of-mouth. Our fans are hungry, thirsty, and addicted to Love Medicine!</p>
              <p>Click on any of the images below to download material that you can use to promote our appearances at
                YOUR venue or event. If you need anything else, just let us know!</p>
            </div>
            <div className="col-sm-4 padding_all">
              <div className="tour_2">
                <div className="ih-item square effect13 left_to_right">
                  <a
                    href={"https://youtu.be/uab99Wxl7hE"}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <div className="img"><img src={`img/Love Medicine January 2023 Promo.jpg`} alt="img"/></div>
                    <div className={"info"}>
                      <h3>Promo Video</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className={"tour_3"}>
                <h2 className={"text-center"}>
                  <a
                    href={"https://youtu.be/uab99Wxl7hE"}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    Promo Video
                  </a>
                </h2>
                <p className={'text-center'}>
                  (YouTube)
                </p>
              </div>
            </div>
            <div className="col-sm-4 padding_all">
              <div className="tour_2">
                <div className="ih-item square effect13 left_to_right">
                  <a
                    href={LoveMedicineLogos}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine Logos.zip'}>
                    <div className="img"><img src={'img/logos.png'} alt="img"/></div>
                    <div className={"info"}>
                      <h3>Love Medicine Logos</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className={"tour_3"}>
                <h2 className={"text-center"}>
                  <a
                    href={LoveMedicineLogos}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine Logos.zip'}>
                    Logos
                  </a>
                </h2>
                <p className={'text-center'}>
                  (ZIP file containing wide and narrow logo styles,
                  in various image file formats)
                </p>
              </div>
            </div>
            <div className="col-sm-4 padding_all">
              <div className="tour_2">
                <div className="ih-item square effect13 left_to_right">
                  <a
                    href={LoveMedicineBandMembers}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine Band Members.zip'}>
                    <div className="img"><img src={`img/members-cutout.jpg`} alt="img"/></div>
                    <div className={"info"}>
                      <h3>Love Medicine Band Members</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className={"tour_3"}>
                <h2 className={"text-center"}>
                  <a
                    href={LoveMedicineBandMembers}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine Band Members.zip'}>
                    Band Members
                  </a>
                </h2>
                <p className={'text-center'}>
                  (ZIP file containing "cutout" image of the band, in JPG and PNG formats)
                </p>
              </div>
            </div>
            <div className="col-sm-4 padding_all">
              <div className="tour_2">
                <div className="ih-item square effect13 left_to_right">
                  <a
                    href={LoveMedicineBandMemberBios}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine Band Bios.pdf'}>
                    <div className="img"><img src={`img/Love Medicine Band Bios.jpg`} alt="img"/></div>
                    <div className={"info"}>
                      <h3>Band Member Bios</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className={"tour_3"}>
                <h2 className={"text-center"}>
                  <a
                    href={LoveMedicineBandMemberBios}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine Band Bios.pdf'}>
                    Band Member Bios
                  </a>
                </h2>
                <p className={'text-center'}>
                  (PDF document)
                </p>
              </div>
            </div>
            <div className="col-sm-4 padding_all">
              <div className="tour_2">
                <div className="ih-item square effect13 left_to_right">
                  <a
                    href={LoveMedicineQRCode}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine QR Codes.zip'}>
                    <div className="img"><img src={`img/LoveMedicineBand_qr-code.jpg`} alt="img"/></div>
                    <div className={"info"}>
                      <h3>Love Medicine Website QR Code</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className={"tour_3"}>
                <h2 className={"text-center"}>
                  <a
                    href={LoveMedicineQRCode}
                    target={'_blank'}
                    rel={'noreferrer'}
                    download={'Love Medicine QR Codes.zip'}>
                    QR Code
                  </a>
                </h2>
                <p className={'text-center'}>
                  (ZIP file containing QR code for this website, in JPG and PNG formats)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPK;