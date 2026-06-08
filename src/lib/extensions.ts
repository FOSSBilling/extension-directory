import { extensionData } from '../data/extensions';
import { sortReleasesDescending, getLatestRelease } from '../types';
import type { Extension } from '../types';

export function getExtensionById(id: string): Extension | undefined {
  return extensionData.find(
    (p) => p.id.toLowerCase() === id.toLowerCase(),
  );
}

export function getExtensionByIdOrThrow(id: string): Extension {
  const ext = getExtensionById(id);
  if (!ext) {
    throw new Error(`Extension not found: ${id}`);
  }
  return ext;
}

export function getAllExtensions(): Extension[] {
  return extensionData;
}

export function getExtensionsByType(type: Extension['type']): Extension[] {
  return extensionData.filter((ext) => ext.type === type);
}

export function getExtensionWithSortedReleases(ext: Extension): Extension {
  return {
    ...ext,
    releases: sortReleasesDescending(ext.releases),
  };
}

export function getAllExtensionsWithSortedReleases(): Extension[] {
  return extensionData.map(getExtensionWithSortedReleases);
}

export function getExtensionLatestRelease(ext: Extension) {
  return getLatestRelease(ext);
}