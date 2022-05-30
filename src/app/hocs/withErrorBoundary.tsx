import * as React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div className="h-screen grid items-center justify-center">
    <div className="text-center">
      <div className="text-2xl text-red-500">Something went wrong</div>
      <div className="text-gray-400 text-xs text-red-500">{error.message}</div>
      <button
        className="text-gray-400 text-xs underline mt-4"
        onClick={resetErrorBoundary}
      >
        Reload page
      </button>
    </div>
  </div>
);

const withErrorBoundary = (component: () => React.ReactNode) => () => {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => window.location.reload()}
    >
      {component()}
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
