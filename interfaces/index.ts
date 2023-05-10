// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Extension } from 'path/to/interfaces';

import { gt, lt } from 'semver';

export type Extension = {
  id: string
  type: 'mod' | 'theme' | 'payment-gateway' | 'server-manager' | 'domain-registrar' | 'hook' | 'translation',
  name: string
  description: string
  author: Author,
  releases: Release[],
  website: string,
  license: {
      name: string
      URL?: string
    }
  icon_url?: string,
  readme: string,
  source: Repository,
  // Compatibility with older versions of FOSSBilling
  version: string,
  download_url: string,
}

export type Repository = {
  type: 'github' | 'gitlab' | 'bitbucket' | 'custom'
  repo: string
}

export type Author = Organization | User;

export type Organization = {
  type: 'organization';
  name: Lowercase<string>; // backwards compatibility
  id: Lowercase<string>;
  URL?: string;
};

export type User = {
  type: 'user';
  name: Lowercase<string>; // backwards compatibility
  id: Lowercase<string>;
  URL?: string;
};

export type Release = {
  tag: string;
  date: string;
  download_url: string;
  changelog_url?: string;
  min_fossbilling_version: string;
};


export function getLatestRelease(extension: Extension): Release | undefined {
  if (extension.releases.length === 0) {
    return undefined;
  }

  let latestRelease = extension.releases[0];
  for (let i = 1; i < extension.releases.length; i++) {
    const release = extension.releases[i];

    if (gt(release.tag, latestRelease.tag)) {
      latestRelease = release;
    }
  }

  return latestRelease;
}

export function sortReleasesDescending(releases: Release[]): Release[] {
  return releases.sort((a, b) => {
    if (gt(a.tag, b.tag)) {
      return -1;
    } else if (lt(a.tag, b.tag)) {
      return 1;
    } else {
      return 0;
    }
  });
}

export function repositoryURL(repository: Repository): string {
  switch (repository.type) {
    case 'github':
      return `https://github.com/${repository.repo}`
    case 'gitlab':
      return `https://gitlab.com/${repository.repo}`
    case 'bitbucket':
      return `https://bitbucket.org/${repository.repo}`
    case 'custom':
      return repository.repo
  }
}