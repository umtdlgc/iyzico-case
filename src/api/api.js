export default {
    getList(pagination) {
        const headers = { 'Content-Type': 'application/json' };
        fetch('https://rickandmortyapi.com/api/character?page=' + pagination.pages + '&count=' + pagination.count + '', { headers })
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
};
