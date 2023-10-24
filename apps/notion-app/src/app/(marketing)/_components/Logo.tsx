import Image from "next/image";
import { cn } from "notion-ui";

type Props = {
  hideLogo?: boolean;
};

const Logo = (props: Props) => {
  return (
    <div
      className={cn("flex items-center gap-x-2", props.hideLogo && "hidden")}
    >
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      <p className="font-semibold">Notion</p>
    </div>
  );
};

export default Logo;
