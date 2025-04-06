"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function NakProducts() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: "1",
      name: "Science Fair Projects for Kids 1*10",
      school: "kindergarten",
      image: "/nak/nak4.jpg",
    },
    {
      id: "2",
      name: "Parent-Teacher Conferences 1*10",
      school: "Nursery",
      image: "/nak/nak.jpg",
    },
    {
      id: "3",
      name: "Spring Concert 1*10",
      school: "Primary",
      image: "/nak/nak6.jpg",
    },
    {
      id: "4",
      name: "New Library Collection Arrives",
      school: "Junior",
      image: "/nak/nak2.jpg",
    },
    {
      id: "5",
      name: "Students Win Regional Math Competition",
      school: "Senior",
      image: "/nak/nak5.jpg",
    },
    {
      id: "6",
      name: "Summer Program Registration Now Open",
      school: "Summer Program Registration",
      image: "/nak/nak11.jpg",
    },
    {
      id: "7",
      name: "Student-centered learning approach",
      school: "Student Centered",
      image: "/nak/nak9.jpg",
    },
    {
      id: "8",
      name: "Small class sizes for personalized attention",
      school: "Personalized Attention",
      image: "/nak/naksymbol.jpg",
    },
    {
      id: "9",
      name: "Comprehensive curriculum with arts and sciences",
      school: "Arts and Sciences",
      image: "/nak/nak8.jpg",
    },
    {
      id: "10",
      name: "Safe and inclusive community for all students",
      school: "Safe and inclusive community",
      image: "/nak/nak7.jpg",
    },
  ];

  return (
    <div className="container bg-white mx-auto px-4 py-20 relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border border-gray-200 bg-white rounded-md overflow-hidden"
          >
            <CardContent className="p-0 relative">
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`h-5 w-5 ${
                    favorites[product.id]
                      ? "fill-[#56a747] text-[#56a747]"
                      : "text-gray-400"
                  }`}
                />
              </button>
              <div className="h-48 flex items-center justify-center bg-white p-4 group relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain aspect-square transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#56a747]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium cursor-pointer">
                    View More
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4 pt-2">
              <h3 className="text-sm text-black font-medium text-bl line-clamp-2 h-10">
                {product.name}
              </h3>
              <p className="text-[#56a747] font-bold mt-2">{product.school}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
