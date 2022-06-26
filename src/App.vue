<script>
import TheHeader from "./components/TheHeader.vue";
import ReactionBox from "./components/ReactionBox.vue";
import SettingsScreen from "./components/SettingsScreen.vue";

export default {
  components: { TheHeader, ReactionBox, SettingsScreen },
  data() {
    return {
      rounds: "",
      gameStart: false,
      currentRound: 0,
    };
  },

  watch: {
    currentRound() {
      if (this.currentRound === this.rounds * 1) {
        console.log("akita");
      }
    },
  },

  methods: {
    setRounds(input) {
      this.rounds = input;
    },

    test() {
      this.currentRound++;
      console.log(this.currentRound);
    },
  },
};
</script>

<!-- 
  1. Create a box that disappears when you click on it.
  2. Create a settings page to set the amount of rounds.
  3. Have a little list of top scores. (Add localStorage later to keep track)
  4. Create a script for the box to appear at random intervals after it gets clicked
    4.1. 
    Click box -> 
    set gameStart to true -> 
    Text on box changes from "Start" to "Click me" -> 
    Box disappears -> 
    this launches the timer that will cause the box to appear after it expires -> 
    Box shows up -> 
    New timer starts running that tracks how long it takes for user to click. If it exceeds 10s it gets clicked automatically ->
    Every click of the box increases amount of rounds by 1->
    When rounds === number of boxes clicked ->
    set gameOver to true->
    show ending screen which has your average click time
 -->

<template>
  <div class="content h-full grid grid-rows-main">
    <TheHeader />
    <section class="bg-primary-400 p-8">
      <h1>NUMBER OF ROUNDS: {{ rounds }}</h1>
      <section class="play-area w-full h-full flex items-center justify-center">
        <ReactionBox :gameStart="gameStart" :test="test" />
      </section>
    </section>
    <SettingsScreen @handle-select="setRounds" />
  </div>
</template>

