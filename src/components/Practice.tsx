import { useState } from "react";
import type { Question } from "../data/questions";
import { Button } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { scrollToTop } from "../utils/utils";

interface PracticeProps {
  questions: Question[];
  onBack: () => void;
}

export const Practice = ({ questions, onBack }: PracticeProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(questions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <Button
          onClick={onBack}
          className="flex items-center rounded-xl border p-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <ChevronLeftIcon className="size-4" />
          <p className="mr-2">Back to Home</p>
        </Button>
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      <div className="space-y-6">
        {currentQuestions.map((q, index) => (
          <Card key={q.id} className="p-2 mb-5">
            <CardHeader>
              <CardTitle className="p-3">
                <span className="font-semibold">
                  Question {startIndex + index + 1}:
                </span>{" "}
                {q.isQuestionContainsCoding ? <pre>{q.question}</pre> : <p>{q.question}</p>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {q.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`m-5 p-3 rounded-lg border transition-colors ${
                      optionIndex === q.correctOptionIndex
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
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          className="flex items-center rounded-xl border p-2 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="size-4" />
          <p className="mr-2">Previous</p>
        </Button>

        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>

        <Button
          className="flex items-center rounded-xl border p-2 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <p className="ml-2">Next</p>
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};
