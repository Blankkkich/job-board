export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const job = JOBS.find((candidate) => candidate.id === id)

  if (!job) {
    throw createError({ statusCode: 404, statusMessage: 'Job not found' })
  }

  return job
})
