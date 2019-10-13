export default [
  {
    label: "rectangle",
    value: `.rectangle {
      width: 120px;
      height: 80px;
      background-color: skyblue;
    }`
  },
  {
    label: "rounded-rectangle  ",
    value: `.rounded-rectangle   {
      width: 150px;
      height: 100px;
      background-color: skyblue;
      border-radius: 10%;
    }`
  },
  {
    label: "circle ",
    value: `.circle  {
      width: 100px;
      height: 100px;
      background-color: skyblue;
      border-radius: 50%;
    }`
  },
  {
    label: "ellipse  ",
    value: `.ellipse   {
      width: 150px;
      height: 100px;
      background-color: skyblue;
      border-radius: 50%;
    }`
  },
  {
    label: "triangle", // 三角形
    value: `.triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 80px 110px 120px; /*更改各位置宽度可更改三角形类型*/
      border-color: skyblue transparent transparent transparent; /*更改各位置的颜色可得到不同方向的三角形*/
    }`,
    children: [{
      label: "triangle-base",
      value: `.triangle-base {
        width: 0;
        height: 0;
        border-left: 50px solid red;
        border-right: 50px solid red;
        border-bottom: 50px solid skyblue;
        border-top: 50px solid skyblue;
      }`
    },
    {
      label: "triangle-top",
      value: `.triangle-top {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 50px solid skyblue;
      }`
    },
    {
      label: "triangle-bottom",
      value: `.triangle-bottom {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 50px solid skyblue;
      }`
    },
    {
      label: "triangle-left",
      value: `.triangle-left {
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-right: 50px solid skyblue;
        border-bottom: 50px solid transparent;
      }`
    },
    {
      label: "triangle-right",
      value: `.triangle-right {
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-left: 50px solid skyblue;
        border-bottom: 50px solid transparent;
      }`
    },
    {
      label: "triangle-top-left",
      value: `.triangle-top-left {
        width: 0;
        height: 0;
        border-right: 50px solid transparent;
        border-top: 50px solid skyblue;
      }`
    },
    {
      label: "triangle-top-right",
      value: `.triangle-top-right {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-top: 50px solid skyblue;
      }`
    },
    {
      label: "triangle-bottom-left",
      value: `.triangle-bottom-left {
        width: 0;
        height: 0;
        border-right: 50px solid transparent;
        border-bottom: 50px solid skyblue;
      }`
    },
    {
      label: "triangle-bottom-right",
      value: `.triangle-bottom-right {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-bottom: 50px solid skyblue;
      }`
    }]
  },
  {
    label: "trapezoid", // 梯形
    value: `.trapezoid {
      width:100px;
      height:100px;
      border-right:60px solid transparent;
      border-top:60px solid skyblue;
      border-left:60px solid transparent;
    }`
  },
  {
    label: "cylindrical", // 圆柱体
    value: `.cylindrical {
      width: 50px;
      height: 50px;
      background-color: skyblue;
      border-radius: 50px/25px;/*25px/50px;横着放的圆柱*/
    }`
  },
  {
    label: "moon",
    value: `.moon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 15px 15px 0 0 skyblue;
    }`
  },
];