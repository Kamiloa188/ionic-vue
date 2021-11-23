<template>
  <ion-page>
    <ion-content>
      <div>
        <h3>hola</h3>
        {{ propsName }}
        <!-- <h3>Home</h3> -->
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonPage, IonContent } from "@ionic/vue";

export default defineComponent({
  props: {
    name: String,
  },
  components: {
    IonPage,
    IonContent,
  },
  setup(props) {
    const propsName = ref(props.name);
    return { propsName };
  },
});
</script>
