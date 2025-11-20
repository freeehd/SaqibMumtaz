import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.syedsaqibmumtaz.com/'

    const routes = [
        '',
        '/about',
        '/contact',
        '/media',
        '/success-stories',
        '/training',
        '/services/book-marketing',
        '/services/book-publishing',
        '/services/digital-marketing',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
