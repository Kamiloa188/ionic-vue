<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <strong>{{ name }}</strong>
        <pre>hola</pre>
        <div class="map" ref="mapDivRef"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { onIonViewDidEnter } from "@ionic/vue";
import { defineComponent, onMounted, ref } from "vue";
import { googleApi } from "@/Google/google.service";
export default defineComponent({
  name: "ExploreContainer",
  props: {
    name: String,
    // center: { lat: Number, lng: Number },
    zoom: Number,
    mapTypeId: String,
    disableDefaultUI: Boolean,
  },

  components: {
    IonPage,
    IonContent,
  },
  setup(props) {
    const map = ref(null);
    const mapDivRef = ref(null);

    // const { call();Api } = googleApi
    onMounted(() => {
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k&callback=initMap&v=weekly"
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    // window.initMap = () => {
    //   map.value = new window.google.maps.Map(mapDivRef.value, {
    //     mapTypeId: props.mapTypeId || "hybrid",
    //     zoom: props.zoom || 8,
    //     disableDefaultUI: props.disableDefaultUI || false,
    //     center: props.center || { lat: 38.0, lng: -77.01 },
    //   });
    // };

    // onMounted()

    return {
      mapDivRef,
    };
  },
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
  background-color: azure;
}

#container {
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