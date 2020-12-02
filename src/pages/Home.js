import React, { useEffect, useState, useRef, useContext } from "react";
import Context from "./../context/store";
import List from "./../components/list";
function Home() {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);

    const loader = useRef(null);

    
    useEffect(() => {
        if(isLoading){
            let url = state.pagination == null ? 'https://rickandmortyapi.com/api/character?page=1&count=20' : state.pagination.next+'&count=20'
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:'SET_CHARACTERS',value:data.results})
                dispatch({type:'SET_PAGINATION',value:data.info})
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
            rootMargin: "20px",
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
            setIsLoading(true)
        }
    };

    return (
        <div id="app">
            <List items={state.characters} />
            <div className="loading" ref={loader}>
                <h2>Load More</h2>
            </div>
        </div>
    );
}
export default Home;
