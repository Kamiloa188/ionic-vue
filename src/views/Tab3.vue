<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>WorkSpaces</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExampleProject name="HelloWorld firs project" />
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
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewWillLeave,
  onIonViewDidLeave,
} from "@ionic/vue";
import ExampleProject from "@/components/ExampleProject.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "Tab3",

  // ionViewWillEnter() {
  //   console.log("ionViewWillEnter", 1);
  // },
  // ionViewDidEnter() {
  //   console.log("ionViewDidEnter", 2);
  // },
  // ionViewDidLeave() {
  //   console.log("ionViewDidLeave", 3);
  // },
  // ionViewWillLeave() {
  //   console.log("ionViewWillLeave", 4);
  // },

  components: {
    ExampleProject,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const store = useStore();

    // onIonViewWillEnter(() => {
    //   console.log("onIonViewWillEnter", 1);
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
};
</script>