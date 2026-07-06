export default defineEventHandler((event) => {
    const pageSize = 10
    const query = getQuery(event)
    const page = Number(query.page ?? 1)
    const items = JOBS.slice((page - 1) * pageSize, page * pageSize)

    return {
        items, total: JOBS.length, page, pageSize,
    }
})
