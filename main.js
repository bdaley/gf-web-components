import { defineCustomElement } from 'vue'

import GFTriviaQuestion from './components/GFTriviaQuestion.ce.vue'

const GFTriviaComponent = defineCustomElement(GFTriviaQuestion)

// export individual elements
export { GFTriviaComponent }

// export function register() {
customElements.define('gf-trivia', GFTriviaComponent)
