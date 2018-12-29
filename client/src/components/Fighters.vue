<template>
  <div class="s-fighters">
    <div class="s-fighters__list">
      <div
        class="s-fighters__loading"
        v-if="fighters.length === 0"
        >
        <img class="s-fighters__loading-icon" src="../assets/spinner.png">
      </div>
      <template v-for="fighter in fighters">
        <Fighter :key="fighter.id" :fighter="fighter"/>
      </template>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Fighter from './Fighter.vue';

export default {
  name: 'Fighters',

  data() {
    return {
      fighters: [],
    };
  },

  components: {
    Fighter,
  },

  apollo: {
    fighters: gql`query {
      fighters{
        id
        name
        avatar
        class
        wins
        losses
        draws
        active
      }
    }`,
  },
};
</script>
<style scoped lang="scss">
.s-fighters {
  margin: 20px;
}

.s-fighters__loading {
  margin-top: 30px;
}

.s-fighters__loading-icon {
  width: 80px;
  animation: spinner 0.8s infinite linear;
}

.s-fighters__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
