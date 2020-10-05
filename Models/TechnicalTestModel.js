import {technicalQuestions} from "../Helpers/Questions";
import {Test} from "./TestModel";

export class TechnicalTest extends Test{
	constructor() {
		super(technicalQuestions.questions, technicalQuestions.timeDuration);
	}
}
