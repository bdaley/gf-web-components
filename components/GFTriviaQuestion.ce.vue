<template>
  <div class="trivia-container">
    <header>
      <h1><slot>No question specified</slot></h1>

      <h2>{{ seconds }}</h2>

    </header>

    <div class="options">
        <button v-for="option in answersArrayShuffled" 
          :class="{ correct: option === answersArray[0], revealed }"
          :disabled="revealed"
          @click="checkAnswer()"
          >
          {{ option }}
        </button>

    </div>

    <footer>
      <small>A formative assessment courtesy of <a href="https://getgameform.com/" target="_blank">GameForm</a></small>
    </footer>

    <div class="overlay" v-if="overlay">
      <div class="wrapper">
        <h2 style="margin-bottom:.5em;">Ready to Play?</h2>
        <button style="margin-bottom: 0;" @click="timerStart()">Start!</button>
      </div>
    </div>

  </div>
</template>

<script>
import { shuffle } from 'underscore'

export default {
  props: {
    answers: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: false,
      default: 30
    }
  },
  data() {
    return {
      answersArray: [],
      answersArrayShuffled: [],
      answer: null,
      seconds: Number(this.time),
      timer: null,
      revealed: false,
      overlay: true

    }
  },
  methods: {

    timerStart(){
      this.overlay = false
      this.timer = setInterval(() => {
        if(this.seconds > 0){
          this.seconds -= 1
        }else{
          this.checkAnswer()
        }
      }, 1000);
    },

    timerStop(){
      console.log('Turning off timer')
      clearInterval(this.timer)
    },

    checkAnswer(){
      console.log('checking answer')
      // Stop the timer
      this.timerStop()
      // Reveal answer and disable buttons
      this.revealed = true;
    }
  },

  mounted() {
    this.answersArray = this.answers.split(',')
    this.answersArrayShuffled = shuffle(this.answersArray)
    // this.timerStart()
  }
}
</script>


<style scoped>

* {
  box-sizing: border-box
}

a:link {
  color: var(--gf-blue)
}
div.trivia-container {
  --padding: 1em;
  --base-gray: #eee;
  --button-bg-color: rgb(230, 230, 230);
  --button-text-color: rgb(82, 82, 82);
  --gf-blue: rgb(41, 60, 112);
  background-color: white;
  width: 500px;
  max-width: 100%;
  font-family: Arial,Helvetica Neue,Helvetica,sans-serif; 
  position: relative;

}

h1, h2 {
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:10px;
  padding: var(--padding);

}

label {
  display: block;
}

.options {
  padding: var(--padding);
}

.overlay {
  padding: var(--padding);
  position: absolute;
  background-color: white;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay > .wrapper {
  margin: calc( var(--padding) * 2 );

  padding: calc( var(--padding) * 2 );
  border-width: 1px;
  border-style: solid;
  border-color: var(--button-bg-color);
  box-shadow: 10px 10px 5px rgb(93, 93, 93);

}

button {
  text-transform: capitalize;
  font-size: 1.5em;
  cursor: pointer;
  width: 100%;
  margin-bottom: calc( var(--padding) / 2 );
  display: block;
  border: none;
  padding: 1em;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  position: relative;
}

button:hover {
  transition: background-color .5s;
  background-color: var(--gf-blue);
  color: rgb(187, 228, 250);
}

.revealed, .revealed:hover {
  transition: all 1s;
  opacity: .45;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
}

.revealed.correct, .revealed.correct:hover {
  transition: all 1s;
  opacity: 1;
  background-color: var(--gf-blue);
  color: white
}
.revealed::after{
  position: absolute;
  left: 10px;
  font-size: 2em;
  top: 0px;
}

/* ☒ */
/* .revealed::after {
  content: "\2612"; 
} */

/* ☑ */
.revealed.correct::after {
  content: "\2611"; 
}


footer {
  text-align: center;
  padding: var(--padding);
  background-color: var(--base-gray);
  color: var(--button-text-color)
}



</style>
