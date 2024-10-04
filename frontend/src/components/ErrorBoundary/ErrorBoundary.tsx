import React, { ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    const resetState = (): void => {
      this.setState({ error: undefined });
    };

    this.state = {
      error: undefined,
      reset: resetState,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({
      error,
    });

    // use logger here
    console.log(error, info);
  }

  render(): React.ReactNode {
    if (this.state.error) {
      return <this.props.renderOnError {...this.state} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
