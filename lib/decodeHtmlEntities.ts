// WordPress corre los titulos por wptexturize antes de mandarlos por la
// REST API, asi que cualquier apostrofe/comilla recta en el titulo (ej.
// "Cooper's") vuelve como la entidad tipografica &#8217;, no la recta
// &#039; — de ahi que faltara ese caso especifico.
const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&#038;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#8220;": "“",
  "&#8221;": "”",
  "&#039;": "'",
  "&#8216;": "‘",
  "&#8217;": "’",
  "&#8211;": "–",
  "&#8212;": "—",
  "&hellip;": "…",
};

const ENTITY_PATTERN = new RegExp(Object.keys(ENTITIES).join("|"), "g");

export function decodeHtmlEntities(html: string): string {
  return html.replace(ENTITY_PATTERN, (match) => ENTITIES[match]);
}
