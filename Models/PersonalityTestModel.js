import {personalityQuestions} from "../Helpers/Questions";
import {Test} from "./TestModel";

export class PersonalityTest extends Test{
	constructor() {
		super(personalityQuestions.questions, personalityQuestions.timeDuration);
	}
}
