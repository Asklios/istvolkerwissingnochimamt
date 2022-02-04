const colors = [
  "#00ABAE",
  "#E5007D",
  "#009ee3",
  "#a5027d",
  "#739600",
  "#1F5EA8",
  "#F72C2C",
  "#FA5021",
  "#FB9F54",
  "#FFAD00",
  "#55C934",
  "#4CAF58",
  "#1FA895",
  "#1FD2DB",
  "#2196F3",
  "#61338F",
  "#B32E37",
];

document.documentElement.style.setProperty(
  "--main-bg-color",
  colors[Math.floor(Math.random() * colors.length)]
);
