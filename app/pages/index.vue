<template>
  <section class="max-w-2xl py-16 sm:py-20">
    <p class="mb-3 font-mono text-[13px] uppercase tracking-[0.14em] text-base1">Currently hiring</p>
    <h1 class="mb-5 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-base02 sm:text-6xl">
      Every open role,<br>pinned to one board.
    </h1>
    <p class="mb-8 max-w-md text-[1.0625rem] leading-relaxed text-base00">
      Browse work orders from teams hiring right now — no recruiters, no noise, just the postings.
    </p>
    <NuxtLink
        class="inline-flex items-center justify-center rounded-control bg-accent px-6 py-3 font-mono text-sm font-semibold text-base3 no-underline transition hover:brightness-110"
        to="/jobs"
    >
      View the board
    </NuxtLink>
  </section>

  <section aria-labelledby="featured-heading" class="pb-16">
    <h2 id="featured-heading" class="mb-6 font-mono text-sm uppercase tracking-[0.06em] text-base02">Freshly pinned</h2>
    <p v-if="isPending" class="font-mono text-base00">Loading the board…</p>
    <div v-else class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
      <JobCard v-for="job in featured" :key="job.id" :job="job"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({title: 'Jobify — Now Hiring'})

const {data: jobs, isPending} = useJobsList()
const featured = computed(() => (jobs.value ?? []).slice(0, 3))
</script>
