<template>
  <ion-card v-for="item of 3" :key="item">
    <ion-img :src="img"> </ion-img>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>{{ name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
      <ion-item> <strong>Cantidad:</strong> {{ value.count }} </ion-item>
      <ion-button fill="outline" v-on:click="goUp()"> + </ion-button>
      <ion-button fill="outline" v-on:click="goDown()"> - </ion-button>
    </ion-card-content>
    <ion-item>
      <ion-item>
        <ion-input
          type="number"
          placeholder="Cantidad"
          v-model="value.count"
        ></ion-input>
      </ion-item>
      <ion-button fill="outline" @click="changeValue()"> up </ion-button>
    </ion-item>
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
      <ion-icon :icon="wifi" slot="start"></ion-icon>
      <ion-label>Card Link Item 1 activated</ion-label>
    </ion-item>

    <ion-item href="#">
      <ion-icon :icon="wine" slot="start"></ion-icon>
      <ion-label>Card Link Item 2</ion-label>
    </ion-item>

    <ion-item class="ion-activated">
      <ion-icon :icon="warning" slot="start"></ion-icon>
      <ion-label>Card Button Item 1 activated</ion-label>
    </ion-item>

    <ion-item>
      <ion-icon :icon="walk" slot="start"></ion-icon>
      <ion-label>Card Button Item 2</ion-label>
    </ion-item>
  </ion-card>
  <!-- </ion-content> -->
  <!-- </ion-page> -->
</template>

<script lang="ts">
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import {
  // IonPage,
  // IonContent,
  // IonInfiniteScroll,
  // IonInfiniteScrollContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonIcon,
  IonInput,
  IonLabel,
  IonButton,
  IonImg,
  IonCardContent,
} from "@ionic/vue";
import {
  computed,
  defineComponent,
  ref,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ExampleProject",
  props: {
    name: String,
  },
  components: {
    // IonContent,
    // IonPage,
    // IonInfiniteScroll,
    // IonInfiniteScrollContent,
    IonCard,
    IonImg,
    IonInput,
    IonButton,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonIcon,
    IonLabel,
    IonCardContent,
  },

  setup() {
    // console.log(value.count);
    const img =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMhowEc8-ReTP0vAIPCjIhlFfKZfYc5gokw&usqp=CAU";

    const store = useStore();
    const newValue = ref<string>("45");
    watchEffect(() => {});
    // watchPostEffect(() => {});
    // watchSyncEffect(() => {});
    return {
      warning,
      wine,
      walk,
      wifi,
      pin,
      img,
      newValue,
      value: computed(() => store.state),
      goUp: () => store.dispatch("up"),
      goDown: () => store.dispatch("down"),
      changeValue: () =>
        store.dispatch("changeValue", { value: parseInt(newValue.value) }),
    };
  },

  data: () => ({
    hola: "hola vue",
  }),

  watch: {},
  computed: {},
  methods: {
    helloWorld: function (): void {
      let message = 0;
      message = 45;
      console.log("this.hola", this.hola, message);
    },
  },
  mounted() {
    this.helloWorld();
  },
});
</script>

<style scoped>
/* #container {
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
} */
</style>
