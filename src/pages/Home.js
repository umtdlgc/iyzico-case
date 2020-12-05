import React, { useEffect, useState, useRef, useContext } from 'react';
import Context from './../context/store';
import List from '../components/list/list';
const Home = (props) => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState('');

    const loader = useRef(null);

    useEffect(() => {
        if (isLoading) {
            let url = state.pagination == null ? state.api : state.pagination.next;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        setHasError(data.error);
                    } else {
                        dispatch({ type: 'SET_CHARACTERS', value: data.results });
                        dispatch({ type: 'SET_PAGINATION', value: data.info });
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setIsLoading(true);
        }
    };
    if (hasError != '') {
        return (
            <div id="app">
                <div className="errorMessage">{hasError}</div>
            </div>
        );
    } else {
        return (
            <div id="app">
                <List items={state.characters} />
                <div className="loader" ref={loader}>
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>
        );
    }
};
export default Home;
