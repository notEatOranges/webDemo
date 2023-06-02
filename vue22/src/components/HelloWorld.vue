<template>
  <div>
    <el-input
      v-model="inputText"
      :placeholder="placeholder"
      @focus="showDatePickerFn"
      @clear="clearDate"
    >
      <template v-slot:append>
        <i class="el-icon-date"></i>
      </template>
    </el-input>
    <el-date-picker
      v-model="selectedDate"
      type="date"
      :picker-options="pickerOptions"
      :readonly="true"
      :popper-class="popperClass"
      ref="datePicker"
      v-show="showDatePicker"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedDate: '',
      inputText: '',
      showDatePicker: false
    };
  },
  computed: {
    pickerOptions() {
      return {
        // ...yourPickerOptionsHere
      };
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.selectedDate = newValue;
        this.inputText = this.selectedDate;
      }
    },
    selectedDate(newValue) {
      this.$emit('input', newValue);
    }
  },
  methods: {
    showDatePickerFn() {
      this.showDatePicker = true;
      this.$refs.datePicker.focus();
    },
    clearDate() {
      this.selectedDate = '';
      this.inputText = '';
      this.showDatePicker = false;
    }
  }
};
</script>

<style scoped>
.date-input {
  display: inline-block;
}
</style>
