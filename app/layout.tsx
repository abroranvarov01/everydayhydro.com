import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Added Oswald and Inter fonts for HydraPulse
import { Inter, Oswald } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
})

const oswald = Oswald({
	subsets: ["latin"],
	variable: "--font-heading",
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
})

// <CHANGE> Updated metadata for HydraPulse
export const metadata: Metadata = {
	title: "HydraPulse - Smart Hydration Gear for Every Adventure",
	description:
		"Move. Hydrate. Repeat. Engineered for motion, built for endurance, designed for style. Premium water bottles and thermos for active lifestyles.",
	referrer: 'unsafe-url',
	keywords: [
		"water bottle",
		"hydration",
		"insulated bottle",
		"smart water bottle",
		"thermos",
		"gym bottle",
		"sports bottle",
	],
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${oswald.variable} ${geistMono.variable}`}>
			<body className={`font-sans antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
