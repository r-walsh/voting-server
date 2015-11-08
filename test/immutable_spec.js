import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutablity', () => {

	describe('a list', () => {
		function addMovie( currentState, movie ) {
			return currentState.push(movie);
		}

		it('is immutable', () => {
			let state = List.of('Trainspotting', '28 Days Later');
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(List.of(
				'Trainspotting',
				'28 Days Later',
				'Sunshine'
			));
		});
	});

	describe('a tree', () => {
		function addMovie( currentState, movie ) {
			return currentState.set(
				'movies',
				currentState.get('movies').push(movie)
			);
		}

		it('is immutable', () => {
			let state = Map({
				movies: List.of('Trainspotting', '28 Days Later')
			});
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later',
					'Sunshine'
				)
			}));

			expect(state).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later'
				)
			}));
		});
	});
});