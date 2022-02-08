<script setup>
import { ref } from 'vue'
import StarwarsService from "../services/module/starwars"
const questions = ref([
    {
        question: "What species, the creatures from Endor, who helped the rebellion destroying the second death star, were ?",
        response: "Wookies",
        categorie: "people",
        userResponse: null
    },
    {
        question: "What's Anakin Skywalker son's name ?",
        response: "Luke",
        categorie: "people",
        userResponse: null
    },
    {
        question: "What sith Anakin Skywalker becomes ?",
        response: 'Dark Vador',
        categorie: "people",
        userResponse: null
    },
    {
        question: "What's the name of Luke Skywalker's sister ?",
        response: 'Leia',
        categorie: "people",
        userResponse: null
    },
    {
        question: "Who was obi wan kenobi's master ?",
        response: 'Yoda',
        categorie: "people",
        userResponse: null
    },
    {
        question: "On wich planet, Anakin Skywalker was born ?",
        response: 'Tatooine',
        categorie: "planets",
        userResponse: null
    },
    {
        question: "What species does Jar Jar Binks belong to?",
        response: 'Gungans',
        categorie: "people",
        userResponse: null
    },
    {
        question: "Where does Obi-wan took Luke right after is birth ?",
        response: 'Tatooine',
        categorie: "planets",
        userResponse: null
    },
    {
        question: "What's the name of Boba Fett's starships ?",
        response: 'Esclave I ',
        categorie: "starships",
        userResponse: null
    },
    {
        question: "What's the name of Han Solo's starships ?",
        response: 'Faucon Millenium',
        categorie: "starships",
        userResponse: null
    }
])
const currentQuestion = ref(0)
const answers = ref([])
const endgame = ref(false)
const winCounter = ref(0)
function answer(answer) {
    questions.value[currentQuestion.value].userResponse = answer
}

async function findFakeAnswer() {
    answers.value = await StarwarsService.getAnswers('people', questions.value[currentQuestion.value].response)
}

function next(){
    
    if (currentQuestion.value == questions.value.length-1){
        return endgame.value = true
    }

    if (questions.value[currentQuestion.value].response == questions.value[currentQuestion.value].userResponse){
        winCounter.value++
    }
    currentQuestion.value++
    answers.value = []
    findFakeAnswer()
}

findFakeAnswer()

</script>

<template>
    <div class="container">
        <div v-if="!endgame" class="text-center">
            <h2 style="color: white">{{currentQuestion}}/{{ questions.length }}</h2>
            <div class="card text-center center" style="width: 26rem;">
                <div class="card-header">{{ questions[currentQuestion].question }}</div>
                <ul class="list-group list-group-flush">
                    <li
                        @click="answer(res)"
                        v-for="res in answers"
                        :class="{ 'list-group-item': true, 'list-group-item-action': true, 'active': questions[currentQuestion].userResponse == res }"
                    >{{ res }}</li>
                </ul>
            </div>
            <button @click="next()" :disabled="!questions[currentQuestion].userResponse" style="width: 26rem;" :class="{'btn': true, 'btn-warning': true, 'btn-block': true, 'mt-1': true, disabled: !questions[currentQuestion].userResponse}">Next 🡢</button>
        </div>
        <div class="text-center" v-else>
            <div class="card" style="width: 15rem; margin-right: auto;margin-left: auto;">
                You got {{ winCounter }}/{{ questions.length }}
            </div>
            
        </div>
    </div>
</template>

<style>
.center {
    margin-right: auto;
    margin-left: auto;
}
</style>