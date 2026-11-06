// Hue OKLCH per ogni tag: i token --tag-* in tokens.css gestiscono chiaro/scuro.
const hues = [30, 62, 95, 150, 190, 235, 285, 340];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function tagColor(tag: string): number {
  return hues[hash(tag.toLowerCase()) % hues.length];
}
