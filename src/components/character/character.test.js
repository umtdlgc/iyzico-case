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
    const lastepisode = [
        [
            {
                id: 10,
                name: 'Close Rick-counters of the Rick Kind',
                air_date: 'April 7, 2014',
                episode: 'S01E10',
                characters: [
                    'https://rickandmortyapi.com/api/character/1',
                    'https://rickandmortyapi.com/api/character/2',
                    'https://rickandmortyapi.com/api/character/3',
                    'https://rickandmortyapi.com/api/character/4',
                    'https://rickandmortyapi.com/api/character/5',
                    'https://rickandmortyapi.com/api/character/7',
                    'https://rickandmortyapi.com/api/character/14',
                    'https://rickandmortyapi.com/api/character/15',
                    'https://rickandmortyapi.com/api/character/18',
                    'https://rickandmortyapi.com/api/character/19',
                    'https://rickandmortyapi.com/api/character/21',
                    'https://rickandmortyapi.com/api/character/22',
                    'https://rickandmortyapi.com/api/character/27',
                    'https://rickandmortyapi.com/api/character/39',
                    'https://rickandmortyapi.com/api/character/53',
                    'https://rickandmortyapi.com/api/character/77',
                    'https://rickandmortyapi.com/api/character/78',
                    'https://rickandmortyapi.com/api/character/79',
                    'https://rickandmortyapi.com/api/character/82',
                    'https://rickandmortyapi.com/api/character/83',
                    'https://rickandmortyapi.com/api/character/84',
                    'https://rickandmortyapi.com/api/character/85',
                    'https://rickandmortyapi.com/api/character/86',
                    'https://rickandmortyapi.com/api/character/103',
                    'https://rickandmortyapi.com/api/character/113',
                    'https://rickandmortyapi.com/api/character/118',
                    'https://rickandmortyapi.com/api/character/119',
                    'https://rickandmortyapi.com/api/character/152',
                    'https://rickandmortyapi.com/api/character/164',
                    'https://rickandmortyapi.com/api/character/177',
                    'https://rickandmortyapi.com/api/character/209',
                    'https://rickandmortyapi.com/api/character/215',
                    'https://rickandmortyapi.com/api/character/232',
                    'https://rickandmortyapi.com/api/character/242',
                    'https://rickandmortyapi.com/api/character/274',
                    'https://rickandmortyapi.com/api/character/285',
                    'https://rickandmortyapi.com/api/character/290',
                    'https://rickandmortyapi.com/api/character/294',
                    'https://rickandmortyapi.com/api/character/295',
                    'https://rickandmortyapi.com/api/character/298',
                    'https://rickandmortyapi.com/api/character/299',
                    'https://rickandmortyapi.com/api/character/329',
                    'https://rickandmortyapi.com/api/character/330',
                    'https://rickandmortyapi.com/api/character/339',
                    'https://rickandmortyapi.com/api/character/349',
                    'https://rickandmortyapi.com/api/character/359',
                    'https://rickandmortyapi.com/api/character/381',
                    'https://rickandmortyapi.com/api/character/389',
                    'https://rickandmortyapi.com/api/character/405',
                    'https://rickandmortyapi.com/api/character/424',
                    'https://rickandmortyapi.com/api/character/425',
                    'https://rickandmortyapi.com/api/character/426',
                    'https://rickandmortyapi.com/api/character/427',
                    'https://rickandmortyapi.com/api/character/428',
                    'https://rickandmortyapi.com/api/character/429',
                    'https://rickandmortyapi.com/api/character/430',
                    'https://rickandmortyapi.com/api/character/431',
                    'https://rickandmortyapi.com/api/character/432',
                    'https://rickandmortyapi.com/api/character/433',
                    'https://rickandmortyapi.com/api/character/434',
                    'https://rickandmortyapi.com/api/character/663',
                ],
                url: 'https://rickandmortyapi.com/api/episode/10',
                created: '2017-11-10T12:56:34.747Z',
            },
            {
                id: 28,
                name: 'The Ricklantis Mixup',
                air_date: 'September 10, 2017',
                episode: 'S03E07',
                characters: [
                    'https://rickandmortyapi.com/api/character/1',
                    'https://rickandmortyapi.com/api/character/2',
                    'https://rickandmortyapi.com/api/character/4',
                    'https://rickandmortyapi.com/api/character/8',
                    'https://rickandmortyapi.com/api/character/18',
                    'https://rickandmortyapi.com/api/character/22',
                    'https://rickandmortyapi.com/api/character/27',
                    'https://rickandmortyapi.com/api/character/43',
                    'https://rickandmortyapi.com/api/character/44',
                    'https://rickandmortyapi.com/api/character/48',
                    'https://rickandmortyapi.com/api/character/56',
                    'https://rickandmortyapi.com/api/character/61',
                    'https://rickandmortyapi.com/api/character/72',
                    'https://rickandmortyapi.com/api/character/73',
                    'https://rickandmortyapi.com/api/character/74',
                    'https://rickandmortyapi.com/api/character/78',
                    'https://rickandmortyapi.com/api/character/85',
                    'https://rickandmortyapi.com/api/character/86',
                    'https://rickandmortyapi.com/api/character/118',
                    'https://rickandmortyapi.com/api/character/123',
                    'https://rickandmortyapi.com/api/character/135',
                    'https://rickandmortyapi.com/api/character/143',
                    'https://rickandmortyapi.com/api/character/165',
                    'https://rickandmortyapi.com/api/character/180',
                    'https://rickandmortyapi.com/api/character/187',
                    'https://rickandmortyapi.com/api/character/206',
                    'https://rickandmortyapi.com/api/character/220',
                    'https://rickandmortyapi.com/api/character/229',
                    'https://rickandmortyapi.com/api/character/233',
                    'https://rickandmortyapi.com/api/character/235',
                    'https://rickandmortyapi.com/api/character/267',
                    'https://rickandmortyapi.com/api/character/278',
                    'https://rickandmortyapi.com/api/character/281',
                    'https://rickandmortyapi.com/api/character/283',
                    'https://rickandmortyapi.com/api/character/284',
                    'https://rickandmortyapi.com/api/character/287',
                    'https://rickandmortyapi.com/api/character/288',
                    'https://rickandmortyapi.com/api/character/289',
                    'https://rickandmortyapi.com/api/character/291',
                    'https://rickandmortyapi.com/api/character/292',
                    'https://rickandmortyapi.com/api/character/322',
                    'https://rickandmortyapi.com/api/character/325',
                    'https://rickandmortyapi.com/api/character/328',
                    'https://rickandmortyapi.com/api/character/345',
                    'https://rickandmortyapi.com/api/character/366',
                    'https://rickandmortyapi.com/api/character/367',
                    'https://rickandmortyapi.com/api/character/392',
                    'https://rickandmortyapi.com/api/character/472',
                    'https://rickandmortyapi.com/api/character/473',
                    'https://rickandmortyapi.com/api/character/474',
                    'https://rickandmortyapi.com/api/character/475',
                    'https://rickandmortyapi.com/api/character/476',
                    'https://rickandmortyapi.com/api/character/477',
                    'https://rickandmortyapi.com/api/character/478',
                    'https://rickandmortyapi.com/api/character/479',
                    'https://rickandmortyapi.com/api/character/480',
                    'https://rickandmortyapi.com/api/character/481',
                    'https://rickandmortyapi.com/api/character/482',
                    'https://rickandmortyapi.com/api/character/483',
                    'https://rickandmortyapi.com/api/character/484',
                    'https://rickandmortyapi.com/api/character/485',
                    'https://rickandmortyapi.com/api/character/486',
                    'https://rickandmortyapi.com/api/character/487',
                    'https://rickandmortyapi.com/api/character/488',
                    'https://rickandmortyapi.com/api/character/489',
                ],
                url: 'https://rickandmortyapi.com/api/episode/28',
                created: '2017-11-10T12:56:36.618Z',
            },
        ],
    ];
    const tree = renderer
        .create(
            <Router>
                <Character char={char} lastepisode={lastepisode}></Character>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
