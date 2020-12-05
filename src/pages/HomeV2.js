import React, { useEffect, useState, useRef, useContext } from 'react';
import Context from '../context/store';
import List from './../components/list/list';
import { useHistory } from 'react-router-dom';
const Home = (props) => {
    const history = useHistory();
    const { state, dispatch } = useContext(Context);
    const [nextLoading, setNextLoading] = useState(false);
    const [prevLoading, setPrevLoading] = useState(false);
    const [prevInfinitiFlag, setPrevInfinitiFlag] = useState(false);
    const [hasError, setHasError] = useState('');
    const [characters, setCharacters] = useState([]);
    const loaderNext = useRef(null);
    const loaderPrev = useRef(null);
    const page = parseInt(props.match.params.id);

    useEffect(() => {
        if (nextLoading && state.pageInfo.next != null) {
            let url = state.api + '?page=' + state.pageInfo.next;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        setHasError(data.error);
                    } else {
                        setCharacters([...characters, ...data.results]);
                        dispatch({ type: 'SET_PAGEINFO_CURRENT_PAGE', value: state.pageInfo.next });
                        if (data.info.next != null) {
                            dispatch({ type: 'SET_PAGEINFO_NEXT', value: state.pageInfo.next + 1 });
                        } else {
                            dispatch({ type: 'SET_PAGEINFO_NEXT', value: null });
                        }
                        if (state.pageInfo.prev == null && !prevInfinitiFlag) {
                            dispatch({ type: 'SET_PAGEINFO_PREV', value: state.pageInfo.currentPage - 1 });
                        }
                        setNextLoading(false);
                        const observerOptions = {
                            root: null,
                            rootMargin: '20px',
                            threshold: 1.0,
                        };
                        let listItems = document.querySelectorAll('.list-item-box');
                        const listObserver = new IntersectionObserver(listHandleObserver, observerOptions);
                        listItems.forEach((x) => {
                            listObserver.observe(x);
                        });
                    }
                })
                .catch((err) => {
                    setNextLoading(false);
                });
        }
        if (prevLoading && state.pageInfo.prev != null) {
            let url = state.api + '?page=' + state.pageInfo.prev;
            const firstItemInView = document.querySelectorAll('.list-item-box')[0];
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setCharacters([...data.results, ...characters]);
                    const { top, right, bottom, left } = firstItemInView.getBoundingClientRect();
                    window.scrollTo(0, top);
                    dispatch({ type: 'SET_PAGEINFO_CURRENT_PAGE', value: state.pageInfo.prev });
                    if (data.info.prev != null) {
                        dispatch({ type: 'SET_PAGEINFO_PREV', value: state.pageInfo.currentPage - 1 });
                    } else {
                        dispatch({ type: 'SET_PAGEINFO_PREV', value: null });
                    }
                    setPrevLoading(false);
                    const observerOptions = {
                        root: null,
                        rootMargin: '20px',
                        threshold: 1.0,
                    };
                    let listItems = document.querySelectorAll('.list-item-box');
                    const listObserver = new IntersectionObserver(listHandleObserver, observerOptions);
                    listItems.forEach((x) => {
                        listObserver.observe(x);
                    });
                })
                .catch((err) => {
                    setPrevLoading(false);
                });
        }
    }, [nextLoading, prevLoading]);

    useEffect(() => {
        if (page !== undefined) {
            dispatch({ type: 'SET_PAGEINFO_CURRENT_PAGE', value: page });
            dispatch({ type: 'SET_PAGEINFO_NEXT', value: page });
        }
        var options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };
        const nextObserver = new IntersectionObserver(nextHandleObserver, options);

        if (loaderNext.current) {
            nextObserver.observe(loaderNext.current);
        }
    }, []);
    useEffect(() => {
        if (prevInfinitiFlag) {
            var options = {
                root: null,
                rootMargin: '20px',
                threshold: 1.0,
            };
            const prevObserver = new IntersectionObserver(prevHandleObserver, options);
            if (loaderPrev.current) {
                prevObserver.observe(loaderPrev.current);
            }
        }
    }, [prevInfinitiFlag]);
    const nextHandleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setNextLoading(true);
        }
    };
    const prevHandleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPrevLoading(true);
        }
    };
    const loadPreviousPage = () => {
        setPrevLoading(true);
        setPrevInfinitiFlag(true);
    };
    const listHandleObserver = (entities) => {
        for (const entry of entities) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                let id = entry.target.dataset.id;
                let currentPage = Math.ceil(id / 20);
                history.push('page=' + currentPage);
            }
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
                {state.pageInfo.prev != null && !prevInfinitiFlag ? (
                    <button onClick={loadPreviousPage} className="loadPrev">
                        Load Prev
                    </button>
                ) : (
                    ''
                )}
                {state.pageInfo.prev != null && prevInfinitiFlag ? (
                    <div className="loader" ref={loaderPrev}>
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                ) : (
                    ''
                )}

                <List items={characters} />
                {state.pageInfo.next != null ? (
                    <div className="loader" ref={loaderNext}>
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
};
export default Home;
