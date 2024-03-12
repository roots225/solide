<script lang="ts" setup></script>

<template>
  <nav
    class="container py-4 d-none d-lg-flex align-items-center justify-content-between"
  >
    <div class="left-nav-container d-flex align-items-center">
      <div class="logo-container">
        <img src="./assets/logo.png" alt="logo" />
      </div>

      <ul class="d-flex align-items-center justify-content-between m-0">
        <li class="nav-item ms-0 ms-md-3">
          <a class="nav-link" aria-current="page" href="#">Les solutions</a>
        </li>
        <li class="nav-item ms-0 ms-md-3">
          <a class="nav-link" href="#">Qui sommes-nous </a>
        </li>
        <li class="nav-item ms-0 ms-md-3">
          <a class="nav-link" href="#">Nous contacter</a>
        </li>
      </ul>
    </div>

    <div class="rigth-nav-container">
      <a href="#" class="px-4 py-2 btn btn-default me-2"> S'inscrire</a>
      <a class="px-4 py-2 btn btn-primary" href="#">Se connecter </a>
    </div>
  </nav>

  <!-- Mobile navbar -->
  <div class="mobile-navbar position-relative">
    <div
      class="p-4 d-flex d-lg-none align-items-center justify-content-between"
    >
      <div class="logo-container">
        <img
          src="./assets/logo.png"
          height="25"
          width="110"
          class="object-fit-cover"
          alt="logo"
        />
      </div>
      <ion-icon class="icon-menu p-1 rounded-1" name="menu"></ion-icon>
    </div>

    <nav class="sub-mobile-nav position-absolute">
      <div class="text-end">
        <ion-icon class="fs-2 p-2 close-btn" name="close-outline"></ion-icon>
      </div>

      <ul class="m-0 mb-4 p-0">
        <li class="nav-item text-center mb-2">
          <a class="nav-link" aria-current="page" href="#">Les solutions</a>
        </li>
        <li class="nav-item text-center mb-2">
          <a class="nav-link" href="#">Qui sommes-nous </a>
        </li>
        <li class="nav-item text-center mb-2">
          <a class="nav-link" href="#">Nous contacter</a>
        </li>
      </ul>

      <div class="text-center">
        <a href="#" class="px-4 py-2 btn btn-default me-2"> S'inscrire</a>
        <a class="px-4 py-2 btn btn-primary" href="#">Se connecter </a>
      </div>
    </nav>
  </div>
</template>
