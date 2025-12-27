import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/Card";
import { Button } from "@headlessui/react";
import { BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ExamMode, MockTestModal } from "./MockTestModal";
import type { QuestionRangeType } from "./MockTestModal";
import { totalQuestions } from "../data/questions";
import { Layout, type LayoutType } from "./layout/Main";

type HomeProps = {
  setLayout: (value: LayoutType) => void;
};

export const Home = ({ setLayout }: HomeProps) => {
  const [isMockTestModalOpen, setIsMockTestModalOpen] = useState(false);
  const [examMode, setExamMode] = useState(ExamMode.Random);
  const [questionRange, setQuestionRange] = useState<QuestionRangeType>({
    from: 1,
    to: totalQuestions,
  });
  return (
    <>
      <Card className="md:w-90 lg:w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <AcademicCapIcon className="h-8 w-8 text-primary" />
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h2>Mock Test</h2>
          <CardDescription>
            <p>Take a test with customizable settings.</p>
            <p>Choose between random or sequential questions.</p>
          </CardDescription>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsMockTestModalOpen(true)}
          >
            Start Mock Test
          </Button>
        </CardFooter>
      </Card>

      <Card className="md:w-90 lg:w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <BookOpenIcon className="h-8 w-8 text-primary" />
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h2>Practice</h2>
          <CardDescription>
            <p>Browse through all questions with answers.</p>
            <p>Perfect for learning and revision.</p>
          </CardDescription>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setLayout(Layout.Practice)}
          >
            Start Practice
          </Button>
        </CardFooter>
      </Card>

      <MockTestModal
        isOpen={isMockTestModalOpen}
        setIsOpen={setIsMockTestModalOpen}
        mode={examMode}
        setMode={setExamMode}
        range={questionRange}
        setRange={setQuestionRange}
        setCurrentLayout={setLayout}
      />
    </>
  );
};
