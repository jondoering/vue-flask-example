<template>


<div>
    <div class="field">
        <label class="label is-large">Question</label>
        <div class="control">
            <input type="text" class="input is-large" v-model="question">
        </div>
    </div>

    <div class="field">
        <div class="control">
            <a class="button is-large is-info" @click="addChoice">
                <span class="icon is-small">

                <i class="fa-align-left" aria-hidden="true">
                             <font-awesome-icon icon="plus" />
                </i>
                </span>
                <span>
                  Add choice
                 </span>
            </a>
            <a class="button is-large is-primary" @click="saveQuestion">
                <span class="icon is-small">
                      <font-awesome-icon icon="check" />
                </span>
                <span>Save</span>
            </a>
        </div>
    </div>

    <h2 class="label is-large" v-show="choices.length > 0">Question Choices</h2>
    <div class="field has-addons" v-for="(choice, idx) in choices" v-bind:key="idx">
      <div class="control choice">
        <input type="text" class="input is-large" v-model="choices[idx]" @keyup.enter="addChoice">
      </div>
      <div class="control">
        <a class="button is-large is-danger">
          <span class="icon is-small" @click.stop="removeChoice(choice)">
                <font-awesome-icon icon="times" />
          </span>
        </a>
      </div>
    </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      question: '',
      choices: []
    }
  },
  methods: {
    removeChoice(choice) {
      const idx = this.choices.findIndex(c => c === choice)
      this.choices.splice(idx, 1)
    },
    saveQuestion() {
      this.$emit('questionComplete', {
        question: this.question,
        choices: this.choices.filter(c => !!c)
      })
      this.question = ''
      this.choices = []
    },
    addChoice() {
      this.choices.push('')
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/bulma'
</style>
