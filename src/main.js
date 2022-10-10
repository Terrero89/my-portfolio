import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";



import BaseButton from './components/ui/BaseButton'
import SectionTitles from "./components/ui/SectionTitles.vue"


const app = createApp(App);



app.use(AOS.init());

app.use("section-titles", SectionTitles);
app.use("BaseButton", BaseButton);






app.mount("#app");
