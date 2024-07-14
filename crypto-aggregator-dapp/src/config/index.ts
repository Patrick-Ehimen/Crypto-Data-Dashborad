import { ChartConfig } from "@/components/ui/chart";
const { millify } = require("millify");

export const millifyConfig = {
  precision: 8, // Adjust this number based on how many decimal places i want to keep
};

export const priceChangePercentageMillifyConfig = {
  precision: 2,
};

export const priceChangeMillifyConfig = {
  precision: 5,
};

export const chartConfig = {
  views: {
    label: "Page Views",
  },
  usd: {
    label: "$USD",
    color: "hsl(var(--chart-1))",
  },
  btc: {
    label: "$BTC",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
