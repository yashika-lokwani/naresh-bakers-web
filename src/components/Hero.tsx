import ImageWithLoading from "@/shared/ImageWithLoading";
import Link from "next/link";

const featuredItems = [
  {
    title: "Pineapple Cake",
    description: "Moist vanilla pineapple delight",
    imageSrc: "/images/pineapple_cake.png",
    imageAlt: "Signature Chocolate Cake",
  },

  {
    title: "Cookies",
    description: "Bespoke designs for your day",
    imageSrc:
      "/images/cookies.png",
    imageAlt: "Custom Wedding Cake",
  },
  {
    title: "Rev Velvet",
    description: "Tasty, laminated perfection",
    imageSrc: "/images/red_velvet.png",
    imageAlt: "Rev Velvet",
  },
  {
    title: "Customizable Cakes",
    description: "Traditional fermentation methods",
    imageSrc:
      "/images/customizable.png",
    imageAlt: "Sourdough Collection",
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-0 md:gap-4 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6 flex flex-col gap-0 md:gap-2 items-center md:items-start">
              <div className="border border-[#D4A57433] w-fit rounded-full px-3 gap-1 py-2 flex items-center justify-center">
                <div className="w-4 h-4 relative">
                  <ImageWithLoading
                    className="object-contain"
                    src={`/icons/award.svg`}
                    alt={`naresh-logo.png`}
                  />
                </div>
                <span className="text-[#CC1015] font-semibold text-[12.25px]">
                  Award-Winning Since 2008
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl text-center md:text-left lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight text-[#2D2822]">
                  Artisan
                  <span className="pl-1 md:pl-0 inline md:block text-primary text-[#CC1015] sm:ml-2 md:ml-0">
                    Perfection
                  </span>
                  <span className="block text-3xl lg:text-5xl font-medium text-muted-foreground text-[#866741] mt-1">
                    at Naresh Bakers
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed text-[#866741] text-center md:text-left">
                  At Naresh Bakery, we handcraft fresh cakes, pastries, and
                  breads with premium ingredients. Perfected to make your sweet
                  moments sweeter!
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-[#CC1015]">
                  11+
                </div>
                <div className="text-sm text-muted-foreground font-medium text-[#866741]">
                  Years Crafting
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-[#CC1015]">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground font-medium text-[#866741]">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-[#CC1015]">
                  100+
                </div>
                <div className="text-sm text-muted-foreground font-medium text-[#866741]">
                  Unique Creations
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex sm:flex-row gap-5 justify-center md:justify-start">
              <Link href="https://naresh-bakers.vercel.app/" target="_blank">
                <button className="cursor-pointer transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] text-white bg-[#CC1015] border-2 border-transparent rounded-lg px-4 py-2 flex gap-2 items-center justify-center">
                  Explore Menu
                  <div className="w-4 h-4 relative">
                    <ImageWithLoading
                      className="object-contain"
                      src={`/icons/arrow-right.svg`}
                      alt={`arrow-right`}
                    />
                  </div>
                </button>
              </Link>

              <button className="transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-[#CC1015] text-[#CC1015] bg-white rounded-lg px-4 py-2 cursor-pointer">
                <a
                  href={`tel:+919005163430`}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 relative">
                    <ImageWithLoading
                      className="object-contain"
                      src={`/icons/phone.svg`}
                      alt={`phone`}
                    />
                  </div>
                  Let's Talk Cake
                </a>
              </button>
            </div>

            {/* Features */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <div className="flex items-center justify-center text-muted-foreground gap-2">
                <div className="w-4 h-4 relative">
                  <ImageWithLoading
                    className="object-contain"
                    src={`/icons/clock.svg`}
                    alt={`naresh-logo.png`}
                  />
                </div>
                <span className="font-medium text-[#866741]">Fresh Daily</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground gap-2">
                <div className="w-4 h-4 relative">
                  <ImageWithLoading
                    className="object-contain"
                    src={`/icons/star.svg`}
                    alt={`naresh-logo.png`}
                  />
                </div>
                <span className="font-medium text-[#866741]">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Items */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                {featuredItems.slice(0, 2).map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#FFFFFFE5] border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] rounded-3xl p-6 flex flex-col gap-2"
                  >
                    <div className="h-33 relative rounded-md overflow-hidden">
                      <ImageWithLoading
                        src={item.imageSrc}
                        alt={item.imageAlt}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-lg text-[#2D2822]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-[#866741]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-6 mt-12">
                {featuredItems.slice(2).map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#FFFFFFE5] border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] rounded-3xl p-6 flex flex-col gap-2"
                  >
                    <div className="h-33 relative rounded-md overflow-hidden">
                      <ImageWithLoading
                        src={item.imageSrc}
                        alt={item.imageAlt}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-lg text-[#2D2822]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-[#866741]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Review Card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-border/50 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "The most incredible pastries I've ever tasted. Caramella has ruined all other bakeries for me!"
              </p>
              <div className="mt-3 text-xs text-muted-foreground font-medium">
                - Sarah M., Verified Customer
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
