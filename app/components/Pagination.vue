<template>
  <nav v-if="totalPages > 1" aria-label="Pagination" class="flex items-center justify-between gap-4 pt-2">
    <p class="m-0 font-mono text-xs text-base00">Page {{ currentPage }} of {{ totalPages }}</p>

    <div class="inline-flex items-center gap-1">
      <button
          :disabled="currentPage === 1"
          class="rounded-control border border-border bg-base3 px-3 py-1.5 font-mono text-[13px] text-base01 transition-colors hover:border-accent hover:text-base02 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-base01"
          type="button"
          @click="go(currentPage - 1)"
      >
        ← Prev
      </button>

      <button
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
          :class="pageNumber === currentPage ? 'bg-accent text-base3' : 'bg-transparent text-base00 hover:text-base01'"
          class="min-w-[34px] rounded-control px-2.5 py-1.5 font-mono text-[13px] font-medium transition-colors"
          type="button"
          @click="go(pageNumber)"
      >
        {{ pageNumber }}
      </button>

      <button
          :disabled="currentPage === totalPages"
          class="rounded-control border border-border bg-base3 px-3 py-1.5 font-mono text-[13px] text-base01 transition-colors hover:border-accent hover:text-base02 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-base01"
          type="button"
          @click="go(currentPage + 1)"
      >
        Next →
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  'update:currentPage': [page: number]
}>()

const pageNumbers = computed(() =>
    Array.from({length: props.totalPages}, (_, index) => index + 1),
)

function go(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return
  emit('update:currentPage', page)
}
</script>
