import { Ratevars as RatevarsDll, icons } from '../src';
import Ratevars from '../src/ratevars';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 Ratevars DLL', () => {
	it( 'exports Ratevars', () => {
		expect( RatevarsDll ).to.equal( Ratevars );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
