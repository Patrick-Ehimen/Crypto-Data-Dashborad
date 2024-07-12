import { Card, CardContent } from "@/components/ui/card";
import { MarketOverviewBentoGrid } from "@/features/market-overview-bento-grid";

export default async function OverviewContent() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <MarketOverviewBentoGrid />
        </div>
      </CardContent>
    </Card>
  );
}
