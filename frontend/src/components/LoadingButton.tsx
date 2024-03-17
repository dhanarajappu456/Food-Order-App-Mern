import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const LoadingButton = () => {
  return (
    <Button className="bg-orange-500 hover:bg-orange-400">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </Button>
  );
};

export default LoadingButton;
