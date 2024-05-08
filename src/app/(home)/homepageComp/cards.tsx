"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export const testimonials = [
  {
    quote:
    "GoodWaste has completely changed the way I think about recycling! Before, it was a hassle to separate everything and find a center that accepted specific items. Now, with GoodWaste, I can easily schedule a free pickup, and they even pay me for certain recyclables. It's a win-win situation for me and the environment. Plus, the app is so user-friendly and convenient. I highly recommend GoodWaste to anyone who wants to recycle more and make some extra cash!",
    name :" Sunita, Homeowner" , 
    title: "Recycling Made Easy",
  },
  {
    quote:
    "GoodWaste has been a game-changer for our business. We're committed to sustainable practices, and GoodWaste helps us achieve that by providing a reliable and eco-friendly waste management solution. Their free collection service eliminates overflowing bins and reduces our waste disposal costs. Additionally, GoodWaste helps us divert recyclables from landfills, which aligns perfectly with our environmental goals. We're proud to partner with GoodWaste and encourage other businesses to do the same!" ,
    name: "William Shakespeare",
    title: "Hamlet",
  },
  { quote : 
    "GoodWaste has been a game-changer for our business. We're committed to sustainable practices, and GoodWaste helps us achieve that by providing a reliable and eco-friendly waste management solution. Their free collection service eliminates overflowing bins and reduces our waste disposal costs. Additionally, GoodWaste helps us divert recyclables from landfills, which aligns perfectly with our environmental goals. We're proud to partner with GoodWaste and encourage other businesses to do the same!" ,
    name: "Vikash L., CEO, GreenTech Solutions",
    title: "Sustainable Business Practices (Commercial Client)",
  },

  {
    quote:
      "GoodWaste has been a valuable partner in our efforts to promote a cleaner and more sustainable community. Their educational resources within the app raise awareness about responsible waste management, and their free collection services make it easier for residents to participate. We have seen a significant increase in recycling rates since GoodWaste arrived. We are grateful for their commitment to creating a positive impact and look forward to collaborating further.",
    name: "Mahima S., Director, Clean City Initiative",
    title: "Community Impact (Non-Profit Organization)",
  },
];
