import { describe, it, cy } from 'cypress';

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('localhost:8081');
  });
});
