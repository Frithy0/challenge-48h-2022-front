<script>
export default {
  name: 'app',
  data: function () {
    return {
      variants: [...Array(3)],
      voirReponse: false,
      index: 0,
      score: 0,
      fin: false,
      questions: [
        {
          question: "Qui est le pere de ton pere”",
          answers: [
            'Pere',
            'pEre',
            'peRe',
            'perE'
          ],
          ok: 3
        },
        {
          question: "Qui est la mere de ta mere",
          answers: [
            'Mere',
            'mEre',
            'meRe',
            'merE'
          ],
          ok: 2
        },
        {
          question: "qui est le frere de ton frere",
          answers: [
            'Frere',
            'fRere',
            'frEre',
            'freRe'
          ],
          ok: 1
        }
      ]
    }
  },
  methods: {
    action: function(index) {
      //Test for good answers
      if(index == this.questions[this.index].ok) {
        this.score++;
      } else {
        this.variants[index] = 'danger';
      }
      this.voirReponse = true;
      this.variants[this.questions[this.index].ok] = 'success';
      //Test end game
      if(this.index == this.questions.length - 1) {
        this.fin = true;
      }
    },
    recommencer: function() {
      this.voirReponse = this.fin = this.index = this.score = 0;
      this.variants = [...Array(3)];
    },
    continuer: function() {
      this.voirReponse = false;
      this.variants = [...Array(3)];
      this.index++
    }
  }
}
</script>

<template>
<div id="app" class="container">
  <h1>Test Quiz</h1>
  <div name="cadre_question">
    <p>{{questions[index].question}}</p>
  </div>
  <div class="answers">
    <button v-for="(item, index) in questions[index].answers" :key="item.id" @click="action(index)">{{ item }}</button>
    <button v-if="fin" @click="recommencer">Recommencer</button>
  </div>
  <div id="score_container">
    <p>index :{{ index }}</p>
    <p>score : {{score}}</p>
    <p>Condition fin : {{ fin }}</p>
    <p v-if="fin" show>Votre score est de: {{ score }}/{{ questions.length }}</p>
    <button @click="continuer">Question Suivante</button>
  </div>
</div>
</template>

<style>

</style>