import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button, cn } from "notion-ui";
import Logo from "./_components/Logo";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div
        className={cn([
          "flex flex-col items-center justify-center md:justify-start gap-y-8 flex-1",
          "px-6 pb-10 text-center",
        ])}
      >
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Your Ideas, Documents & Plans. Unified. Welcome to{" "}
            <span className="underline">Notion</span>
          </h1>
          <h3 className="text-base sm:text-xl md:text-2xl">
            Notion is a Connected Workspace where <br /> where better, faster
            work happens.
          </h3>
          <Button>
            Enter Notion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center max-w-5xl">
          <div className="flex items-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
              <Image
                src="/documents.png"
                alt="Documents"
                fill={true}
                className="object-contain dark:hidden"
              />
              <Image
                src="/documents-dark.png"
                alt="Documents"
                fill={true}
                className="object-contain hidden dark:block"
              />
            </div>
            <div className="relative h-[400px] w-[400px] hidden md:block">
              <Image
                src="/reading.png"
                alt="Reading"
                fill={true}
                className="object-contain dark:hidden"
              />
              <Image
                src="/reading-dark.png"
                alt="Reading"
                fill={true}
                className="object-contain hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
        <Logo hideLogo={true} />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center  gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms and Conditions
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default MarketingPage;
