"use client";

export default function Error({
  error,
  reset, 
}: {
  error: Error;
  reset: () => void; // no reset hence its void
}) {
  return <div>
        <h2>Something went wrong.</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
  </div>;
}
