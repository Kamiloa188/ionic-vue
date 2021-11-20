<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Titulo #1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Titulo #1</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <ExploreContainer
          :center="{ lat: 388.0, lng: -77.01 }"
          name="API Google Maps"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

export default {
  name: "Tab1",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>