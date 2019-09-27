import layoutCenterScroll from "./template/layout-center-scroll";
import simpleGraph from "./css/simpleGraph";

const assembly = [
  {
    label: "布局",
    children: [{
      label: "layout-center-scroll",
      value: layoutCenterScroll
    }]
  }
];
const example = [{
  label: "图案",
  children: [{
    label: "simpleGraph",
    children: simpleGraph
  }]
}];

export { assembly, example };