//import  from"Helpers/Questions";

export class Question {

	constructor({Question = '', correctAnswer = 0, options = []}, limit = 30) {
		this.timeLimit = limit;
		this.statement = Question;
		this.answer = correctAnswer;
		this.options = options;
	}
	checkAnswer (option) {
		return this.answer === option;
	}
}
