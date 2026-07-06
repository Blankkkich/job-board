<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-20 border-b border-base03 bg-base02">
      <div class="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <NuxtLink class="flex items-center gap-[11px] no-underline" to="/">
          <span aria-hidden="true" class="text-[22px] leading-none text-accent">⚗</span>
          <span class="font-mono text-base font-semibold tracking-wide text-base3">Jobify</span>
        </NuxtLink>
        <nav class="flex items-center gap-5">
          <NuxtLink
              class="border-b border-transparent pb-0.5 text-sm text-base1 no-underline transition-colors hover:border-accent hover:text-base3"
              to="/jobs"
          >
            View the board
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-[1120px] flex-1 px-6 sm:px-8">
      <slot/>
    </main>

    <footer class="mx-auto w-full max-w-[1120px] px-6 py-10 text-center sm:px-8">
      <p class="m-0 font-mono text-xs tracking-wider text-base1">Posted with care. Updated daily.</p>
    </footer>
  </div>
</template>
