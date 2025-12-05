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
	"echo-flask-hydrogen"
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