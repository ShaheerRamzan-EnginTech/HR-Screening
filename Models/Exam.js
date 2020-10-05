import { AnalyticalTest } from "./AnalyticalTestModel";
import { PersonalityTest } from "./PersonalityTestModel";
import { TechnicalTest } from "./TechnicalTestModel";

export class Exam {
	constructor(){
	this.Tests = [new TechnicalTest, new AnalyticalTest, new PersonalityTest];
	this.testStatus = [-1, -1, -1]; // -1 for un-attempt, 0 is for currently going on, 1 for completed.
	}

}
