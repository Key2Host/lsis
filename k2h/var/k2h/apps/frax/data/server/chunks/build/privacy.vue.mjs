import { _ as __nuxt_component_0 } from './PageCTA.vue.mjs';
import { _ as __nuxt_component_1 } from './PageBody.vue.mjs';
import { F as useCookieNoticeStore, b as useSeoMeta, w as __nuxt_component_2 } from './server.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import '@iconify/utils';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'vaul-vue';
import 'reka-ui/namespaced';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const cookienotice = useCookieNoticeStore();
    useSeoMeta({
      title: "Datenschutz",
      ogTitle: "Datenschutz",
      description: "Hier informieren wir Sie über die Verarbeitung personenbezogener Daten auf unserer Website.",
      ogDescription: "Hier informieren wir Sie über die Verarbeitung personenbezogener Daten auf unserer Website.",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCTA = __nuxt_component_0;
      const _component_UPageBody = __nuxt_component_1;
      const _component_USeparator = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UPageCTA, {
        title: "Datenschutz",
        description: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie\n        über die Verarbeitung personenbezogener Daten auf unserer Website."
      }, null, _parent));
      _push(`<div class="w-full flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UPageBody, { class: "m-6 w-full max-w-4xl" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Verantwortlicher </h1><p class="ml-4 text-lg leading-6"${_scopeId}><span class="font-medium"${_scopeId}>Key2Host</span><br${_scopeId}> Ottenweg 19<br${_scopeId}> 49479 Ibbenbüren<br${_scopeId}> Deutschland </p></div><div class="ml-4 mb-6"${_scopeId}><h2 class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.ceo"))}</h2><p class="text-lg leading-6"${_scopeId}> Lukas Poggemann (CEO) </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.contact.title"))}</h1><p class="ml-4 text-lg leading-6"${_scopeId}>${ssrInterpolate(_ctx.$t("legal.notice.contact.email"))}: <a href="mailto:privacy@key2host.com" class="text-primary underline"${_scopeId}>privacy@key2host.com</a><br${_scopeId}> ${ssrInterpolate(_ctx.$t("legal.notice.contact.phone"))}: <a href="tel:+4915146274092" class="text-primary underline"${_scopeId}>+49 1514 6274092</a></p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Geltungsbereich </h1><p class="ml-4 text-lg leading-6"${_scopeId}> Diese Datenschutzerklärung gilt für alle Online-Dienste von Key2Host. </p></div><div${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Aktualisierungen </h1><p class="ml-4 text-lg leading-6"${_scopeId}> Diese Datenschutzerklärung wird regelmäßig überprüft und bei Bedarf aktualisiert, um den rechtlichen Anforderungen zu entsprechen. </p></div>`);
            _push2(ssrRenderComponent(_component_USeparator, { class: "max-w-sm mx-auto" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Datenverarbeitung </h1><p class="ml-4 text-lg leading-6"${_scopeId}> Wir verarbeiten personenbezogene Daten ausschließlich im Einklang mit den geltenden Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG). Nachfolgend informieren wir Sie transparent über die Kategorien verarbeiteter Daten, die Zwecke der Datenverarbeitung sowie die jeweils einschlägigen Rechtsgrundlagen gemäß Art. 6 Abs. 1 DSGVO. Sofern die Verarbeitung zur Erfüllung eines Vertrags erforderlich ist, stützen wir uns auf Art. 6 Abs. 1 lit. b DSGVO. Erfolgt die Verarbeitung auf Grundlage Ihrer Einwilligung, ist Art. 6 Abs. 1 lit. a DSGVO maßgeblich. Für rechtliche Verpflichtungen kommt Art. 6 Abs. 1 lit. c DSGVO zur Anwendung. Bei berechtigtem Interesse verwenden wir Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage. </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Erhebung und Speicherung technischer Zugriffsdaten </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Bei jedem Zugriff auf unsere Internetseiten werden automatisch bestimmte technische Daten erfasst und in sogenannten Server-Logfiles gespeichert. Diese Daten beinhalten unter anderem die IP-Adresse, den Typ und die Version des verwendeten Browsers, das Datum und die Uhrzeit des Zugriffs sowie die Webseite, von der der Nutzer auf unsere Seite gelangt ist. Die erfasste IP-Adresse wird anonymisiert, sodass kein Personenbezug mehr hergestellt werden kann. Diese Daten dienen der Sicherstellung der Funktionsfähigkeit und Sicherheit unserer Website sowie der Analyse der Nutzung zur Verbesserung der Benutzererfahrung. Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO, da diese Verarbeitung auf unserem berechtigten Interesse beruht, die technische Sicherheit und Stabilität unserer Website zu gewährleisten. Die Logfiles werden nach einer angemessenen Frist gelöscht, es sei denn, sie sind für die Nachverfolgung von sicherheitsrelevanten Vorfällen noch erforderlich.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Registrierung eines Nutzerkontos </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Im Rahmen der Erstellung Ihres Nutzerkontos auf unserer Plattform erheben und verarbeiten wir bestimmte personenbezogene Daten, die für die Einrichtung und Verwaltung Ihres Accounts erforderlich sind. Dazu gehören insbesondere: </p><ul class="list-disc ml-8 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}>Ihr vollständiger Name</li><li${_scopeId}>Ihre Anschrift (Straße, Hausnummer, PLZ, Ort, Land)</li><li${_scopeId}>Ihr Geburtsdatum</li><li${_scopeId}>Ihre Telefonnummer</li><li${_scopeId}>Ihre E-Mail-Adresse</li></ul><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Zur Verifizierung Ihrer Identität im Rahmen der Registrierung nutzen wir den Dienst Stripe Identity. Stripe Identity ermöglicht es, Ihre Identität durch die Überprüfung eines von Ihnen hochgeladenen Ausweisdokuments zu verifizieren. Stripe verarbeitet die bereitgestellten Daten gemäß den geltenden Datenschutzbestimmungen und stellt sicher, dass diese ausschließlich für den Verifizierungszweck verwendet werden. Wir erhalten von Stripe lediglich eine Bestätigung der erfolgreichen Verifizierung. <br${_scopeId}> Stripe handelt hierbei als Auftragsverarbeiter im Einklang mit Art. 28 DSGVO. Weitere Informationen zur Verarbeitung Ihrer Daten durch Stripe sowie die Datenschutzbestimmungen von Stripe können Sie unter <a href="https://stripe.com/privacy" class="underline" target="_blank"${_scopeId}>https://stripe.com/privacy</a> einsehen. </p><p class="ml-4 text-lg leading-6"${_scopeId}> Die Erhebung und Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da diese zur Durchführung vorvertraglicher Maßnahmen und zur Erfüllung des Vertrags erforderlich sind. Darüber hinaus werden die verarbeiteten Daten nur so lange gespeichert, wie dies zur Erfüllung des Verifizierungszwecks notwendig ist. </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Bestellabwicklung </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Im Rahmen der Bestellabwicklung auf unserer Plattform erheben und verarbeiten wir personenbezogene Daten, die zur Durchführung und Erfüllung Ihrer Bestellung erforderlich sind. Diese Daten umfassen insbesondere: </p><ul class="list-disc ml-8 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}>Ihr vollständiger Name</li><li${_scopeId}>Ihre Anschrift (Straße, Hausnummer, PLZ, Ort, Land)</li><li${_scopeId}>Ihre Zahlungsinformationen (z. B. IBAN, Zahlungsdienstleister)</li><li${_scopeId}>Ihre E-Mail-Adresse</li></ul><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Zur Abwicklung von Zahlungen nutzen wir einen externen Zahlungsdienstleister. Stripe verarbeitet Ihre Zahlungsinformationen gemäß den geltenden Datenschutzbestimmungen und stellt sicher, dass diese ausschließlich für die Abwicklung der Zahlung verwendet werden. Weitere Informationen zur Verarbeitung Ihrer Daten durch Stripe sowie die Datenschutzbestimmungen von Stripe können Sie unter <a href="https://stripe.com/privacy" class="underline" target="_blank"${_scopeId}>https://stripe.com/privacy</a> einsehen. </p><p class="ml-4 text-lg leading-6"${_scopeId}> Die Erhebung und Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da diese zur Erfüllung des Vertrages erforderlich sind. Ihre Daten werden nur so lange gespeichert, wie es für die Erfüllung des Bestellvorgangs und gesetzlich erforderliche Aufbewahrungsfristen notwendig ist.“ </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Cookies und Tracking-Technologien </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Unsere Website verwendet sogenannte Cookies sowie vergleichbare Technologien, um die Nutzung unserer Online-Dienste benutzerfreundlich, effektiv und sicher zu gestalten. Bei Cookies handelt es sich um kleine Textdateien, die durch Ihren Webbrowser auf Ihrem Endgerät gespeichert werden. </p><h2 class="ml-4 text-lg font-bold mb-3"${_scopeId}>1. Rechtsgrundlage und Einwilligung</h2><p class="ml-8 text-lg leading-6"${_scopeId}> Die Datenverarbeitung erfolgt entweder auf Grundlage: </p><ul class="list-disc ml-12 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}>Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO,</li><li${_scopeId}>oder zur Wahrung unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO, insbesondere zur Sicherstellung der technischen Funktionalität und Sicherheit unserer Dienste.</li></ul><p class="ml-8 text-lg leading-6 mb-2"${_scopeId}> Beim erstmaligen Aufruf unserer Website erhalten Sie über den Cookie-Banner die Möglichkeit, Ihre Einwilligung differenziert zu erteilen oder abzulehnen. Sie können diese Entscheidung jederzeit in den Cookie-Einstellungen widerrufen oder anpassen. </p><p class="ml-8 text-lg leading-6 mb-2"${_scopeId}> Für Nutzer unter 16 Jahren ist für die Einwilligung in optionale Cookies die Zustimmung eines Erziehungsberechtigten erforderlich. </p><h2 class="ml-4 text-lg font-bold mb-3"${_scopeId}>2. Verwendete Cookies im Überblick</h2><div class="ml-8 overflow-x-auto"${_scopeId}><table class="min-w-full border border-gray-300 text-sm text-left"${_scopeId}><thead class="bg-gray-100"${_scopeId}><tr${_scopeId}><th class="px-4 py-2 border-b"${_scopeId}>Cookie/Technologie</th><th class="px-4 py-2 border-b"${_scopeId}>Zweck</th><th class="px-4 py-2 border-b"${_scopeId}>Speicherdauer</th><th class="px-4 py-2 border-b"${_scopeId}>Anbieter / Empfänger</th><th class="px-4 py-2 border-b"${_scopeId}>Rechtsgrundlage</th></tr></thead><tbody${_scopeId}><tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-2 border-b font-medium"${_scopeId}>Cloudflare</td><td class="px-4 py-2 border-b"${_scopeId}>Schutz vor DDoS, Caching, CDN</td><td class="px-4 py-2 border-b"${_scopeId}>1 Jahr</td><td class="px-4 py-2 border-b"${_scopeId}>Cloudflare Inc., USA</td><td class="px-4 py-2 border-b"${_scopeId}>Art. 6 Abs. 1 lit. f DSGVO</td></tr><tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-2 border-b font-medium"${_scopeId}>Stripe</td><td class="px-4 py-2 border-b"${_scopeId}>Zahlungsabwicklung, Betrugsprävention</td><td class="px-4 py-2 border-b"${_scopeId}>Sitzungsbasiert</td><td class="px-4 py-2 border-b"${_scopeId}>Stripe Payments Europe</td><td class="px-4 py-2 border-b"${_scopeId}>Art. 6 Abs. 1 lit. b &amp; f DSGVO</td></tr><tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-2 border-b font-medium"${_scopeId}>Warenkorb (Key2Host)</td><td class="px-4 py-2 border-b"${_scopeId}>Zwischenspeicherung von Produkten</td><td class="px-4 py-2 border-b"${_scopeId}>Lokal / Sitzung</td><td class="px-4 py-2 border-b"${_scopeId}>Key2Host (lokal)</td><td class="px-4 py-2 border-b"${_scopeId}>Art. 6 Abs. 1 lit. b DSGVO</td></tr></tbody></table></div><p class="ml-8 text-sm mb-2"${_scopeId}> Bitte beachten Sie: Einige Dienste (z. B. Stripe, Cloudflare) verarbeiten Daten in Ländern außerhalb der EU, insbesondere den USA. Dabei kann kein gleichwertiges Datenschutzniveau garantiert werden. Mit Ihrer Einwilligung erklären Sie sich mit diesen Risiken ausdrücklich einverstanden (Art. 49 Abs. 1 lit. a DSGVO). </p><h2 class="ml-4 text-lg font-bold mb-3"${_scopeId}>3. Verwaltung von Cookies</h2><p class="ml-8 text-lg leading-6 mb-2"${_scopeId}> Sie können das Setzen von Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern oder bereits gespeicherte Cookies löschen. Die vollständige Deaktivierung von Cookies kann jedoch zu Einschränkungen der Funktionalität unserer Website führen. </p><p class="ml-8 text-lg leading-6"${_scopeId}> Weitere Informationen zu den einzelnen Anbietern finden Sie in deren eigenen Datenschutzrichtlinien: </p><ul class="list-disc ml-12 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}>Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" class="underline" target="_blank"${_scopeId}>https://www.cloudflare.com/privacypolicy/</a></li><li${_scopeId}>Stripe: <a href="https://stripe.com/privacy" class="underline" target="_blank"${_scopeId}>https://stripe.com/privacy</a></li></ul><h2 class="ml-4 text-lg font-bold mb-3"${_scopeId}>4. Cookie Einstellungen</h2><p class="ml-8 text-lg leading-6"${_scopeId}> Sie haben jederzeit die Möglichkeit, Ihre Entscheidung bezüglich der Verwendung von Cookies anzupassen. Über unser <span class="text-primary underline cursor-pointer"${_scopeId}>Cookie-Banner</span> können Sie Ihre Präferenzen ändern, indem Sie entweder alle Cookies akzeptieren oder alle nicht notwendigen Cookies ablehnen. Bitte beachten Sie, dass sich die Änderungen nur auf zukünftige Besuche auswirken und bereits gespeicherte Cookies durch das Ändern der Einstellungen nicht rückwirkend gelöscht werden. </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Verarbeitung durch Dritte </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Im Rahmen unserer Dienstleistungen setzen wir auf Drittanbieter wie Stripe und Cloudflare, die bestimmte Daten in unserem Auftrag verarbeiten. Stripe übernimmt beispielsweise die Zahlungsabwicklung, während Cloudflare für den Schutz vor DDoS-Angriffen und das Caching zuständig ist. Beide Unternehmen handeln dabei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Bitte beachten Sie, dass einige dieser Anbieter Daten auch außerhalb der Europäischen Union (z.B. in den USA) verarbeiten können. In diesen Fällen wird ein angemessenes Schutzniveau durch geeignete Sicherheitsmaßnahmen, wie z.B. Standardvertragsklauseln, sichergestellt. Weitere Informationen zur Datenverarbeitung durch diese Drittanbieter finden Sie in deren jeweiligen Datenschutzrichtlinien: </p><ul class="list-disc ml-12 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}>Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" class="underline" target="_blank"${_scopeId}>https://www.cloudflare.com/privacypolicy/</a></li><li${_scopeId}>Stripe: <a href="https://stripe.com/privacy" class="underline" target="_blank"${_scopeId}>https://stripe.com/privacy</a></li></ul></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Verarbeitung sensibler Daten </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Wir verarbeiten grundsätzlich keine sensiblen personenbezogenen Daten im Sinne der Datenschutz-Grundverordnung (z.B. Gesundheitsdaten, Daten zur ethnischen Herkunft, politische Meinungen, religiöse Überzeugungen). Sollten wir jedoch in der Zukunft dazu übergehen, solche Daten zu erheben oder zu verarbeiten, erfolgt dies nur mit ausdrücklicher Einwilligung der betroffenen Person oder wenn eine andere rechtliche Grundlage vorliegt, wie beispielsweise eine gesetzliche Verpflichtung. Die Verarbeitung sensibler Daten wird immer unter strikter Beachtung der geltenden Datenschutzbestimmungen erfolgen. </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Sicherheit der Verarbeitung (Art. 32 DSGVO) </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Wir setzen technische und organisatorische Maßnahmen ein, um ein angemessenes Schutzniveau für die Verarbeitung personenbezogener Daten sicherzustellen und die Anforderungen der Datenschutz-Grundverordnung (Art. 32 DSGVO) zu erfüllen. Dabei berücksichtigen wir den Stand der Technik, die Implementierungskosten sowie die Art, den Umfang, die Umstände und die Zwecke der Verarbeitung ebenso wie die unterschiedlichen Eintrittswahrscheinlichkeiten und Schweregrade möglicher Risiken für die Rechte und Freiheiten betroffener Personen. </p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Zu den eingesetzten Sicherheitsmaßnahmen gehören insbesondere:</p><ul class="list-disc ml-8 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>SSL/TLS-Verschlüsselung</span><br${_scopeId}><p class="ml-4"${_scopeId}>Der gesamte Datenverkehr zwischen Ihrem Browser und unseren Webservern wird mit SSL/TLS verschlüsselt. Dabei erzwingen wir über HSTS eine strikte Transportverschlüsselung, sodass nur HTTPS-Verbindungen zugelassen werden. Dies schützt Ihre Daten vor dem Abfangen durch Dritte.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>TLS-Verschlüsselung im E-Mail-Verkehr</span><br${_scopeId}><p class="ml-4"${_scopeId}>Auch unsere ein- und ausgehenden E-Mails werden durch Transport Layer Security (TLS) gesichert. So wird sichergestellt, dass E-Mails bei der Übertragung nicht unverschlüsselt durch das Internet gesendet werden.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Passworthash</span><br${_scopeId}><p class="ml-4"${_scopeId}>Sämtliche Benutzerpasswörter werden ausschließlich in Form kryptografisch sicherer Hashwerte unter Verwendung des modernen Hashverfahrens Argon2 gespeichert. Dadurch sind diese selbst bei einem Datenleck praktisch unbrauchbar.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Cloudflare-Schutz</span><br${_scopeId}><p class="ml-4"${_scopeId}>Unsere Infrastruktur ist durch Cloudflare vor DDoS-Angriffen, automatisierten Scans und sonstigem Missbrauch geschützt. Zudem verbessert das globale CDN die Ladezeiten und Verfügbarkeit unserer Dienste.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Bot-Erkennung (Cloudflare Turnstile)</span><br${_scopeId}><p class="ml-4"${_scopeId}>Zur Verhinderung von Bot-Aktivitäten und automatisierten Angriffen setzen wir die Cloudflare Turnstile-Technologie ein. Diese hilft dabei, verdächtige Anfragen von echten Nutzern zu unterscheiden und sicherzustellen, dass nur menschliche Interaktionen auf unserer Webseite durchgeführt werden. Dies schützt vor Missbrauch und trägt zur Sicherstellung einer hohen Sicherheit unserer Dienste bei.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Firewall und Angriffserkennung</span><br${_scopeId}><p class="ml-4"${_scopeId}>Wir nutzen eine restriktiv konfigurierte UFW-Firewall, Fail2Ban zur Erkennung von Brute-Force-Angriffen sowie ClamAV zur proaktiven Malware-Erkennung auf Serverebene.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Zwei-Faktor-Authentifizierung (2FA)</span><br${_scopeId}><p class="ml-4"${_scopeId}>Für besonders sensible Bereiche wird zusätzlich zur klassischen Anmeldung ein zweiter Authentifizierungsfaktor erforderlich, um unbefugten Zugriff zu unterbinden.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Isolierte Containerarchitektur</span><br${_scopeId}><p class="ml-4"${_scopeId}>Unsere Dienste laufen in voneinander abgeschotteten Containern, wodurch Angriffsflächen minimiert und Sicherheitslücken nicht systemübergreifend ausgenutzt werden können.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Regelmäßige, verschlüsselte Backups</span><br${_scopeId}><p class="ml-4"${_scopeId}>Zur Sicherstellung der Datenverfügbarkeit im Schadensfall werden regelmäßig verschlüsselte Backups erstellt und redundant gespeichert.</p></li></ul><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Diese Sicherheitsmaßnahmen unterliegen einem kontinuierlichen Verbesserungsprozess und werden regelmäßig auf Aktualität und Wirksamkeit geprüft. </p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Der Schutz Ihrer Daten hat für uns höchste Priorität. Sollten Sie dennoch Sicherheitslücken oder Unregelmäßigkeiten in unseren Systemen bemerken, bitten wir Sie, uns umgehend darüber zu informieren. Wir nehmen solche Hinweise sehr ernst und prüfen jede Meldung sorgfältig. </p><p class="ml-4 text-lg leading-6"${_scopeId}>Das vorsätzliche Ausnutzen, Missbrauchen oder Weiterverbreiten identifizierter Schwachstellen stellt einen strafbaren Verstoß gegen § 202a ff. StGB (Ausspähen und Abfangen von Daten) dar und wird durch uns ausnahmslos zur Anzeige gebracht und strafrechtlich verfolgt. Die Integrität und Sicherheit unserer Systeme sowie der Schutz unserer Kundendaten dulden keinerlei Kompromisse.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Löschfristen für personenbezogene Daten </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Wir verarbeiten und speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden. Im Einklang mit den Vorgaben der Datenschutz-Grundverordnung (DSGVO) stellen wir sicher, dass Ihre Daten regelmäßig überprüft werden und nur so lange aufbewahrt werden, wie es für die Erfüllung unserer vertraglichen und rechtlichen Verpflichtungen notwendig ist. </p><ol class="list-disc ml-8 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Daten im Zusammenhang mit der Registrierung eines Nutzerkontos:</span><br${_scopeId}><p class="ml-4"${_scopeId}> Ihre personenbezogenen Daten werden so lange gespeichert, wie Ihr Nutzerkonto aktiv ist. Sobald Sie Ihr Konto löschen oder uns darum bitten, Ihre Daten zu löschen, werden alle personenbezogenen Daten, die im Zusammenhang mit Ihrem Konto stehen, unverzüglich gelöscht, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Daten im Zusammenhang mit Bestellungen:</span><br${_scopeId}><p class="ml-4"${_scopeId}>Ihre Bestelldaten werden für den Zeitraum aufbewahrt, der zur Erfüllung der Bestellung sowie zur Einhaltung von steuer- und handelsrechtlichen Aufbewahrungspflichten erforderlich ist. In Deutschland beträgt diese Frist in der Regel 10 Jahre gemäß den Vorschriften des Handelsgesetzbuches (HGB) und der Abgabenordnung (AO). Danach werden die Daten gelöscht, es sei denn, es bestehen weiterhin gesetzliche Aufbewahrungspflichten.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Daten im Zusammenhang mit der Kommunikation:</span><br${_scopeId}><p class="ml-4"${_scopeId}>Die Daten, die im Rahmen der Bearbeitung von Anfragen über unsere Kontaktkanäle erhoben werden, werden nur so lange aufbewahrt, wie es für die Bearbeitung und Klärung der Anfrage notwendig ist. Danach werden die Daten gelöscht oder anonymisiert, es sei denn, gesetzliche Aufbewahrungspflichten bestehen.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Cookies und Tracking-Technologien:</span><br${_scopeId}><p class="ml-4"${_scopeId}>Die durch Cookies gesammelten Daten werden entweder auf Grundlage Ihrer Einwilligung oder aus unserem berechtigten Interesse verarbeitet. Je nach Art des Cookies variiert die Speicherdauer, und Sie haben jederzeit die Möglichkeit, Cookies über die Einstellungen Ihres Browsers zu löschen oder die Zustimmung zu widerrufen.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Daten im Zusammenhang mit Gewinnspielen:</span><br${_scopeId}><p class="ml-4"${_scopeId}>Ihre personenbezogenen Daten, die im Rahmen eines Gewinnspiels erhoben werden, werden nach Abschluss des Gewinnspiels und der Benachrichtigung der Gewinner unverzüglich gelöscht, es sei denn, Sie haben zuvor eine andere Einwilligung zur weiteren Nutzung Ihrer Daten gegeben.</p></li></ol><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Wir überprüfen regelmäßig die Notwendigkeit der Speicherung Ihrer personenbezogenen Daten und löschen diese unverzüglich, wenn der Zweck der Verarbeitung entfällt oder Sie die Löschung beantragen, es sei denn, es bestehen rechtliche Verpflichtungen, die eine längere Aufbewahrung erfordern. </p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Gewinnspiele </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Im Rahmen von Gewinnspielen, die wir auf unseren Internetseiten zu verschiedenen Anlässen anbieten, erheben wir bestimmte personenbezogene Daten, darunter Ihren Vor- und Nachnamen, Ihre E-Mail-Adresse sowie gegebenenfalls das Land, aus dem Sie kommen. Diese Daten werden ausschließlich zur Durchführung und Abwicklung des jeweiligen Gewinnspiels verwendet, insbesondere zur Benachrichtigung der Gewinner und zur Sicherstellung eines fairen Verfahrens. Nach Abschluss des Gewinnspiels und der Benachrichtigung der Gewinner werden die erhobenen Daten unverzüglich gelöscht. Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. a DSGVO, da die Verarbeitung auf der Einwilligung der Teilnehmer basiert.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Opt-In Newsletter via E-Mail </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Mit dem Abonnement unseres Newsletters erhalten Sie regelmäßig Informationen zu unseren Produkten, Dienstleistungen und Sonderaktionen. Der Versand des Newsletters erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung, die Sie im Rahmen des Anmeldeprozesses erteilen. Die Einwilligung erfolgt durch die Eingabe Ihrer E-Mail-Adresse und Bestätigung dieser mittels eines sogenannten “Double-Opt-In”-Verfahrens. Dabei erhalten Sie nach der Anmeldung eine E-Mail mit einem Bestätigungslink, den Sie klicken müssen, um Ihre Anmeldung abzuschließen.</p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Wir verarbeiten Ihre E-Mail-Adresse sowie, sofern angegeben, weitere personenbezogene Daten (z. B. Name), die Sie im Rahmen der Anmeldung angeben, ausschließlich zum Versand des Newsletters. Ihre Daten werden dabei nur auf unseren eigenen Mailservern verarbeitet, die gemäß den geltenden Datenschutzbestimmungen abgesichert sind. Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Versendung des Newsletters erforderlich (z. B. durch den Einsatz von Servern oder Dienstleistern, die gemäß Art. 28 DSGVO als Auftragsverarbeiter tätig sind).</p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Sie können Ihre Einwilligung zum Erhalt des Newsletters jederzeit widerrufen. Der Widerruf kann durch die Nutzung des Abmeldelinks in jeder Newsletter-E-Mail oder durch eine direkte Mitteilung an uns unter der oben angegebenen Kontaktadresse erfolgen. Nach Abmeldung werden Ihre Daten nicht mehr für den Versand des Newsletters verwendet.</p><p class="ml-4 text-lg leading-6"${_scopeId}>Der Versand des Newsletters erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Kontaktformular, Live-Chat, Ticket-System und Telefon-Support </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Die Nutzung unseres Kontaktformulars, des Live-Chats, des Ticket-Systems sowie des Telefon-Supports ist freiwillig. Wenn Sie über diese Kanäle mit uns in Kontakt treten, erheben wir die Daten, die für die Bearbeitung Ihrer Anfrage erforderlich sind. Dazu gehören insbesondere Ihr Vorname, Nachname, Ihre E-Mail-Adresse, die Telefonnummer sowie der Inhalt Ihrer Nachricht. Die Datenverarbeitung erfolgt ausschließlich zu dem Zweck, Ihre Anfrage zu bearbeiten und eine schnelle sowie kompetente Unterstützung zu gewährleisten.</p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Die rechtliche Grundlage für die Verarbeitung Ihrer Daten im Rahmen des Kontaktformulars, Live-Chats, Ticket-Systems und Telefon-Supports ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen), soweit Ihre Anfrage im Zusammenhang mit einem bestehenden Vertrag steht oder zur Durchführung vorvertraglicher Maßnahmen notwendig ist. Sollte die Anfrage nicht im Zusammenhang mit einem Vertrag stehen, basiert die Verarbeitung auf Ihrer freiwilligen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Die erhobenen Daten werden nur so lange gespeichert, wie es zur Bearbeitung und Beantwortung Ihrer Anfrage erforderlich ist. Nach Abschluss der Bearbeitung werden die Daten entweder gelöscht oder anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Ihre Daten werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben. Insofern erfolgt die Datenverarbeitung ausschließlich im Rahmen der oben genannten Zwecke. Wenn Sie Fragen zur Datenverarbeitung haben oder Ihre Einwilligung widerrufen möchten, können Sie sich jederzeit an uns wenden.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Links zu externen Webseiten </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Unsere Website kann Links zu externen Webseiten enthalten, die nicht unter unserer Kontrolle stehen. Diese Datenschutzerklärung gilt ausschließlich für die von uns betriebenen Online-Dienste. Wir übernehmen keine Verantwortung für den Inhalt und die Datenschutzpraktiken von Webseiten, die über Links auf unserer Seite zugänglich sind. Wir empfehlen Ihnen, die Datenschutzerklärungen dieser externen Webseiten zu überprüfen, da deren Datenschutzpraktiken von unseren abweichen können.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Freiwilligkeit der Bereitstellung Ihrer Daten </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Die Bereitstellung Ihrer persönlichen Daten an Key2Host erfolgt auf freiwilliger Basis. Es besteht keine gesetzliche Pflicht, diese Daten an uns weiterzugeben. Dennoch möchten wir Sie darauf hinweisen, dass einige unserer Dienstleistungen, wie etwa die Registrierung oder der Zugriff auf bestimmte Angebote, nur dann vollständig genutzt werden können, wenn Sie die erforderlichen Daten zur Verfügung stellen. Sollten Sie sich entscheiden, keine Angaben zu machen, kann dies in manchen Fällen die Nutzung bestimmter Funktionen einschränken oder unmöglich machen.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Änderung der Datenschutzerklärung </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Wir behalten uns vor, diese Datenschutzerklärung regelmäßig zu überprüfen und bei Bedarf anzupassen, um sicherzustellen, dass sie den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen in unseren Dienstleistungen widerzuspiegeln. Im Falle einer wesentlichen Änderung werden wir Sie darüber durch eine entsprechende Mitteilung auf unserer Website oder in anderer geeigneter Form informieren. Die jeweils aktuelle Version dieser Datenschutzerklärung ist jederzeit auf unserer Website verfügbar.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Schutz von Minderjährigen </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Der Schutz der Privatsphäre von Kindern ist uns besonders wichtig. Unsere Dienste richten sich nicht an Personen unter 18 Jahren, und wir erheben bewusst keine personenbezogenen Daten von Minderjährigen ohne die ausdrückliche Zustimmung eines Erziehungsberechtigten. Sollten wir feststellen, dass wir personenbezogene Daten von Kindern ohne diese Zustimmung verarbeitet haben, werden wir diese Daten unverzüglich löschen. Wenn Sie als Erziehungsberechtigter feststellen, dass Ihr Kind uns ohne Ihre Zustimmung personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte, damit wir die erforderlichen Schritte zur Löschung dieser Daten einleiten können.</p></div><div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold mb-3"${_scopeId}> Ihre Rechte </h1><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}> Im Hinblick auf die Verarbeitung Ihrer personenbezogenen Daten haben Sie als betroffene Person folgende Rechte, die Sie jederzeit ausüben können: </p><ol class="list-disc ml-8 text-lg leading-6 mb-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Recht auf Auskunft (Art. 15 DSGVO):</span><br${_scopeId}><p class="ml-4"${_scopeId}>Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob personenbezogene Daten von Ihnen verarbeitet werden. Falls dies der Fall ist, haben Sie das Recht, Auskunft über diese Daten sowie über weitere Informationen (z. B. Verarbeitungszwecke, Empfänger der Daten) zu erhalten.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Recht auf Berichtigung (Art. 16 DSGVO):</span><br${_scopeId}><p class="ml-4"${_scopeId}>Sie haben das Recht, die Berichtigung unrichtiger oder die Ergänzung unvollständiger personenbezogener Daten, die wir von Ihnen gespeichert haben, zu verlangen.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Recht auf Löschung (Art. 17 DSGVO):</span><br${_scopeId}><p class="ml-4"${_scopeId}>Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten oder andere rechtliche Gründe der Löschung entgegenstehen.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</span><br${_scopeId}><p class="ml-4"${_scopeId}>Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, etwa wenn die Richtigkeit der Daten bestritten wird oder die Verarbeitung unrechtmäßig ist, aber Sie die Löschung ablehnen.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</span><br${_scopeId}><p class="ml-4"${_scopeId}>Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Zudem können Sie verlangen, dass diese Daten direkt an einen anderen Verantwortlichen übermittelt werden, sofern dies technisch machbar ist.</p></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Recht auf Widerspruch (Art. 21 DSGVO):</span><br${_scopeId}><p class="ml-4"${_scopeId}>Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen, wenn diese auf der Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt (z. B. aufgrund eines berechtigten Interesses). Wir werden die Verarbeitung in diesem Fall einstellen, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen überwiegen.</p></li></ol><p class="ml-4 text-lg leading-6 mb-2"${_scopeId}>Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter der oben angegebenen E-Mail-Adresse (<a href="mailto:privacy@key2host.com" class="underline"${_scopeId}>privacy@key2host.com</a>). Wir werden Ihre Anfrage so schnell wie möglich, spätestens jedoch innerhalb eines Monats, beantworten. </p><p class="ml-4 text-lg leading-6"${_scopeId}> Darüber hinaus haben Sie das Recht, sich bei einer Aufsichtsbehörde für den Datenschutz zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Verantwortlicher "),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, [
                  createVNode("span", { class: "font-medium" }, "Key2Host"),
                  createVNode("br"),
                  createTextVNode(" Ottenweg 19"),
                  createVNode("br"),
                  createTextVNode(" 49479 Ibbenbüren"),
                  createVNode("br"),
                  createTextVNode(" Deutschland ")
                ])
              ]),
              createVNode("div", { class: "ml-4 mb-6" }, [
                createVNode("h2", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("legal.notice.ceo")), 1),
                createVNode("p", { class: "text-lg leading-6" }, " Lukas Poggemann (CEO) ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, toDisplayString(_ctx.$t("legal.notice.contact.title")), 1),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, [
                  createTextVNode(toDisplayString(_ctx.$t("legal.notice.contact.email")) + ": ", 1),
                  createVNode("a", {
                    href: "mailto:privacy@key2host.com",
                    class: "text-primary underline"
                  }, "privacy@key2host.com"),
                  createVNode("br"),
                  createTextVNode(" " + toDisplayString(_ctx.$t("legal.notice.contact.phone")) + ": ", 1),
                  createVNode("a", {
                    href: "tel:+4915146274092",
                    class: "text-primary underline"
                  }, "+49 1514 6274092")
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Geltungsbereich "),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, " Diese Datenschutzerklärung gilt für alle Online-Dienste von Key2Host. ")
              ]),
              createVNode("div", null, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Aktualisierungen "),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, " Diese Datenschutzerklärung wird regelmäßig überprüft und bei Bedarf aktualisiert, um den rechtlichen Anforderungen zu entsprechen. ")
              ]),
              createVNode(_component_USeparator, { class: "max-w-sm mx-auto" }),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Datenverarbeitung "),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, " Wir verarbeiten personenbezogene Daten ausschließlich im Einklang mit den geltenden Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG). Nachfolgend informieren wir Sie transparent über die Kategorien verarbeiteter Daten, die Zwecke der Datenverarbeitung sowie die jeweils einschlägigen Rechtsgrundlagen gemäß Art. 6 Abs. 1 DSGVO. Sofern die Verarbeitung zur Erfüllung eines Vertrags erforderlich ist, stützen wir uns auf Art. 6 Abs. 1 lit. b DSGVO. Erfolgt die Verarbeitung auf Grundlage Ihrer Einwilligung, ist Art. 6 Abs. 1 lit. a DSGVO maßgeblich. Für rechtliche Verpflichtungen kommt Art. 6 Abs. 1 lit. c DSGVO zur Anwendung. Bei berechtigtem Interesse verwenden wir Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Erhebung und Speicherung technischer Zugriffsdaten "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Bei jedem Zugriff auf unsere Internetseiten werden automatisch bestimmte technische Daten erfasst und in sogenannten Server-Logfiles gespeichert. Diese Daten beinhalten unter anderem die IP-Adresse, den Typ und die Version des verwendeten Browsers, das Datum und die Uhrzeit des Zugriffs sowie die Webseite, von der der Nutzer auf unsere Seite gelangt ist. Die erfasste IP-Adresse wird anonymisiert, sodass kein Personenbezug mehr hergestellt werden kann. Diese Daten dienen der Sicherstellung der Funktionsfähigkeit und Sicherheit unserer Website sowie der Analyse der Nutzung zur Verbesserung der Benutzererfahrung. Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO, da diese Verarbeitung auf unserem berechtigten Interesse beruht, die technische Sicherheit und Stabilität unserer Website zu gewährleisten. Die Logfiles werden nach einer angemessenen Frist gelöscht, es sei denn, sie sind für die Nachverfolgung von sicherheitsrelevanten Vorfällen noch erforderlich.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Registrierung eines Nutzerkontos "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Im Rahmen der Erstellung Ihres Nutzerkontos auf unserer Plattform erheben und verarbeiten wir bestimmte personenbezogene Daten, die für die Einrichtung und Verwaltung Ihres Accounts erforderlich sind. Dazu gehören insbesondere: "),
                createVNode("ul", { class: "list-disc ml-8 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, "Ihr vollständiger Name"),
                  createVNode("li", null, "Ihre Anschrift (Straße, Hausnummer, PLZ, Ort, Land)"),
                  createVNode("li", null, "Ihr Geburtsdatum"),
                  createVNode("li", null, "Ihre Telefonnummer"),
                  createVNode("li", null, "Ihre E-Mail-Adresse")
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, [
                  createTextVNode("Zur Verifizierung Ihrer Identität im Rahmen der Registrierung nutzen wir den Dienst Stripe Identity. Stripe Identity ermöglicht es, Ihre Identität durch die Überprüfung eines von Ihnen hochgeladenen Ausweisdokuments zu verifizieren. Stripe verarbeitet die bereitgestellten Daten gemäß den geltenden Datenschutzbestimmungen und stellt sicher, dass diese ausschließlich für den Verifizierungszweck verwendet werden. Wir erhalten von Stripe lediglich eine Bestätigung der erfolgreichen Verifizierung. "),
                  createVNode("br"),
                  createTextVNode(" Stripe handelt hierbei als Auftragsverarbeiter im Einklang mit Art. 28 DSGVO. Weitere Informationen zur Verarbeitung Ihrer Daten durch Stripe sowie die Datenschutzbestimmungen von Stripe können Sie unter "),
                  createVNode("a", {
                    href: "https://stripe.com/privacy",
                    class: "underline",
                    target: "_blank"
                  }, "https://stripe.com/privacy"),
                  createTextVNode(" einsehen. ")
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, " Die Erhebung und Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da diese zur Durchführung vorvertraglicher Maßnahmen und zur Erfüllung des Vertrags erforderlich sind. Darüber hinaus werden die verarbeiteten Daten nur so lange gespeichert, wie dies zur Erfüllung des Verifizierungszwecks notwendig ist. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Bestellabwicklung "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Im Rahmen der Bestellabwicklung auf unserer Plattform erheben und verarbeiten wir personenbezogene Daten, die zur Durchführung und Erfüllung Ihrer Bestellung erforderlich sind. Diese Daten umfassen insbesondere: "),
                createVNode("ul", { class: "list-disc ml-8 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, "Ihr vollständiger Name"),
                  createVNode("li", null, "Ihre Anschrift (Straße, Hausnummer, PLZ, Ort, Land)"),
                  createVNode("li", null, "Ihre Zahlungsinformationen (z. B. IBAN, Zahlungsdienstleister)"),
                  createVNode("li", null, "Ihre E-Mail-Adresse")
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, [
                  createTextVNode("Zur Abwicklung von Zahlungen nutzen wir einen externen Zahlungsdienstleister. Stripe verarbeitet Ihre Zahlungsinformationen gemäß den geltenden Datenschutzbestimmungen und stellt sicher, dass diese ausschließlich für die Abwicklung der Zahlung verwendet werden. Weitere Informationen zur Verarbeitung Ihrer Daten durch Stripe sowie die Datenschutzbestimmungen von Stripe können Sie unter "),
                  createVNode("a", {
                    href: "https://stripe.com/privacy",
                    class: "underline",
                    target: "_blank"
                  }, "https://stripe.com/privacy"),
                  createTextVNode(" einsehen. ")
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, " Die Erhebung und Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da diese zur Erfüllung des Vertrages erforderlich sind. Ihre Daten werden nur so lange gespeichert, wie es für die Erfüllung des Bestellvorgangs und gesetzlich erforderliche Aufbewahrungsfristen notwendig ist.“ ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Cookies und Tracking-Technologien "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Unsere Website verwendet sogenannte Cookies sowie vergleichbare Technologien, um die Nutzung unserer Online-Dienste benutzerfreundlich, effektiv und sicher zu gestalten. Bei Cookies handelt es sich um kleine Textdateien, die durch Ihren Webbrowser auf Ihrem Endgerät gespeichert werden. "),
                createVNode("h2", { class: "ml-4 text-lg font-bold mb-3" }, "1. Rechtsgrundlage und Einwilligung"),
                createVNode("p", { class: "ml-8 text-lg leading-6" }, " Die Datenverarbeitung erfolgt entweder auf Grundlage: "),
                createVNode("ul", { class: "list-disc ml-12 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, "Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO,"),
                  createVNode("li", null, "oder zur Wahrung unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO, insbesondere zur Sicherstellung der technischen Funktionalität und Sicherheit unserer Dienste.")
                ]),
                createVNode("p", { class: "ml-8 text-lg leading-6 mb-2" }, " Beim erstmaligen Aufruf unserer Website erhalten Sie über den Cookie-Banner die Möglichkeit, Ihre Einwilligung differenziert zu erteilen oder abzulehnen. Sie können diese Entscheidung jederzeit in den Cookie-Einstellungen widerrufen oder anpassen. "),
                createVNode("p", { class: "ml-8 text-lg leading-6 mb-2" }, " Für Nutzer unter 16 Jahren ist für die Einwilligung in optionale Cookies die Zustimmung eines Erziehungsberechtigten erforderlich. "),
                createVNode("h2", { class: "ml-4 text-lg font-bold mb-3" }, "2. Verwendete Cookies im Überblick"),
                createVNode("div", { class: "ml-8 overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full border border-gray-300 text-sm text-left" }, [
                    createVNode("thead", { class: "bg-gray-100" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-4 py-2 border-b" }, "Cookie/Technologie"),
                        createVNode("th", { class: "px-4 py-2 border-b" }, "Zweck"),
                        createVNode("th", { class: "px-4 py-2 border-b" }, "Speicherdauer"),
                        createVNode("th", { class: "px-4 py-2 border-b" }, "Anbieter / Empfänger"),
                        createVNode("th", { class: "px-4 py-2 border-b" }, "Rechtsgrundlage")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", { class: "hover:bg-gray-50" }, [
                        createVNode("td", { class: "px-4 py-2 border-b font-medium" }, "Cloudflare"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Schutz vor DDoS, Caching, CDN"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "1 Jahr"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Cloudflare Inc., USA"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Art. 6 Abs. 1 lit. f DSGVO")
                      ]),
                      createVNode("tr", { class: "hover:bg-gray-50" }, [
                        createVNode("td", { class: "px-4 py-2 border-b font-medium" }, "Stripe"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Zahlungsabwicklung, Betrugsprävention"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Sitzungsbasiert"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Stripe Payments Europe"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Art. 6 Abs. 1 lit. b & f DSGVO")
                      ]),
                      createVNode("tr", { class: "hover:bg-gray-50" }, [
                        createVNode("td", { class: "px-4 py-2 border-b font-medium" }, "Warenkorb (Key2Host)"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Zwischenspeicherung von Produkten"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Lokal / Sitzung"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Key2Host (lokal)"),
                        createVNode("td", { class: "px-4 py-2 border-b" }, "Art. 6 Abs. 1 lit. b DSGVO")
                      ])
                    ])
                  ])
                ]),
                createVNode("p", { class: "ml-8 text-sm mb-2" }, " Bitte beachten Sie: Einige Dienste (z. B. Stripe, Cloudflare) verarbeiten Daten in Ländern außerhalb der EU, insbesondere den USA. Dabei kann kein gleichwertiges Datenschutzniveau garantiert werden. Mit Ihrer Einwilligung erklären Sie sich mit diesen Risiken ausdrücklich einverstanden (Art. 49 Abs. 1 lit. a DSGVO). "),
                createVNode("h2", { class: "ml-4 text-lg font-bold mb-3" }, "3. Verwaltung von Cookies"),
                createVNode("p", { class: "ml-8 text-lg leading-6 mb-2" }, " Sie können das Setzen von Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern oder bereits gespeicherte Cookies löschen. Die vollständige Deaktivierung von Cookies kann jedoch zu Einschränkungen der Funktionalität unserer Website führen. "),
                createVNode("p", { class: "ml-8 text-lg leading-6" }, " Weitere Informationen zu den einzelnen Anbietern finden Sie in deren eigenen Datenschutzrichtlinien: "),
                createVNode("ul", { class: "list-disc ml-12 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, [
                    createTextVNode("Cloudflare: "),
                    createVNode("a", {
                      href: "https://www.cloudflare.com/privacypolicy/",
                      class: "underline",
                      target: "_blank"
                    }, "https://www.cloudflare.com/privacypolicy/")
                  ]),
                  createVNode("li", null, [
                    createTextVNode("Stripe: "),
                    createVNode("a", {
                      href: "https://stripe.com/privacy",
                      class: "underline",
                      target: "_blank"
                    }, "https://stripe.com/privacy")
                  ])
                ]),
                createVNode("h2", { class: "ml-4 text-lg font-bold mb-3" }, "4. Cookie Einstellungen"),
                createVNode("p", { class: "ml-8 text-lg leading-6" }, [
                  createTextVNode(" Sie haben jederzeit die Möglichkeit, Ihre Entscheidung bezüglich der Verwendung von Cookies anzupassen. Über unser "),
                  createVNode("span", {
                    class: "text-primary underline cursor-pointer",
                    onClick: ($event) => unref(cookienotice).show()
                  }, "Cookie-Banner", 8, ["onClick"]),
                  createTextVNode(" können Sie Ihre Präferenzen ändern, indem Sie entweder alle Cookies akzeptieren oder alle nicht notwendigen Cookies ablehnen. Bitte beachten Sie, dass sich die Änderungen nur auf zukünftige Besuche auswirken und bereits gespeicherte Cookies durch das Ändern der Einstellungen nicht rückwirkend gelöscht werden. ")
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Verarbeitung durch Dritte "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Im Rahmen unserer Dienstleistungen setzen wir auf Drittanbieter wie Stripe und Cloudflare, die bestimmte Daten in unserem Auftrag verarbeiten. Stripe übernimmt beispielsweise die Zahlungsabwicklung, während Cloudflare für den Schutz vor DDoS-Angriffen und das Caching zuständig ist. Beide Unternehmen handeln dabei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Bitte beachten Sie, dass einige dieser Anbieter Daten auch außerhalb der Europäischen Union (z.B. in den USA) verarbeiten können. In diesen Fällen wird ein angemessenes Schutzniveau durch geeignete Sicherheitsmaßnahmen, wie z.B. Standardvertragsklauseln, sichergestellt. Weitere Informationen zur Datenverarbeitung durch diese Drittanbieter finden Sie in deren jeweiligen Datenschutzrichtlinien: "),
                createVNode("ul", { class: "list-disc ml-12 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, [
                    createTextVNode("Cloudflare: "),
                    createVNode("a", {
                      href: "https://www.cloudflare.com/privacypolicy/",
                      class: "underline",
                      target: "_blank"
                    }, "https://www.cloudflare.com/privacypolicy/")
                  ]),
                  createVNode("li", null, [
                    createTextVNode("Stripe: "),
                    createVNode("a", {
                      href: "https://stripe.com/privacy",
                      class: "underline",
                      target: "_blank"
                    }, "https://stripe.com/privacy")
                  ])
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Verarbeitung sensibler Daten "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Wir verarbeiten grundsätzlich keine sensiblen personenbezogenen Daten im Sinne der Datenschutz-Grundverordnung (z.B. Gesundheitsdaten, Daten zur ethnischen Herkunft, politische Meinungen, religiöse Überzeugungen). Sollten wir jedoch in der Zukunft dazu übergehen, solche Daten zu erheben oder zu verarbeiten, erfolgt dies nur mit ausdrücklicher Einwilligung der betroffenen Person oder wenn eine andere rechtliche Grundlage vorliegt, wie beispielsweise eine gesetzliche Verpflichtung. Die Verarbeitung sensibler Daten wird immer unter strikter Beachtung der geltenden Datenschutzbestimmungen erfolgen. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Sicherheit der Verarbeitung (Art. 32 DSGVO) "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Wir setzen technische und organisatorische Maßnahmen ein, um ein angemessenes Schutzniveau für die Verarbeitung personenbezogener Daten sicherzustellen und die Anforderungen der Datenschutz-Grundverordnung (Art. 32 DSGVO) zu erfüllen. Dabei berücksichtigen wir den Stand der Technik, die Implementierungskosten sowie die Art, den Umfang, die Umstände und die Zwecke der Verarbeitung ebenso wie die unterschiedlichen Eintrittswahrscheinlichkeiten und Schweregrade möglicher Risiken für die Rechte und Freiheiten betroffener Personen. "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, "Zu den eingesetzten Sicherheitsmaßnahmen gehören insbesondere:"),
                createVNode("ul", { class: "list-disc ml-8 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "SSL/TLS-Verschlüsselung"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Der gesamte Datenverkehr zwischen Ihrem Browser und unseren Webservern wird mit SSL/TLS verschlüsselt. Dabei erzwingen wir über HSTS eine strikte Transportverschlüsselung, sodass nur HTTPS-Verbindungen zugelassen werden. Dies schützt Ihre Daten vor dem Abfangen durch Dritte.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "TLS-Verschlüsselung im E-Mail-Verkehr"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Auch unsere ein- und ausgehenden E-Mails werden durch Transport Layer Security (TLS) gesichert. So wird sichergestellt, dass E-Mails bei der Übertragung nicht unverschlüsselt durch das Internet gesendet werden.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Passworthash"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Sämtliche Benutzerpasswörter werden ausschließlich in Form kryptografisch sicherer Hashwerte unter Verwendung des modernen Hashverfahrens Argon2 gespeichert. Dadurch sind diese selbst bei einem Datenleck praktisch unbrauchbar.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Cloudflare-Schutz"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Unsere Infrastruktur ist durch Cloudflare vor DDoS-Angriffen, automatisierten Scans und sonstigem Missbrauch geschützt. Zudem verbessert das globale CDN die Ladezeiten und Verfügbarkeit unserer Dienste.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Bot-Erkennung (Cloudflare Turnstile)"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Zur Verhinderung von Bot-Aktivitäten und automatisierten Angriffen setzen wir die Cloudflare Turnstile-Technologie ein. Diese hilft dabei, verdächtige Anfragen von echten Nutzern zu unterscheiden und sicherzustellen, dass nur menschliche Interaktionen auf unserer Webseite durchgeführt werden. Dies schützt vor Missbrauch und trägt zur Sicherstellung einer hohen Sicherheit unserer Dienste bei.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Firewall und Angriffserkennung"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Wir nutzen eine restriktiv konfigurierte UFW-Firewall, Fail2Ban zur Erkennung von Brute-Force-Angriffen sowie ClamAV zur proaktiven Malware-Erkennung auf Serverebene.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Zwei-Faktor-Authentifizierung (2FA)"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Für besonders sensible Bereiche wird zusätzlich zur klassischen Anmeldung ein zweiter Authentifizierungsfaktor erforderlich, um unbefugten Zugriff zu unterbinden.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Isolierte Containerarchitektur"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Unsere Dienste laufen in voneinander abgeschotteten Containern, wodurch Angriffsflächen minimiert und Sicherheitslücken nicht systemübergreifend ausgenutzt werden können.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Regelmäßige, verschlüsselte Backups"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Zur Sicherstellung der Datenverfügbarkeit im Schadensfall werden regelmäßig verschlüsselte Backups erstellt und redundant gespeichert.")
                  ])
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, "Diese Sicherheitsmaßnahmen unterliegen einem kontinuierlichen Verbesserungsprozess und werden regelmäßig auf Aktualität und Wirksamkeit geprüft. "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, "Der Schutz Ihrer Daten hat für uns höchste Priorität. Sollten Sie dennoch Sicherheitslücken oder Unregelmäßigkeiten in unseren Systemen bemerken, bitten wir Sie, uns umgehend darüber zu informieren. Wir nehmen solche Hinweise sehr ernst und prüfen jede Meldung sorgfältig. "),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, "Das vorsätzliche Ausnutzen, Missbrauchen oder Weiterverbreiten identifizierter Schwachstellen stellt einen strafbaren Verstoß gegen § 202a ff. StGB (Ausspähen und Abfangen von Daten) dar und wird durch uns ausnahmslos zur Anzeige gebracht und strafrechtlich verfolgt. Die Integrität und Sicherheit unserer Systeme sowie der Schutz unserer Kundendaten dulden keinerlei Kompromisse.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Löschfristen für personenbezogene Daten "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Wir verarbeiten und speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden. Im Einklang mit den Vorgaben der Datenschutz-Grundverordnung (DSGVO) stellen wir sicher, dass Ihre Daten regelmäßig überprüft werden und nur so lange aufbewahrt werden, wie es für die Erfüllung unserer vertraglichen und rechtlichen Verpflichtungen notwendig ist. "),
                createVNode("ol", { class: "list-disc ml-8 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Daten im Zusammenhang mit der Registrierung eines Nutzerkontos:"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, " Ihre personenbezogenen Daten werden so lange gespeichert, wie Ihr Nutzerkonto aktiv ist. Sobald Sie Ihr Konto löschen oder uns darum bitten, Ihre Daten zu löschen, werden alle personenbezogenen Daten, die im Zusammenhang mit Ihrem Konto stehen, unverzüglich gelöscht, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Daten im Zusammenhang mit Bestellungen:"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Ihre Bestelldaten werden für den Zeitraum aufbewahrt, der zur Erfüllung der Bestellung sowie zur Einhaltung von steuer- und handelsrechtlichen Aufbewahrungspflichten erforderlich ist. In Deutschland beträgt diese Frist in der Regel 10 Jahre gemäß den Vorschriften des Handelsgesetzbuches (HGB) und der Abgabenordnung (AO). Danach werden die Daten gelöscht, es sei denn, es bestehen weiterhin gesetzliche Aufbewahrungspflichten.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Daten im Zusammenhang mit der Kommunikation:"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Die Daten, die im Rahmen der Bearbeitung von Anfragen über unsere Kontaktkanäle erhoben werden, werden nur so lange aufbewahrt, wie es für die Bearbeitung und Klärung der Anfrage notwendig ist. Danach werden die Daten gelöscht oder anonymisiert, es sei denn, gesetzliche Aufbewahrungspflichten bestehen.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Cookies und Tracking-Technologien:"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Die durch Cookies gesammelten Daten werden entweder auf Grundlage Ihrer Einwilligung oder aus unserem berechtigten Interesse verarbeitet. Je nach Art des Cookies variiert die Speicherdauer, und Sie haben jederzeit die Möglichkeit, Cookies über die Einstellungen Ihres Browsers zu löschen oder die Zustimmung zu widerrufen.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Daten im Zusammenhang mit Gewinnspielen:"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Ihre personenbezogenen Daten, die im Rahmen eines Gewinnspiels erhoben werden, werden nach Abschluss des Gewinnspiels und der Benachrichtigung der Gewinner unverzüglich gelöscht, es sei denn, Sie haben zuvor eine andere Einwilligung zur weiteren Nutzung Ihrer Daten gegeben.")
                  ])
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, "Wir überprüfen regelmäßig die Notwendigkeit der Speicherung Ihrer personenbezogenen Daten und löschen diese unverzüglich, wenn der Zweck der Verarbeitung entfällt oder Sie die Löschung beantragen, es sei denn, es bestehen rechtliche Verpflichtungen, die eine längere Aufbewahrung erfordern. ")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Gewinnspiele "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Im Rahmen von Gewinnspielen, die wir auf unseren Internetseiten zu verschiedenen Anlässen anbieten, erheben wir bestimmte personenbezogene Daten, darunter Ihren Vor- und Nachnamen, Ihre E-Mail-Adresse sowie gegebenenfalls das Land, aus dem Sie kommen. Diese Daten werden ausschließlich zur Durchführung und Abwicklung des jeweiligen Gewinnspiels verwendet, insbesondere zur Benachrichtigung der Gewinner und zur Sicherstellung eines fairen Verfahrens. Nach Abschluss des Gewinnspiels und der Benachrichtigung der Gewinner werden die erhobenen Daten unverzüglich gelöscht. Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. a DSGVO, da die Verarbeitung auf der Einwilligung der Teilnehmer basiert.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Opt-In Newsletter via E-Mail "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Mit dem Abonnement unseres Newsletters erhalten Sie regelmäßig Informationen zu unseren Produkten, Dienstleistungen und Sonderaktionen. Der Versand des Newsletters erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung, die Sie im Rahmen des Anmeldeprozesses erteilen. Die Einwilligung erfolgt durch die Eingabe Ihrer E-Mail-Adresse und Bestätigung dieser mittels eines sogenannten “Double-Opt-In”-Verfahrens. Dabei erhalten Sie nach der Anmeldung eine E-Mail mit einem Bestätigungslink, den Sie klicken müssen, um Ihre Anmeldung abzuschließen."),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, "Wir verarbeiten Ihre E-Mail-Adresse sowie, sofern angegeben, weitere personenbezogene Daten (z. B. Name), die Sie im Rahmen der Anmeldung angeben, ausschließlich zum Versand des Newsletters. Ihre Daten werden dabei nur auf unseren eigenen Mailservern verarbeitet, die gemäß den geltenden Datenschutzbestimmungen abgesichert sind. Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Versendung des Newsletters erforderlich (z. B. durch den Einsatz von Servern oder Dienstleistern, die gemäß Art. 28 DSGVO als Auftragsverarbeiter tätig sind)."),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, "Sie können Ihre Einwilligung zum Erhalt des Newsletters jederzeit widerrufen. Der Widerruf kann durch die Nutzung des Abmeldelinks in jeder Newsletter-E-Mail oder durch eine direkte Mitteilung an uns unter der oben angegebenen Kontaktadresse erfolgen. Nach Abmeldung werden Ihre Daten nicht mehr für den Versand des Newsletters verwendet."),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, "Der Versand des Newsletters erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Kontaktformular, Live-Chat, Ticket-System und Telefon-Support "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Die Nutzung unseres Kontaktformulars, des Live-Chats, des Ticket-Systems sowie des Telefon-Supports ist freiwillig. Wenn Sie über diese Kanäle mit uns in Kontakt treten, erheben wir die Daten, die für die Bearbeitung Ihrer Anfrage erforderlich sind. Dazu gehören insbesondere Ihr Vorname, Nachname, Ihre E-Mail-Adresse, die Telefonnummer sowie der Inhalt Ihrer Nachricht. Die Datenverarbeitung erfolgt ausschließlich zu dem Zweck, Ihre Anfrage zu bearbeiten und eine schnelle sowie kompetente Unterstützung zu gewährleisten."),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Die rechtliche Grundlage für die Verarbeitung Ihrer Daten im Rahmen des Kontaktformulars, Live-Chats, Ticket-Systems und Telefon-Supports ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen), soweit Ihre Anfrage im Zusammenhang mit einem bestehenden Vertrag steht oder zur Durchführung vorvertraglicher Maßnahmen notwendig ist. Sollte die Anfrage nicht im Zusammenhang mit einem Vertrag stehen, basiert die Verarbeitung auf Ihrer freiwilligen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO."),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Die erhobenen Daten werden nur so lange gespeichert, wie es zur Bearbeitung und Beantwortung Ihrer Anfrage erforderlich ist. Nach Abschluss der Bearbeitung werden die Daten entweder gelöscht oder anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten bestehen."),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Ihre Daten werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben. Insofern erfolgt die Datenverarbeitung ausschließlich im Rahmen der oben genannten Zwecke. Wenn Sie Fragen zur Datenverarbeitung haben oder Ihre Einwilligung widerrufen möchten, können Sie sich jederzeit an uns wenden.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Links zu externen Webseiten "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Unsere Website kann Links zu externen Webseiten enthalten, die nicht unter unserer Kontrolle stehen. Diese Datenschutzerklärung gilt ausschließlich für die von uns betriebenen Online-Dienste. Wir übernehmen keine Verantwortung für den Inhalt und die Datenschutzpraktiken von Webseiten, die über Links auf unserer Seite zugänglich sind. Wir empfehlen Ihnen, die Datenschutzerklärungen dieser externen Webseiten zu überprüfen, da deren Datenschutzpraktiken von unseren abweichen können.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Freiwilligkeit der Bereitstellung Ihrer Daten "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Die Bereitstellung Ihrer persönlichen Daten an Key2Host erfolgt auf freiwilliger Basis. Es besteht keine gesetzliche Pflicht, diese Daten an uns weiterzugeben. Dennoch möchten wir Sie darauf hinweisen, dass einige unserer Dienstleistungen, wie etwa die Registrierung oder der Zugriff auf bestimmte Angebote, nur dann vollständig genutzt werden können, wenn Sie die erforderlichen Daten zur Verfügung stellen. Sollten Sie sich entscheiden, keine Angaben zu machen, kann dies in manchen Fällen die Nutzung bestimmter Funktionen einschränken oder unmöglich machen.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Änderung der Datenschutzerklärung "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Wir behalten uns vor, diese Datenschutzerklärung regelmäßig zu überprüfen und bei Bedarf anzupassen, um sicherzustellen, dass sie den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen in unseren Dienstleistungen widerzuspiegeln. Im Falle einer wesentlichen Änderung werden wir Sie darüber durch eine entsprechende Mitteilung auf unserer Website oder in anderer geeigneter Form informieren. Die jeweils aktuelle Version dieser Datenschutzerklärung ist jederzeit auf unserer Website verfügbar.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Schutz von Minderjährigen "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Der Schutz der Privatsphäre von Kindern ist uns besonders wichtig. Unsere Dienste richten sich nicht an Personen unter 18 Jahren, und wir erheben bewusst keine personenbezogenen Daten von Minderjährigen ohne die ausdrückliche Zustimmung eines Erziehungsberechtigten. Sollten wir feststellen, dass wir personenbezogene Daten von Kindern ohne diese Zustimmung verarbeitet haben, werden wir diese Daten unverzüglich löschen. Wenn Sie als Erziehungsberechtigter feststellen, dass Ihr Kind uns ohne Ihre Zustimmung personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte, damit wir die erforderlichen Schritte zur Löschung dieser Daten einleiten können.")
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-3" }, " Ihre Rechte "),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, " Im Hinblick auf die Verarbeitung Ihrer personenbezogenen Daten haben Sie als betroffene Person folgende Rechte, die Sie jederzeit ausüben können: "),
                createVNode("ol", { class: "list-disc ml-8 text-lg leading-6 mb-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Recht auf Auskunft (Art. 15 DSGVO):"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob personenbezogene Daten von Ihnen verarbeitet werden. Falls dies der Fall ist, haben Sie das Recht, Auskunft über diese Daten sowie über weitere Informationen (z. B. Verarbeitungszwecke, Empfänger der Daten) zu erhalten.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Recht auf Berichtigung (Art. 16 DSGVO):"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Sie haben das Recht, die Berichtigung unrichtiger oder die Ergänzung unvollständiger personenbezogener Daten, die wir von Ihnen gespeichert haben, zu verlangen.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Recht auf Löschung (Art. 17 DSGVO):"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten oder andere rechtliche Gründe der Löschung entgegenstehen.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, etwa wenn die Richtigkeit der Daten bestritten wird oder die Verarbeitung unrechtmäßig ist, aber Sie die Löschung ablehnen.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Recht auf Datenübertragbarkeit (Art. 20 DSGVO):"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Zudem können Sie verlangen, dass diese Daten direkt an einen anderen Verantwortlichen übermittelt werden, sofern dies technisch machbar ist.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Recht auf Widerspruch (Art. 21 DSGVO):"),
                    createVNode("br"),
                    createVNode("p", { class: "ml-4" }, "Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen, wenn diese auf der Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt (z. B. aufgrund eines berechtigten Interesses). Wir werden die Verarbeitung in diesem Fall einstellen, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen überwiegen.")
                  ])
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6 mb-2" }, [
                  createTextVNode("Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter der oben angegebenen E-Mail-Adresse ("),
                  createVNode("a", {
                    href: "mailto:privacy@key2host.com",
                    class: "underline"
                  }, "privacy@key2host.com"),
                  createTextVNode("). Wir werden Ihre Anfrage so schnell wie möglich, spätestens jedoch innerhalb eines Monats, beantworten. ")
                ]),
                createVNode("p", { class: "ml-4 text-lg leading-6" }, " Darüber hinaus haben Sie das Recht, sich bei einer Aufsichtsbehörde für den Datenschutz zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy.vue.mjs.map
