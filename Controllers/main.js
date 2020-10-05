//import {Exam} from "../Models/Exam.js";

const exam = require("../Models/Exam.js");

const Screening = new exam.Exam();
let userSelection = -1;

function onStart(){
	console.log(Screening);
}
