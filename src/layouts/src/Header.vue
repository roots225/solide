<script lang="ts" setup>
import TopBar from "./TopBar.vue";

const props = defineProps({
  showHomeBanner: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="head-section w-100 overflow-hidden">
    <TopBar />

    <header class="container" v-if="showHomeBanner">
      <div class="row align-items-center py-4 align-items-stretch">
        <div class="col-12 col-md-6 ps-md-5 flex-fill">
          <h1 class="display-md-2 display-4 fw-bold text-dark mb-5">
            Transformez <img src="../../assets/Vector 26.png" alt="" /> <br />
            La Gestion de vos Dépenses Professionnelles
          </h1>

          <p class="lead fs-6">
            <img class="me-2" src="../../assets/Vector 24.png" alt="" />
            Carte logée : Flexible Redéfinie
          </p>
          <p class="lead fs-6">
            <img class="me-2" src="../../assets/Vector 24.png" alt="" />
            Carte Corporate : Gestion Centralisée et Efficacité Maximale
          </p>
          <br />
          <button class="btn btn-primary px-5 py-3 mt-3 fs-6" type="button">
            Commencer maintenant
          </button>
        </div>

        <div class="col-12 col-md-6 flex-fill">
          <div class="img-container w-100 h-100 position-relative">
            <img
              src="../../assets/3.png"
              class="img-fluid position-absolute"
              alt="a man using vr gadget"
            />

            <img
              src="../../assets/02.png"
              class="img-fluid1 position-absolute"
              alt="a man using vr gadget"
            />
          </div>
        </div>
      </div>
    </header>
  </section>
</template>
