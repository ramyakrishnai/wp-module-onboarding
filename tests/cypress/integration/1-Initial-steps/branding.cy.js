// <reference types="Cypress" />
import { GetPluginId } from '../wp-module-support/pluginID.cy';

describe( 'Branding', function () {
	before( () => {
		cy.visit( 'wp-admin/index.php?page=nfd-onboarding' );
	} );

	// since we are setting brand from plugin container, it will not be set to "newfold"
	// by default even if mm_brand option is deleted from the database
	it( 'Has ' + GetPluginId() + ' CSS when mm_brand does not exist.', () => {
		cy.exec( 'npx wp-env run cli wp option delete mm_brand' );
		cy.reload();
		cy.get( 'body' ).should( 'have.class', `nfd-brand-${ GetPluginId() }` );
		cy.get( '.is-bg-primary' )
			.should( 'have.css', 'background-color', 'rgb(53, 117, 211)' )
			.should( 'have.css', 'color', 'rgb(255, 255, 255)' );
		cy.get( '.nfd-step-card-subheading' ).should( 'contain',GetPluginId().charAt(0).toUpperCase() + GetPluginId().slice(1) );
	} );

	it( 'Has default WordPress styles when mm_brand has an empty value', () => {
		const emptyString = JSON.stringify( '' );
		cy.exec(
			`npx wp-env run cli wp option set mm_brand '${ emptyString }'`
		);
		cy.reload();
		cy.get( 'body' ).should( 'have.class', 'nfd-brand-wordpress' );
		cy.get( '.is-bg-primary' )
			.should( 'have.css', 'background-color', 'rgb(0, 124, 186)' )
			.should( 'have.css', 'color', 'rgb(255, 255, 255)' );
		cy.get( '.nfd-step-card-subheading' ).should( 'contain', 'web host' );
	} );

	it( 'Has brand specific CSS for ' + GetPluginId(), () => {
		cy.exec( `npx wp-env run cli wp option update mm_brand ${ GetPluginId() }` );
		cy.reload();
		cy.get( 'body' ).should( 'have.class', `nfd-brand-${ GetPluginId() }` );
		cy.get( '.is-bg-primary' )
			.should( 'have.css', 'background-color', 'rgb(53, 117, 211)' )
			.should( 'have.css', 'color', 'rgb(255, 255, 255)' );
		cy.get( '.nfd-step-card-subheading' ).should( 'contain', GetPluginId().charAt(0).toUpperCase() + GetPluginId().slice(1) );
	} );
} );
