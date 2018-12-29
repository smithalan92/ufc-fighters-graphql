import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import App from './App.vue';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:8081/graphql',
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render(h) { return h(App); },
}).$mount('#app');
