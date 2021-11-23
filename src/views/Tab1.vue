<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Titulo #1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div>
        <!-- <ExploreContainer
          :center="{ lat: 388.0, lng: -77.01 }"
          name="API Google Maps"
        /> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  onIonViewDidLeave,
  onIonViewWillEnter,
  onIonViewWillLeave,
  onIonViewDidEnter,
} from "@ionic/vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "Tab1",

  // ionViewWillEnter() {
  //   console.log("Home page will enter", 1);
  // },
  // ionViewDidEnter() {
  //   console.log("Home page did enter", 2);
  // },
  // ionViewWillLeave() {
  //   console.log("Home page will leave", 3);
  // },
  // ionViewDidLeave() {
  //   console.log("Home page did leave", 4);
  // },

  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },

  setup() {
    // onIonViewWillEnter(() => {
    //   console.log("onIonViewWillEnter ", 1);
    // });

    // onIonViewDidEnter(() => {
    //   console.log("onIonViewDidEnter", 2);
    // });

    // onIonViewWillLeave(() => {
    //   console.log("onIonViewWillLeave", 3);
    // });

    // onIonViewDidLeave(() => {
    //   console.log("onIonViewDidLeave", 4);
    // });

    return {};
  },
});
</script>