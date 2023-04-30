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
          @click="checkAnswer(option)"
          >
          {{ option }}
        </button>

    </div>

    <footer :class="{ open: leaderboard }">
      <section id="menu-container">
        <div v-if="!leaderboard" id="menu-icon" @click="leaderboard=true">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M201.55 160h109.27v32.41A54.63 54.63 0 0 1 256.19 247h0a54.63 54.63 0 0 1-54.63-54.63V160h-.01ZM193.68 306.63h125.01V352H193.68z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20px" class="stroke-083b43"></path><path d="M238.13 244.28v17.9a44.45 44.45 0 0 1-44.45 44.45h0V352h125v-45.37h0a44.45 44.45 0 0 1-44.45-44.45v-17.9M310.82 170.77h20.92A25.28 25.28 0 0 1 357 196.05h0a25.28 25.28 0 0 1-25.28 25.28h-29.2M201.18 170.77h-20.92A25.28 25.28 0 0 0 155 196.05h0a25.28 25.28 0 0 0 25.28 25.28h29.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20px" class="stroke-083b43"></path></g></svg>
        </div>
        <div v-if="leaderboard"  id="close-icon" @click="leaderboard = false">
          <svg viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" style="width:20px"><path fill="#ffffff" d="M47.998 4.247 43.758.002 24.001 19.758 4.245.002.004 4.247l19.754 19.754L.004 43.755l4.246 4.24 19.751-19.751 19.751 19.751 4.246-4.24-19.754-19.754z" class="fill-241f20"></path></svg>
        </div>
        <small>A formative assessment courtesy of <a href="https://getgameform.com/" target="_blank">GameForm</a></small>
      </section>
      <section id="leaderboard" v-if="leaderboard">
        <h2 class="align-center">Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, key) in leaders">
              <td>{{ key+1 }}</td><td v-html="(person.uid==this.getCurrentUser())?'You!':'Anonymous Player'"></td><td>{{ person.score }}</td>
            </tr>
          </tbody>
        </table>
      </section>
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
import { shuffle, orderBy } from 'lodash'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"

const firebaseConfig = {
  apiKey: 'AIzaSyD8XNm6JuPn_JvB-mOkZYF1lntXl9JE0Ug',
  authDomain: 'getgameform.web.app',
  projectId: 'getgameform',
  appId: '1:631880925853:web:443dea65019c7f380b4a74',
  measurementId: "G-JSJEG57E3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



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
    },
    dataId: {
      type: String,
      required: false
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
      overlay: true,
      points: 0,
      auth: false,
      leaderboard: false,
      leaders: []

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

    checkAnswer(chosen){
      let isCorrect = (chosen === this.answersArray[0]);
      
      if(this.dataId){
        this.setScore(isCorrect ? 100 : 0)
      }

      this.toast((isCorrect ? 'Correct!' : 'Incorrect!') + " Click to view the leaderboard.", ()=>{
        this.leaderboard = true
      })

      // Stop the timer
      this.timerStop()
      // Reveal answer and disable buttons
      this.revealed = true;
    },
    async setScore(multiplier){
      this.points = multiplier * this.seconds
      try {
        const docRef = await addDoc(collection(db, "scores"), {
          assessment_id: this.dataId,
          host: location.host,
          path: location.pathname,
          score: this.points,
          uid: this.getCurrentUser(),
          submitted: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        this.getLeaders()
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async getLeaders(){
      let response = await fetch(`https://getgameform.com/api/leaderboard?id=${this.dataId}&host=${location.host}&path=${location.pathname}`)
      let leaders = await response.json()
      this.leaders = orderBy(leaders, 'score', 'desc')
    },
    getCurrentUser(){
      let key = 'game-form-user';
      if(!localStorage.getItem(key)){
        localStorage.setItem(key, self.crypto.randomUUID())
      }
      return localStorage.getItem(key)
    },
    toast(msg, clickFn=null ){
      // https://apvarun.github.io/toastify-js/#
      Toastify({
        text: msg,
        duration: 5000,
        // close: true,
        // duration: -1,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          "background": "rgb(65, 65, 65)",
          "font-family": "Arial, Helvetica, sans-serif"
        },
        onClick: clickFn
      }).showToast();     
    }
  },

  mounted() {
    this.answersArray = this.answers.split(',')
    this.answersArrayShuffled = shuffle(this.answersArray)
    // this.timerStart()
    // console.log(this.dataId)

    // only sign in if not authenticated
    this.getCurrentUser()

  }
}
</script>


<style>
@import url('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css');

* {
  box-sizing: border-box
}

a:link {
  color: var(--gf-blue)
}
div.trivia-container {

  --padding: 1em;
  --base-gray: rgb(65, 65, 65);
  --button-bg-color: rgb(173, 200, 237);
  --button-text-color: rgb(41, 60, 112);
  --gf-blue: rgb(41, 60, 112);
  --footer-text: rgb(205, 205, 205);
  --light-gray: rgb(89 89 89);
  background-color: rgb(222, 236, 255);
  width: 500px;
  max-width: 100%;
  font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; 
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
  bottom: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
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
  /* transition: background-color .2s; */
  background-color: var(--gf-blue);
  color: rgb(187, 228, 250);
}

.revealed, .revealed:hover {
  transition: all .5s;
  opacity: .45;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
}

.revealed.correct, .revealed.correct:hover {
  transition: all .5s;
  opacity: 1;
  background-color: var(--gf-blue);
  color: white
}
.revealed::after{
  position: absolute;
  left: 20px;
  font-size: 2em;
  top: 15px;
}

/* ☒ */
/* .revealed::after {
  content: "\2612"; 
} */

/* ☑ */
.revealed.correct::after {
  /* content: "\2611";  */
  width: 40px;
  content: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDBDNC41IDAgMCA0LjUgMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE1LjUgMCAxMCAwWk04IDE1bC01LTUgMS40LTEuNEw4IDEyLjJsNy42LTcuNkwxNyA2bC05IDlaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PC9wYXRoPjwvc3ZnPg==")
}

#menu-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 1em;

}

#menu-icon, #close-icon {
  width: 10%;
  cursor: pointer;
}

footer > small {
  width: 90%;
}

footer {
  position: absolute;

  height: 80px;
  /* text-align: right; */
  padding: var(--padding);
  background-color: var(--base-gray);
  color: var(--footer-text);
  transition: all .5s;
  left: 0px;
  right: 0px;
  bottom: -80px;
  z-index: 10;

}

footer.open {
  height: 500px;
}


footer a:link, footer a:visited{
  color: var(--footer-text)
}

#leaderboard {
  color: var(--footer-text);
  border-top: 1px solid var(--light-gray);
  height: 90%;
  overflow-y: scroll;

}

#leaderboard table {
  width: 100%;
  border-collapse: collapse;
}

#leaderboard table th {
    padding: .5em;
  text-align: left;
}

#leaderboard tbody td {
  padding: .5em;
}

#leaderboard tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, .1)
}
#leaderboard  h2 {
  margin-top: 1em;
  text-align: center ;
}


</style>
