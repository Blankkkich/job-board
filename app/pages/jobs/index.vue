<template>
  <div class="mb-7 flex flex-wrap items-end justify-between gap-6 pt-12">
    <div>
      <p class="m-0 mb-1.5 font-mono text-xs uppercase tracking-[0.14em] text-base1">Currently hiring</p>
      <h1 class="m-0 text-[2.125rem] font-semibold leading-tight tracking-tight text-base02">Open roles</h1>
    </div>
    <p class="m-0 font-mono text-[13px] text-base00">Showing {{ countLabel }}</p>
  </div>

  <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
    <div class="relative min-w-[260px] flex-1 basis-80">
      <span aria-hidden="true"
            class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-base1">⌕</span>
      <input
          v-model="search"
          aria-label="Search jobs"
          class="w-full rounded-control border border-border bg-base3 py-2.5 pl-9 pr-3.5 font-sans text-sm text-base01 outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(38,139,210,0.12)]"
          placeholder="Search roles, companies, tags…"
          type="search"
      >
    </div>
    <div aria-label="Filter by status" class="inline-flex gap-0.5 rounded-[9px] border border-border bg-base3 p-[3px]"
         role="group">
      <button
          v-for="option in (['open', 'all', 'filled'] as const)"
          :key="option"
          :class="statusFilter === option ? 'bg-accent text-base3' : 'bg-transparent text-base00 hover:text-base01'"
          class="rounded-[7px] px-[15px] py-[7px] font-mono text-[13px] font-medium tracking-wide transition-colors"
          type="button"
          @click="statusFilter = option"
      >
        {{ option === 'all' ? 'All' : option === 'open' ? 'Open' : 'Filled' }}
      </button>
    </div>
  </div>

  <section aria-live="polite" class="pb-12">
    <p v-if="isPending" class="py-8 font-mono text-base00">Loading the board…</p>
    <div v-else-if="!filtered.length"
         class="rounded-card border border-dashed border-border bg-base3 px-6 py-[72px] text-center">
      <p class="m-0 mb-1.5 text-[17px] font-semibold text-base01">No roles match yet</p>
      <p class="m-0 text-sm text-base1">Try a different search or switch filters.</p>
    </div>
    <div v-else class="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
      <JobCard v-for="job in filtered" :key="job.id" :job="job"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({title: 'Jobify — Job Board'})

const {data: jobs, isPending} = useJobsList()

const search = ref('')
const statusFilter = ref<'open' | 'all' | 'filled'>('open')

const filtered = computed(() => {
  const list = jobs.value ?? []
  const term = search.value.trim().toLowerCase()

  return list.filter((job) => {
    const matchesStatus = statusFilter.value === 'all' || job.status === statusFilter.value
    const matchesTerm = !term
        || job.title.toLowerCase().includes(term)
        || job.company.toLowerCase().includes(term)
        || job.tags.some((tag) => tag.toLowerCase().includes(term))

    return matchesStatus && matchesTerm
  })
})

const countLabel = computed(() => {
  const count = filtered.value.length
  return `${count} ${count === 1 ? 'role' : 'roles'}`
})
</script>
