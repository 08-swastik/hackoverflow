import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Sponsors from "../components/sponsors";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Hackoverflow 4.0</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="img/aarohan-logo.png"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/slicknav.css" />
        <link rel="stylesheet" href="/css/style.css" />

        <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/ajax-form.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/scrollIt.js"></script>
        <script src="/js/jquery.scrollUp.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/nice-select.min.js"></script>
        <script src="/js/jquery.slicknav.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/jquery.countdown.js"></script>
        <script src="/js/plugins.js"></script>

        <script src="/js/contact.js"></script>
        <script src="/js/jquery.ajaxchimp.min.js"></script>
        <script src="/js/jquery.form.js"></script>
        <script src="/js/jquery.validate.min.js"></script>
        <script src="/js/mail-script.js"></script>
        <script src="/js/main.js"></script>
        <script
          type="text/javascript"
          id="hs-script-loader"
          src="https://js.hs-scripts.com/19507545.js"
          async
          defer
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
      </Head>
      <div>
        <Navbar />
        <div className="slider_area slider_bg_1">
          <div className="slider_text">
            <div className="container">
              <div className="position_relv">
                <h1 className="opcity_text d-none d-lg-block">HACKATHON</h1>
                <div className="row">
                  <div className="col-xl-9">
                    <div className="title_text">
                      <h3>
                        HackOverflow 4.0
                        <br />
                        <br />
                        Aarohan, 2021
                      </h3>
                      <a
                        href="https://calendar.google.com/calendar/r/eventedit?text=Hackoverflow+4.0&dates=20210402/20210403"
                        className="boxed-btn-white"
                      >
                        Add to your Calendar
                      </a>
                      <br/><br/>
                      <a
                        className="boxed-btn-white"
                        id="register-2"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="countDOwn_area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="single_date">
                    <i className="ti-location-pin" />
                    <span>Online</span>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="single_date">
                    <i className="ti-alarm-clock" />
                    <span>2 April, 2021</span>
                  </div>
                </div>
                <div className="col-xl-5 col-md-12 col-lg-5">
                  <Timer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_area">
          <div className="shape-1 d-none d-xl-block">
            <img src="img/about/shap1.png" alt />
          </div>
          <div className="shape-2 d-none d-xl-block">
            <img src="img/about/shap2.png" alt />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-6">
                <div className="about_thumb">
                  <img src="img/about/about.png" alt />
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-md-6">
                <div className="about_info">
                  <div className="section_title">
                    <span className="sub_heading">Welcome To</span>
                    <h3>
                      The Biggest Technical <br />
                      Fest of the <br />
                      Year 2021
                    </h3>
                  </div>
                  <p>
                    <br />
                    <br />
                    Hackoverflow 4.0 is conducted by team Aavishkar during
                    Aarohan, the second largest techno-management of Eastern
                    India!
                  </p>
                  <a
                    href="https://www.facebook.com/arhn.nitd/"
                    className="boxed-btn-red"
                  >
                    Learn More about Aarohan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="speakers_area">
          <h1 className="horizontal_text d-none d-lg-block">Judges</h1>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="serction_title_large mb-95">
                  <h3>Judges</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="/default.webp" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Judge 1</h3>
                    <p style={{ color: "blue", }}>Position</p>
                  </div>
                </div>
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="/default.webp" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Judge 2</h3>
                    <p style={{ color: "blue", }}>Position</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-2 col-md-6">
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="/default.webp" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Judge 3</h3>
                    <p style={{ color: "blue", }}>Position</p>
                  </div>
                </div>
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="/default.webp" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Judge 4</h3>
                    <p style={{ color: "blue", }}>Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="event_area">
          <h1 className="vr_text d-none d-lg-block">Themes List</h1>
          <div className="container">
            <div className="double_line">
              <div className="row">
                <div className="col-xl-3 col-lg-3">
                  <div className="date" style={{ color: "blue" }}>
                    <h3 style={{ color: "blue" }}>Hackathon Themes</h3>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9">
                  <div className="single_speaker">
                    <img
                      src="/sustainable.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Sustainability</span>
                      </div>
                      <p>
                        Development of society often leads to imbalance in the
                        environment. New technological tools can be used to have
                        sustainable growth.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/blockchain.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Blockchain Technology**</span>
                      </div>
                      <p>
                        Keeping all important data in one place is risky. So
                        it’s better to keep important data at decentralised
                        locations. Any web/mobile app can make use of this
                        concept.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/classroom.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Education</span>
                      </div>
                      <p>
                        Our education system has not updated since long but
                        technological advancements have been rapid. Upcoming
                        technology can help students better grasp concepts.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/agriculture.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Agriculture</span>
                      </div>
                      <p>
                        Producing and distributing food materials is a challenge
                        with many environmental as well as government policies
                        affecting it. Make use of technology to ease this
                        problem.
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/law-book.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Law and Order</span>
                      </div>
                      <p>
                        Several laws are made by the government. Use development
                        tools to assist officers of law and citizens.
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/open-sign.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Open Innovation</span>
                      </div>
                      <p>
                        Make use of developer tools to help solve any issue in
                        society.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sponsors />
        <div className="resister_book resister_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="resister_text text-center">
                  <h3>Specific sponsor track benefits and prizes!</h3>
                  <ul>
                    <li>
                      <div className="p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow">
                        <img
                          src="/Portis_Logo-Colored.png"
                        />
                        <span className="text-black">
                          Best hack using Ethereum gets Rs. 10,000 !
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow">
                        <img
                          src="/portis.png"
                          className="w-45 h-20"
                        />
                        <span className="text-black">
                          Best Dapp built on Portis gets Rs. 15,000 !
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="p-4 flex flex-col md:flex-row items-center bg-white justify-around rounded shadow">
                        <img
                          src="/tezos.png"
                          className="w-45 h-20"
                        />
                        <span className="text-black">
                          Best Dapp built on Tezos gets Rs. 20,000 !
                        </span>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full pt-4 md:pt-16 md:pb-8 flex md:flex-row flex-col items-center md:justify-around"
          style={{ marginBottom: "80px" }}
        >
          <video
            width="400"
            height="300"
            className="focus:outline-none"
            loop
            autoPlay
          >
            <source src="/img/dm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="resister_text text-center">
            <ul>
              <li>
                <h1 style={{ fontSize: "25px" }}>
                  Register Now to participate
                </h1>
              </li>
              <li>
                <h1 style={{ fontSize: "25px" }}>in the Event!</h1>
              </li>
            </ul>
          </div>
        </div>

        <div className="faq_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="serction_title_large mb-95">
                  <h3>Frequently Ask</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          Do I need to pay any money to register for the
                          Hackathon?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        No. You do not have to pay anything to anyone to
                        register yourself for any Hackathon on Devfolio.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />
                          Do I need to have any specific qualifications to be a
                          participant for the Hackathon?{" "}
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        If you love to code, you are more than welcome to
                        participate in the Hackathon.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          How do I submit what I have made for the Hackathon?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        You have to develop the application on your local system
                        and submit it on DevFolio in tar/zip file format along
                        with instructions to run the application and source
                        code.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading_4">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_4"
                          aria-expanded="false"
                          aria-controls="collapse_4"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          Do we need to have the entire idea fully working?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_4"
                      className="collapse"
                      aria-labelledby="heading_4"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        The entire idea need not be fully implemented however,
                        the submission should be functional so that it can be
                        reviewed by the judges.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading_5">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_5"
                          aria-expanded="false"
                          aria-controls="collapse_5"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          Do we need to have the entire idea fully working?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_5"
                      className="collapse"
                      aria-labelledby="heading_5"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        You have to develop the entire software application on
                        your local system and submit it on Devfolio in tar/zip
                        file format along with instructions to run the
                        application and source code. If it is a mobile app,
                        package it as an apk and send along with the source
                        code.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading_6">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_6"
                          aria-expanded="false"
                          aria-controls="collapse_6"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          Does one have to be online and available for the
                          entire duration of the Hackathon?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_6"
                      className="collapse"
                      aria-labelledby="heading_6"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        No, one does not need to be logged in on DevFolio or be
                        online for the entire duration. You can develop the
                        application on your local system based on the given
                        themes and then submit it on DevFolio, on the specific
                        challenge page.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading_7">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_7"
                          aria-expanded="false"
                          aria-controls="collapse_7"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          Since there is no specific technology mentioned, are
                          there any restrictions on using number of pre-built
                          libraries?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_7"
                      className="collapse"
                      aria-labelledby="heading_7"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        There is no restriction to use any language, technology
                        stack, or libraries. You can use any of them to create
                        the web/mobile application.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading_8">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_8"
                          aria-expanded="false"
                          aria-controls="collapse_8"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          <img
                            src="img/barnd/info.png"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              float: "left",
                            }}
                            alt
                          />{" "}
                          Do I need to give a demo for the product that I have
                          built?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_8"
                      className="collapse"
                      aria-labelledby="heading_8"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        If you want you can submit a small presentation or video
                        that demos your submission, however it's not mandatory,
                        and only good to have. In case you are one of the
                        winners, you might be invited to demo your application
                        at a physical event, details of which will be shared
                        with sufficient advance notice.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
