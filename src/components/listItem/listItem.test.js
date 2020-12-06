import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ListItem from './listItem';

it('renders correctly', () => {
    const data = {
        id: 19,
        name: 'Antenna Rick',
        status: 'unknown',
        species: 'Human',
        type: 'Human with antennae',
        gender: 'Male',
        origin: { name: 'unknown', url: '' },
        location: { name: 'unknown', url: '' },
        image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/10'],
        url: 'https://rickandmortyapi.com/api/character/19',
        created: '2017-11-04T22:28:13.756Z',
    };
    const tree = renderer
        .create(
            <Router>
                <ListItem value={data} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
