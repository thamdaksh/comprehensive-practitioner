import { Button, Radio, RadioGroup } from "@headlessui/react";
import type { Question } from "../data/questions";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export const Test = ({
  questions,
  onBack,
}: {
  questions: Question[];
  onBack: () => void;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionIndex) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <h1>Test Results</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">
                {percentage.toFixed(0)}%
              </div>
              <p className="text-xl">
                You scored {score} out of {questions.length}
              </p>
            </div>

            <div className="space-y-4">
              {questions.map((q, index) => {
                const userAnswer = selectedAnswers[q.id];
                const isCorrect = userAnswer === q.correctOptionIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border ${
                      isCorrect
                        ? "bg-green-50 dark:bg-green-950 border-green-500"
                        : "bg-red-50 dark:bg-red-950 border-red-500"
                    }`}
                  >
                    <p className="font-medium mb-2">
                      Q{index + 1}: {q.question}
                    </p>
                    <p className="text-sm">
                      Your answer:{" "}
                      {userAnswer !== undefined
                        ? q.options[userAnswer]
                        : "Not answered"}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Correct answer: {q.options[q.correctOptionIndex]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <Button
              onClick={onBack}
              className="w-full h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full flex-grow max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <Button
          onClick={onBack}
          className="flex items-center rounded-xl border p-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <ChevronLeftIcon className="size-4" />
          <p className="mr-2">Exit Test</p>
        </Button>
        <div className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>

      <Card className="p-4 mt-18">
        <CardHeader>
          <CardTitle className="flex items-center justify-center font-bold">
            Question {currentQuestionIndex + 1}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{currentQuestion.question}</p>

          <RadioGroup
            value={
              selectedAnswers[currentQuestion.id] !== undefined
                ? selectedAnswers[currentQuestion.id].toString()
                : ""
            }
            onChange={(value) => handleAnswerSelect(Number(value))}
          >
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Radio
                  key={index}
                  value={index.toString()}
                  className="group flex cursor-pointer items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50 text-foreground data-[checked]:border-blue-500 data-[checked]:bg-blue-50 data-[checked]:text-blue-900 dark:border-muted dark:hover:bg-muted/30 dark:data-[checked]:bg-blue-950 dark:data-[checked]:text-blue-100"
                >
                  <span className="flex-1">
                    <span className="font-medium mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </span>
                </Radio>
              ))}
            </div>
          </RadioGroup>

          <div className="flex justify-between gap-4">
            <Button
              className="w-50 h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="w-50 h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {currentQuestionIndex === questions.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
