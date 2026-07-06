<template>
  <div class="pt-8">
    <NuxtLink class="mb-8 inline-block font-mono text-[13px] text-base00 no-underline hover:underline" to="/jobs">
      ← Back to the board
    </NuxtLink>

    <p v-if="isPending" class="py-12 text-center font-mono text-base00">Loading the docket…</p>
    <p v-else-if="error || !job" class="py-12 text-center font-mono text-base00">
      This docket isn't on the board anymore.
    </p>
    <JobCard v-else :job="job" variant="full"/>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const {data: job, isPending, error} = useJob(() => route.params.id as string)

useHead(() => ({
  title: job.value ? `${job.value.title} — Jobify` : 'Jobify'
}))
</script>
