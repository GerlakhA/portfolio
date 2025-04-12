import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
	output: 'standalone'
}

const withNextIntl = createNextIntlPlugin('./src/config/i18n/request.ts')
export default withNextIntl(nextConfig)
