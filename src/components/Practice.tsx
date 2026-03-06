import { useState } from "react";
import type { Question } from "../data/questions";
import { Button, Field, Input } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { scrollToTop } from "../utils/utils";
import { QuestionCard } from "./QuestionCard";

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
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
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
          <QuestionCard
            key={q.id}
            questionNumber={startIndex + index + 1}
            questionObject={q}
          />
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
          <div>
            <Field>
              <Input
                id="goto"
                type="number"
                min={1}
                value={currentPage}
                max={totalPages}
                onChange={(event) =>
                  goToPage(Number(event.currentTarget.value))
                }
                className="h-8 pl-2 w-20 border border-gray-500 rounded-md text-center mb-1"
              />
            </Field>
          </div>
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
