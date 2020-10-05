export const intro = [
	{detailFor: "main",
		detail:{
		header: "HR Screening",
		points: ["HR Screening is the test for new candidates, who came to give interview.", "Press start button to begin the test."]
	}
},
	{detailFor: "technical",
		detail:{
			header: "Technical",
			points: ["This is technical portion of your test, We will be testing your technical knowledge.", "Press start button to begin the test."]
		}
	},
	{detailFor: "analytical",
		detail:{
			header: "Analytical",
			points: ["This is analytical portion of your test, We will be testing your analytical knowledge.", "Press start button to begin the test."]
		}
	},
	{detailFor: "personality",
		detail:{
			header: "Personality",
			points: ["This is personality test, You will be judged according to your choice.", "Press start button to begin the test."]
		}
	}];
export const testOption = {header: "HR Screening", testsTypes: ["Technical Test", "Analytical Test", "Personality Test"]};
export const QuestionView = {index: Number, QuestionStatement: "", Options: [], time: ""};
