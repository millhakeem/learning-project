import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User have no auth', () => {
        it('pass to the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('pass to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('pass to the not existing page', () => {
            cy.visit('/sadawdsa');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User have auth', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });
        it('pass to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('pass to the articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
