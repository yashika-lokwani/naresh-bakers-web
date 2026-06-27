import ImageWithLoading from "@/shared/ImageWithLoading";

const CustomerFeedback = () => {
  return (
    <section className="py-6 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 border border-green-200 px-6 py-3 rounded-full mb-6">
            <span className="font-semibold">Customer Favorites</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-[#2D2822]">
            What Our Community
            <span className="block text-[#CC1015]">Loves Most</span>
          </h2>
          <p className="text-xl text-muted-foreground mx-auto leading-relaxed text-[#866741]">
            Thousands of orders and reviews tell that these are the treats you
            keep coming back for. Taste the hype!
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">4.3 ★</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Average Rating
            </div>
          </div>
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">50K+</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Happy Customers
            </div>
          </div>
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">100K+</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Orders Completed
            </div>
          </div>
          <div className="rounded-2xl  border-t-[0.67px] border-[#D4A5741A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col items-center justify-center py-6">
            <div className="text-3xl font-bold text-[#CC1015] mb-2">99%</div>
            <div className="text-sm text-muted-foreground font-medium text-[#866741]">
              Would Recommend
            </div>
          </div>
        </div>

        {/* Customer Testimonial Section */}
        <div className="border-t-[0.67px] border-[#D4A5741A] bg-[linear-gradient(90deg,rgba(212,165,116,0.1)_0%,rgba(232,213,196,0.2)_100%)] rounded-3xl p-12 text-center backdrop-blur-sm shadow-lg mb-12">
          <div className="mx-4 space-y-8 flex flex-col items-center">
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div className="w-7 h-7 relative" key={i}>
                    <ImageWithLoading
                      className="object-contain"
                      src={`/icons/star-yellow.svg`}
                      alt={`naresh-logo.png`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed text-[#2D2822]">
              "Absolutely loved my experience with Naresh Bakers! The customized
              cake was beautifully made, and the taste and quality exceeded my
              expectations. We also ordered patties, burgers, sandwiches, and
              pizza everything was fresh and delicious! ❤️🎂"
            </blockquote>
            <div className="space-y-2">
              <div className="font-bold text-primary textext-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-[#866741]t-lg text-[#CC1015]">
                Yashika
              </div>
              <div className="text-sm text-muted-foreground text-[#866741]">
                Loyal customer since 2018
              </div>
            </div>
            <button className="transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-[#CC1015] text-[#CC1015] bg-white rounded-2xl px-4 py-2">
              <a
                href="https://maps.app.goo.gl/9g2MVSAfTAjMPYpp9"
                target="_blank"
              >
                Read more Reviews
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
