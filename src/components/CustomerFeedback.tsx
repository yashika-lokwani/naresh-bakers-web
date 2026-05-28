import ImageWithLoading from "@/shared/ImageWithLoading";

const CustomerFeedback = () => {
  return (
    <section className="py-6 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 border border-green-200 px-6 py-3 rounded-full mb-6">
            <span className="font-semibold">Customer Favorites</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-[#2D2822]">
            What Our Community
            <span className="block text-[#CC1015]">Loves Most</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-[#866741]">
            Based on thousands of reviews and orders, these are the treats that
            keep our customers coming back for more. Discover why they're so
            special.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">4.8 ★</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Average Rating
            </div>
          </div>
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">2,500+</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Happy Customers
            </div>
          </div>
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">15k+</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Orders Completed
            </div>
          </div>
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Would Recommend
            </div>
          </div>
        </div>

        {/* Customer Testimonial Section */}
        <div className="border-t-[0.67px] border-[#D4A5741A] bg-[linear-gradient(90deg,rgba(212,165,116,0.1)_0%,rgba(232,213,196,0.2)_100%)] rounded-3xl p-12 text-center backdrop-blur-sm shadow-lg mb-12">
          <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
            <div className="flex justify-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div className="w-4 h-4 relative" key={i}>
                    <ImageWithLoading
                      className="object-contain"
                      src={`/icons/star-yellow.svg`}
                      alt={`naresh-logo.png`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed text-[#2D2822]">
              "Naresh Bakers has become our family's go-to for every
              celebration. The quality is consistently outstanding, and the
              flavors are simply divine."
            </blockquote>
            <div className="space-y-2">
              <div className="font-bold text-primary text-lg text-[#CC1015]">
                The Johnson Family
              </div>
              <div className="text-sm text-muted-foreground text-[#866741]">
                Loyal customers since 2019
              </div>
            </div>
            <button className="transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-[#CC1015] text-[#CC1015] bg-white rounded-2xl px-4 py-2">
              Read more Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
