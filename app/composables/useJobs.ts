import {useQuery} from '@tanstack/vue-query'
import {toValue, type MaybeRefOrGetter} from 'vue'
import {onServerPrefetch} from "vue";
import type {Job, PaginatedJobs} from '~~/shared/types/job'

export function useJobsList() {
    const route = useRoute()
    const page = computed(() => Number(route.query.page ?? 1))

    const fetcher = () =>
        $fetch<PaginatedJobs>(`/api/jobs`, { query: { page: toValue(page)}})

    const query = useQuery( {
        queryKey: ['jobs', page],
        queryFn: fetcher
    })

    onServerPrefetch(() => query.suspense())
    return query
}

export function useJob(id: MaybeRefOrGetter<string>) {
    const query = useQuery({
        queryKey: ['job', toValue(id)],
        queryFn: () => $fetch<Job>(`/api/jobs/${toValue(id)}`),
    })

    onServerPrefetch(() => query.suspense())
    return query
}
