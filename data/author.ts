import { Author } from "interfaces";

export const authorData: Author[] = [
  {
    type: "organization",
    name: "fossbilling",
    id: "fossbilling",
    URL: "https://fossbilling.org",
  },
  {
    type: "organization",
    name: "bitcart",
    id: "bitcart",
    URL: "https://bitcart.ai",
  },
  {
    type: "organization",
    name: "uddoktapay",
    id: "uddoktapay",
    URL: "https://uddoktapay.com",
  },
  {
    type: "organization",
    name: "albinvar",
    id: "albinvar",
    URL: "https://github.com/albinvar",
  },
  {
    type: "organization",
    name: "christiangabs",
    id: "christiangabs",
    URL: "https://github.com/christiangabs",
  },
  {
    type: "organization",
    name: "neto737",
    id: "neto737",
    URL: "https://github.com/neto737",
  },
  {
    type: "organization",
    name: "fzfr",
    id: "fzfr",
    URL: "https://github.com/FZFR",
  },
  {
    type: "organization",
    name: "netim",
    id: "netim",
    URL: "https://netim.com",
  }
];

export function findAuthorByID(id: string): Author | undefined {
  return authorData.find((author) => author.id === id);
}
