import ImageWithLoading from "@/shared/ImageWithLoading";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#CC1015] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
      </div>

      <div className=" relative">
        {/* Newsletter Section */}
        {/* <div className="py-16 border-b border-t border-background/10">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-background">
              Stay Sweet with Caramella
            </h3>
            <p className="text-background/80 text-lg">
              Be the first to know about our seasonal specialties, exclusive
              recipes, and special offers. Join our community of pastry lovers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                placeholder="Enter your email address"
                className="bg-[#FEFCFB33] border-t-[0.67px] border-[#FEFCFB66] rounded-xl h-12 flex-1 px-4 outline-none"
              />
              <button className="border-2 border-primary text-primar transition-all duration-300 group rounded-xl px-8 flex items-center">
                Subscribe
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 mx-2 md:mx-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary rounded-xl flex items-center justify-center">
                  <div className="w-20 h-20 relative">
                    <ImageWithLoading
                      className="object-contain"
                      src={`/naresh-logo.svg`}
                      alt={`naresh-logo.png`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-background">
                    Naresh Bakers
                  </h3>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed max-w-[80%]">
                Artisan craftsmanship meets innovation. Creating sweet memories
                since 2016 & love for the craft of baking!
              </p>
            </div>

            <h2 className="mb-2">Follow Us on</h2>

            <div className="flex space-x-3">
              <button className="text-background hover:text-primary hover:bg-background/10 rounded-xl">
                <Link
                  href="https://www.instagram.com/shreenareshbakers"
                  target="_blank"
                >
                  <div className="w-7 h-7 relative">
                    <ImageWithLoading
                      className="object-contain"
                      src={`/icons/instagram_svg.svg`}
                      alt={`naresh-logo.png`}
                    />
                  </div>
                </Link>
              </button>
              <button className="text-background hover:text-primary hover:bg-background/10 rounded-xl">
                {/* <Link
                  href="https://www.instagram.com/shreenareshbakers"
                  target="_blank"
                > */}
                <div className="w-7 h-7 relative">
                  <ImageWithLoading
                    className="object-contain"
                    src={`/icons/facebook_svg.svg`}
                    alt={`naresh-logo.png`}
                  />
                </div>
                {/* </Link> */}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-background text-lg">Explore</h4>
            <nav className="flex flex-col space-y-3">
              <a
                href=""
                className="text-background/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Home
              </a>
              <a
                href="https://naresh-bakers.vercel.app/3"
                target="_blank"
                className="text-background/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Wedding Cakes
              </a>
              <a
                href="https://naresh-bakers.vercel.app/4"
                target="_blank"
                className="text-background/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Birthday Cakes
              </a>
              <a
                href="https://naresh-bakers.vercel.app/8"
                target="_blank"
                className="text-background/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Two Tier Cakes
              </a>
              <a
                href="https://naresh-bakers.vercel.app/9"
                target="_blank"
                className="text-background/80 hover:text-primary transition-colors text-sm font-medium"
              >
                Three Tier Cakes
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-background text-lg">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-sm text-background/80">
                  <div className="font-medium text-background max-w-[80%]">
                    Aryan Restaurant, Jal Sansthan, C-3339, Kiddy dress, Meena
                    Bakery Rd Opposite SKD School, Block C Rajajipuram
                  </div>
                  <br />
                  <div>Lucknow, Uttar Pradesh 226017</div>
                  <div className="mt-1 text-primary text-xs font-medium">
                    <a
                      href="https://maps.app.goo.gl/9g2MVSAfTAjMPYpp9"
                      target="_blank"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="text-sm font-medium text-background">
                    +91 90051 63430
                  </div>
                  <div className="text-xs text-background/60">
                    Call for custom orders
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-bold text-background text-lg">Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center  mb-4">
                <span className="text-md font-medium text-background">
                  Open Daily
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex  items-center">
                  <span className="text-background/80">Monday - Friday</span>
                  <span className="ml-2 text-background font-medium">
                    9:30 AM - 10:30 PM
                  </span>
                </div>
                <div className="flex  items-center">
                  <span className="text-background/80">Saturday - Sunday</span>
                  <span className="ml-2 text-background font-medium">
                    9:30 AM - 11:00 PM
                  </span>
                </div>
              </div>
              <div className="py-3 bg-primary/20 rounded-xl">
                <div className="font-semibold">Special Holiday Hours</div>
                <div className="text-background/80 mt-1">
                  Extended hours during peak seasons
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-2 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 px-6">
          <div className="flex items-center justify-center space-x-2 text-sm text-background/80 w-full">
            <span>© Naresh Bakers. All Right Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
