export function txtSlicer(txt, max = 180) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
