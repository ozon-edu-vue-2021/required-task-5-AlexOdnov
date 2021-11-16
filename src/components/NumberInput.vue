<template>
  <div class="field has-addons">
    <p class="control">
      <button :disabled="!innerValue" class="button" @click="decrease">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="18px"
          height="18px"
        >
          <path
            fill="currentColor"
            d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </svg>
      </button>
    </p>
    <p class="control">
      <input v-model="innerValue" class="input" type="text" />
    </p>
    <p class="control">
      <button class="button" @click="increase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="18px"
          height="18px"
        >
          <path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </svg>
      </button>
    </p>
  </div>
</template>

<script>
import { debounce } from '../helpers/debounce';
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  name: 'NumberInput',
})
export default class NumberInput extends Vue {
  @Prop(Number) value;

  innerValue = 0;

  @Watch('innerValue')
  onInnerValueChanged(newVal) {
    const numberValue = parseInt(newVal) || 0;
    const value = numberValue > 0 ? numberValue : 0;
    this.innerValue = value;
    this.onInput(value);
  }

  decrease() {
    this.innerValue--;
  }
  increase() {
    this.innerValue++;
  }
  onInput = debounce(function (value) {
    this.input(value);
  }, 200);

  @Emit()
  input(value) {
    return value;
  }

  created() {
    this.innerValue = this.value;
  }
}
</script>

<style scoped>
.field {
  max-width: 120px;
}
.input {
  text-align: center;
}
.button {
  padding: 0.5rem;
}
</style>
