<script>
import Image from "../assets/settings-icon.svg";
export default {
  emits: ["handle-select"],
  data() {
    return {
      selectedRounds: "",
      show: false,
      settingsImage: Image,
    };
  },

  methods: {
    handleSelect() {
      if (this.selectedRounds > 0) {
        this.show = !this.show;
        this.$emit("handle-select", this.selectedRounds);
      }
    },

    handleFormCancel() {
      this.show = !this.show;
    },
  },
};
</script>

<template>
  <section
    class="
      backdrop
      bg-[rgba(31,41,55,0.5)]
      fixed
      top-0
      w-full
      h-full
      text-secondary-500
      flex
      items-center
      justify-center
    "
    v-if="!show"
  >
    <div class="modal border-2 bg-primary-900 grid grid-cols-2 p-4 rounded-xl">
      <p>Welcome to the reaction game</p>
      <form action="" @submit.prevent class="grid gap-4">
        <p>Please set the number of rounds.</p>
        <label for=""
          >Rounds:
          <select name="" id="" v-model="selectedRounds">
            <option disabled value="">Select rounds</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
        <div class="form-buttons flex justify-between">
          <button class="border-2 px-4 py-2 rounded-xl" @click="handleSelect">
            Save
          </button>
          <button
            class="border-2 px-4 py-2 rounded-xl"
            @click="handleFormCancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
  <section>
    <div
      class="gear-icon w-[50px] h-[50px] absolute top-0 right-0"
      @click="show = !show"
    >
      <img :src="settingsImage" alt="" />
    </div>
  </section>
</template>