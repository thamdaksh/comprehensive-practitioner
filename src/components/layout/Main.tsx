import { useState } from "react";
import { Home } from "../Home";
import { Practice } from "../Practice";
import { Test } from "../Test";
import { questions } from "../../data/questions";

export const Layout = {
  Home: "Home",
  Test: "Test",
  Practice: "Practice",
};

export type LayoutType = (typeof Layout)[keyof typeof Layout];

export const Main = () => {
  const [currentLayout, setCurrentLayout] = useState<string>(Layout.Home);

  if (currentLayout == Layout.Test) {
    return <Test onBack={() => setCurrentLayout(Layout.Home)} />;
  }

  if (currentLayout == Layout.Practice) {
    return (
      <Practice
        questions={questions}
        onBack={() => setCurrentLayout(Layout.Home)}
      />
    );
  }
  return (
    <main className="flex-grow container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold my-4">Welcome VITians!</h2>
          <p className="text-xl text-muted-foreground">
            Choose your learning mode to get started
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
            <Home setLayout={setCurrentLayout} />
          </div>
        </div>
      </div>
    </main>
  );
};
