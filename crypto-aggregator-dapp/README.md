## Crypto Aggregator DApp

This project is a web3 data aggregator Decentralized Application (DApp) built using Next.js and React. It provides users with a user-friendly and modern UI for aggregating web3 data. The DApp is designed to be responsive on both desktop and mobile devices. Its worth noting that this DApp is still under development and will be completed after the competion, however the key refer is the fetching of data using the CoinGecko API

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Patrick-Ehimen/Crypto-Data-Dashborad.git
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Run the development server:

   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Features

- Aggregates data from coin-gecko api.
- Provides a clean and intuitive user interface.
- Supports responsive design for mobile and desktop.

### Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript
- Millify
- Framer Motion

### Folder Structure

- `src/`: Contains the main source code for the application.
- `public/`: Includes static assets like images and SVG icons.
- `components/`: Reusable UI components used throughout the application.
- `features/`: Contains specific features like coins data and details components.
- `app/`: Includes layout components and global styles.

### Deployment

The DApp has been deployed using Vercel. Here is the link to the Dapp [Crypto Aggregator DApp](crypto-port-radar.vercel.app).

### Data Fetching

To fetch data from the CoinGecko API in the project, you can refer to the following files:
Fetching Data from CoinGecko API:

1. In the file crypto-aggregator-dapp/src/features/coins-data.tsx, the CoinsData component fetches data from the CoinGecko API using fetch:

```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-CMC_PRO_API_KEY": process.env.COIN_GECKO_API_KEY || "",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Failed to load coins data:", error);
    }
  };

  fetchData();
}, []);
```

In the avove code snippet,the `useEffect` hook, a function `fetchData` is defined to fetch data from the CoinGecko API. It sends a GET request to retrieve market data for cryptocurrencies in USD. If the response is successful, the data is set using `setData`. If there's an error during the fetch, it's caught and logged to the console.
This effect runs once on mount due to the empty dependency array `[]`.

The fetched data is returned as a list of cryptocurrencies with their corresponding details such as name, symbol, current price, market cap, 24-hour percentage change, circulating supply percentage, and all-time high. This data is mapped over to display each cryptocurrency in a table format with the option to view more details for a selected coin.

2.Fetching Coin Details from CoinGecko API:
The CoinsDetails component in crypto-aggregator-dapp/src/features/coins-data/coins-details.tsx fetches detailed information about a specific coin from the CoinGecko API:

```typescript
const [coinData, setCoinData] = useState<any>(null);

useEffect(() => {
  const fetchCoinDetails = async () => {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&sparkline=true`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setCoinData(data);
    } catch (error) {
      console.error("Failed to load coin details:", error);
    }
  };

  fetchCoinDetails();
}, [id]); // Re-fetch data if the id prop changes

if (!coinData) {
  return (
    <div>
      <LoadingContent />
    </div>
  );
}
```

The code snippet above is a React component that fetches coin details from an API using the fetch function when the id prop changes. It then sets the retrieved data in the component's state. If coinData is not yet available, it displays a loading indicator. Once the data is fetched, it renders various details about the coin including its name, price, rank, description, website, whitepaper link, and explorer links.

These files and code snippets demonstrate how you can make API requests to CoinGecko to retrieve cryptocurrency data in your application.

### Feedback

Your feedback and contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

### License

This project is licensed under the MIT License.
