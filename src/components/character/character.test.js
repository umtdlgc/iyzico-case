import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Character from './Character';

it('renders correctly', () => {
    const char = {
        id: 41,
        name: 'Big Boobed Waitress',
        status: 'Alive',
        species: 'Mythological Creature',
        type: '',
        gender: 'Female',
        origin: { name: 'Fantasy World', url: 'https://rickandmortyapi.com/api/location/48' },
        location: { name: 'Fantasy World', url: 'https://rickandmortyapi.com/api/location/48' },
        image: 'https://rickandmortyapi.com/api/character/avatar/41.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/5'],
        url: 'https://rickandmortyapi.com/api/character/41',
        created: '2017-11-05T10:13:45.960Z',
    };
    const lastFiveEpisode = [
        {
            id: 10,
            name: 'Close Rick-counters of the Rick Kind',
            air_date: 'April 7, 2014',
            episode: 'S01E10',
            url: 'https://rickandmortyapi.com/api/episode/10',
            created: '2017-11-10T12:56:34.747Z',
        },
        {
            id: 28,
            name: 'The Ricklantis Mixup',
            air_date: 'September 10, 2017',
            episode: 'S03E07',
            url: 'https://rickandmortyapi.com/api/episode/28',
            created: '2017-11-10T12:56:36.618Z',
        },
    ];
    const tree = renderer
        .create(
            <Router>
                <Character char={char} lastepisode={lastFiveEpisode}></Character>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
