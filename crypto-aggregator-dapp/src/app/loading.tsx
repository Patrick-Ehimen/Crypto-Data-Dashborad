import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { placeholder } from "../../public/assets";

export default function LoadingContent() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col relative">
            <Image
              src={placeholder}
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        <h1 className="font-bold text-[30px]">Loading Please Wait</h1>
      </CardContent>
    </Card>
  );
}
