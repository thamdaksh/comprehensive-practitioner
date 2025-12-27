import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";

export const Disclaimer = () => {
    return(
        <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ExclamationCircleIcon className="h-8 w-8 text-primary" />
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent >
          <h2>Disclaimer</h2>
          <CardDescription>
            <p className="mb-5">I would like to bring your attention to the following statement:</p>
            <p className="font-bold mb-8">"Comprehensive Practitioner is an independent entity and is not associated with VIT University".</p>
            <p className="text-justify">This website is designed to help students prepare effectively for their comprehensive examinations by providing a unified platform for practice and learning. It is intended solely for educational purposes.</p>
          </CardDescription>
        </CardContent>

        <CardFooter>
          <p className="font-bold">Strictly for Education purpose only!</p>
        </CardFooter>
      </Card>
    );
}