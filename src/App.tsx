import React from 'react';
import './App.css';
import {graphql} from 'babel-plugin-relay/macro';
import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery, PreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const {Suspense} = React;

const FilmTitlesQuery = graphql`
  query AppFilmTitlesQuery {
    allFilms {
      films {
        id
        title
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, FilmTitlesQuery, {});

interface AppProps {
    preloadedQuery: PreloadedQuery<any>
}

function App(props: AppProps) {
    const data = usePreloadedQuery(FilmTitlesQuery, props.preloadedQuery);

    return (
        <div className="App">
            {
                data.allFilms.films.map((film: { id: string, title: string }) => {
                    return (
                        <p key={film.id}>{film.title}</p>
                    )
                })
            }
        </div>
    );
}

function AppRoot() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={'Loading...'}>
                <App preloadedQuery={preloadedQuery}/>
            </Suspense>
        </RelayEnvironmentProvider>
    );
}

export default AppRoot;
