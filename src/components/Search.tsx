import { Button } from "@headlessui/react";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { questions, type Question } from "../data/questions";
import { QuestionCard } from "./QuestionCard";

interface SearchProps {
  onBack: () => void;
}

export const Search = ({ onBack }: SearchProps) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Question[] | null>(null);

  const handleSearch = (): void => {
    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery) {
      const filteredResult = questions.filter((question) =>
        question.question.toLowerCase().includes(trimmedQuery),
      );
      setResult(filteredResult);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="flex justify-center items-start flex-grow container mx-auto">
      <div className="w-full">
        <div className="flex gap-2 my-4">
          <Button
            onClick={onBack}
            className="flex items-center rounded-xl border p-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ChevronLeftIcon className="size-4" />
            <p className="mr-2">Home</p>
          </Button>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setResult([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          <Button
            onClick={handleSearch}
            className="flex items-center rounded-xl border bg-primary-500 text-primary px-4 py-2 hover:bg-green-600 hover:text-primary transition"
          >
            <MagnifyingGlassIcon className="size-4 mr-1" />
            Search
          </Button>
        </div>

        {/* Result Section */}
        {result && result.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground text-center w-full pb-4">
              Search Result: {result.length}
            </p>
            {result.map((q) => (
              <QuestionCard
                key={q.id}
                questionNumber={q.id}
                questionObject={q}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
