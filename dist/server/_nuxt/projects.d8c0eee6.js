import { useSSRContext, mergeProps, ref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useRuntimeConfig } from "../server.mjs";
import "destr";
import { a as _imports_0, _ as _imports_1 } from "./arrow.13000919.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
import "aos";
const ProjectCard_vue_vue_type_style_index_0_scoped_58efd4c5_lang = "";
const _sfc_main$1 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: ["project", "key", "index"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "project",
        key: __props.key,
        class: "lg:mx-5"
      }, _attrs))} data-v-58efd4c5><span class="flex text-sm my-3" data-v-58efd4c5>`);
      if (__props.index == null) {
        _push(`<h3 class="text-purplefy font-fira_bold mr-3" data-v-58efd4c5>Project ${ssrInterpolate(__props.key + 1)}</h3>`);
      } else {
        _push(`<h3 class="text-purplefy font-fira_bold mr-3" data-v-58efd4c5>Project ${ssrInterpolate(__props.index + 1)}</h3>`);
      }
      _push(`<h4 class="font-fira_retina text-menu-text" data-v-58efd4c5> // ${ssrInterpolate(__props.project.title)}</h4></span><div id="project-card" class="flex flex-col" data-v-58efd4c5><div id="window" data-v-58efd4c5><div class="absolute flex right-3 top-3" data-v-58efd4c5><!--[-->`);
      ssrRenderList(__props.project.tech, (tech) => {
        _push(`<img${ssrRenderAttr("src", "/icons/techs/filled/" + tech + ".svg")} alt="" class="w-6 h-6 mx-1 hover:opacity-75" data-v-58efd4c5>`);
      });
      _push(`<!--]--></div><img id="showcase"${ssrRenderAttr("src", __props.project.img)} alt="" class="" data-v-58efd4c5></div><div class="pb-8 pt-6 px-6 border-top" data-v-58efd4c5><p class="text-menu-text font-fira_retina text-sm mb-5" data-v-58efd4c5>${ssrInterpolate(__props.project.description)}</p><a id="view-button"${ssrRenderAttr("href", __props.project.url)} target="_blank" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg" data-v-58efd4c5> view-project </a></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-58efd4c5"]]);
const projects_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const techs = ["React", "HTML", "CSS", "Vue", "Angular", "Gatsby", "Flutter"];
    const filters = ref(["all"]);
    const showFilters = ref(true);
    const projects = ref(config.public.dev.projects);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_project_card = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-auto lg:flex-row overflow-hidden" }, _attrs))}><div id="mobile-page-title"><h2>_projects</h2></div><div id="section-content-title" class="flex lg:hidden"><img class="${ssrRenderClass(showFilters.value ? "section-arrow rotate-90" : "section-arrow")}"${ssrRenderAttr("src", _imports_0)}><span class="font-fira_regular text-white text-sm">projects</span></div>`);
      if (showFilters.value) {
        _push(`<div id="filter-menu" class="w-full flex-col border-right font-fira_regular text-menu-text lg:flex"><div id="section-content-title" class="hidden lg:flex items-center min-w-full"><img id="section-arrow-menu"${ssrRenderAttr("src", _imports_0)} alt="" class="section-arrow mx-3"><p class="font-fira_regular text-white text-sm">projects</p></div><nav id="filters" class="w-full flex-col"><!--[-->`);
        ssrRenderList(techs, (tech) => {
          _push(`<div class="flex items-center py-2"><input type="checkbox"${ssrRenderAttr("id", tech)}><img${ssrRenderAttr("id", "icon-tech-" + tech)}${ssrRenderAttr("src", "/icons/techs/" + tech + ".svg")} alt="" class="tech-icon w-5 h-5 mx-4"><span${ssrRenderAttr("id", "title-tech-" + tech)}>${ssrInterpolate(tech)}</span></div>`);
        });
        _push(`<!--]--></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col w-full overflow-hidden"><div class="tab-height w-full hidden lg:flex border-bot items-center"><div class="flex items-center border-right h-full"><!--[-->`);
      ssrRenderList(filters.value, (filter) => {
        _push(`<p class="font-fira_regular text-menu-text text-sm px-3">${ssrInterpolate(filter)};</p>`);
      });
      _push(`<!--]--><img${ssrRenderAttr("src", _imports_1)} alt="" class="m-3"></div></div><div id="tab" class="flex lg:hidden items-center"><span class="text-white"> // </span><p class="font-fira_regular text-white text-sm px-3">projects</p><span class="text-menu-text"> / </span><!--[-->`);
      ssrRenderList(filters.value, (filter) => {
        _push(`<p class="font-fira_regular text-menu-text text-sm px-3">${ssrInterpolate(filter)};</p>`);
      });
      _push(`<!--]--></div><div id="projects-case" class="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-scroll lg:self-center"><div id="not-found" class="hidden flex flex-col font-fira_retina text-menu-text my-5 h-full justify-center items-center"><span class="flex justify-center text-4xl pb-3"> X__X </span><span class="text-white flex justify-center text-xl"> No matching projects </span><span class="flex justify-center"> for these technologies </span></div><!--[-->`);
      ssrRenderList(projects.value, (project, key, index) => {
        _push(ssrRenderComponent(_component_project_card, {
          key,
          index,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects.d8c0eee6.js.map
