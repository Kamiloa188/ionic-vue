<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon icon="wifi" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="images" />
          <ion-label>Fotos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon icon="walk" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon name="pizza"></ion-icon>
          <ion-label>pizza</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { ellipse, images, square, triangle } from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      images,
    };
  },
};
</script>