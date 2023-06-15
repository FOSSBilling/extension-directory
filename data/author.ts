import { Author } from 'interfaces';

export const authorData: Author[] = [
    {
        type: 'organization',
        name: 'fossbilling',
        id: 'fossbilling',
        URL: 'https://fossbilling.org'
    },
    {
        type: 'organization',
        name: 'bitcart',
        id: 'bitcart',
        URL: 'https://bitcart.ai'
    }
];

export function findAuthorByID(id: string): Author | undefined {
    return authorData.find((author) => author.id === id);
}