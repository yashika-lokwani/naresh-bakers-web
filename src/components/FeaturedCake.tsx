import ImageWithLoading from "@/shared/ImageWithLoading";

type Cake = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  prepTime: string;
  servings: string;
  isSignature?: boolean;
  isPremium?: boolean;
  features: string[];
};

const FeaturedCake = () => {
  const featuredCakes: Cake[] = [
    {
      id: 1,
      name: "Wedding Cake",
      description: "Our signature multi-layer masterpiece",
      longDescription:
        "An indulgent celebration of sweetness featuring velvet fudge sponge, creamy milk chocolate buttercream, glossy glaze toppings, and handmade pieces. This is our top choice!",
      price: "Starting from ₹999",
      image: "/images/wedding-cake.png",
      category: "Signature",
      rating: 5.0,
      reviewCount: 284,
      prepTime: "24 hours",
      servings: "30+ People",
      isSignature: true,
      features: [
        "Customization Available",
        "Flavors like your choice",
        "Premium Packaging",
        "Freshly Baked",
      ],
    },
    {
      id: 2,
      name: "Dark Chocolate Truffle Slice",
      description:
        "Intense dark chocolate ganache layered between moist sponge.",
      longDescription:
        "Indulge in a profoundly intense dessert masterpiece showcasing alternating layers of moist chocolate sponge cake, beautifully finished with a coating of fine premium chocolate flakes!",
      price: "Starting from ₹59",
      // originalPrice: "₹99.00",
      image: "/images/chocolate-pastry.png",
      category: "Premium",
      rating: 4.9,
      reviewCount: 367,
      prepTime: "6 hours (bulk)",
      servings: "1 person",
      isPremium: true,
      features: [
        "Dark cocoa",
        "Silky ganache coating",
        "Fine chocolate shavings",
        "Eggless Pastry",
      ],
    },
    {
      id: 3,
      name: "Moringa & Jaggery Biscuits",
      description:
        "Nutrient-rich moringa greens sweetened with organic country jaggery.",
      longDescription:
        "A healthy, tea time snack blending the superfood benefits of organic moringa leaves with the natural iron-rich sweetness of unrefined jaggery, baked to crunchy perfection!",
      price: "Starting from ₹499",
      image: "/images/featured-cookies.png",
      category: "Signature",
      rating: 4.8,
      reviewCount: 89,
      prepTime: "12 hours",
      servings: "10+ people",
      isSignature: true,
      features: [
        "100% organic jaggery",
        "Superfood moringa powder",
        "No refined sugar",
        "High dietary fiber",
      ],
    },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative">
        {/* Section Header */}
        <div className="text-center my-10 md:my-20 flex flex-col items-center gap-4">
          <div className="px-6 py-3 bg-[#D4A5741A] border-[0.67px] border-[#D4A57433] rounded-full w-fit flex items-center gap-2">
            <div className="w-4 h-4 relative">
              <ImageWithLoading
                className="object-contain"
                src={`/icons/crown.svg`}
                alt={`naresh-logo.png`}
              />
            </div>
            <span className="font-semibold text-[#CC1015]">
              Featured Creations
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight text-[#2D2822]">
            Our Signature
            <span className="block text-primary text-[#CC1015]">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mx-auto leading-relaxed text-[#866741]">
            Crafted with premium ingredients and obsessive detail. Built for
            your best moments!
          </p>
        </div>

        {/* Featured Cakes Grid */}
        <div className="space-y-16">
          {featuredCakes.map((cake, index) => (
            <div
              key={cake.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative group">
                  <div className="relative h-96 lg:h-125">
                    <ImageWithLoading
                      src={cake.image}
                      alt={cake.name}
                      className="object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    {cake.isSignature && (
                      <span className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg px-3 py-1 rounded-3xl flex items-center gap-2">
                        <div className="w-4 h-4 relative">
                          <ImageWithLoading
                            className="object-contain"
                            src={`/icons/crown-white.svg`}
                            alt={`naresh-logo.png`}
                          />
                        </div>
                        Signature
                      </span>
                    )}
                    {cake.isPremium && (
                      <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg px-3 py-1 rounded-3xl flex items-center gap-2">
                        <div className="w-4 h-4 relative">
                          <ImageWithLoading
                            className="object-contain"
                            src={`/icons/star-white.svg`}
                            alt={`naresh-logo.png`}
                          />
                        </div>
                        Premium
                      </span>
                    )}
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                    <div className="flex items-center  gap-4 text-sm">
                      <div className="text-center">
                        <div className="flex items-center text-yellow-500 mb-1">
                          <span className="ml-1 font-bold flex items-center gap-1">
                            <div className="w-4 h-4 relative">
                              <ImageWithLoading
                                className="object-contain"
                                src={`/icons/star-yellow.svg`}
                                alt={`naresh-logo.png`}
                              />
                            </div>
                            {cake.rating}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {cake.reviewCount} reviews
                        </div>
                      </div>
                      <div className="w-px h-8 bg-[#D4A57433]"></div>
                      <div className="text-center">
                        <div className="font-bold text-foreground">
                          {cake.servings}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Servings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-[#F4E6D8] rounded-lg">
                      {cake.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground text-[#866741]">
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 relative">
                          <ImageWithLoading
                            className="object-contain"
                            src={`/icons/chef-hat.svg`}
                            alt={`naresh-logo.png`}
                          />
                        </div>
                        {cake.prepTime} preparation
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-[#2D2822]">
                    {cake.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed text-[#866741]">
                    {cake.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-bold text-foreground text-[#2D2822]">
                    What makes it special:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {cake.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground text-[#866741]"
                      >
                        <div className="w-2 h-2 bg-[#CC1015] mr-3 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-t-[#D4A57433] gap-4 sm:gap-0">
                  <div className="space-y-2 order-2 sm:order-1">
                    <div className="flex items-center space-x-6">
                      <span className="text-3xl font-bold text-primary text-[#CC1015]">
                        {cake.price}
                      </span>
                      {cake.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {cake.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground text-[#866741] gap-2">
                      <div className="w-4 h-4 relative">
                        <ImageWithLoading
                          className="object-contain"
                          src={`/icons/calendar.svg`}
                          alt={`naresh-logo.png`}
                        />
                      </div>
                      <span>Order {cake.prepTime} in advance</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 order-1 sm:order-2 w-full sm:w-auto">
                    <a href={`tel:+919005163430`} className="w-full sm:w-auto">
                      <button className="flex items-center justify-center gap-2 transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-transparent text-white bg-[#CC1015] rounded-2xl px-4 py-2 w-full sm:w-auto">
                        <div className="w-4 h-4 relative">
                          <ImageWithLoading
                            className="object-contain"
                            src={`/icons/phone-white.svg`}
                            alt={`naresh-logo.png`}
                          />
                        </div>
                        Order Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 mb-10 flex items-center justify-center">
          <div className="border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] flex flex-col items-center gap-4 w-fit py-10 px-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground text-[#2D2822]">
              Need a Custom Creation?
            </h3>
            <p className="text-muted-foreground max-w-md text-[#866741]">
              Our master bakers can create a completely custom cake for your
              special occasion. Let's bring your vision to life!
            </p>
            <button className="transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-transparent text-white bg-[#CC1015] rounded-2xl px-4 py-2">
              <a
                href={`tel:+919005163430`}
                className="flex items-center justify-center gap-2 "
              >
                <div className="w-4 h-4 relative">
                  <ImageWithLoading
                    className="object-contain"
                    src={`/icons/phone-white.svg`}
                    alt={`naresh-logo.png`}
                  />
                </div>
                Schedule Consultaiton
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCake;
