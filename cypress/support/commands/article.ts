/* eslint-disable @typescript-eslint/no-namespace */
import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Testing article',
    subtitle: 'БиологиЯ',
    // eslint-disable-next-line max-len
    img: 'https://static.wixstatic.com/media/7fe4e3_e9631d35de724b12b75a50f50d0c76fd~mv2.jpg/v1/crop/x_0,y_60,w_395,h_275/fill/w_553,h_385,al_c,lg_1,q_80,enc_auto/Biology.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'sdddc' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'sdddc' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
