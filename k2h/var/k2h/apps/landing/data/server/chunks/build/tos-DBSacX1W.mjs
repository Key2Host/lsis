import { _ as __nuxt_component_0 } from './LandingCTA-EW2pbklu.mjs';
import { _ as __nuxt_component_1 } from './PageColumns-B4ulieUb.mjs';
import { _ as __nuxt_component_2 } from './PageCard-bDfPFbYv.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './server.mjs';
import 'tailwind-merge';
import '../nitro/nitro.mjs';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import '@vueuse/core';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tos",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Allgemeine Geschäftsbedingungen (AGB)",
      ogTitle: "Allgemeine Geschäftsbedingungen (AGB)",
      description: "Hier finden Sie die Allgemeinen Geschäftsbedingungen von Key2Host.",
      ogDescription: "Hier finden Sie die Allgemeinen Geschäftsbedingungen von Key2Host."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingCTA = __nuxt_component_0;
      const _component_UPageColumns = __nuxt_component_1;
      const _component_UPageCard = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ULandingCTA, {
        title: "Allgemeine Geschäftsbedingungen",
        description: "Hier finden Sie die Allgemeinen Geschäftsbedingungen von Key2Host."
      }, null, _parent));
      _push(ssrRenderComponent(_component_UPageColumns, { class: "m-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-document-text",
              title: "1. Geltungsbereich",
              description: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen Key2Host und den Kunden über die Bereitstellung von Hosting-Dienstleistungen abgeschlossen werden. Abweichende Vereinbarungen sind nur wirksam, wenn sie schriftlich von Key2Host bestätigt wurden."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-check-circle",
              title: "2. Vertragsabschluss",
              description: "Der Vertrag kommt mit der Annahme der Bestellung des Kunden durch Key2Host zustande. Der Kunde erhält eine Bestätigung per E-Mail. Alle Angebote sind freibleibend und unverbindlich. Key2Host behält sich vor, Bestellungen ohne Angabe von Gründen abzulehnen."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-server",
              title: "3. Leistungen",
              description: "Key2Host bietet Dienstleistungen wie die Bereitstellung von virtuellen Servern (VPS), dedizierten Servern, Domain-Registrierungen und VPN-Diensten an. Die genauen Leistungen ergeben sich aus der Leistungsbeschreibung auf der Website. Key2Host ist berechtigt, die Leistungen jederzeit zu ändern oder einzustellen, sofern dies dem Kunden zumutbar ist."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-chart-bar",
              title: "4. Verfügbarkeit und Wartung",
              description: "Key2Host strebt eine möglichst hohe Verfügbarkeit seiner Dienste an, übernimmt jedoch keine Garantie für eine kontinuierliche Verfügbarkeit. Wartungsarbeiten und unvorhergesehene Ausfälle können zu Unterbrechungen führen. Key2Host wird jedoch versuchen, geplante Wartungsarbeiten rechtzeitig anzukündigen und die Auswirkungen auf den Betrieb zu minimieren."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-currency-euro",
              title: "5. Preise und Zahlungsbedingungen",
              description: "Alle Preise sind in Euro angegeben und enthalten die gesetzliche Mehrwertsteuer, sofern nicht anders angegeben. Zahlungen sind im Voraus zu leisten. Unterstützte Zahlungsmethoden werden auf der Website angegeben. Kommt der Kunde in Zahlungsverzug, behält sich Key2Host das Recht vor, Leistungen einzuschränken oder einzustellen. Für den Fall eines Zahlungsverzugs werden Mahngebühren und Verzugszinsen gemäß der gesetzlichen Bestimmungen erhoben."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-user-circle",
              title: "6. Nutzerkonto",
              description: "Der Kunde ist verpflichtet, seine Zugangsdaten sicher aufzubewahren und geheim zu halten. Key2Host haftet nicht für Schäden, die durch unbefugte Nutzung des Kontos entstehen. Der Kunde ist verpflichtet, Key2Host unverzüglich über den Verlust oder Missbrauch von Zugangsdaten zu informieren."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-eye-slash",
              title: "7. Datenschutz",
              description: "Key2Host verpflichtet sich, die personenbezogenen Daten der Kunden gemäß der Datenschutz-Grundverordnung (DSGVO) zu schützen. Weitere Informationen finden Sie in der Datenschutzerklärung. Der Kunde stimmt der Verarbeitung seiner Daten zu, soweit dies für die Durchführung des Vertrags erforderlich ist."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-lock-closed",
              title: "8. Schutz geistigen Eigentums",
              description: "Der Kunde garantiert, dass alle Inhalte, die auf den Servern von Key2Host gespeichert oder über diese verbreitet werden, keine Urheberrechte oder geistigen Eigentumsrechte Dritter verletzen. Key2Host behält sich vor, Inhalte, die gegen geltendes Recht oder diese AGB verstoßen, ohne vorherige Ankündigung zu entfernen."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-shield-exclamation",
              title: "9. Haftung",
              description: "Key2Host haftet nur für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet Key2Host nur bei Verletzung wesentlicher Vertragspflichten. Eine Haftung für Datenverluste oder unvorhersehbare Schäden ist ausgeschlossen. Key2Host übernimmt keine Haftung für Ausfälle von Servern oder anderen technischen Störungen, die nicht in seinem Einflussbereich liegen."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-scale",
              title: "10. Sperrung des Kontos",
              description: "Key2Host behält sich das Recht vor, das Konto eines Kunden zu sperren, wenn Anzeichen für illegale Aktivitäten, Missbrauch oder Verstöße gegen diese AGB vorliegen. Eine Sperrung kann auch ohne vorherige Ankündigung erfolgen, wenn eine akute Gefährdung für die Sicherheit von Systemen oder Daten vorliegt."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-hand-raised",
              title: "11. Abuse und Missbrauch",
              description: "Der Kunde verpflichtet sich, die Dienste von Key2Host nicht für illegale, schadhafte oder missbräuchliche Aktivitäten zu nutzen. Hierzu zählen, aber sind nicht beschränkt auf: Denial-of-Service (DoS)-Angriffe, das Verbreiten von Malware, das Versenden von Spam oder das Hosting von Phishing-Seiten. Im Falle eines solchen Missbrauchs behält sich Key2Host das Recht vor, den Zugang des Kunden sofort zu sperren und den Vertrag ohne Rückerstattung zu kündigen."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-bug-ant",
              title: "12. Verbot von Kryptomining und illegalen Anwendungen",
              description: "Es ist dem Kunden ausdrücklich untersagt, Serverressourcen für das Hosting von Kryptomining-Diensten, illegalen Softwareanwendungen oder anderen Programmen zu verwenden, die gegen geltendes Recht oder die guten Sitten verstoßen. Hierzu gehören insbesondere Anwendungen, die zum Abbau von Kryptowährungen oder zur Durchführung illegaler Aktivitäten genutzt werden. Verstöße gegen diese Bestimmung führen zur sofortigen Sperrung des Kontos und zur fristlosen Kündigung des Vertrages ohne Rückerstattung von Zahlungen."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-exclamation-triangle",
              title: "13. Terrorismus-Inhalte und Verbreitung von Hass",
              description: "Das Verbreiten von terroristischen Inhalten oder Material, das zur Gewalt oder zur Verbreitung von Hass und Intoleranz aufruft, ist strikt untersagt. Key2Host wird bei Verdacht auf solche Aktivitäten sofort alle erforderlichen Maßnahmen ergreifen, einschließlich der sofortigen Sperrung von Konten und der Meldung an die zuständigen Behörden."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-calendar",
              title: "14. Kündigung",
              description: "Verträge können, sofern nicht anders vereinbart, mit einer Frist von 14 Tagen zum Ende der Laufzeit gekündigt werden. Das Recht zur außerordentlichen Kündigung bleibt unberührt. Bei schwerwiegenden Verstößen gegen die AGB, wie z.B. bei Missbrauch von Dienstleistungen, behält sich Key2Host das Recht vor, den Vertrag fristlos zu kündigen."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-exclamation-circle",
              title: "15. Salvatorische Klausel",
              description: "Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen (AGB) ganz oder teilweise unwirksam oder nicht durchsetzbar sein, so bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Anstelle der unwirksamen oder nicht durchsetzbaren Bestimmung tritt eine solche Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt. Dasselbe gilt für etwaige Lücken in diesen AGB."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageCard, {
              class: "col-span-6 row-span-2",
              icon: "i-heroicons-information-circle",
              title: "16. Schlussbestimmungen",
              description: "Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Ibbenbüren, sofern der Kunde Kaufmann ist. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt. Key2Host behält sich vor, diese AGB jederzeit zu ändern, wobei die Änderungen dem Kunden spätestens 14 Tage vor Inkrafttreten mitgeteilt werden."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-document-text",
                title: "1. Geltungsbereich",
                description: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen Key2Host und den Kunden über die Bereitstellung von Hosting-Dienstleistungen abgeschlossen werden. Abweichende Vereinbarungen sind nur wirksam, wenn sie schriftlich von Key2Host bestätigt wurden."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-check-circle",
                title: "2. Vertragsabschluss",
                description: "Der Vertrag kommt mit der Annahme der Bestellung des Kunden durch Key2Host zustande. Der Kunde erhält eine Bestätigung per E-Mail. Alle Angebote sind freibleibend und unverbindlich. Key2Host behält sich vor, Bestellungen ohne Angabe von Gründen abzulehnen."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-server",
                title: "3. Leistungen",
                description: "Key2Host bietet Dienstleistungen wie die Bereitstellung von virtuellen Servern (VPS), dedizierten Servern, Domain-Registrierungen und VPN-Diensten an. Die genauen Leistungen ergeben sich aus der Leistungsbeschreibung auf der Website. Key2Host ist berechtigt, die Leistungen jederzeit zu ändern oder einzustellen, sofern dies dem Kunden zumutbar ist."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-chart-bar",
                title: "4. Verfügbarkeit und Wartung",
                description: "Key2Host strebt eine möglichst hohe Verfügbarkeit seiner Dienste an, übernimmt jedoch keine Garantie für eine kontinuierliche Verfügbarkeit. Wartungsarbeiten und unvorhergesehene Ausfälle können zu Unterbrechungen führen. Key2Host wird jedoch versuchen, geplante Wartungsarbeiten rechtzeitig anzukündigen und die Auswirkungen auf den Betrieb zu minimieren."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-currency-euro",
                title: "5. Preise und Zahlungsbedingungen",
                description: "Alle Preise sind in Euro angegeben und enthalten die gesetzliche Mehrwertsteuer, sofern nicht anders angegeben. Zahlungen sind im Voraus zu leisten. Unterstützte Zahlungsmethoden werden auf der Website angegeben. Kommt der Kunde in Zahlungsverzug, behält sich Key2Host das Recht vor, Leistungen einzuschränken oder einzustellen. Für den Fall eines Zahlungsverzugs werden Mahngebühren und Verzugszinsen gemäß der gesetzlichen Bestimmungen erhoben."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-user-circle",
                title: "6. Nutzerkonto",
                description: "Der Kunde ist verpflichtet, seine Zugangsdaten sicher aufzubewahren und geheim zu halten. Key2Host haftet nicht für Schäden, die durch unbefugte Nutzung des Kontos entstehen. Der Kunde ist verpflichtet, Key2Host unverzüglich über den Verlust oder Missbrauch von Zugangsdaten zu informieren."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-eye-slash",
                title: "7. Datenschutz",
                description: "Key2Host verpflichtet sich, die personenbezogenen Daten der Kunden gemäß der Datenschutz-Grundverordnung (DSGVO) zu schützen. Weitere Informationen finden Sie in der Datenschutzerklärung. Der Kunde stimmt der Verarbeitung seiner Daten zu, soweit dies für die Durchführung des Vertrags erforderlich ist."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-lock-closed",
                title: "8. Schutz geistigen Eigentums",
                description: "Der Kunde garantiert, dass alle Inhalte, die auf den Servern von Key2Host gespeichert oder über diese verbreitet werden, keine Urheberrechte oder geistigen Eigentumsrechte Dritter verletzen. Key2Host behält sich vor, Inhalte, die gegen geltendes Recht oder diese AGB verstoßen, ohne vorherige Ankündigung zu entfernen."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-shield-exclamation",
                title: "9. Haftung",
                description: "Key2Host haftet nur für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet Key2Host nur bei Verletzung wesentlicher Vertragspflichten. Eine Haftung für Datenverluste oder unvorhersehbare Schäden ist ausgeschlossen. Key2Host übernimmt keine Haftung für Ausfälle von Servern oder anderen technischen Störungen, die nicht in seinem Einflussbereich liegen."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-scale",
                title: "10. Sperrung des Kontos",
                description: "Key2Host behält sich das Recht vor, das Konto eines Kunden zu sperren, wenn Anzeichen für illegale Aktivitäten, Missbrauch oder Verstöße gegen diese AGB vorliegen. Eine Sperrung kann auch ohne vorherige Ankündigung erfolgen, wenn eine akute Gefährdung für die Sicherheit von Systemen oder Daten vorliegt."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-hand-raised",
                title: "11. Abuse und Missbrauch",
                description: "Der Kunde verpflichtet sich, die Dienste von Key2Host nicht für illegale, schadhafte oder missbräuchliche Aktivitäten zu nutzen. Hierzu zählen, aber sind nicht beschränkt auf: Denial-of-Service (DoS)-Angriffe, das Verbreiten von Malware, das Versenden von Spam oder das Hosting von Phishing-Seiten. Im Falle eines solchen Missbrauchs behält sich Key2Host das Recht vor, den Zugang des Kunden sofort zu sperren und den Vertrag ohne Rückerstattung zu kündigen."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-bug-ant",
                title: "12. Verbot von Kryptomining und illegalen Anwendungen",
                description: "Es ist dem Kunden ausdrücklich untersagt, Serverressourcen für das Hosting von Kryptomining-Diensten, illegalen Softwareanwendungen oder anderen Programmen zu verwenden, die gegen geltendes Recht oder die guten Sitten verstoßen. Hierzu gehören insbesondere Anwendungen, die zum Abbau von Kryptowährungen oder zur Durchführung illegaler Aktivitäten genutzt werden. Verstöße gegen diese Bestimmung führen zur sofortigen Sperrung des Kontos und zur fristlosen Kündigung des Vertrages ohne Rückerstattung von Zahlungen."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-exclamation-triangle",
                title: "13. Terrorismus-Inhalte und Verbreitung von Hass",
                description: "Das Verbreiten von terroristischen Inhalten oder Material, das zur Gewalt oder zur Verbreitung von Hass und Intoleranz aufruft, ist strikt untersagt. Key2Host wird bei Verdacht auf solche Aktivitäten sofort alle erforderlichen Maßnahmen ergreifen, einschließlich der sofortigen Sperrung von Konten und der Meldung an die zuständigen Behörden."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-calendar",
                title: "14. Kündigung",
                description: "Verträge können, sofern nicht anders vereinbart, mit einer Frist von 14 Tagen zum Ende der Laufzeit gekündigt werden. Das Recht zur außerordentlichen Kündigung bleibt unberührt. Bei schwerwiegenden Verstößen gegen die AGB, wie z.B. bei Missbrauch von Dienstleistungen, behält sich Key2Host das Recht vor, den Vertrag fristlos zu kündigen."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-exclamation-circle",
                title: "15. Salvatorische Klausel",
                description: "Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen (AGB) ganz oder teilweise unwirksam oder nicht durchsetzbar sein, so bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Anstelle der unwirksamen oder nicht durchsetzbaren Bestimmung tritt eine solche Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt. Dasselbe gilt für etwaige Lücken in diesen AGB."
              }),
              createVNode(_component_UPageCard, {
                class: "col-span-6 row-span-2",
                icon: "i-heroicons-information-circle",
                title: "16. Schlussbestimmungen",
                description: "Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Ibbenbüren, sofern der Kunde Kaufmann ist. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt. Key2Host behält sich vor, diese AGB jederzeit zu ändern, wobei die Änderungen dem Kunden spätestens 14 Tage vor Inkrafttreten mitgeteilt werden."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/tos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tos-DBSacX1W.mjs.map
