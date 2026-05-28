"use client";
import ImageWithLoading from "@/shared/ImageWithLoading";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const categories = ["All", "Cakes", "Pastries", "Breads"];
  const products = [
    {
      id: 1,
      name: "Signature Red Velvet",
      description:
        "Classic red velvet with cream cheese frosting and a hint of cocoa",
      price: "₹32.99",
      originalPrice: "₹38.99",
      image:
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop&crop=center",
      category: "Cakes",
      rating: 4.9,
      reviewCount: 127,
      isBestseller: true,
      isOnSale: true,
    },
    {
      id: 2,
      name: "French Strawberry Tart",
      description:
        "Fresh strawberries on vanilla custard with a buttery pastry shell",
      price: "₹12.99",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop&crop=center",
      category: "Pastries",
      rating: 4.8,
      reviewCount: 89,
      isNew: true,
    },
    {
      id: 3,
      name: "Artisan Sourdough",
      description:
        "Traditional sourdough with perfect crust, 24-hour fermentation",
      price: "₹8.99",
      image:
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&crop=center",
      category: "Breads",
      rating: 4.7,
      reviewCount: 156,
    },
    {
      id: 4,
      name: "Lemon Meringue Tart",
      description:
        "Tangy lemon curd with fluffy Swiss meringue on shortbread crust",
      price: "₹26.99",
      image:
        "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=300&fit=crop&crop=center",
      category: "Cakes",
      rating: 4.8,
      reviewCount: 203,
    },
    {
      id: 5,
      name: "Belgian Chocolate Éclair",
      description:
        "Choux pastry filled with vanilla bean cream, Belgian chocolate glaze",
      price: "₹6.99",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
      category: "Pastries",
      rating: 4.6,
      reviewCount: 74,
      isNew: true,
    },
    {
      id: 6,
      name: "Cinnamon Brioche Roll",
      description: "Warm brioche dough with cinnamon sugar and vanilla glaze",
      price: "₹5.99",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center",
      category: "Breads",
      rating: 4.9,
      reviewCount: 92,
      isBestseller: true,
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<any>(products);
  const handleClick = (index: number) => {
    setSelectedCategory(index);
    if (index == 0) setFilteredProducts(products);
    else {
      const newFilter = products.filter(
        (item) => item.category == categories[index],
      );
      setFilteredProducts(newFilter);
    }
  };

  return (
    <section className="py-6 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center my-10 md:my-20 flex flex-col items-center gap-4">
          <div className="px-6 py-3 bg-[#D4A5741A] border-[0.67px] border-[#D4A57433] rounded-full w-fit flex items-center gap-2">
            <div className="w-4 h-4 relative">
              <ImageWithLoading
                className="object-contain"
                src={`/icons/star.svg`}
                alt={`naresh-logo.png`}
              />
            </div>
            <span className="font-semibold text-[#CC1015]">
              Handcrafted Excellence
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-1 leading-tight text-[#2D2822]">
            Our Artisan Collection
          </h2>
          <p className="text-xl text-muted-foreground mx-auto leading-relaxed text-[#866741]">
            Premium cakes, pastries, and bread. Made with traditional care!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleClick(index)}
                className={
                  index === selectedCategory
                    ? "cursor-pointer py-2 px-4 bg-primary text-white rounded-2xl shadow-lg bg-[#CC1015]"
                    : "cursor-pointer py-2 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-2xl"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product: any) => (
            <div
              key={product.id}
              className="bg-card text-card-foreground flex flex-col gap-6 group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm rounded-3xl"
            >
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <ImageWithLoading
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg px-2 rounded-md w-fit">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg px-2 rounded-md w-fit">
                      Bestseller
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg px-2 rounded-md w-fit">
                      Sale
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                {/* <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg">
                  O
                </button> */}
              </div>

              <div className="px-6 last:pb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#F4E6D8] rounded-2xl text-[#2D2822]">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="ml-1 font-bold flex items-center gap-1 text-[#2D2822]">
                      <div className="w-4 h-4 relative">
                        <ImageWithLoading
                          className="object-contain"
                          src={`/icons/star-yellow.svg`}
                          alt={`naresh-logo.png`}
                        />
                      </div>
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground text-[#866741]">
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-[#2D2822]">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed text-[#866741]">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#CC1015]">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through text-[#866741]">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href={`tel:+919005163430`}>
                      <button className="flex items-center justify-center gap-2 transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-transparent text-white bg-[#CC1015] rounded-2xl px-4 py-2">
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

        <div className="text-center mt-20 flex items-center justify-center">
          <div className="border-t-[0.67px] border-[#D4A5741A] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] flex flex-col items-center gap-4 w-fit py-10 px-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-[#2D2822]">
              Craving Something Special?
            </h3>
            <p className="text-muted-foreground max-w-md text-[#866741]">
              Explore our complete menu with 100+ handcrafted items,
              including seasonal specialties & custom creations.
            </p>
            <Link href="https://naresh-bakers.vercel.app/" target="_blank">
              <button className="cursor-pointer w-fit flex items-center justify-center gap-2 transition-all duration-300 group shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] border-2 border-transparent text-white bg-[#CC1015] rounded-2xl px-4 py-2">
                View Complete Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
