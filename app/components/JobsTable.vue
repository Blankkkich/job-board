<template>
  <div class="overflow-x-auto rounded-card border border-border bg-base3">
    <table class="w-full min-w-[720px] border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-border">
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Docket</th>
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Role</th>
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Location</th>
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Employment</th>
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Salary</th>
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Status</th>
          <th class="px-4 py-3 font-mono text-xs uppercase tracking-wide text-base1">Posted</th>
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="job in jobs"
            :key="job.id"
            class="border-b border-border last:border-b-0 hover:bg-base2"
        >
          <td class="whitespace-nowrap px-4 py-3 font-mono text-xs text-base1">{{ job.docketNo }}</td>
          <td class="px-4 py-3">
            <NuxtLink :to="`/jobs/${job.id}`" class="font-semibold text-base02 no-underline hover:underline">
              {{ job.title }}
            </NuxtLink>
            <p class="m-0 text-xs text-base00">{{ job.company }}</p>
          </td>
          <td class="px-4 py-3 text-base00">{{ job.location }}</td>
          <td class="px-4 py-3 text-base00">{{ job.employment }}</td>
          <td class="whitespace-nowrap px-4 py-3 font-mono text-xs text-base00">{{ job.salary ?? '—' }}</td>
          <td class="px-4 py-3">
            <StatusPill :status="job.status"/>
          </td>
          <td class="whitespace-nowrap px-4 py-3 font-mono text-xs text-base1">{{ formatRelativeDate(job.postedAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type {Job} from '~~/shared/types/job'

defineProps<{
  jobs: Job[]
}>()
</script>
