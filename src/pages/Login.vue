<script lang="ts" setup>
import { ref } from "vue";

const formRef = ref();

const handleSubmit = (e: Event) => {
  console.log(e.target);
};
</script>

<template>
  <div class="app" style="background-color: #fefefe; min-height: 100vh">
    <header class="p-5">
      <div class="img-container">
        <img src="../assets/logo.png" alt="Logo" height="35" />
      </div>
    </header>

    <div class="container ps-0 ps-md-5">
      <div
        class="row align-items-center ps-5 justify-content-center justify-content-md-start"
      >
        <div class="col-12 col-md-5 me-5">
          <h2 class="text-black mb-4 fw-bold">Bon retour parmi nous</h2>
          <p class="text-black fs-6 mb-4">
            Veuillez entrer vos informations de connexion
          </p>

          <form action="" ref="formRef" @submit.prevent="handleSubmit">
            <div class="col-12 mb-4">
              <label for="inputEmail4" class="form-label fs-6"
                >Adresse e-mail</label
              >
              <div class="form-control d-flex align-items-center py-2 bg-light">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  class="ms-2 border-0 flex-fill bg-transparent"
                  style="outline: none"
                  id="inputEmail4"
                />
              </div>
            </div>

            <div class="col-12 mb-4">
              <label for="inputPassword" class="form-label fs-6"
                >Mot de passe</label
              >
              <div class="form-control d-flex align-items-center py-2 bg-light">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  class="ms-2 border-0 flex-fill bg-transparent"
                  style="outline: none"
                  id="inputPassword"
                />
                <ion-icon name="eye-off-outline"></ion-icon>
                <!-- <ion-icon name="eye-outline"></ion-icon> -->
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <a href="#" class="fw-medium fs-6">Mot de passe oublié ?</a>
            </div>

            <button
              class="btn btn-primary px-5 py-3 mt-5 fs-6 w-100 rounded-3"
              type="button"
            >
              Se connecter
            </button>
          </form>
        </div>
        <div class="col-md-6 d-none d-md-block">
          <img
            src="../assets/login-img.png"
            alt=""
            class="w-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
