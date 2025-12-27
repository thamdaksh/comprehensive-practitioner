import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { totalQuestions } from "../data/questions";
import { useState } from "react";

export const ExamMode = {
  Random: "Random",
  Sequential: "Sequential",
};

export type ExamModeType = (typeof ExamMode)[keyof typeof ExamMode];

export const ExamModeValues = Object.values(ExamMode);

type MockTestModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onStartTest: (mode: string, from: number, to: number) => void;
};

export const MockTestModal = ({
  isOpen,
  setIsOpen,
  onStartTest
}: MockTestModalProps) => {
  const[mode, setMode] = useState<ExamModeType>(ExamMode.Random);

  const [fromQuestion, setFromQuestion] = useState(1);
  const [toQuestion, setToQuestion] = useState(totalQuestions);


  const handleStartTest = () => {
    if (fromQuestion >= 1 && toQuestion <= totalQuestions && fromQuestion <= toQuestion) {
      onStartTest(mode, fromQuestion, toQuestion);
    }
  }
  
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 "
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-5">
        <DialogPanel className="sm:max-w-md border border-gray-600 rounded-xl max-w-lg space-y-4 bg-background border text-primary p-12 w-full">
          <DialogTitle className="font-bold flex items-center justify-center">
            Configure Mock Test
          </DialogTitle>
          <Description>
            Select the test mode and question range for your mock test.
          </Description>
          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <h5 className="font-bold">Test Mode</h5>
              <RadioGroup value={mode} onChange={setMode}>
                {ExamModeValues.map((examMode) => (
                  <Field key={examMode} className="flex items-center gap-2">
                    <Radio
                      value={examMode}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-blue-400"
                    ></Radio>
                    <Label>{examMode}</Label>
                  </Field>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold">Question Range</h5>
              <div className="flex items-center">
                <div>
                  <Field>
                    <Label
                      htmlFor="from"
                      className="text-xs text-muted-foreground"
                    >
                      From
                    </Label>
                    <Input
                      id="from"
                      type="number"
                      min={1}
                      value={fromQuestion}
                      max={totalQuestions - 10}
                      onChange={(e) => setFromQuestion(Number(e.target.value))}
                      className="mt-1 w-30 border border-gray-500 rounded-sm mx-1 p-1"
                    />
                  </Field>
                </div>
                <div>
                  <Field>
                    <Label
                      htmlFor="to"
                      className="text-xs text-muted-foreground ml-5"
                    >
                      To
                    </Label>
                    <Input
                      id="to"
                      type="number"
                      min={fromQuestion + 10}
                      value={toQuestion}
                      max={totalQuestions}
                      onChange={(e) => setToQuestion(Number(e.target.value))}
                      className="mt-1 w-30 border border-gray-500 rounded-sm mx-1 p-1"
                    />
                  </Field>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Total Questions: {totalQuestions}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              className="w-full h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="w-full h-10 rounded-[1vw] bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleStartTest}
            >
              Start Test
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
