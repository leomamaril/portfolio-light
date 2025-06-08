import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";


export default function Contacts() {

 
  return (
    <Layout>
      <section className="aa-bg-white rounded-bottom-5">
        <div className="row g-0 mx-3 mx-sm-4 mx-md-5 pt-3 ">
        <span className="">
          {" "}
          <Link to="/home" className="aa-text-accent">
            Home
          </Link>{" "}
          | Contact
        </span>
        </div>
        <div className="row  mx-3 mx-sm-4 mx-md-5 g-0 justify-content-center py-5">
          <div className="col-12 col-md-10 col-lg-7 mb-3 ">
            <h1 className="text-center aa-fs-header-2">
              Get in <span className="aa-text-accent">touch</span>{" "}
            </h1>
            <p className="text-center aa-fs-p-3">Lorem ipsum dolor amiet</p>
            <form className="w-100 poppins justify-content-center">
              <div className="mb-3">
                <label className="aa-fs-p-4">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="user_name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="aa-fs-p-4">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  name="user_email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="aa-fs-p-4">Subject</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Subject of your email"
                  name="subject"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="aa-fs-p-4">Message</label>
                <textarea
                  className="form-control fixed-textarea"
                  placeholder="Write your message here"
                  rows="4"
                  name="message"
                  required
                />
              </div>
              <button
                type="submit"
                className=" aa-btn-accent w-100 rounded-2 mt-3"
              >
                Submit message
              </button>
            </form>
          </div>
        </div>

        <div className="row mx-3 mx-sm-4 mx-md-5 g-0 justify-content-center text-center pb-5">
          <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-2 px-3">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
            >
              <path
                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                fill="#1E1E1E"
              />
            </svg>

            <a
              href="#"
              className="aa-text-primary "
            >
              example@email.com
            </a>
          </div>

          <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-2 px-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
            >
              <path
                d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                fill="#1E1E1E"
              />
            </svg>

            <a
              href="#"
              className="aa-text-primary"
            >
               www.example.linkedin.link
            </a>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-2 px-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
            >
              <path
                d="M15 9.53846C15.1538 9.76923 15.3077 10 15.3846 10.3846H12.9231C12.9231 10.3077 12.9231 10.1538 13 10C13.0769 9.84615 13.0769 9.76923 13.2308 9.61539C13.3077 9.46154 13.4615 9.38462 13.6154 9.30769C13.7692 9.23077 14 9.15385 14.2308 9.15385C14.5385 9.23077 14.8462 9.30769 15 9.53846ZM7.92308 9C8.07692 8.84615 8.23077 8.61539 8.23077 8.30769C8.23077 8.15385 8.23077 8 8.15385 7.84615C8.07692 7.76923 8 7.61538 7.92308 7.61538C7.84615 7.53846 7.69231 7.53846 7.53846 7.46154H5.53846V9.23077H7.23077C7.46154 9.23077 7.69231 9.15385 7.92308 9ZM7.30769 10.3077H5.53846V12.3846H7.30769C7.46154 12.3846 7.61539 12.3846 7.76923 12.3077C7.92308 12.3077 8.07692 12.2308 8.15385 12.1538C8.23077 12.0769 8.38462 12 8.46154 11.8462C8.53846 11.6923 8.53846 11.5385 8.53846 11.3846C8.53846 11 8.46154 10.6923 8.23077 10.5385C8 10.3846 7.69231 10.3077 7.30769 10.3077ZM20 3.76923V16.2308C20 18.3077 18.3077 20 16.2308 20H3.76923C1.69231 20 0 18.3077 0 16.2308V3.76923C0 1.69231 1.69231 0 3.76923 0H16.2308C18.3077 0 20 1.69231 20 3.76923ZM12.6154 7.38462H15.6923V6.61539H12.6154V7.38462ZM10.1538 11.5385C10.1538 11.0769 10.0769 10.6923 9.84615 10.3077C9.61539 10 9.30769 9.76923 8.84615 9.61539C9.15385 9.46154 9.46154 9.23077 9.61539 9C9.76923 8.76923 9.84615 8.46154 9.84615 8.07692C9.84615 7.5 9.76923 7.46154 9.69231 7.15385C9.53846 6.92308 9.38462 6.69231 9.23077 6.61539C9 6.46154 8.76923 6.38462 8.46154 6.30769C8.07692 6.15385 7.76923 6.15385 7.38462 6.15385H3.84615V13.6923H7.53846C7.84615 13.6923 8.23077 13.6154 8.53846 13.5385C8.84615 13.4615 9.15385 13.3077 9.38461 13.1538C9.61539 13 9.84615 12.7692 10 12.4615C10.0769 12.2308 10.1538 11.9231 10.1538 11.5385ZM12.9231 11.3077H16.8462C16.8462 10.8462 16.8462 10.4615 16.7692 10.0769C16.6923 9.69231 16.5385 9.30769 16.3077 9.07692C16.0769 8.76923 15.7692 8.53846 15.4615 8.38461C15.0769 8.23077 14.6923 8.07692 14.2308 8.07692C13.8462 8.07692 13.4615 8.15385 13.0769 8.30769C12.7692 8.46154 12.4615 8.69231 12.1538 8.92308C11.9231 9.15385 11.6923 9.46154 11.6154 9.84615C11.4615 10.2308 11.3846 10.6154 11.3846 11C11.3846 11.5769 11.4615 11.8462 11.6154 12.1538C11.7692 12.5385 11.9231 12.8462 12.1538 13.0769C12.3846 13.3077 12.6923 13.5385 13 13.6923C13.3846 13.8462 13.7692 13.9231 14.1538 13.9231C14.7692 13.9231 15.3077 13.7692 15.7692 13.4615C16.2308 13.1538 16.5385 12.6923 16.7692 12.0769H15.4615C15.3846 12.2308 15.3077 12.3846 15.0769 12.5385C14.8462 12.6923 14.6154 12.7692 14.3077 12.7692C13.9231 12.7692 13.5385 12.6923 13.3077 12.4615C13.0769 12.1538 12.9231 11.7692 12.9231 11.3077Z"
                fill="#1E1E1E"
              />
            </svg>

            <a
              href="#"
              className="aa-text-primary"
            >
              www.example.behance.link
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="" id="footer">
        <div className="footer">
          <div className="row g-0  justify-content-center py-5 aa-bg-primary aa-text-white  text-center w-100">
            <div className="col-lg-8 px-3">
              <h1 className="aa-fs-header-1 mt-5 mb-4">
                Let's <span className="aa-text-accent">Work Together?</span>
              </h1>
              <p className="mb-4 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <Link
                  to="/contacts"
                  className="aa-btn-accent "
                  aria-label="Contact me"
                >
                  LET'S TALK
                </Link>
                <a
                  href="./assets/icon/aa_b.png"
                  download="aa_b.png"
                  className="aa-btn-outline "
                  aria-label="Download my CV"
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
