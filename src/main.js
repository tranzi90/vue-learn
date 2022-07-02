import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from '../../../9. Diving Deeper Into Components/cmp-adv-06-scoped-slots/src/components/BaseBadge.vue';
import BaseCard from '../../../9. Diving Deeper Into Components/cmp-adv-06-scoped-slots/src/components/BaseCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
