// import {  } from 'vue';
import { onMounted,  } from 'vue'
export function googleApi() {

    const callApi = async  () => {
        const mensage = 'se obtiene el api'
        console.log('mensage :>> ', mensage);

        // const  script = document.createElement('script')
        // script.setAttribute('src', '')
        // document.head.append(script)

    }
onMounted(callApi)

    return {
        callApi
    }
}