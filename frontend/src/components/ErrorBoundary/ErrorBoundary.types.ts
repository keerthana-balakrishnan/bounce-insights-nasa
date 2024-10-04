import { PropsWithChildren } from "react";

type ErrorBoundaryProps = PropsWithChildren<{
  renderOnError: React.ComponentType<ErrorBoundaryState>;
}>;

type ErrorBoundaryState = {
  error?: Error;
  reset?: () => void;
};

export type { ErrorBoundaryProps, ErrorBoundaryState };
