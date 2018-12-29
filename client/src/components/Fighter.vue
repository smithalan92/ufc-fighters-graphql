<template>
 <transition name="fade">
    <div class="s-fighter">
      <div
        class="s-fighter__status-badge"
        :class="{ 's-fighter__status-badge--active': fighter.active }">
        {{ statusText }}
      </div>
      <div class="s-fighter__avatar">
        <img :src="fighter.avatar">
      </div>
      <div class="s-fighter__info">
        <div class="s-fighter__name">
          {{ fighter.name }}
        </div>
        <div class="s-fighter__stats">
          <div class="s-fighter__record">
            {{ fighter.wins }} - {{ fighter.losses }} - {{ fighter.draws }}
          </div>
          <div class="s-fighter__weight-class">{{ fighter.class }} </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Fighter',
  props: {
    fighter: Object,
  },

  computed: {
    statusText() {
      if (this.fighter.active) return 'Active';
      return 'Inactive';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.fade-enter-active {
  transition: opacity 0.5s;
  animation: scale-in 1s;
}

.fade-enter {
  opacity: 0;
  scale: 0.2;
}

.s-fighter {
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.s-fighter__avatar {
  position: relative;
  top: 20px;
  width: 146px;
  height: 146px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}

.s-fighter__status-badge {
  position: relative;
  top: 165px;
  height: 20px;
  background: rgb(145, 2, 2);
  color: #fff;
  width: 146px;
  z-index: 1;

  &.s-fighter__status-badge--active {
    background: rgb(2, 103, 26);
  }
}

.s-fighter__info {
  background: #fff;
  width: 100%;
  min-width: 200px;
  padding-top: 20px;
  border-radius: 5px;
}

.s-fighter__name {
  font-size: 20px;
  font-weight: bold;
}

.s-fighter__stats {
  padding-bottom: 10px;
}

.s-fighter__weight-class {
  font-size: 12px;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
