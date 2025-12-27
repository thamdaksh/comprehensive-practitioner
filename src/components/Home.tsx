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
import { MockTestModal } from "./MockTestModal";
import { Layout, type LayoutType } from "./layout/Main";
import { useState } from "react";

type HomeProps = {
  setLayout: (layout: LayoutType) =>void
  onStartTest: (mode: string, from: number, to: number) => void;
};

export const Home = ({ setLayout, onStartTest }: HomeProps) => {
  const [isMockTestModalOpen, setIsMockTestModalOpen] = useState(false);

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
        onStartTest={onStartTest}
      />
    </>
  );
};
