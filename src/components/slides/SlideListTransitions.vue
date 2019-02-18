<template>
<div class="slide">
  <h2>List Transitions</h2>

  <p>So far only single items or switching from one item to another has been covered with the transition component.</p>
  <p>For a list of items the transition-group component can be used to animate changes in the list. Whether adding, removing, or sorting the items in the list, these changes can be animated. This allows for a more pleasing transition than items just popping in and out of existence.</p>

  <div class="select-button">
    <select class="states-select" v-model="stateOption">
      <option value="" selected disabled hidden>choose a state...</option>
      <option v-for="(state, index) in populations" :key="index">{{ state[0] }}</option>
    </select>
    <button class="example-button" @click="selectClickHandler">select</button>
    <button class="example-button negative" @click="states = []">clear</button>
  </div>

  <transition-group name="list" tag="ul" class="states-list" @leave="listLeave">
    <li class="header" key="header">
      <span :class="{active: currentSort === 's'}" @click="sortStates(0)">state</span>
      <span :class="{active: currentSort === 'p'}" @click="sortStates(1)">population</span>
      <span :class="{active: currentSort === 'b'}" @click="sortStates(2)">births</span>
      <span :class="{active: currentSort === 'd'}" @click="sortStates(3)">deaths</span>
    </li>
    <li class="list-item" v-for="(state, index) in states" :key="state[5]" :data-index="index">
      <span>{{ state[0] }}</span> <span>{{ state[1] }}</span> <span>{{ state[2] }}</span> <span>{{ state[3] }}</span>
    </li>
  </transition-group>
</div>
</template>

<script>
//["STNAME","POP","BIRTHS","DEATHS","DATE","state"]
const populations = require('../../assets/populations.json');

export default {
  name: 'slide-list-transitions',

  data () {
    return {
      currentSortIndex: 0,
      sorts: ['s', 'p', 'b', 'd'],
      populations: populations,
      stateOption: '',
      states: []
    }
  },

  computed: {
    currentSort: function () {
      return this.sorts[this.currentSortIndex];
    }
  },

  methods: {
    listLeave: function (element) {
      element.style.transitionDelay = `${element.dataset.index * 0.25}s`;
    },
    selectClickHandler: function () {
      let alreadySelected = this.states.find(element => {
        return element[0] === this.stateOption;
      });
      
      if (!alreadySelected) {
        let selected = this.populations.find(element => {
          return element[0] === this.stateOption;
        });

        this.states.push(selected);
        this.sortStates(0);
      }
    },
    sortStates: function (index) {
      this.currentSortIndex = index;
      this.states = this.states.sort(function (a, b) {
        let itemA = index > 0 ? parseInt(a[index]) : a[index];
        let itemB = index > 0 ? parseInt(b[index]) : b[index];

        if (index > 0) {
          return itemA - itemB;
        } else {
          return itemA.localeCompare(itemB);
        }
      });
    }
  },

  activated: function () {
    document.body.style.setProperty('--bodyBgColor', '#274231');
  }
}
</script>

<style lang="scss" scoped>
.select-button {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 20px;

  * {
    margin: 0 5px;
  }
}

.states-select {
  padding: 10px;
}

.states-list {
  background-color: #f5f5f5;
  border: {
    color: #333;
    style: solid;
    width: 2px;
  }
  height: 200px;
  list-style-type: none;
  margin: 0;
  overflow-x: hidden;
  padding: 0;

  li {
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    font-size: 14px;
    justify-content: space-around;

    &:nth-child(odd) {
      background-color: gainsboro;
    }

    span {
      width: 25%;
    }
  }

  .list-item span {
    padding: 5px 10px;
  }

  .header {
    background-color: #f5f5f5 !important;
    border-bottom: {
      color: #333;
      style: solid;
      width: 1px;
    }
    cursor: pointer;
    margin-top: 0;
    padding: 0;
    position: sticky;
    top: 0;

    span {
      padding: 5px 10px;
      transition: var(--speedNormal);
    }

    .active {
      background-color: rebeccapurple;
      color: #fff;
    }
  }
}

.list-enter-active, .list-leave-active {
  transition: var(--speedSlow);
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translate3d(40px, 0, 0);
}
.list-move {
  opacity: 0.5;
  transition: transform var(--speedSlow);
}
</style>
