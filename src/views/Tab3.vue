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
} from "@ionic/vue";
import ExampleProject from "@/components/ExampleProject.vue";

export default {
  name: "Tab3",
  components: {
    ExampleProject,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>