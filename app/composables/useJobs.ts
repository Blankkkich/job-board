import {useQuery} from '@tanstack/vue-query'
import {toValue, type MaybeRefOrGetter} from 'vue'
import {onServerPrefetch} from "vue";
import type {Job} from '~~/shared/types/job'

export function useJobsList() {
    const query = useQuery({
        queryKey: ['jobs'],
        queryFn: () => $fetch<Job>(`/api/jobs`),
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
