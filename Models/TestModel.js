import { Question } from './QuestionModel';

export class Test {
	constructor(questions, time) {
		this.Questions = [];
		questions.forEach(question => {
			this.Questions.push(new Question(question, time));
		});
		this.totalQuestions = this.Questions.length;
		this.totalTime = time * this.totalQuestions;
		this.currentScore = 0;
		this.currentQuestionNumber = 0;

	}
	getRandom() {
		return Math.floor(Math.random() * this.totalQuestions);
	}

	isDone() {
		return this.totalQuestions === this.currentQuestionNumber + 1;
	}
}
