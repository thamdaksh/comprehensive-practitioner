import { useEffect, useState } from "react";
import type { Question } from "../data/questions";
import { prettify } from "../utils/utils";
import { Card, CardContent, CardTitle, CardHeader } from "./ui/Card";

interface QuestionProps {
  questionNumber: number;
  questionObject: Question;
}

export const QuestionCard = ({
  questionNumber,
  questionObject,
}: QuestionProps) => {
  const [formattedCode, setFormattedCode] = useState<string | null>(null);

  useEffect(() => {
    async function formatCode() {
      if (questionObject.coding) {
        const formatted = await prettify(questionObject.coding);
        setFormattedCode(formatted);
        console.log(formatted)
      }
    }

    formatCode();
  }, [questionObject.coding]);

  return (
    <Card className="p-2 mb-5">
      <CardHeader>
        <CardTitle className="p-3">
          <span className="font-semibold">Question {questionNumber}:</span>{" "}
          {questionObject.isQuestionContainsCoding ? (
            questionObject.coding ? (
              <>
                <p>{questionObject.question}</p>
                <pre>{formattedCode ?? questionObject.coding}</pre>
              </>
            ) : (
              <pre>{questionObject.question}</pre>
            )
          ) : (
            <p>{questionObject.question}</p>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {questionObject.options.map((option, optionIndex) => (
            <div
              key={optionIndex}
              className={`m-5 p-3 rounded-lg border transition-colors ${
                optionIndex === questionObject.correctOptionIndex
                  ? "bg-green-50 dark:bg-green-950 border-green-500"
                  : "bg-muted/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>
                  <span className="font-medium mr-2">
                    {String.fromCharCode(65 + optionIndex)}.
                  </span>
                  {option}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
