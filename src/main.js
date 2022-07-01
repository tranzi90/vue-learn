import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from '../../../8. Component Communication/cmp-communication-09-provide-inject-for-functions/src/components/ActiveElement.vue';
import KnowledgeBase from '../../../8. Component Communication/cmp-communication-09-provide-inject-for-functions/src/components/KnowledgeBase.vue';
import KnowledgeElement from '../../../8. Component Communication/cmp-communication-09-provide-inject-for-functions/src/components/KnowledgeElement.vue';
import KnowledgeGrid from '../../../8. Component Communication/cmp-communication-09-provide-inject-for-functions/src/components/KnowledgeGrid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.mount('#app');
