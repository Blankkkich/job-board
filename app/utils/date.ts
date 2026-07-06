export function formatRelativeDate(iso: string): string {
    const days = Math.round((Date.now() - new Date(iso).getTime()) / 86_400_000)

    if (days <= 0) return 'Posted today'
    if (days === 1) return 'Posted yesterday'
    if (days < 14) return `Posted ${days} days ago`

    const weeks = Math.round(days / 7)
    return `Posted ${weeks} week${weeks > 1 ? 's' : ''} ago`
}
