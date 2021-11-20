<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Galeria de fotos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-grid fixed>
        <ion-row>
          <ion-col size="6" v-for="photo in photos" :key="photo">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
          <!-- <ion-col size="6"></ion-col> -->
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { usePhotoGallery } from "@/composables/usePhotoGallery";
// import { ref, onMounted, watch } from 'vue';
import { camera, trash, close } from "ionicons/icons";

import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/vue";
// import ionic cap { usePhotoGallery ionic cap , UserPhoto } from '@/composables/usePhotoGallery';

export default {
  name: "Tab2",
  components: {
    IonPage,
    IonHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },

  setup() {
const { photos, takePhoto } = usePhotoGallery();

return {
      photos,
      takePhoto,
      camera,
      trash,
      close,
    };
  },
};
</script>