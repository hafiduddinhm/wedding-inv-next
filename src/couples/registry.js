import anitaHusni from './data/anita_husni';
import fathiaHafidz from './data/fathia_hafidz';
import putriIpan from './data/putri_ipan';
import romiRosyi from './data/romi_rosyi';
import ajayUwin from './data/ajay_uwin';
import hanaUmam from './data/hana_umam';

// Keyed by the full route slug (e.g. "bambang_endah/1" for nested routes).
export const registry = {
  anita_husni: anitaHusni,
  fathia_hafidz: fathiaHafidz,
  putri_ipan: putriIpan,
  romi_rosyi: romiRosyi,
  ajay_uwin: ajayUwin,
  hana_umam: hanaUmam,
};

export function getCoupleData(slug) {
  return registry[slug] || null;
}
