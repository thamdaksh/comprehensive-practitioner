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
import type { Dispatch, SetStateAction } from "react";
import { Layout } from "./layout/Main";

export const ExamMode = {
  Random: "Random",
  Sequential: "Sequential",
};

export type ExamModeType = (typeof ExamMode)[keyof typeof ExamMode];

export const ExamModeValues = Object.values(ExamMode);

export type QuestionRangeType = {
  from: number;
  to: number;
};

type MockTestModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  mode: ExamModeType;
  setMode: (value: ExamModeType) => void;
  range: QuestionRangeType;
  setRange: Dispatch<SetStateAction<QuestionRangeType>>;
  setCurrentLayout: (value: string) => void;
};

export const MockTestModal = ({
  isOpen,
  setIsOpen,
  mode,
  setMode,
  range,
  setRange,
  setCurrentLayout,
}: MockTestModalProps) => {
  const updateRange = (key: keyof QuestionRangeType, value: number) => {
    setRange((prev: QuestionRangeType) => ({ ...prev, [key]: value }));
  };

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
              <h5>Test Mode</h5>
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
              <h5>Question Range</h5>
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
                      value={range.from}
                      max={totalQuestions + 10}
                      onChange={(e) => updateRange("from", +e.target.value)}
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
                      min={range.from + 10}
                      value={range.to}
                      max={totalQuestions}
                      onChange={(e) => updateRange("to", +e.target.value)}
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
              onClick={() => setCurrentLayout(Layout.Test)}
            >
              Start Test
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
