import { Router } from "./router";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import { createStore } from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorScreen: React.FC = () => {
  return <div>Something went wrong!</div>;
};

const App: React.FC = () => {
  const store = createStore();

  return (
    <Provider store={store}>
      <ErrorBoundary renderOnError={ErrorScreen}>
        <Router />
        <ToastContainer position="bottom-right" theme="dark" />
      </ErrorBoundary>
    </Provider>
  );
};

export { App };
