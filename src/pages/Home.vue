<script lang="ts" setup>
import { Header, Footer } from "@/layouts";
</script>

<template>
  <Header :showHomeBanner="true" />
  <section class="partner-container w-100 py-3">
    <div class="container ps-md-5 p-5">
      <div
        class="row align-items-center justify-content-center justify-content-md-start"
      >
        <div
          class="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center d-md-block"
        >
          <img src="../assets/Logo (4).png" alt="" class="object-fit-cover" />
        </div>
        <div
          class="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center d-md-block"
        >
          <img src="../assets/Logo (3).png" alt="" class="object-fit-cover" />
        </div>
        <div
          class="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center d-md-block"
        >
          <img src="../assets/Logo (2).png" alt="" class="object-fit-cover" />
        </div>
        <div
          class="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center d-md-block"
        >
          <img src="../assets/Logo (1).png" alt="" class="object-fit-cover" />
        </div>
      </div>
    </div>
  </section>

  <section class="features-section py-5">
    <div class="container">
      <h1 class="text-black fw-bold text-center mb-4">Paiement Flexibles</h1>

      <p class="text-center text-black fs-6">
        Découvrez comment Solide repense la gestion financière des entreprises
        grâce à la <br />
        puissance de la data et de l'intelligence artificielle.
      </p>

      <div
        class="row d-flex align-items-center ps-md-5 mt-5 align-items-stretch"
      >
        <div class="col-12 col-md-6 flex-fill mb-4 mb-md-0">
          <div class="card pb-0 px-0 card-payment py-4 border-0 w-100">
            <h3 class="mb-3 text-center">Carte Logée</h3>
            <p class="card-text text-center fs-6 px-3">
              Carte virtuelle pour effectuer des paiements échelonnés ou
              différés auprès de vos fournisseurs.
            </p>

            <div class="img-container w-100 mt-2">
              <img
                src="./../assets/Carte Logée 1.png"
                class="w-100"
                height="280"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 flex-fill">
          <div class="card pb-0 px-0 card-payment py-4 border-0 w-100">
            <h3 class="mb-3 text-center">Carte Corporate</h3>
            <p class="card-text text-center fs-6 px-3">
              Carte virtuelle ou physique pour les employés pour gérer et
              centraliser les dépenses professionnelles.
            </p>

            <div class="img-container w-100 mt-2">
              <img
                src="./../assets/Credit_Card_By_Ateek_Designs_4 1.png"
                class="w-100"
                height="280"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="feat-container w-100">
    <h1 class="text-black fw-bold text-center mb-4">Avantages clés</h1>

    <p class="text-center text-black fs-6">
      Découvrez comment Solide repense la gestion financière des entreprises
      grâce à la <br />
      puissance de la data et de l'intelligence artificielle.
    </p>

    <div class="img-container w-100 mt-5">
      <img
        src="./../assets/big-img.png"
        class="w-100 object-fit-cover"
        alt=""
      />
    </div>
  </section>

  <section class="testimonies-container gray-bg py-5 mt-5">
    <div class="container ps-md-5">
      <h1 class="text-black fw-bold text-center mb-4">
        Ce que nos clients disent
      </h1>

      <p class="text-center text-black fs-6 mb-5">
        Découvrez comment Solide repense la gestion financière des entreprises
        grâce à la <br />
        puissance de la data et de l'intelligence artificielle.
      </p>

      <div class="row align-items-stretch">
        <div class="col-12 col-md-7 flex-fill order-2 order-md-1">
          <h5 class="fw-bold text-black text-center text-md-start">
            Thomas, CEO Li Ja SA
          </h5>

          <div
            class="star-container w-100 d-flex d-md-block align-items-center justify-content-center"
          >
            <img src="./../assets/Frame 9.png" class="w-25" alt="" />
          </div>

          <div
            class="w-100 text-black d-flex justify-content-center justify-content-md-start"
          >
            <span class="quote" style="margin-left: -45px">"</span>
            <p class="w-75 mt-5 ms-2">
              Solide a transformé notre approche des dépenses professionnelles
              de manière révolutionnaire.
            </p>
          </div>

          <div
            class="w-100 text-black d-flex justify-content-center justify-content-md-start"
          >
            <p class="w-75 text-black">
              Avant, nous étions pris dans des contraintes financières rigides,
              mais avec la Carte Logée Solide, nous avons découvert une
              flexibilité inédite.
            </p>
          </div>
        </div>

        <div
          class="col-12 col-md-5 flex-fill position-relative px-4 px-md-2 order-1 order-md-2 mb-4 mb-md-0"
        >
          <div
            class="player-container d-flex align-items-center justify-content-center"
          >
            <img src="./../assets/play.png" alt="" />
          </div>
          <img
            src="./../assets/Rectangle 93.png"
            class="w-100 h-100 object-fit-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="container my-5">
    <div class="row align-items-center justify-content-center">
      <div class="col-12">
        <h2 class="fw-bold text-black text-center pb-5">
          Comme ça fonctionne ?
        </h2>

        <div class="d-flex align-items-center justify-content-center">
          <ul
            class="nav nav-tabs d-flex justify-content-between mx-auto card-tabs"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active text-black-50 border-0 rounded-2 px-2 px-md-5 py-md-3 py-2"
                id="vr"
                data-bs-toggle="tab"
                data-bs-target="#vr-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="true"
              >
                Cart logée
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link text-black-50 border-0 rounded-2 px-2 px-md-5 py-md-3 py-2"
                id="headphones-tab"
                data-bs-toggle="tab"
                data-bs-target="#headphones-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Carte corporate
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="vr-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div class="row mt-5 g-4">
              <img
                src="../assets/Carte-logee.png"
                alt=""
                class="w-100 object-fit-cover d-none d-md-block"
              />
              <img
                src="../assets/Carte-logee-sm.png"
                alt=""
                class="w-100 object-fit-cover d-md-none d-block"
              />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="headphones-tab-pane"
            role="tabpanel"
            aria-labelledby="headphones-tab"
            tabindex="0"
          >
            <div class="row mt-5 g-4">
              <img
                src="../assets/big-img.png"
                alt=""
                class="w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="w-100 py-5 mb-5 join-container">
    <div class="container d-flex flex-column">
      <h1 class="fw-bold text-black fw-bold pb-3 display-4 text-center">
        Rejoignez Solide <br />
        Aujourd'hui
      </h1>

      <p class="text-black text-center fs-6 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        repellendus corporis eaque sit, id ea, officia ducimus fugit quod
        suscipit nisi dolorem est eveniet natus veniam. Asperiores sunt veniam
        nostrum!
      </p>

      <button
        class="btn btn-primary px-5 py-3 mt-4 fs-6 rounded-3 mx-auto"
        type="button"
      >
        Commencer maintenant
      </button>
    </div>
  </div>
  <Footer />
</template>
