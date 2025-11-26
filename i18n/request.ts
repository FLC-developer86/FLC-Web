import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  // For now, default to English. This can be extended to:
  // - Read from user preferences in cookies
  // - Read from Accept-Language header
  // - Use URL-based locale routing
  const locale = 'en'

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})

