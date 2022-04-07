<template>
  <div id="input-number">
    <input type="text" :value="currentValue" v-focus @change="handleChange" />
    <button @click="handleDown" :disabled="currentValue <= min">-</button>
    <button @click="handleUp" :disabled="currentValue >= max">+</button>
  </div>
</template>

<script>
import { isValueNumber } from "../../utils/deal-number";

export default {
  name: "input-number",
  props: {
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    currentValue(newVal) {
      this.$emit("input", newVal);
      this.$emit("on-change", newVal);
    },
    value(newValue) {
      this.updateValue(newValue);
    },
  },
  methods: {
    updateValue(newVal) {
      if (newVal > this.max) {
        newVal = this.max;
      }
      if (newVal < this.min) {
        newVal = this.min;
      }
      this.currentValue = newVal;
    },
    handleUp() {
      if (this.currentValue >= this.max) {
        return;
      }
      this.currentValue += 1;
    },
    handleDown() {
      if (this.currentValue <= this.min) {
        return;
      }
      this.currentValue -= 1;
    },
    handleChange(event) {
      let val = event.target.value.trim();
      let max = this.max;
      let min = this.min;

      if (isValueNumber(val)) {
        val = Number(val);
        this.currentValue = val;

        if (val > max) {
          this.currentValue = max;
        } else if (val < min) {
          this.currentValue = min;
        }
      } else {
        event.target.value = this.currentValue;
      }
    },
  },
  mounted() {
    this.updateValue(this.value);
  },
};
</script>

<style></style>
