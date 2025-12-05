import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductsGridProps {
	activeFilter: string
}

export function ProductsGrid({ activeFilter }: ProductsGridProps) {
	const products = [
		{
			id: 1,
			slug: "owala-freesip",
			name: "Owala FreeSip Insulated Stainless Steel Water Bottle, 24 Oz",
			price: 29.99,
			rating: 4.7,
			reviews: 96142,
			image: "https://m.media-amazon.com/images/I/61sS-XIvEXL._AC_SX679_.jpg",
			features: ["24hr Cold", "Leak-Proof", "FreeSip Spout", "Push-Button Lid"],
			category: "insulated",
		},
		{
			id: 2,
			slug: "hidrate-spark-smart",
			name: "Hidrate Spark PRO 21oz Smart Straw Water Bottle",
			price: 69.99,
			rating: 4.5,
			reviews: 200,
			image: "https://m.media-amazon.com/images/I/61gL6-jlFmL._AC_SX679_.jpg",
			features: ["Hydration Tracking", "Glow Reminders", "App Sync", "24hr Cold", "Leakproof"],
			category: "smart",
		},
		{
			id: 3,
			slug: "thermos-stainless-beverage",
			name: "THERMOS Stainless Steel Beverage Bottle, 34 Ounce",
			price: 29.99,
			rating: 4.6,
			reviews: 5000,
			image: "https://m.media-amazon.com/images/I/518k4n7H6fL._AC_SY879_.jpg",
			features: ["24hr Hot/Cold", "Leak-Proof", "Sweat-Proof", "Durable Steel"],
			category: "insulated",
		},
		{
			id: 4,
			slug: "cierto-insulated-bottle",
			name: "Cierto 24 oz Insulated Water Bottle with Straw Lid",
			price: 24.99,
			rating: 4.4,
			reviews: 13,
			image: "https://m.media-amazon.com/images/I/61Fpo83HYSL._AC_SX679_.jpg",
			features: ["11hr Cold", "7hr Hot", "Leakproof Straw", "BPA-Free", "Dishwasher Safe"],
			category: "insulated",
		},
		{
			id: 5,
			slug: "duocesica-stainless-containers",
			name: "Duocesica Stainless Steel Food Containers, 18oz Leakproof",
			price: 19.99,
			rating: 4.3,
			reviews: 80,
			image: "https://m.media-amazon.com/images/I/71-zvSnx4iL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
			features: ["Leakproof", "BPA-Free", "Dishwasher Safe", "Stackable", "Meal Prep"],
			category: "container",
		},
		{
			id: 6,
			slug: "dumbbell-water-bottle",
			name: "2.2L Dumbbell Shape Water Bottle, Eco-friendly Sports Fitness",
			price: 24.99,
			rating: 4.5,
			reviews: 1156,
			image: "https://m.media-amazon.com/images/I/617fv26pxhL._AC_SX679_.jpg",
			features: ["75oz Capacity", "Eco-Friendly", "Flip-Top Cap", "Adjustable Weight"],
			category: "fitness",
		},
		{
			id: 7,
			slug: "epica-glass-bottles",
			name: "Epica Glass Water Bottles with Silicone Sleeves",
			price: 24.99,
			rating: 4.6,
			reviews: 12000,
			image: "https://m.media-amazon.com/images/I/61FWkYPLedL._AC_SX679_.jpg",
			features: ["Leak-Proof", "BPA-Free", "Eco-Friendly", "Wide Mouth"],
			category: "glass",
		},
		{
			id: 8,
			slug: "locckmy-temperature-bottle",
			name: "Locckmy Water Bottle with LED Temperature Display",
			price: 13.79,
			rating: 4.0,
			reviews: 1480,
			image: "https://m.media-amazon.com/images/I/51xK0qXGbxL._AC_SX679_.jpg",
			features: ["LED Temp Display", "24hr Cold/12hr Hot", "Leak-Proof", "BPA-Free"],
			category: "smart",
		},
		{
			id: 9,
			slug: "echo-flask-hydrogen",
			name: "Echo Flask Hydrogen Water Bottle",
			price: 299.99,
			rating: 4.5,
			reviews: 50,
			image: "https://m.media-amazon.com/images/I/810fGlQuiBL._AC_SX679_.jpg",
			features: ["Hydrogen Generator", "App Tracking", "LCD Screen", "8ppm Hydrogen"],
			category: "hydrogen",
		},
		{
			id: 10,
			slug: "owala-freesip-black-cherry",
			name: "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free, 24 Oz, Black Cherry",
			price: 29.99,
			rating: 4.7,
			reviews: 98161,
			image: "https://m.media-amazon.com/images/I/41ZPiDU6woL._AC_SX679_.jpg",
			features: ["Double-wall insulation", "FreeSip spout", "Push-button lid with lock", "Carry loop", "Leak-proof"],
			category: "water-bottle",
		},
		{
			id: 11,
			slug: "owala-freesip-sway",
			name: "Owala FreeSip Sway Insulated Stainless Steel Water Bottle",
			price: 34.99,
			rating: 4.6,
			reviews: 1200,
			image: "https://m.media-amazon.com/images/I/410gXei0VaL._AC_SL1080_.jpg",
			features: ["Two-way sipping", "Leak-proof", "Carry loop", "BPA-free", "Sweat-free"],
			category: "water-bottle",
		},
		{
			id: 12,
			slug: "stanley-iceflow",
			name: "Stanley IceFlow Stainless Steel Tumbler with Straw, 24 oz",
			price: 28.00,
			rating: 4.5,
			reviews: 4500,
			image: "https://m.media-amazon.com/images/I/51HW8YM1GzL._AC_SL1500_.jpg",
			features: ["Fast flow lid", "Double-wall vacuum insulation", "Leak-resistant", "Dishwasher safe", "BPA-free"],
			category: "tumbler",
		},
		{
			id: 13,
			slug: "owala-freesip-twist",
			name: "Owala FreeSip Twist Insulated Stainless Steel Water Bottle, 24 oz",
			price: 29.99,
			rating: 4.6,
			reviews: 3508,
			image: "https://m.media-amazon.com/images/I/41F3kpERcCL._AC_SX679_.jpg",
			features: ["Twist lid", "FreeSip spout", "Insulated", "Leak-proof", "Carry loop"],
			category: "water-bottle",
		},
		{
			id: 14,
			slug: "owala-disney-princess-cinderella",
			name: "Owala Disney Princess Cinderella FreeSip Insulated Water Bottle, 24 oz",
			price: 32.99,
			rating: 4.7,
			reviews: 800,
			image: "https://m.media-amazon.com/images/I/51trt5KQ9iL._AC_SX679_.jpg",
			features: ["Disney Princess design", "FreeSip spout", "Double-wall insulation", "Leak-proof", "BPA-free"],
			category: "water-bottle",
		},
		{
			id: 15,
			slug: "zak-minecraft-sage",
			name: "Zak Designs Minecraft Sage Stainless Steel Water Bottle, 22 oz",
			price: 19.99,
			rating: 4.4,
			reviews: 1500,
			image: "https://m.media-amazon.com/images/I/71UUV6NbY+L._AC_SL1500_.jpg",
			features: ["Minecraft theme", "Leak-proof", "Insulated", "Push-button lid", "Carry loop"],
			category: "water-bottle",
		},
		{
			id: 16,
			slug: "hydro-flask-straw-lid",
			name: "Hydro Flask Wide Mouth Bottle with Flex Straw Cap, 24 oz",
			price: 39.95,
			rating: 4.8,
			reviews: 25000,
			image: "https://m.media-amazon.com/images/I/61H6qYM6sVL._AC_SL1500_.jpg",
			features: ["TempShield insulation", "Flex straw lid", "Lifetime warranty", "BPA-free", "Dishwasher safe"],
			category: "water-bottle",
		},
		{
			id: 17,
			slug: "hydro-flask-travel-tumbler",
			name: "Hydro Flask All Around Travel Tumbler with Lid, 22 oz",
			price: 34.95,
			rating: 4.7,
			reviews: 3000,
			image: "https://m.media-amazon.com/images/I/41ygPkW6++L._AC_SL1500_.jpg",
			features: ["Press-in lid", "Insulated", "Non-slip base", "Fits most cupholders", "BPA-free"],
			category: "tumbler",
		},
		{
			id: 18,
			slug: "nalgene-sustain-tritan",
			name: "Nalgene Sustain Tritan BPA-Free Water Bottle, 32 oz",
			price: 19.95,
			rating: 4.6,
			reviews: 5000,
			image: "https://m.media-amazon.com/images/I/71bZMs39pZL._AC_SX679_.jpg",
			features: ["Made from recycled materials", "Lightweight", "Leak-proof", "Dishwasher safe", "BPA-free"],
			category: "water-bottle",
		},
		{
			id: 19,
			slug: "raymylo-40oz-paracord",
			name: "RAYMYLO Insulated Water Bottle 40 oz with Paracord Handle",
			price: 24.99,
			rating: 4.5,
			reviews: 2000,
			image: "https://m.media-amazon.com/images/I/71i3aETDFmL._AC_SL1500_.jpg",
			features: ["40 oz capacity", "Paracord handle", "Triple insulation", "Leak-proof", "BPA-free"],
			category: "water-bottle",
		},
		{
			id: 20,
			slug: "owala-silicone-boot",
			name: "Owala Silicone Water Bottle Boot, Anti-Slip Protective Sleeve",
			price: 9.99,
			rating: 4.6,
			reviews: 1000,
			image: "https://m.media-amazon.com/images/I/41MLCJljMlL._AC_SL1080_.jpg",
			features: ["Protects bottle bottom", "Anti-slip", "Easy on/off", "Durable silicone", "Multiple colors"],
			category: "accessory",
		},
		{
			id: 21,
			slug: "stanley-quencher-h2o",
			name: "STANLEY Quencher H2.0 FlowState Tumbler, 30 oz",
			price: 36.00,
			rating: 4.7,
			reviews: 50000,
			image: "https://m.media-amazon.com/images/I/41ryNvEnNCL._AC_SX679_.jpg",
			features: ["FlowState 3-position lid", "Rotating handle", "Double-wall insulation", "Car cup compatible", "Dishwasher safe"],
			category: "tumbler",
		},
		{
			id: 22,
			slug: "hydrojug-traveler-40oz",
			name: "HydroJug Traveler 40 oz Tumbler with Handle & Straw",
			price: 29.99,
			rating: 4.5,
			reviews: 1200,
			image: "https://m.media-amazon.com/images/I/61J9X9qo6jL._AC_SL1500_.jpg",
			features: ["40 oz", "Leak-resistant", "Integrated handle", "Insulated", "Reusable straw"],
			category: "tumbler",
		},
		{
			id: 23,
			slug: "owala-freesip-32oz",
			name: "Owala FreeSip Insulated Stainless Steel Water Bottle, 32 oz",
			price: 34.99,
			rating: 4.7,
			reviews: 15000,
			image: "https://m.media-amazon.com/images/I/41xGVia9icL._AC_SL1200_.jpg",
			features: ["32 oz capacity", "FreeSip spout", "Locking push-button lid", "Carry loop", "Double-wall insulation"],
			category: "water-bottle",
		},
		{
			id: 24,
			slug: "owala-smoothsip-slider",
			name: "Owala SmoothSip Slider Insulated Stainless Steel Coffee Tumbler",
			price: 27.99,
			rating: 4.6,
			reviews: 800,
			image: "https://m.media-amazon.com/images/I/311JdFvhtVL._AC_SX679_.jpg",
			features: ["Smooth sip slider lid", "Hot/cold retention", "Leak-proof", "Reusable straw", "BPA-free"],
			category: "tumbler",
		},
		{
			id: 25,
			slug: "stanley-protour-flip",
			name: "STANLEY Quencher ProTour Flip Straw Insulated Tumbler",
			price: 25.00,
			rating: 4.5,
			reviews: 2000,
			image: "https://m.media-amazon.com/images/I/61izdGR64FL._AC_SL1500_.jpg",
			features: ["Flip straw", "Leakproof", "Cupholder friendly", "Double-wall insulation", "Comfort-grip handle"],
			category: "tumbler",
		},
		{
			id: 26,
			slug: "yeti-rambler-20oz",
			name: "YETI Rambler 20 oz Tumbler with MagSlider Lid",
			price: 35.00,
			rating: 4.8,
			reviews: 10000,
			image: "https://m.media-amazon.com/images/I/61AUzBBBd3L._AC_SL1500_.jpg",
			features: ["MagSlider lid", "No sweat design", "Dishwasher safe", "Shatter-resistant", "18/8 stainless steel"],
			category: "tumbler",
		},
		{
			id: 27,
			slug: "liquid-iv-hydration",
			name: "Liquid I.V. Hydration Multiplier Electrolyte Powder, Firecracker Popsicle",
			price: 24.99,
			rating: 4.6,
			reviews: 80000,
			image: "https://m.media-amazon.com/images/I/812KjGBLVBL._SL1500_.jpg",
			features: ["3x electrolytes", "Non-GMO", "Vegan", "Rapid hydration", "Great taste"],
			category: "hydration",
		},
		{
			id: 28,
			slug: "lmnt-electrolytes",
			name: "LMNT Zero-Sugar Electrolytes - Variety Pack, 12 Stick Packs",
			price: 23.99,
			rating: 4.5,
			reviews: 23911,
			image: "https://m.media-amazon.com/images/I/71Pr1-qwwML._AC_SX679_.jpg",
			features: ["1000mg sodium", "No sugar", "Keto & paleo friendly", "High performance", "Clean ingredients"],
			category: "electrolytes",
		},
		{
			id: 29,
			slug: "celsius-energy",
			name: "CELSIUS Sparkling Fitness Energy Drink Variety Pack, 12 fl oz (Pack of 12)",
			price: 19.98,
			rating: 4.6,
			reviews: 25000,
			image: "https://m.media-amazon.com/images/I/61VfvfV69lL._SL1500_.jpg",
			features: ["200mg caffeine", "Zero sugar", "Pre-workout", "Vitamins", "Metabolism support"],
			category: "energy-drink",
		},
		{
			id: 30,
			slug: "premier-protein-shake",
			name: "Premier Protein Shake, Chocolate, 30g Protein, 12 Pack",
			price: 31.99,
			rating: 4.6,
			reviews: 54264,
			image: "https://m.media-amazon.com/images/I/71Y8GT3GYvL._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg",
			features: ["30g protein", "1g sugar", "24 vitamins & minerals", "Gluten-free", "Keto friendly"],
			category: "protein-shake",
		},
		{
			id: 31,
			slug: "boka-ela-mint-toothpaste",
			name: "Boka Ela Mint Toothpaste with Nano-Hydroxyapatite, Fluoride Free",
			price: 11.99,
			rating: 4.4,
			reviews: 5000,
			image: "https://m.media-amazon.com/images/I/61u5d9FMmgL._AC_SL1500_.jpg",
			features: ["Nano-hydroxyapatite", "Fluoride-free", "Non-toxic", "Whitening", "Remineralizing"],
			category: "oral-care",
		}
	]

	const filteredProducts =
		activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter)

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{filteredProducts.map((product) => (
				<Card
					key={product.id}
					className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
				>
					<Link href={`/products/${product.slug}`}>
						{/* Product image with reflective surface effect */}
						<div className="relative aspect-square bg-gradient-to-br from-[#F8FBFF] to-[#1ED3C6]/5 p-8 overflow-hidden">
							{/* Liquid ripple effect on hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<div className="absolute inset-0 bg-gradient-to-br from-[#1ED3C6]/10 to-[#00A8FF]/10"></div>
							</div>

							{/* Droplet glint animation */}
							<div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>

							<img
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
							/>
						</div>

						<div className="p-6">
							<h3 className="font-heading text-xl font-semibold text-[#031B2E] mb-2 group-hover:text-[#00A8FF] transition-colors">
								{product.name}
							</h3>

							{/* Rating */}
							<div className="flex items-center gap-2 mb-3">
								<div className="flex">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-[#B9FF66]" : "text-gray-300"}`}
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<span className="text-sm text-[#031B2E]/60">
									{product.rating} ({product.reviews})
								</span>
							</div>

							{/* Features */}
							<div className="flex flex-wrap gap-2 mb-4">
								{product.features.map((feature, idx) => (
									<span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#1ED3C6]/10 text-[#031B2E]/70">
										{feature}
									</span>
								))}
							</div>

							<div className="flex items-center justify-between">
								<Button size="sm" className="bg-[#1ED3C6] hover:bg-[#00A8FF] text-white">
									View Details
								</Button>
							</div>
						</div>
					</Link>
				</Card>
			))}
		</div>
	)
}
