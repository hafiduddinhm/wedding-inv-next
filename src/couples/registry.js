import anitaHusni from './data/anita_husni';
import fathiaHafidz from './data/fathia_hafidz';
import putriIpan from './data/putri_ipan';
import romiRosyi from './data/romi_rosyi';

// Keyed by the full route slug (joined path segments, e.g. "bambang_endah/1"
// for nested routes) — add a new couple by importing their data file and
// registering it here.
export const registry = {
  anita_husni: anitaHusni,
  fathia_hafidz: fathiaHafidz,
  putri_ipan: putriIpan,
  romi_rosyi: romiRosyi,
};

export function getCoupleData(slug) {
  return registry[slug] || null;
}
