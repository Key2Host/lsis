import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import axios from 'axios';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'ipx';

const verify = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET;
  try {
    const response = await axios.post("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      secret: secretKey,
      response: body.token
    });
    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false, message: "Captcha-\xDCberpr\xFCfung fehlgeschlagen." };
    }
  } catch (error) {
    console.error("Fehler bei der Turnstile-\xDCberpr\xFCfung:", error);
    return { success: false, message: "Fehler bei der Turnstile-\xDCberpr\xFCfung." };
  }
});

export { verify as default };
//# sourceMappingURL=verify.mjs.map
