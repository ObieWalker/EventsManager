import $ from 'jquery';

const jQueryMockFunctions = {
  pickadate() {},
};
// global.jQuery = $;
global.$ = $;
global.$ = () => jQueryMockFunctions;
