import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

import { expect } from chai;
import { List } from 'immutable';

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
});