import { useState } from "react";
import { Home } from "../Home";
import { Practice } from "../Practice";
import { Test } from "../Test";
import { questions } from "../../data/questions";
import { ExamMode } from "../MockTestModal";
import { Disclaimer } from "../Disclaimer";
import { Button } from "@headlessui/react";
import { Search } from "../Search";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const Layout = {
  Home: "Home",
  Test: "Test",
  Practice: "Practice",
  Search: "Search"
};

export type LayoutType = (typeof Layout)[keyof typeof Layout];

export const Main = () => {
  const [currentLayout, setCurrentLayout] = useState<string>(Layout.Home);

  const [mockTestQuestions, setMockTestQuestions] = useState(questions);

  const handleStartMockTest = (testMode: string, from: number, to: number) => {
    const selectedQuestions = questions.slice(from - 1, to);

    if (testMode === ExamMode.Random) {
      const shuffled = [...selectedQuestions].sort(() => Math.random() - 0.5);
      const top100Questions = shuffled.length > 100 ? shuffled.slice(0, 100) : shuffled;
      setMockTestQuestions(top100Questions);
    } else {
      setMockTestQuestions(selectedQuestions);
    }

    setCurrentLayout(Layout.Test);
  };

  if (currentLayout == Layout.Test) {
    return <Test questions={mockTestQuestions}
      onBack={() => setCurrentLayout(Layout.Home)} />;
  }

  if (currentLayout == Layout.Practice) {
    return (
      <Practice
        questions={questions}
        onBack={() => setCurrentLayout(Layout.Home)}
      />
    );
  }

    if (currentLayout == Layout.Search) {
    return (
      <Search onBack={() => setCurrentLayout(Layout.Home)}/>
    );
  }
  return (
    <main className="flex-grow container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold my-4 pt-4">Welcome VITians!</h2>
          <p className="text-xl text-muted-foreground">
            Choose your learning mode to get started
          </p>
          <div className="grid grid-cols-1 gap-4 my-20 justify-items-center">
            <Button
              className="flex items-center rounded-xl border bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
              onClick={() => setCurrentLayout(Layout.Search)}
            >
              <MagnifyingGlassIcon className="size-5" />
              {"Quick Search"}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">

            <Home setLayout={setCurrentLayout} onStartTest={handleStartMockTest} />
          </div>
          <Disclaimer />
        </div>
      </div>
    </main>
  );
};
