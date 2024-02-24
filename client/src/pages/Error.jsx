import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="errorPage">
            <div className="errorTitle">
                <h1>
                    Oops!
                </h1>
            </div>
            <div className="errorBody">
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}
