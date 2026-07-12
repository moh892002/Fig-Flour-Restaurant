import { footerLinks } from "../data/footer";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container mx-auto text-center px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs sm:text-[14px] text-muted">
            &copy; {new Date().getFullYear()} Fig & Flour. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-[14px] text-muted">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cursor-pointer hover:text-footer-hover"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
