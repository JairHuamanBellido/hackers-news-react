import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./router/Router";
import "./sass/main.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
