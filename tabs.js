Vue.component("tabs",{
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active': tab.selected}">
        <a @click="setactive(tab)">
          {{tab.name}}
        </a>
        </li>
      </ul>
    </div>
    <div class="tab-details">
      <slot></slot>
    </div>
  </div>
  `,
  data() {
    return {
      tabs: []
    }
  },
  methods : {
    setactive(t) {
      this.tabs.forEach((tab) => {
        tab.selected = (tab.name == t.name);
      })
    }
  },
  mounted() {
    console.log(this.$children)
  },
  created() {
    this.tabs =  this.$children;
  }
});

Vue.component("tab", {
  props: {
    name: {required: true},
    selected: {default: false}
  },
  template: `<div v-show="selected"><p><slot></slot></p></div>`,
})

new Vue({
  el : "#app"
});
