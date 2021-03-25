import * as React from 'react';
import { QueryCache, QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function Blog() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

function App() {
  
  return (
    <>

    </>
  )
}