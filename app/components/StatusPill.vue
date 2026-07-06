<script lang="ts" setup>
import type {JobStatus} from '~~/shared/types/job'

defineProps<{ status: JobStatus }>()
</script>

<template>
  <span
      :class="status === 'open' ? 'bg-open/15 text-open' : 'bg-filled/20 text-filled'"
      class="inline-flex items-center gap-1.5 rounded-full py-1 pl-2 pr-2.5 font-mono text-[11px] font-semibold tracking-wide"
  >
    <span :class="status === 'open' ? 'bg-open' : 'bg-filled'" class="h-1.5 w-1.5 rounded-full"/>
    {{ status === 'open' ? 'Open' : 'Filled' }}
  </span>
</template>
