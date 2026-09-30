import { seedLots } from '../../data/seedLots'

export default defineEventHandler((event) => {
  const code = getRouterParam(event, 'code')?.toUpperCase().trim()

  if (!code) {
    throw createError({ statusCode: 400, statusMessage: 'Missing code' })
  }

  const lot = seedLots.find((l) => l.code === code)

  if (!lot) {
    setResponseStatus(event, 404)
    return { verified: false, code }
  }

  return { verified: true, ...lot }
})
