import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="space-y-2">
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}