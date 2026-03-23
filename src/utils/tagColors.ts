const palette = [
  { bg: '#C8DDD9', text: '#2E5650' }, // sage
  { bg: '#DDD0CC', text: '#6B3E38' }, // dusty rose
  { bg: '#DED8C6', text: '#63572E' }, // warm sand
  { bg: '#D3CBDC', text: '#513D6B' }, // lavender
  { bg: '#C6D6E2', text: '#325568' }, // dusty blue
  { bg: '#DCCABC', text: '#6B4530' }, // terracotta
  { bg: '#CEDABC', text: '#445A2E' }, // olive
  { bg: '#BDD5D1', text: '#275C55' }, // teal
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function tagColor(tag: string): { bg: string; text: string } {
  return palette[hash(tag.toLowerCase()) % palette.length];
}
