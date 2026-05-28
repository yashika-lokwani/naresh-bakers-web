import ImageWithLoading from "@/shared/ImageWithLoading";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
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
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight text-[#2D2822]">
                  Artisan
                  <span className="block text-primary text-[#CC1015]">
                    Perfection
                  </span>
                  <span className="block text-4xl lg:text-5xl font-medium text-muted-foreground text-[#866741]">
                    at Naresh Bakers
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed text-[#866741]">
                  Where traditional baking craftsmanship meets modern flavors.
                  Every cake, pastry, and bread at Naresh Bakery is handcrafted
                  with love, baked fresh daily using premium ingredients, and
                  perfected to delight every celebration.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-[#CC1015]">
                  15+
                </div>
                <div className="text-sm text-muted-foreground font-medium text-[#866741]">
                  Years Crafting
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-[#CC1015]">
                  2K+
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://naresh-bakers.vercel.app/" target="_blank">
                <button className="cursor-pointer transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] text-white bg-[#CC1015] rounded-lg px-4 py-2 flex gap-2 items-center justify-center">
                  Explore Our Menu
                  <div className="w-4 h-4 relative">
                    <ImageWithLoading
                      className="object-contain"
                      src={`/icons/arrow-right.svg`}
                      alt={`naresh-logo.png`}
                    />
                  </div>
                </button>
              </Link>
              <button className="transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-[#CC1015] text-[#CC1015] bg-white rounded-lg px-4 py-2">
                Schedule Consultation
              </button>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-8 text-sm">
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
                <div className="bg-[#FFFFFFE5] border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] rounded-3xl p-6 flex flex-col gap-2">
                  <div className="h-30 relative rounded-md overflow-hidden">
                    <ImageWithLoading
                      src={
                        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop&crop=center"
                      }
                      alt="Signature Chocolate Cake"
                    />{" "}
                  </div>
                  <h3 className="font-bold text-foreground text-lg text-[#2D2822]">
                    Signature Chocolate
                  </h3>
                  <p className="text-sm text-muted-foreground text-[#866741]">
                    Rich Belgian chocolate layers
                  </p>
                  <div className="text-primary font-bold text-xl text-[#CC1015]">
                    ₹28.99
                  </div>
                </div>
                <div className="bg-[#FFFFFFE5] border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] rounded-3xl p-6 flex flex-col gap-2">
                  <div className="h-30 relative  rounded-md overflow-hidden">
                    <ImageWithLoading
                      src={
                        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=300&h=200&fit=crop&crop=center"
                      }
                      alt="Artisan Croissants"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-lg text-[#2D2822]">
                    Artisan Croissants
                  </h3>
                  <p className="text-sm text-muted-foreground text-[#866741]">
                    Buttery, laminated perfection
                  </p>
                  <div className="text-primary font-bold text-xl text-[#CC1015]">
                    ₹4.99
                  </div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-[#FFFFFFE5] border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] rounded-3xl p-6 flex flex-col gap-2">
                  <div className="h-30 relative  rounded-md overflow-hidden">
                    <ImageWithLoading
                      src={
                        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop&crop=center"
                      }
                      alt="Custom Wedding Cake"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-lg text-[#2D2822]">
                    Wedding Collection
                  </h3>
                  <p className="text-sm text-muted-foreground text-[#866741]">
                    Bespoke designs for your day
                  </p>
                  <div className="text-primary font-bold text-xl  text-[#CC1015]">
                    From ₹200
                  </div>
                </div>
                <div className="bg-[#FFFFFFE5] border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] rounded-3xl p-6 flex flex-col gap-2">
                  <div className="h-30 relative  rounded-md overflow-hidden">
                    <ImageWithLoading
                      src={
                        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&crop=center"
                      }
                      alt="Sourdough Collection"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-lg text-[#2D2822]">
                    Sourdough Collection
                  </h3>
                  <p className="text-sm text-muted-foreground text-[#866741]">
                    Traditional fermentation methods
                  </p>
                  <div className="text-primary font-bold text-xl text-[#CC1015]">
                    ₹7.99
                  </div>
                </div>
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
