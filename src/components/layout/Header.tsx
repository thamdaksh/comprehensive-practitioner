import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  return (
    <header>
      <div className="container px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Comprehensive Practitioner</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
