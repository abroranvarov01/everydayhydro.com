"use client"

import { useState, useEffect } from "react"
import { notFound, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProductHero() {
	const [currentImage, setCurrentImage] = useState(0)

	const productData: Record<string, any> = {
		"owala-freesip": {
			name: "Owala FreeSip Insulated Stainless Steel Water Bottle, 24 Oz",
			amazonUrl: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0BZYCJK89",
			price: 29.99,
			rating: 4.7,
			reviews: 96142,
			description:
				"The Owala FreeSip Insulated Stainless-Steel Water Bottle with Locking Push-Button Lid easily tackles every thirst. With a built-in, easy-clean straw and a wide-mouth opening, the FreeSip reusable bottle is designed for drinking two different ways: sipping upright through the straw or tilting back to swig from the wide-mouth spout opening. Add in a push-to-open lid and playful colors, and staying hydrated has never been simpler—or more fun. Double-wall insulation keeps drinks cold up to 24 hours.",
			images: ["https://m.media-amazon.com/images/I/61sS-XIvEXL._AC_SX679_.jpg"],
			colors: ["Denim", "All the Berries", "Black Cherry", "Blue Citrus", "Tropical"],
		},
		"hidrate-spark-smart": {
			name: "Hidrate Spark PRO 21oz Smart Straw Water Bottle",
			amazonUrl: "https://www.amazon.com/Hidrate-Spark-Smart-Straw-Bottle/dp/B0FJ8RQCS1",
			price: 69.99,
			rating: 4.5,
			reviews: 200,
			description:
				"Smart water bottle with app connectivity to track hydration and glow reminders. Features a spill-proof straw lid and BPA-free construction for daily use.",
			images: ["https://m.media-amazon.com/images/I/61gL6-jlFmL._AC_SX679_.jpg"],
			colors: ["ChillFiesta", "Midnight", "Blush"],
		},
		"thermos-stainless-beverage": {
			name: "THERMOS Stainless Steel Beverage Bottle, 34 Ounce",
			amazonUrl: "https://www.amazon.com/THERMOS-Stainless-Beverage-Bottle-Ounce/dp/B08JX32JHP",
			price: 29.99,
			rating: 4.6,
			reviews: 5000,
			description:
				"Durable stainless steel insulated bottle keeps beverages hot for 24 hours or cold for 24 hours. Features a leak-proof lid and sweat-proof exterior for on-the-go use.",
			images: ["https://m.media-amazon.com/images/I/518k4n7H6fL._AC_SY879_.jpg"],
			colors: ["Matte Black", "Stainless Steel", "Midnight Blue"],
		},
		"cierto-insulated-bottle": {
			name: "Cierto 24 oz Insulated Water Bottle with Straw Lid",
			amazonUrl: "https://www.amazon.com/Cierto-Insulated-Bottle-Workout-Friendly/dp/B0F9KHKRWJ",
			price: 24.99,
			rating: 4.4,
			reviews: 13,
			description:
				"Double wall vacuum insulated stainless steel bottle designed for workouts and daily use, keeping drinks cold for up to 11 hours or hot for 7 hours. Includes leakproof flip straw lid, carrying loop, and is BPA-free and dishwasher safe.",
			images: ["https://m.media-amazon.com/images/I/61Fpo83HYSL._AC_SX679_.jpg"],
			colors: ["Black", "Gray", "White"],
		},
		"duocesica-stainless-containers": {
			name: "Duocesica Stainless Steel Food Containers, 18oz Leakproof",
			amazonUrl: "https://www.amazon.com/Duocesica-Stainless-Containers-Refrigerator-Travel-18oz/dp/B0DLWZJPJB",
			price: 19.99,
			rating: 4.3,
			reviews: 80,
			description:
				"Set of leakproof stainless steel containers ideal for meal prep, travel, and refrigeration. BPA-free, dishwasher safe, and stackable for easy storage.",
			images: ["https://m.media-amazon.com/images/I/71-zvSnx4iL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg"],
			colors: ["Silver"],
		},
		"dumbbell-water-bottle": {
			name: "2.2L Dumbbell Shape Water Bottle, Eco-friendly Sports Fitness",
			amazonUrl: "https://www.amazon.com/Dumbbell-Eco-friendly-Fitness-Exercise-Outdoors/dp/B0722VN5ZL",
			price: 24.99,
			rating: 4.5,
			reviews: 1156,
			description:
				"Unique 2.2L / 75oz dumbbell-shaped water bottle made from eco-friendly PETG material, perfect for gym, yoga, running, and outdoors. Features flip-top cap and can double as adjustable weights based on water level.",
			images: ["https://m.media-amazon.com/images/I/617fv26pxhL._AC_SX679_.jpg"],
			colors: ["Black", "Transparent"],
		},
		"epica-glass-bottles": {
			name: "Epica Glass Water Bottles with Silicone Sleeves",
			amazonUrl: "https://www.amazon.com/Epica-glass-bottles-lids-ecofriendly/dp/B00I0YNYSI",
			price: 24.99,
			rating: 4.6,
			reviews: 12000,
			description:
				"Eco-friendly glass bottles with protective silicone sleeves and airtight bamboo lids. Ideal for infusing fruits or storing beverages sustainably.",
			images: ["https://m.media-amazon.com/images/I/61FWkYPLedL._AC_SX679_.jpg"],
			colors: ["Clear Glass with Blue Sleeve", "Clear Glass with Green Sleeve"],
		},
		"locckmy-temperature-bottle": {
			name: "Locckmy Water Bottle with LED Temperature Display",
			amazonUrl: "https://www.amazon.com/Locckmy-Temperature-Insulated-Stainless-AutomotiveTravel/dp/B085XHQ17Z",
			price: 13.79,
			rating: 4.0,
			reviews: 1480,
			description:
				"Smart insulated stainless steel bottle with LED display for real-time temperature. Keeps cold for 24 hours or hot for 12 hours, leak-proof and BPA-free.",
			images: ["https://m.media-amazon.com/images/I/51xK0qXGbxL._AC_SX679_.jpg"],
			colors: ["Black", "Silver", "Rose Gold"],
		},
		"echo-flask-hydrogen": {
			name: "Echo Flask Hydrogen Water Bottle",
			amazonUrl: "https://www.amazon.com/Echo-Flask-Hydrogen-Water-Bottle/dp/B0DQBP8QYS",
			price: 299.99,
			rating: 4.5,
			reviews: 50,
			description:
				"Advanced hydrogen water bottle with LCD touch screen and app for intake tracking. Generates up to 8 ppm hydrogen-rich water for enhanced hydration and health benefits.",
			images: ["https://m.media-amazon.com/images/I/810fGlQuiBL._AC_SX679_.jpg"],
			colors: ["Transparent"],
		},
		"owala-freesip-black-cherry": {
			name: "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Black Cherry",
			amazonUrl: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0FJN3BTPV",
			price: 29.99,
			rating: 4.7,
			reviews: 98164,
			description: "24-ounce insulated stainless-steel water bottle with a FreeSip spout and push-button lid with lock. Patented FreeSip spout designed for either sipping upright through the built-in straw or tilting back to swig from the spout opening. Protective push-to-open lid keeps spout clean; convenient carry loop doubles as a lock. Double-wall insulation keeps drinks cold for up to 24 hours; wide opening for cleaning and adding ice; cup holder-friendly base. BPA, lead, and phthalate-free; hand wash cup, dishwasher-safe lid; not for use with hot liquids.",
			images: ["https://m.media-amazon.com/images/I/41ZPiDU6woL._AC_SX679_.jpg"],
			colors: ["All the Berries", "Alpine Sport", "Angel Food Cake", "Beach House", "Black Cherry", "Blue Citrus", "Boneyard", "Camo Cool", "Candy Store", "Celestial Sphere", "Citrus Crush", "Crazy Chameleon", "Crown Jewel", "Daybreak", "Denim", "Dreamy Field", "Foggy Tide", "Golden Quest", "Iced Breeze", "Lost Signal", "Mint Chocolate", "Misty Horizons", "Muddy Buddy", "Off Road", "Putting Green", "Shy Marshmallow", "Strawberry Field", "Summer Sweetness", "Surfs Edge", "Tropical", "Very, Very Dark"],
		},
		"owala-freesip-sway": {
			name: "Owala FreeSip Sway Insulated Stainless Steel Water Bottle with Two-Way Spout, Built-In Straw and Bucket Handle, Made for Travel, School, and Sports, 30oz, BPA Free, Leak Proof, Black Cherry",
			amazonUrl: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-Two-Way/dp/B0FK124QCT",
			price: 34.99,
			rating: 4.8,
			reviews: 2460,
			description: "30-ounce insulated stainless steel water bottle with extra features: includes a 2-in-1 spout that lets you choose how you drink; push-button, leak-proof lid that locks for all your adventures. Choose your sip style—straw or swig: Patented 2-in-1 FreeSip spout is one of a kind; it lets you sip upright through the built-in straw or swig by tilting back the spout. Hygienic push-button lid and easy carry handle: closed lid keeps spout covered and clean between sips; ergonomic bucket handle makes transport easy for sports, campsites, road trips, school, and work. Keeps water cold and fits where you need: Triple-layer insulation keeps drinks colder up to 24 hours; wide opening for easy cleaning and extra ice; cupholder friendly base fits most car cupholders. Safe materials and simple care instructions: BPA, lead, and phthalate-free for safe drinking; hand wash the cup, lid is dishwasher safe and can be easily disassembled; not for use with hot liquids.",
			images: ["https://m.media-amazon.com/images/I/410gXei0VaL._AC_SL1080_.jpg"],
			colors: ["Black Cherry"],
		},
		"stanley-iceflow": {
			name: "Stanley IceFlow Flip Straw Tumbler with Handle | Twist On Lid and Flip Up Straw | Leak Resistant Water Bottle | Insulated Stainless Steel | BPA-Free",
			amazonUrl: "https://www.amazon.com/STANLEY-Resistant-Insulated-Stainless-BPA-Free/dp/B0FB7VPPN5",
			price: 26.25,
			rating: 4.7,
			reviews: 59734,
			description: "The Stanley IceFlow Flip Straw 2.0 Tumbler lid is designed for quick hydration. Just flip up to sip and snap it shut for a leak resistant seal. Perfect for your bag, commute, or workout. Constructed with double-wall vacuum insulation and 18/8 stainless steel, your drinks will stay nice and chilled for 12 hours or iced for up to 2 days. Plus it can take a beating and is 100% free of BPA material. The ergonomic, rotating handle lets you quickly grab this cute tumbler with straw and go; Fits comfortably in most cupholders in your car or on most exercise machines; Easy to clean and dishwasher safe.",
			images: ["https://m.media-amazon.com/images/I/51HW8YM1GzL._AC_SL1500_.jpg"],
			colors: ["Agave", "Dew Drop"],
		},
		"owala-freesip-twist": {
			name: "Owala FreeSip Twist Insulated Stainless Steel Water Bottle with Straw for Sports and Travel, BPA-Free, 24-oz, Black Cherry",
			amazonUrl: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0FK22GB23",
			price: 29.99,
			rating: 4.6,
			reviews: 3513,
			description: "The Owala FreeSip Insulated Stainless-Steel Water Bottle with Locking Push-Button Lid easily tackles every thirst. With a built-in, easy-clean straw and a wide-mouth opening, the FreeSip reusable bottle is designed for drinking two different ways: sipping upright through the straw or tilting back to swig from the wide-mouth spout opening. Add in a push-to-open lid and playful colors, and staying hydrated has never been simpler—or more fun. Additional features include double-wall insulated stainless steel that keeps drinks cold up to 24 hours, a carry loop that doubles as a lock, a cup holder-friendly base, and a wide opening for easy cleaning and adding ice. The Owala FreeSip Insulated Stainless-Steel Water Bottle with Locking Push-Button Lid is available in three sizes: 24-Ounce, 32-Ounce, and 40-Ounce. Lid is dishwasher safe; hand wash cup. Not for use with hot liquids. Manufacturer’s limited lifetime warranty.",
			images: ["https://m.media-amazon.com/images/I/41F3kpERcCL._AC_SX679_.jpg"],
			colors: ["Black Cherry", "Blue Jay", "Bubble Gum", "California Grapevine", "Camo Cool", "Confetti", "Daybreak", "Dreamy Field", "Foggy Tide", "Fruit Punch", "High Noon", "Iced Breeze", "In Bloom", "Minty Horizon", "Misty Horizons", "Off Road", "Scream Green", "Sweet Pea", "Teen Spirit", "Vigilante"],
		},
		"owala-disney-princess-cinderella": {
			name: "Owala Disney Princess FreeSip Insulated Stainless Steel Water Bottle with Straw for Sports and Travel, BPA-Free Sports Water Bottle, 24 oz, Cinderella",
			amazonUrl: "https://www.amazon.com/Owala-Princess-Insulated-Stainless-Cinderella/dp/B0F2WMS7CC",
			price: 34.99,
			rating: 4.7,
			reviews: 10848,
			description: "24-ounce insulated stainless-steel FreeSip spout water bottle with your favorite Disney Princess. Patented FreeSip spout designed for either sipping upright through the built-in straw or tilting back to swig from the spout opening. Protective push-to-open lid keeps spout clean; convenient carry loop doubles as a lock. Double-wall insulation keeps drinks cold for up to 24 hours; wide opening for cleaning and adding ice; cup holder-friendly base. BPA and phthalate-free; hand wash cup, dishwasher-safe lid; not for use with hot liquids.",
			images: ["https://m.media-amazon.com/images/I/51trt5KQ9iL._AC_SX679_.jpg"],
			colors: ["Cinderella"],
		},
		"zak-minecraft-sage": {
			name: "Zak Designs Sage Minecraft Kids Water Bottle For School or Travel, 16oz Durable Plastic Water Bottle With Straw, Handle, and Leak-Proof, Pop-Up Spout Cover (Creeper)",
			amazonUrl: "https://www.amazon.com/Zak-Designs-Minecraft-Durable-Leak-Proof/dp/B0CK2JCYRK",
			price: 8.49,
			rating: 4.6,
			reviews: 19773,
			description: "This Zak water bottle has a 16-ounce capacity, measuring 4.33 by 2.78 inches wide and 7 inches tall. It's recommended for children age 3 and up. This travel water bottle is made of break-resistant PP plastic, which is durable and top rack dishwasher safe; don't put it in the microwave. Keep the spout clean in the house or while you're traveling--the spout cover protects contact surfaces and has a flip-up lock to keep it closed, preventing leaks and spills. When it's time to drink, the action lid allows one-handed operation, and the spout easily pops up at the push of a button. The leak-proof water bottle has a screw-on lid that prevents splashes and mess, and fits in most car cup holders for convenient travel. The drinking straw can be removed for cleaning and the silicone spout is comfortable for kids to drink from. Staying hydrated is an important part of being healthy! With fun art featuring Minecraft mobs, Zak Designs' innovative water bottles help make it easy for grown-ups and fun for kids!",
			images: ["https://m.media-amazon.com/images/I/71UUV6NbY+L._AC_SL1500_.jpg"],
			colors: ["Creeper"],
		},
		"hydro-flask-straw-lid": {
			name: "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Mouth Flex Straw Lid, Non Spill, Leakproof and Refillable in 32 Oz Sandpiper",
			amazonUrl: "https://www.amazon.com/Hydro-Flask-Water-Bottle-Refillable/dp/B0FJZHM6NN",
			price: 44.95,
			rating: 4.7,
			reviews: 12866,
			description: "32 OZ SANDPIPER BOTTLE: Flip it and sip it with the Hydro Flask Wide Mouth insulated water bottle with closeable straw cap. With a comfortable, flexible handle, the leakproof straw cap is easy to open and close. Double-wall insulation keeps drinks cold up to 24 hours. NONSTOP COLOR: Color-matching lid for a monochrome, stylish look for all your drinking needs. The large, refillable, portable water bottle with straw is one of the most perfect hydration accessories with matching lids and logos. 24 HOURS COLD: The insulated bottle keeps drinks cold for 24 hours thanks to double-wall vacuum insulation. Hydro Flask water bottles feature TempShield insulation, designed to be lightweight and efficient temperature retention, keeping contents chilled all day. LEAKPROOF: Say goodbye to leaky reusable water bottles. The Flex Straw Cap is leakproof when closed. Simply close it shut and toss it into your bag or use it as a travel water bottle without worry. Click it shut, and rest easy knowing your drink stays securely sealed all day. PURE TASTE: Durable pro-grade stainless steel water bottle ensures pure taste and no leftover flavor transfer. So, today's water won't have any taste of yesterday's iced tea. BPA - Free DISHWASHER SAFE: Easy to use and easy to clean, just dissasemble the straw lid and toss the lid and bottles into the dishwasher. Designed to keep bright color, being dishwasher safe means your favorite Hydro Flask is always at-the-ready.",
			images: ["https://m.media-amazon.com/images/I/61H6qYM6sVL._AC_SL1500_.jpg"],
			colors: ["Aloe", "Beachplum", "Black", "Botanical Bliss Agave", "Botanical Bliss Coconut", "Campus Ivory", "Campus Pink", "Cascade", "Chocolate Rose Gold", "Coconut", "Fossil", "Glimmer Blue", "Glimmer Cream", "Glimmer Pink", "Indigo", "Ivory", "Jelly Green", "Jelly Pink", "Linen Rose Gold", "Moonshadow", "Nectar", "Oat", "Reef", "Sandpiper", "Sea Rose Gold", "Stainless Steel Violet", "Sunglow", "Surf", "Thyme Rose Gold", "Tonal Agave", "Tonal Birch", "Tonal Oat", "Tonal Trillium", "Trillium", "Vapor Rose Gold", "Western Dark Blue", "Western Light Blue", "White"],
		},
		"hydro-flask-travel-tumbler": {
			name: "Hydro Flask Travel Tumbler with Handle, Lid and Straw - Insulated Stainless Steel in 32 Oz Dew",
			amazonUrl: "https://www.amazon.com/Hydro-Flask-Around-Travel-Tumbler/dp/B0C359X1LZ",
			price: 30.98,
			rating: 4.7,
			reviews: 8969,
			description: "THE BEST TUMBLER: The insulated Hydro Flask 32 oz Travel Tumbler is here to hydrate more and refill less. The insulation keeps drinks cold and the durable handle takes it to the next level. The perfect size stainless steel tumbler bottle can go anywhere, even fitting most cupholders. Cold stays cold, and the flexible straw is easy to sip any which way. COLD STAYS COLD: Thanks to the double-wall vacuum insulation, drinks stay cold for hours. The TempShield insulation delivers cold hydration anytime so your morning fill is the perfect temp. LEAK-RESISTANT: The leak-resistant press-in lid with straw on the insulated Travel Tumbler keeps drinks ready to sip. The Flexible Straw lid is soft on teeth and easy to flex so you can sip any which way. FITS CUPHOLDERS: The cupholder-friendly design means your water tumbler fits seamlessly in most cupholders. Designed for seamless cupholder cohabitation, it's right at home on the open road, on the sidelines, in a pack or wherever you need to set your sips. PURE TASTE: Durable pro-grade stainless steel ensures pure taste and no leftover flavor transfer. So, today's water won't have any taste of yesterday's iced tea. DISHWASHER SAFE: Easy to use and easy to clean, just disassemble the straw lid from the cup and toss it all into the dishwasher. Designed to keep bright color, being dishwasher safe means your favorite Hydro Flask is always at-the-ready.",
			images: ["https://m.media-amazon.com/images/I/41ygPkW6++L._AC_SL1500_.jpg"],
			colors: ["Agave", "Aloe", "Beachplum", "Black", "Botanical Bliss Agave", "Botanical Bliss Coconut", "Cactus", "Cascade", "Coconut", "Dew", "Glimmer Blue", "Glimmer Cream", "Glimmer Pink", "Indigo", "Ivory Rose Gold", "Jelly Green", "Jelly Pink", "Nectar", "Oat", "Reef", "Sandpiper", "Seacliff", "Seasalt", "Stainless Steel Lime", "Stainless Steel Violet", "Starlight", "Sunglow", "Surf", "Thyme Rose Gold", "Tonal Agave", "Tonal Birch", "Tonal Trillium", "Trillium", "Western Dark Blue", "Western Light Blue", "White"],
		},
		"nalgene-sustain-tritan": {
			name: "Nalgene Sustain Tritan BPA-Free Water Bottle Made with Material Derived From 50% Plastic Waste (using ISCC certified mass balance), 32 OZ, Wide Mouth",
			amazonUrl: "https://www.amazon.com/Nalgene-Sustain-BPA-Free-Material-certified/dp/B0B9T4KCV7",
			price: 15.25,
			rating: 4.8,
			reviews: 24283,
			description: "SUSTAINABLE HYDRATION: Crafted from Tritan Renew, utilizing 50% certified recycled content (using ISCC certified mass balance) to reduce plastic waste, making an eco-conscious choice for your daily hydration. GUARANTEED LEAK-PROOF: Enjoy worry-free transport with our iconic leak-proof design, ensuring your bag and belongings stay dry no matter your adventure, from the gym to the trail. RENOWNED DURABILITY IN THE USA: Built in the US to last a lifetime this Nalgene bottle resists impacts, odors, and stains, withstanding drops and daily wear for a reliable companion on all your journeys. EFFORTLESS AND VERSATILE USE: The convenient narrow mouth provides controlled drinking on the go, ideal for any climate or activity. HEALTH-FIRST DESIGN: Hydrate with complete confidence knowing your bottle is 100% BPA, BPS, and Phthalate-free, ensuring a pure, clean, and healthy drinking experience every time.",
			images: ["https://m.media-amazon.com/images/I/71bZMs39pZL._AC_SX679_.jpg"],
			colors: ["Gray w/ Black Lid", "Amethyst"],
		},
		"raymylo-40oz-paracord": {
			name: "RAYMYLO Insulated Water Bottle 40 oz, Triple Wall Vacuum Stainless Steel (Cold for 48 Hrs), Leak Proof & Non-BPA, Modern Water Flask Jug with Paracord Handle & Straw Spout Lids, Indigo/Black",
			amazonUrl: "https://www.amazon.com/RAYMYLO-Insulated-Stainless-BPA-Free-Paracord/dp/B0CBLY5GWQ",
			price: 24.99,
			rating: 4.7,
			reviews: 13292,
			description: "Triple Wall Insulation: Raymylo 40 oz Modern Insulated Water Bottle featuring copper plated triple wall vacuum insulation, is tested to keep your drinks icy cold for up to 48 hrs and reassuring warm 24 hrs. Get this iconic water bottle to up your fitness track, you'll fall for hydrating as every sip is absolutely cool. Full Seal Leak-proof Lids: All scenario spout and straw lid with rubber seal ring ensures not a single drop leaks no matter how bumpy your journey gets.Straw lid allows for a quick refreshment without stopping you, while spout lid is great for proper hydration whenever you feel like a boost.Keeps your drinks fresh and spill-resistant on the go. Iconic Paracord Handle: This insulated water bottle comes with a beautiful hand knit nylon paracord in coordinated color with the water bottle. Configured with a compass and carabiner, this paracord handle is a must-have as a full functional camping / hiking flask. Made for Clean and Healthy Drinkers: Built with select 18/8 food-grade stainless steel that's Non-BPA and Unscented, making it a sustainable choice for you and the environment. This water jug has a wide mouth opening, making ice adding and washing super handy. Powder coating adds a sturdy and refined finish that won't sweat, condense, or slip in wet palms. What You'll Get: We offer Continuous After-sales Service and 100% customer satisfaction against any leakage or insulation failure. You purchase contains: RAYMYLO Water Bottle, Carrying Pouch, Straw Lid with 2 Straws & Straw Brush, Spout Lid, Paracord Handle, Bottle Brush.",
			images: ["https://m.media-amazon.com/images/I/71i3aETDFmL._AC_SL1500_.jpg"],
			colors: ["Aurora-Blue", "Aurora-Green", "Aurora-Purple", "Cyan Blue", "Dark Gray", "Dark Green", "Hydrangea", "Indigo/Black", "Lilac", "Magic Black", "Navy Blue", "Ombre Green", "Ombre Orange", "Ombre Pink", "Ombre: White/Black", "Starry Sky-Black", "Starry Sky-Indigo/Black"],
		},
		"owala-silicone-boot": {
			name: "Owala Silicone Boot for Stainless Steel Water Bottles, Anti-Slip Protective Sleeve, Protects FreeSip, Twist, and Flip, Black, 32 Oz",
			amazonUrl: "https://www.amazon.com/Owala-Silicone-Anti-Slip-Protective-Stainless/dp/B0B1VZCVCH",
			price: 7.99,
			rating: 4.7,
			reviews: 11061,
			description: "Silicone boot fits 32oz stainless steel Owala FreeSip water bottles; Not intended for use with tritan plastic water bottles; Not intended for use with tritan plastic, Kids bottles, Freesip Twist, FreeSip Sway, Freesip Tumblers, SmoothSip coffee tumblers",
			images: ["https://m.media-amazon.com/images/I/41MLCJljMlL._AC_SL1080_.jpg"],
			colors: ["Black"],
		},
		"stanley-quencher-h2o": {
			name: "STANLEY Quencher H2.0 Tumbler with Handle and Straw 40 oz Flowstate 3-Position Lid Cup Holder Compatible for Travel Insulated Stainless Steel Cup BPA-Free Rose Quartz 2.0",
			amazonUrl: "https://www.amazon.com/STANLEY-Flowstate-3-Position-Compatible-Insulated/dp/B0CP9Z56SW",
			price: 27.00,
			rating: 4.7,
			reviews: 87852,
			description: "YOUR DREAM TUMBLER: Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. Choose between our 14oz, 20oz, 30oz,40oz and 64oz options depending on your hydration needs. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side. ADVANCED LID CONSTRUCTION: Whether you prefer small sips or maximum thirst quenching, Stanley has developed an advanced FlowState lid, featuring a rotating cover with three positions: a straw opening designed to resist splashes with a seal that holds the reusable straw in place, a drink opening, and a full-cover top for added leak resistance. We’ve also included an ergonomic, comfort-grip handle, so you can easily carry your ice-cold water to work, meetings, the gym or trips out of town. EARTH-FRIENDLY DURABILITY: Constructed of 90% recycled BPA free stainless steel for sustainable sipping, the Stanley Quencher H2.0 has the durability to stand up to a lifetime of use. Eliminate the use of single-use plastic bottles and straws with a travel tumbler built with sustainability in mind. DISHWASHER SAFE: Spend less time hunched over the sink and more time doing the things you love. Cleaning your tumbler and lid couldn't be easier, just pop them into the dishwasher. Unlike plastic bottles that retain stains & smells, this metallic beauty comes out pristine LIFETIME WARRANTY: Since 1913 we’ve promised to provide rugged, capable gear for food and drink - accessories built to last a lifetime. It’s a promise we still keep. Stanley products purchased from Stanley Resellers come with a lifetime warranty. Rest easy knowing we’ve got your back through it all.",
			images: ["https://m.media-amazon.com/images/I/41ryNvEnNCL._AC_SX679_.jpg"],
			colors: ["Rose Quartz 2.0"],
		},
		"hydrojug-traveler-40oz": {
			name: "HydroJug Traveler - 40 oz Water Bottle with Handle & Flip Straw - Fits in Cup Holder, Leak Resistant Tumbler-Reusable Insulated Stainless Steel & Rubber Base - Gifts for Women & Men, Alumni Red",
			amazonUrl: "https://www.amazon.com/HydroJug-Traveler-Resistant-Tumbler-Reusable-Insulated/dp/B0FNGCNMJ7",
			price: 39.99,
			rating: 4.5,
			reviews: 15629,
			description: "YOUR NEW FAVORITE WATER BOTTLE: The best travel tumbler out there! Designed for easy use, our HydroJug Traveler features an ambidextrous lid, a circular flip straw and a comfortable grip handle. It's your go-to for various settings like hiking, school, work, gym, car cup holder, or throw in your bag. STURDY & LEAK PROOF: Engineered with a non-slip rubber base and made from top-quality materials, this water bottle ensures both durability and a leak resistant experience. STYLISH & FUNCTIONAL: More than just a water bottle, the HydroJug Traveler complements an active lifestyle. Available in multiple attractive colors, each sip becomes both a delight and a statement. EASY TO CLEAN: This tumbler cup is dishwasher safe and comes with a detachable straw for thorough cleaning, allowing you to maintain hygiene without extra effort. HOURS OF TEMPERATURE CONTROL: With triple-wall stainless steel insulation, your beverage stays perfectly hot or cold for hours, offering consistent freshness wherever you go.",
			images: ["https://m.media-amazon.com/images/I/61J9X9qo6jL._AC_SL1500_.jpg"],
			colors: ["Alumni Red", "Black", "Camo", "Clover", "Cream", "Light Blue", "Midnight", "Orchid", "Peri", "Pink Sand", "Pink Sugar", "Riptide", "Rodeo", "Sage", "Sweet Cherry", "Wildrose"],
		},
		"owala-freesip-32oz": {
			name: "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw for Sports and Travel, BPA-Free, 24 Ounce, Candy Store",
			amazonUrl: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0DKLNVHNW",
			price: 29.99,
			rating: 4.7,
			reviews: 98164,
			description: "The Owala FreeSip Insulated Stainless-Steel Water Bottle with Locking Push-Button Lid easily tackles every thirst. With a built-in, easy-clean straw and a wide-mouth opening, the FreeSip reusable bottle is designed for drinking two different ways: sipping upright through the straw or tilting back to swig from the wide-mouth spout opening. Add in a push-to-open lid and playful colors, and staying hydrated has never been simpler—or more fun. Additional features include double-wall insulated stainless steel that keeps drinks cold up to 24 hours, a carry loop that doubles as a lock, and a wide opening for easy cleaning and adding ice. The Owala FreeSip Insulated Stainless-Steel Water Bottle with Locking Push-Button Lid is available in three sizes: 24-Ounce, 32-Ounce, and 40-Ounce. Lid is dishwasher safe; hand wash cup. Not for use with hot liquids. Manufacturer’s limited lifetime warranty.",
			images: ["https://m.media-amazon.com/images/I/41xGVia9icL._AC_SL1200_.jpg"],
			colors: ["All the Berries", "Alpine Sport", "Angel Food Cake", "Beach House", "Black Cherry", "Blue Citrus", "Boneyard", "Camo Cool", "Candy Store", "Celestial Sphere", "Citrus Crush", "Crazy Chameleon", "Crown Jewel", "Daybreak", "Denim", "Dreamy Field", "Foggy Tide", "Golden Quest", "Iced Breeze", "Lost Signal", "Mint Chocolate", "Misty Horizons", "Muddy Buddy", "Off Road", "Putting Green", "Shy Marshmallow", "Strawberry Field", "Summer Sweetness", "Surfs Edge", "Tropical", "Very, Very Dark"],
		},
		"owala-smoothsip-slider": {
			name: "Owala SmoothSip Slider Insulated Stainless Steel Coffee Tumbler, Reusable Iced Coffee Cup, Hot Coffee Travel Mug, BPA Free 12 oz, Vanilla Bean",
			amazonUrl: "https://www.amazon.com/Owala-SmoothSip-Insulated-Stainless-Reusable/dp/B0DF472VMZ",
			price: 24.99,
			rating: 4.6,
			reviews: 7366,
			description: "The Owala SmoothSip Slider turns coffee on its head—literally. The slider spout makes it completely leakproof, so you can carry it wherever without a single spill. Not only that, but the seamless spout that makes sipping extra enjoyable. This coffee mug also includes double-wall insulation to keep coffee toasty or chilling (whatever your preference) and fits easily in your hand.",
			images: ["https://m.media-amazon.com/images/I/311JdFvhtVL._AC_SX679_.jpg"],
			colors: ["Beachy Breeze", "Black Cherry", "Cozy Cocoa", "Crochet Queen", "Daybreak", "High Dive", "In Bloom", "Pucker Up", "Sour Apple", "Strawberry Fields", "Vanilla Bean"],
		},
		"stanley-protour-flip": {
			name: "STANLEY Quencher ProTour Flip Straw Tumbler with Leakproof Lid | Built-In Straw & Handle | Cupholder Compatible for Travel | Insulated Stainless Steel Cup | BPA-Free",
			amazonUrl: "https://www.amazon.com/Leakproof-Cupholder-Compatible-Insulated-Stainless/dp/B0DCF2RJX7",
			price: 25.00,
			rating: 4.7,
			reviews: 9868,
			description: "Leakproof Hydration: The ProTour Flip Straw lid lets you sip without worry. Just flip up the built-in straw for a quick drink, then snap it shut to prevent spills. This leakproof tumbler is ready for all your adventures. Ice-Cold Refreshment, All Day: Thanks to double-wall vacuum insulation, your drinks stay ice cold for hours. Whether you're at the gym, on a hike, or at your desk, the Quencher ProTour keeps your water refreshingly chilled. Classic Style, Modern Comfort: Available in iconic Stanley colors and fresh designs, this tumbler adds a touch of style to your hydration routine. The soft texture handle and two-tone lid make it as easy on the eyes as it is in your hands. Built to Last, Built for You: Made from 18/8 recycled stainless steel, this BPA-free tumbler is as durable as it is sustainable. It's dishwasher-safe, meaning no hassle when it’s time to clean. Enjoy your water worry-free, wherever life takes you. Perfect Fit, Every Time: With a textured comfort-grip handle and a narrow base that fits most car cup holders, the Stanley Quencher is as easy to carry as it is to store. Ideal for your commute, gym bag, or next road trip, this tumbler is always right by your side.",
			images: ["https://m.media-amazon.com/images/I/61izdGR64FL._AC_SL1500_.jpg"],
			colors: ["Agave", "Azure Fade", "Black", "Black Fade", "Cranberry Gloss", "Cream", "Cream Fade", "Dried Pine VRT", "Frost", "Frost Fade", "Goldenrod Fade", "Hot Coral Fade", "Hydrangea", "Lichen", "Oasis Apricot", "Oasis Butter Gloss", "Oasis Cornflower Gloss", "Oasis Peach Whip Gloss", "Pink Mesa", "Pistachio", "Pomelo", "Ponderosa Shimmer", "Port Shimmer", "Prickly Pear", "Rose Quartz", "Rose Quartz Fade", "Toast VRT", "Toasted Almond", "Twilight VRT", "Violet Blossom", "Vivid Violet Fade"],
		},
		"yeti-rambler-20oz": {
			name: "YETI Rambler 20 oz Tumbler, Stainless Steel, Vacuum Insulated with MagSlider Lid, Lowcountry Peach",
			amazonUrl: "https://www.amazon.com/YETI-Stainless-Insulated-MagSlider-Lowcountry/dp/B0DDVH8143",
			price: 24.50,
			rating: 4.8,
			reviews: 147842,
			description: "The Rambler 20 oz. is made from durable stainless steel with double-wall vacuum insulation to protect your hot or cold beverage at all costs. These Ramblers come standard with the YETI MagSlider Lid, the only drink lid that uses the power of magnets to keep your water, beer, or favorite drink on lock. While the MagSlider Lid adds a barrier of protection for keeping drinks contained and preventing heat or cold from escaping, Please Note – The MagSlider Lid is not leakproof and will not prevent spills. YETI Ramblers are BPA-free, dishwasher safe, and have a No Sweat Design to make sure your hands stay dry. The tough Duracoat coating on the colored tumblers won’t crack, peel or fade. The YETI 20 oz Rambler Tumbler stands 6 7/8 in high and has a lip diameter of 3 1/2 in. All YETI 20 oz. Tumblers are sized to fit in standard sized cup holders.",
			images: ["https://m.media-amazon.com/images/I/61AUzBBBd3L._AC_SL1500_.jpg"],
			colors: ["Lowcountry Peach"],
		},
		"liquid-iv-hydration": {
			name: "Liquid I.V.® Hydration Multiplier - Popsicle Firecracker | Electrolyte Powder Drink Mix | 1 Pack (16 Servings)",
			amazonUrl: "https://www.amazon.com/Liquid-I-V-Hydration-Multiplier-Firecracker/dp/B0CHN5D13P",
			price: 23.62,
			rating: 4.6,
			reviews: 268813,
			description: "A great-tasting, non-GMO electrolyte drink mix that delivers hydration faster than water alone. Popsicle Firecracker ignites the iconic flavors of citrusy lemon-lime, tart cherry and true-to-fruit raspberry. Powered by LIV HYDRASCIENCE, designed with an optimized ratio of electrolytes and clinically tested nutrients. Has 3x the electrolytes of the leading sports drink, and 8 vitamins and nutrients. Contains 100% of the daily value of 4 B vitamins: B3, B5, B6 and B12. Gluten-free, soy-free, and dairy-free. Single-serving, travel-friendly packets are easy to enjoy on the go. Pour one easy-to-open packet into 16 oz of water, mix or shake, and hydrate.",
			images: ["https://m.media-amazon.com/images/I/812KjGBLVBL._SL1500_.jpg"],
			colors: ["Popsicle Firecracker", "Acai Berry", "Arctic Raspberry", "Concord Grape", "Cotton Candy", "Grapefruit", "Guava", "Lemon Lime", "Mango", "Orange Vanilla Dream", "Passion Fruit", "Pear", "Seaberry", "Strawberry", "Strawberry Lemonade", "Tropical Punch", "Watermelon", "Pina Colada", "Golden Cherry"],
		},
		"lmnt-electrolytes": {
			name: "LMNT Zero Sugar Electrolytes - Variety Pack | Drink Mix | 12-Count",
			amazonUrl: "https://www.amazon.com/LMNT-Zero-Sugar-Electrolytes/dp/B084HQ4DYQ",
			price: 23.99,
			rating: 4.5,
			reviews: 23911,
			description: "THE BEST ELECTROLYTE DRINK MIX EVER: LMNT is a tasty electrolyte drink mix with everything you need and nothing you don't — perfect for training, low-carb or keto diets, fasting, and those leading active lifestyles. MORE SALT, NOT LESS: A growing body of research reveals that optimal health outcomes occur at sodium levels 2-3x government recommendations. That’s why we say, More Salt, Not Less. OUR FORMULATION: Each stick pack contains 1000 mg sodium, 200 mg potassium, 60 mg magnesium — a truly meaningful serving of electrolytes in a science-backed ratio. FEEL THE DIFFERENCE: All-day energy starts with optimal hydration. More energy. No brain fog or cramps. You feel the difference when you get it right. HOW TO #STAYSALTY: Mix one stick pack with 16–32 ounces of water, sparkling water, tea, smoothie, or more.",
			images: ["https://m.media-amazon.com/images/I/71Pr1-qwwML._AC_SX679_.jpg"],
			colors: ["Citrus Salt", "Grapefruit Salt", "Lemonade Salt", "Mango Chili", "Orange Salt", "Raspberry Salt", "Raw Unflavored", "Variety Pack", "Watermelon"],
		},
		"celsius-energy": {
			name: "CELSIUS Assorted Flavors Official Variety Pack, Functional Essential Energy Drinks, 12 Fl Oz (Pack of 12)",
			amazonUrl: "https://www.amazon.com/CELSIUS-Fitness-Energy-Standard-Variety/dp/B06X6J5266",
			price: 21.48,
			rating: 4.6,
			reviews: 97236,
			description: "Functional, Essential Energy with 200mg Caffeine to help you LIVE FIT. Made with Premium, Proven Ingredients and 7 Essential Vitamins. No Sugar. No High Fructose Corn Syrup, No Aspartame, No Artificial Flavors or Colors. Gluten-Free, Kosher, Non-GMO, & Certified Vegan. Assorted Variety Pack, Flavors May Vary.",
			images: ["https://m.media-amazon.com/images/I/61VfvfV69lL._SL1500_.jpg"],
			colors: ["Assorted Flavor Variety", "Cherry Cola", "Cola", "Fizz Free Blue Razz Lemonade", "Fizz Free Dragon Fruit Lime", "Fizz Free Peach Mango", "Fizz Free Pink Lemonade", "Fuji Apple Pear", "Grape Rush", "Green Apple Cherry", "Kiwi Guava", "Kiwi Strawberry", "Lemon Lime", "Mango Lemonade", "Mango Passionfruit", "Raspberry Peach", "Sparkling Orange", "Strawberry Guava", "Strawberry Lemonade", "Strawberry Passionfruit", "Watermelon", "Watermelon Lemonade", "Wild Berry"],
		},
		"premier-protein-shake": {
			name: "Premier Protein Shake, Chocolate, 30g Protein, No Added Sugar, 24 Vitamins & Minerals to Support Immune Health, 11.5 fl oz, 12 Pack (Packaging May Vary)",
			amazonUrl: "https://www.amazon.com/Premier-Protein-Shake-Chocolate-11-5/dp/B07MJL8NXR",
			price: 31.99,
			rating: 4.6,
			reviews: 55098,
			description: "Packaged in an 11.5oz bottle, each Premier Protein Shake contains 30g of protein, complete with all the essential amino acids, 1g of sugar, 3–5g of carbs (depending on flavor), 160 calories, 24 vitamins and minerals, and is also low in fat. We use a blend of milk protein concentrate and calcium caseinate to help support your fitness goals. Enjoy a shake as a healthy snack, a breakfast on the go, or as post or pre-workout fuel. They are delicious as is but also highly customizable. Blend with your favorite fruits and vegetables in a smoothie, pour over cereal or oatmeal, or use as a base for proffee (protein coffee) or protein ice cream. Available in 12 core flavors: Bananas & Cream, Cake Batter Delight, Cafe Latte, Caramel, Chocolate, Chocolate Peanut Butter, Cinnamon Roll, Cookie Dough, Cookies & Cream, Peaches & Cream, Strawberries & Cream, and Vanilla. (Seasonal flavors also available for a limited time.)",
			images: ["https://m.media-amazon.com/images/I/71Y8GT3GYvL._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg"],
			colors: ["Banana", "Cafe Latte", "Cake Batter", "Caramel", "Chocolate", "Chocolate Peanut Butter", "Cinnamon Roll", "Cookie Dough", "Cookies & Cream", "Limited Edition: Lemon Bar", "Limited Edition: Pumpkin Spice", "Limited Edition: Root Beer Float", "Limited Edition: Winter Mint Chocolate", "Peaches & Cream", "Strawberries & Cream", "Vanilla"],
		},
		"boka-ela-mint-toothpaste": {
			name: "Boka Fluoride Free Toothpaste, Nano Hydroxyapatite Toothpaste, Appropriate for Sensitive Teeth - for Adult, Kids Oral Care - Ela Mint Flavor, 4 Fl Oz 1Pk US Manufactured",
			amazonUrl: "https://www.amazon.com/All-toothpaste-whitening-fluoride-free/dp/B083JHCCV2",
			price: 11.75,
			rating: 4.5,
			reviews: 53993,
			description: "ENAMEL CARE: Our proprietary and innovative formula includes Nano-hydroxyapatite (n-Ha) - a biometric mineral form of the same ingredient that naturally makes up 97% of your teeth material and 70% of your dentin. n-Ha has been the subject of significant research for decades with a wide variety of potential benefits across dentistry and oral care. BIOCOMPATIBLE: We meticulously crafted our product to be biocompatible, ensuring it’s safe for daily use and non-toxic when used as directed. A perfect way to take your oral hygiene routine to the next level! APPROPRIATE FOR SENSITIVE TEETH: Gentle yet effective, it provides a soothing and refreshing experience for the whole family. Embrace an oral care routine designed for a luxurious experience. FREE FROM THE BAD STUFF: No Fluoride, Sulfates, Parabens, Artificial Flavors, or Colors. We believe in keeping it simple and clean, offering you an effective and safe toothpaste option. TASTE THE ELA MINT FUSION: A delightful fusion of refreshing mint, antioxidant-rich green tea, with a hint of cardamom. The invigorating mint leaves your breath feeling fresh & revitalized, with just a touch of cardamom adding a unique, yet welcome twist to your brushing experience. Say goodbye to the bland & mundane - say hello to a toothpaste flavor that excites your taste buds every time you brush.",
			images: ["https://m.media-amazon.com/images/I/61u5d9FMmgL._AC_SL1500_.jpg"],
			colors: ["Ela Mint", "Whitening", "Cinnamon Mint", "Lemon Lavender", "Vanilla Cardamom", "Cucumber Mint", "Coco Ginger", "Probiotic - Citrus Mint", "Probiotic - Peppermint", "Charcoal Yuzu Mint"],
		},
	}
	const params = useParams();
	const slug = params.slug;
	const product = productData[slug] || productData["arctic-flow-pro"]

	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % product.images.length)
	}

	const prevImage = () => {
		setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
	}

	const openAmazonLink = () => {
		window.open(product.amazonUrl, "_blank", "noopener,noreferrer")
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.buk === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"buk=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<section className="container mx-auto px-4 mb-16">
			<div className="grid lg:grid-cols-2 gap-12 items-start">
				{/* Image Carousel */}
				<div className="sticky top-24">
					<div className="relative aspect-square bg-gradient-to-br from-[#F8FBFF] to-[#1ED3C6]/5 rounded-2xl overflow-hidden mb-4">
						{/* Shimmer lighting effect */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>

						<div className="relative w-full h-full p-12 flex items-center justify-center">
							<img
								src={product.images[currentImage] || "/placeholder.svg"}
								alt={`${product.name} - View ${currentImage + 1}`}
								className="w-full h-full object-contain drop-shadow-2xl animate-float"
							/>
						</div>

						{/* Navigation arrows */}


					</div>

					{/* Thumbnail navigation */}
					<div className="grid grid-cols-4 gap-4">{product.images.map((_, idx) => null)}</div>
				</div>

				{/* Product Info */}
				<div>
					<h1 className="font-heading text-4xl md:text-5xl font-bold text-[#031B2E] mb-4">{product.name}</h1>

					{/* Rating */}
					<div className="flex items-center gap-3 mb-6">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-[#B9FF66]" : "text-gray-300"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
						<span className="text-[#031B2E]/70">
							{product.rating} ({product.reviews} reviews)
						</span>
					</div>

					<p className="text-lg text-[#031B2E]/80 leading-relaxed mb-8">{product.description}</p>

					{/* Price */}
					<div className="mb-8">

					</div>

					{/* Color selection */}
					<div className="mb-8">
						<h3 className="font-heading text-lg font-semibold text-[#031B2E] mb-4">Choose Color</h3>
						<div className="flex gap-3">
							{product.colors.map((color, idx) => (
								<button
									key={idx}
									className="px-4 py-2 rounded-lg border-2 border-[#1ED3C6]/30 hover:border-[#1ED3C6] hover:bg-[#1ED3C6]/10 transition-all duration-300 text-sm font-medium text-[#031B2E]"
								>
									{color}
								</button>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<a href={product.amazonUrl} data-auto>
							<Button
								size="lg"
								className="flex-1 bg-[#00A8FF] hover:bg-[#1ED3C6] text-white text-lg py-6 relative overflow-hidden group"
							>
								<span className="relative z-10 flex items-center justify-center gap-2">
									View on Amazon
									<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</span>
								<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
