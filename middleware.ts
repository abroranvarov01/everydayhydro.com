import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	"owala-freesip",
	"hidrate-spark-smart",
	"thermos-stainless-beverage",
	"cierto-insulated-bottle",
	"duocesica-stainless-containers",
	"dumbbell-water-bottle",
	"epica-glass-bottles",
	"locckmy-temperature-bottle",
	"echo-flask-hydrogen",
	"owala-freesip-black-cherry",
	"owala-freesip-sway",
	"stanley-iceflow",
	"owala-freesip-twist",
	"owala-disney-princess-cinderella",
	"zak-minecraft-sage",
	"hydro-flask-straw-lid",
	"hydro-flask-travel-tumbler",
	"nalgene-sustain-tritan",
	"raymylo-40oz-paracord",
	"owala-silicone-boot",
	"stanley-quencher-h2o",
	"hydrojug-traveler-40oz",
	"owala-freesip-32oz",
	"owala-smoothsip-slider",
	"stanley-protour-flip",
	"yeti-rambler-20oz",
	"liquid-iv-hydration",
	"lmnt-electrolytes",
	"celsius-energy",
	"premier-protein-shake",
	"boka-ela-mint-toothpaste"
]

export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://hard-buki.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/products/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('buk', 'true', { path: '/', maxAge: 60 })
		return res
	}

}

export const config = {
	matcher: ['/day'],
}