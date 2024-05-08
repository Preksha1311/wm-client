"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracingbeam";
// import { calsans } from '@/fonts/calsans';


export default function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl text-white mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className="text-xl mb-4">
                            {item.title}
                        </p>

                        <div className="text-sm text-white prose prose-sm dark:prose-invert">
                            {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Conquer Recycling with GoodWaste: A Guide to Responsible Waste Management",
        description: (
            <>
                <p className="leading-8">
                    Recycling is not just about tossing your plastic bottles in the blue bin anymore. Its about making conscious choices to divert waste from landfills and contribute to a healthier planet. But navigating the ever-changing world of recycling symbols and local regulations can be confusing. Fear not, fellow eco-warriors! This blog post, brought to you by GoodWaste, your one-stop shop for responsible waste management, will equip you with the knowledge and resources to become a recycling pro.

                    <strong>Why Recycle?</strong>

                    Recycling offers a multitude of benefits for our environment and ourselves. Here are some key reasons to embrace the recycling lifestyle:

                    Reduces landfill waste: Landfills overflow with tons of recyclable materials every year. Recycling diverts this waste, allowing landfills to hold less garbage.
                    Conserves resources: Many recyclable items can be transformed into new products, minimizing the need for virgin materials like trees and metals.
                    Lowers energy consumption: Manufacturing goods from recycled materials typically consumes less energy than producing them from scratch.
                    Combats climate change: The production of new materials often releases greenhouse gasses. Recycling reduces these emissions, mitigating climate change.
                    Lets Get Sorting!

                    <i>Knowing what goes where is crucial for effective recycling. Here is a quick guide to common household recyclables:
                    </i>
                    Paper & Cardboard: Newspaper, magazines, cardboard boxes, and paperboard packaging (think cereal boxes) are generally recyclable.
                    Plastic: Check the recycling symbol on plastic containers. Generally, plastics labeled #1 (PET) and #2 (HDPE) are recyclable in most areas.
                    Glass: Glass bottles and jars can usually be recycled, but remove lids (often metal) before tossing them in the bin.
                    Metal: Aluminum cans, tin foil, and clean metal food containers are recyclable staples.
                    GoodWaste Makes Recycling Easy!

                    <b>GoodWaste goes beyond just providing information. Our user-friendly app empowers you to take action:
                    </b>
                    Schedule Free Collection: Schedule a pickup for your recyclables at your convenience. No more lugging heavy bins to the curb!
                    Earn Rewards: GoodWaste pays you for certain recyclable items, turning your trash into cash!
                    Educational Resources: Learn more about recycling guidelines and tips directly within the app.
                    Join the GoodWaste Movement!

                    Recycling is a powerful tool for environmental protection. With GoodWaste by your side, you can confidently and conveniently participate in creating a more sustainable future.  Download the GoodWaste app today and start your journey toward responsible waste management!

                    <b>Bonus Tip: Get your friends and family involved! Encourage them to download the GoodWaste app and join the recycling revolution together.
                    </b>
                    Remember, every little bit counts. Lets work together to make recycling a way of life!
                </p>
                <p className="leading-8">
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id reprehenderit adipisicing. Proident duis
                    exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p className="leading-8">
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
        badge: "React",
        // image:
        //   "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p className="leading-8">
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
                <br/>
                <p className="leading-8">
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                    veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                    reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        ),
        badge: "Changelog",
        // image:
        //   "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
            <br/>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
            </>
        ),
        badge: "Launch Week",
        // image:
        //   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

<TracingBeamDemo />
