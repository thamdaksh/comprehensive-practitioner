import logo from '../../assets/thamdaksh.png';

export const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-16 h-16 rounded-full bg-white transition-transform duration-300 hover:scale-110"
            src={logo}
          />
        </div>
        <div className="mt-2">
          <p>
            Made by <span className="font-semibold">thamdhaksh</span>
          </p>
          <p className="mt-1">Once a VITian, Always a VITian!</p>
          <p className="mt-2">Strictly for education purpose only</p>
        </div>
      </div>
    </footer>
  );
};
