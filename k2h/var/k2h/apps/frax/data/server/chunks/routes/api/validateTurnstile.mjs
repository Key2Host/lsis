import { d as defineEventHandler, r as readBody, v as verifyTurnstileToken } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'consola';
import 'node:url';
import '@iconify/utils';
import 'ipx';

const validateTurnstile = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await verifyTurnstileToken(body.token || body["cf-turnstile-response"]);
});

export { validateTurnstile as default };
//# sourceMappingURL=validateTurnstile.mjs.map
