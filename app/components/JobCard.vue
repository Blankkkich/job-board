<template>
  <article
      :class="variant === 'card'
      ? 'p-[22px] pb-6 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_10px_28px_rgba(7,54,66,0.10)]'
      : 'mx-auto max-w-2xl p-8 pb-8'"
      class="relative flex flex-col rounded-card border border-border bg-base3 transition-[border-color,box-shadow,transform] duration-150"
  >
    <div class="mb-3.5 flex items-center justify-between gap-3">
      <span class="font-mono text-xs tracking-wide text-base1">{{ job.docketNo }}</span>
      <StatusPill :status="job.status"/>
    </div>

    <h2
        :class="variant === 'card' ? 'text-xl leading-tight' : 'text-3xl leading-tight'"
        class="m-0 mb-2 font-semibold tracking-tight text-base02"
    >
      <NuxtLink v-if="variant === 'card'" :to="`/jobs/${job.id}`"
                class="text-inherit no-underline after:absolute after:inset-0">
        {{ job.title }}
      </NuxtLink>
      <template v-else>{{ job.title }}</template>
    </h2>

    <div class="mb-4 flex flex-wrap items-baseline gap-1.5 text-sm">
      <span class="font-semibold text-base01">{{ job.company }}</span>
      <span class="text-base1">·</span>
      <span class="text-base00">{{ job.location }} · {{ job.employment }}</span>
      <template v-if="job.salary">
        <span class="text-base1">·</span>
        <span class="font-mono text-[13px] text-base00">{{ job.salary }}</span>
      </template>
    </div>

    <div v-if="job.tags.length" class="mb-4 flex flex-wrap gap-[7px]">
      <span
          v-for="tag in job.tags"
          :key="tag"
          class="rounded-md border border-border bg-base2 px-2.5 py-1 font-mono text-xs text-base00"
      >
        {{ tag }}
      </span>
    </div>

    <p class="m-0 text-sm leading-relaxed text-pretty text-base00">{{ job.summary }}</p>

    <template v-if="variant === 'full'">
      <div class="mt-5 space-y-4 text-[15px] leading-relaxed text-base00">
        <p v-for="(paragraph, index) in job.description" :key="index" class="m-0">{{ paragraph }}</p>
      </div>
      <p class="mb-5 mt-5 font-mono text-xs text-base1">{{ posted }}</p>
      <a
          :href="job.applyUrl"
          class="inline-flex w-fit items-center justify-center rounded-control bg-accent px-6 py-3 font-mono text-sm font-semibold text-base3 no-underline transition hover:brightness-110"
      >
        Apply for this role
      </a>
    </template>
  </article>
</template>

<script lang="ts" setup>
import type {Job} from '~~/shared/types/job'

const props = withDefaults(defineProps<{
  job: Job
  variant?: 'card' | 'full'
}>(), {
  variant: 'card',
})

const posted = computed(() => formatRelativeDate(props.job.postedAt))
</script>