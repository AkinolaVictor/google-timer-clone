<template>
  <div class="stopwatch">

    <div class="timer-container">
      <each-timer v-if="Number(hour)>=1" :timer="hour" name='Hours' :theme="theme" />
      <each-timer v-if="Number(minute)>=1" :timer="minute" name='Minutes' :theme="theme" />
      <each-timer :timer="second" name='Seconds' :theme="theme" />
      <each-timer :timer="splitsec" name='Splitsecond' :theme="theme" />
    </div>

  </div>

</template>

<script>
import EachTimer from '../components/EachTimer.vue';
let interval, splitsec

export default {
  name: 'Stopwatch',
  components: {
    EachTimer
  },
  props: ['theme'],
  data (){
    return{
      hour: '00',
      minute: '00',
      second: '00',
      splitsec: '00'
    }
  },
  methods: {

    start: function() {
      const v = this;

      let num = this.second;
      let minutes = this.minute
      let hours = this.hour
      let splits = this.splitsec

      function hour (){
        hours = Number(hours) + 1

        hours<10?
        v.hour = '0' + hours:
        v.hour = hours

        v.minute = '00';
        minutes = '00'
      }

      function minute () {
        minutes = Number(minutes)+1

        minutes < 10?
        v.minute = '0' + minutes:
        v.minute = minutes

        v.second = '00';
        num='00';
      }

      interval= setInterval(()=>{

        num = Number(num)+1

        //second count
        num < 10?
        v.second = "0"+ num:
        v.second = num

        //minute count
        num==60?
        minute():
        null

        minutes==60?
        hour():
        null


        // console.log(num);
      }, 1000);
      
      splitsec=setInterval(()=>{
        
        splits<100?
        splits = Number(splits) +1:
        splits = '00'

        splits<=9?
        v.splitsec = '0'+ splits:
        v.splitsec = splits;
        // i=i+1
        // console.log(splits);
      }, 10)

    },

    stop: function() {
      clearInterval(interval)
      clearInterval(splitsec)
      // console.log('clear-interval');
    },

    reset: function(){
      clearInterval(interval);
      clearInterval(splitsec)

      this.splitsec = '00';
      this.second='00';
      this.minute='00';
      this.hour='00';
    }
  },
  mounted(){
    let funcs = {
      start: this.start,
      stop: this.stop,
      reset: this.reset
    }
    this.$emit('control', funcs)
  }
  
}
</script>


<style scoped>
.stopwatch{
  width: 100%;
  height: calc(100% - 120px);
  /* background: radial-gradient(rgb(59, 59, 54), #303030); */
}

.timer-container{
  width: 100%;
  height: 100%;
  /* background: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.changeTime{
  position: absolute;
  bottom: 80px;
  right: 20px;
  cursor: pointer;
}

.timeChange{
  /* width: 180px; */
  width: auto;
  height: 150px;
  padding: 10px;
  background-color: rgb(67, 75, 75);

  position: absolute;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-interval{
  position: absolute;
  top: 80px;
  right: 15px;
  cursor: pointer;
}

.delete-interval2{
  position: absolute;
  top: 150px;
  right: 15px;
  cursor: pointer;
}
</style>