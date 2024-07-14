import Link from "next/link";

export function Footer() {
  return (
    <div className="z-20 w-full py-4 md:py-0 bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs  md:text-sm leading-loose text-muted-foreground text-left">
          Built for the superteam earn competition. App still under development,
          will be concluded after the competition{" "}
          <Link
            href="https://github.com/Patrick-Ehimen/Crypto-Data-Dashborad"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
