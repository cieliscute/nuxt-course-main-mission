<script setup>
</script>
<template>
  <div class="min-vh-100 bg-neutral-120">
    <header
      class="position-fixed z-3 w-100 bg-neutral-120"
    >
      <nav class="navbar navbar-expand-md p-0 mx-3 my-4 mx-md-20 my-md-6">
        <div class="container-fluid justify-content-between p-0">
          <NuxtLink
            class="navbar-brand p-0"
            to="/"
          >
            <img
              src="/images/logo-white.svg"
              alt="logo"
              class="logo img-fluid"
            >
          </NuxtLink>
          <button
            class="navbar-toggler collapsed p-2 text-white border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Icon
              class="fs-1"
              icon="mdi:close"
            />
            <Icon
              class="fs-5"
              icon="mdi:menu"
            />
          </button>
          <div
            id="navbar"
            class="collapse navbar-collapse"
          >
            <ul class="d-md-none navbar-nav gap-4 ms-auto fw-bold">
              <li class="nav-item">
                <NuxtLink
                  to="/"
                  class="nav-link p-4 text-neutral-0"
                >
                  客房旅宿
                </NuxtLink>
              </li>
              <li class="d-none d-md-block nav-item">
                <NuxtLink
                  to="/"
                  class="nav-link d-flex gap-2 p-4 text-neutral-0"
                >
                  <Icon
                    class="fs-5"
                    icon="mdi:account-circle-outline"
                  />
                  Jessica
                </NuxtLink>
              </li>
              <li class="d-md-none nav-item">
                <NuxtLink
                  to="/"
                  class="nav-link p-4 text-neutral-0"
                >
                  會員登入
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink
                  to="/"
                  class="btn btn-primary-100 px-8 py-4 text-white fw-bold border-0 rounded-3"
                >
                  立即訂房
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="position-relative d-flex flex-column flex-md-row">
      <img
        class="d-none d-md-block position-relative z-1 min-vh-100 object-fit-cover"
        style="max-width: 50%;"
        src="/images/login-hero.png"
        alt="login-hero"
      >

      <div class="d-flex flex-column justify-content-center align-items-center flex-grow-1 pt-18 pt-md-0">
        <picture class="w-100">
          <source
            srcset="/images/deco-line-group-horizontal.svg"
            media="(min-width: 576px)"
          >
          <img
            class="deco-line-group"
            src="/images/deco-line-group-horizontal-sm.svg"
            alt="deco-line-group"
          >
        </picture>
        
        <main class="position-relative w-100 w-md-auto">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
<style scoped></style>