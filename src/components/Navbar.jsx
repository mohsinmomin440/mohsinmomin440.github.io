import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import profileImg from "../assets/profile.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a solid background once the page is scrolled.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the link of the section currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.navId);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ id }) => {
      // SectionWrapper puts the id on a span inside the <section>.
      const section = document.getElementById(id)?.parentElement;
      if (section) {
        section.dataset.navId = id;
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `${active === id ? "text-white" : "text-secondary"} hover:text-white transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF] focus-visible:outline-offset-4`;

  return (
    <nav
      aria-label="Main navigation"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={profileImg}
            alt="Mohsin"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#915EFF] shadow-md shadow-[#915EFF]/30 group-hover:scale-105 transition-transform"
          />
          <p className="text-white text-[18px] font-bold flex items-center">
            MOHSIN &nbsp;
            <span className="sm:block hidden text-secondary font-medium">
              | Mohsin.Exe
            </span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10 text-[18px] font-medium">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                aria-current={active === nav.id ? "true" : undefined}
                className={linkClass(nav.id)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle((t) => !t)}
            className="text-white p-1 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]"
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            aria-controls="mobile-menu"
          >
            {toggle ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          <div
            id="mobile-menu"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 text-[16px] font-medium">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    aria-current={active === nav.id ? "true" : undefined}
                    className={linkClass(nav.id)}
                    onClick={() => setToggle(false)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
