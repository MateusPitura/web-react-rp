import React, { ErrorInfo } from "react";
import { Childrenable } from "@/global/types";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  Childrenable,
  ErrorBoundaryState
> {
  constructor(props: Childrenable) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
          <span className="text-light-primary text-display-large">
            Algo deu errado
          </span>
          <span className="text-light-onSurface text-headline-large">
            Por favor, recarregue a página e tente novamente
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
