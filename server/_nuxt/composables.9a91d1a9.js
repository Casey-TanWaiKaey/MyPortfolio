import { b as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
export {
  useHead as u
};
//# sourceMappingURL=composables.9a91d1a9.js.map
