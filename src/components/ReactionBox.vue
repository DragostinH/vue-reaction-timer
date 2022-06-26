<script>
import getRandomTimer from "@/scripts/getRandomTimer";
import { format } from "date-fns";

export default {
  props: {
    gameStart: {
      type: Boolean,
      required: true,
    },
    test:{
        type: Function,
    }
  },
  data() {
    return {
      isClicked: false,
      clickedIntervals: [],
      startSeconds: "",
      endSeconds: "",
      start: false,
    };
  },

  methods: {
    handleClick() {
      this.isClicked = !this.isClicked;
      this.test();
      this.endSeconds = format(new Date(), "ssSSS") * 1 - this.startSeconds;
      this.clickedIntervals.push(this.endSeconds);
      setTimeout(() => {
        this.isClicked = !this.isClicked;
        this.startSeconds = format(new Date(), "ssSSS") * 1;
      }, getRandomTimer(1500, 3500));
    },
  },

};
</script>

<template>
  <div
    class="
      reaction-box-container
      w-20
      h-20
      flex
      justify-center
      items-center
      text-secondary-500
      border-2
      bg-primary-900
      rounded-full
    "
    v-if="!isClicked"
    @click="handleClick"
  >
    <p>Click</p>
  </div>
</template>