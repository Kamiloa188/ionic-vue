<template>
  <ion-page>
    <ion-content>
      <ion-infinite-scroll threshold="50%" @ionInfinite="loadData($event)">
        <ion-infinite-scroll-content
          loadingSpinner="bubbles"
          loadingText="Loading more data..."
        >
        
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <ion-label>ion-item in a card, icon left, button right</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags, within an
          ion-card-content element.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item href="#" class="ion-activated">
          <ion-icon slot="start" :icon="wifi"></ion-icon>
          <ion-label>Awesome Label 1</ion-label>
        </ion-item>
      </ion-card>
      <ion-item href="#">
        <ion-icon slot="start" :icon="wine"></ion-icon>
        <ion-label>Awesome Label 2</ion-label>
      </ion-item>

      <ion-item class="ion-activated">
        <ion-icon :icon="warning" slot="start"></ion-icon>
        <ion-label>Card Button Item 1 activated</ion-label>
      </ion-item>

      <ion-item>
        <ion-icon slot="start" :icon="walk"></ion-icon>
        <ion-label>Awesome Label</ion-label>
      </ion-item>

      <!-- <div id="container">
        <strong>{{ name }}</strong>
        <pre>{{ value }}</pre>
      </div> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonCardContent,
} from "@ionic/vue";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ExampleProject",
  props: {
    name: String,
  },

  components: {
    IonContent,
    IonPage,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonIcon,
    IonLabel,
    IonCardContent,
  },
  setup() {
    const store = useStore();
    return {
      warning,
      wine,
      walk,
      wifi,
      pin,
      value: computed(() => store.state),
      goUp: () => store.dispatch("up"),
      goDown: () => store.dispatch("down"),
    };
  },
});
</script>

<style scoped>
#container {
  width: 100%;
  background-color: blue;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
