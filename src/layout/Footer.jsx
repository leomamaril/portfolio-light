import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <section className="footer" role="contentinfo">
            <div className="row g-0 justify-content-center py-5 bg-dark text-white text-center">
                <div className="col-lg-7 px-3">
                    <h1 className="display-2 mt-5 mb-4">Let's <span className="aa-text-primary">Work Together?</span></h1>
                    <p className="mb-4 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <Link 
                            href="/contact" 
                            className="aa-btn-primary px-4 py-2"
                            aria-label="Contact me"
                        >
                            LET'S TALK
                        </Link>
                        <Link 
                            href="/cv.pdf" 
                            download
                            className="aa-btn-outline px-4 py-2"
                            aria-label="Download my CV"
                        >
                            DOWNLOAD CV
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}