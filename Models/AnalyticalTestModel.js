import {analyticalQuestions} from "../Helpers/Questions";
import {Test} from "./TestModel";

export class AnalyticalTest extends Test{
	constructor() {
		super(analyticalQuestions.questions, analyticalQuestions.timeDuration);
	}
}
