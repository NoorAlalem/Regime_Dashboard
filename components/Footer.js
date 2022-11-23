import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer footer-fixed footer-light">
        <p className="clearfix mb-0">
          <span className="float-md-end d-block d-md-inline-block mt-25">
            &copy;{new Date().getFullYear()}
            <a className="text-primary" href="index.html">
              {" "}
              شركة مجموعة الرائي للتقنيات المتقدمة{" "}
            </a>
            <span className="d-none d-sm-inline-block">
              ، جميع الحقوق محفوظة
            </span>
          </span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
