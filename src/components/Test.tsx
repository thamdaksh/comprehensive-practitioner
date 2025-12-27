import { Button } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export const Test = ({ onBack }: { onBack: () => void }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Button
          onClick={onBack}
          className="flex items-center rounded-xl border p-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <ChevronLeftIcon className="size-4" />
          <p className="mr-2">Back to Home</p>
        </Button>
      </div>
    </>
  );
};
