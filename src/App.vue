<template>

  <div class="app-container" :style="{'background': theme.bodyBackground}">
    <Navbar @route= 'routerView($event)'
      :theme = 'theme'/>

    <Timer v-if="router =='timer'" 
      :theme = 'theme'
      @control ='control($event)' 
      :buttonswitch = 'buttonSwitch' />

    <Stopwatch v-if="router == 'stopwatch'" 
      :theme = 'theme'
      @control='control($event)' />

    <!-- <router-view /> -->

    <ControlPanel :theme='theme' 
      :functions='controls' 
      :transition = 'toggleTheme'
      @buttonswitch = 'buttontoggle($event)'/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ControlPanel from './components/ControlPanel.vue'
import Stopwatch from './views/Stopwatch.vue';
import Timer from './views/Timer.vue';
import Gsap from './gsap.js'


export default {
  components:{
    Navbar,
    ControlPanel,
    Stopwatch,
    Timer
  },
  data () {
    return {
      router: 'timer',
      controls: {},
      buttonSwitch: '',
      theme: {
          type: 'dark',
          background: '#454545',
          bodyBackground: "#121212",
          text: '#ffffffa2',
          line: {
            default: 'rgba(255, 255, 255, 0.2)',
            switch: 'rgb(212, 180, 150)'
          },
          button: {
            background: '#00ff6ac5',
            text: '#ffffffa2'
          },
          time:{
            background: '#3b3b36',
            text: '#ffffffa2'
          }
      }
    }
  },
  methods: {
    routerView (val) {
      this.router = val
    },
    control(val) {
      const funcs = {
        name: this.router,
        ...val
      }
      this.controls=funcs
      // console.log(this.controls);
    },
    buttontoggle(val) {
      this.buttonSwitch = val;
    },
    toggleTheme: function() {
      const dark = {
          type: 'dark',
          background: '#454545',
          bodyBackground: "#121212",
          text: '#ffffffa2',
          line: {
            default: 'rgba(255, 255, 255, 0.2)',
            switch: 'rgb(212, 180, 150)'
          },
          button: {
            background: '#00ff6ac5',
            text: '#ffffffa2'
          },
          time:{
            background: '#3b3b36',
            text: '#ffffffa2'
          },
          toggle: {
            background: 'yellow',
            text: ''
          }
      }

      const light = {
          type: 'light',
          // background: '#454545',
          background: '#454545',
          bodyBackground: "rgb(221, 203, 203)",
          text: '#ffffffa2',
          line: {
            default: 'white',
            switch: 'yellow'
          },
          button: {
            background: '#8aa896c5',
            text: 'white'
          },
          time:{
            background: '#3b3b36',
            text: 'black'
          },
          toggle: {
            background: 'yellow',
            text: 'black'
          }
      }

      this.theme.type=='dark'?
      this.theme=light:
      this.theme=dark

      // console.log(dark, light);
    }
  },
  mounted () {
    Gsap()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
</style>

<style>
*{
  margin: 0;
  padding: 0;
  color: #ffffffa2;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Ubuntu;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

a{
  text-decoration: none;
}

#nav {
  padding: 30px;
}

.app-container{
  width: 100%;
  height: 100vh;
  /* background-color: #121212 !important; */
  /* overflow: hidden; */
}
</style>
