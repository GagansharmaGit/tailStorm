const colorMap = {
  red: "red",
  blue: "blue",
  green: "green",
  black: "black",
  white: "white",
  gray: "gray"
};

function parseClass(cls, el) {
  if (!cls.startsWith("chai-")) return;

  const parts = cls.split("-");

  if (parts[1] === "p") {
    el.style.padding = parts[2] + "px";
  }

  if (parts[1] === "m") {
    el.style.margin = parts[2] + "px";
  }

  if (parts[1] === "bg") {
    el.style.backgroundColor = colorMap[parts[2]] || parts[2];
  }

  if (parts[1] === "text") {
    if (parts[2] === "center") el.style.textAlign = "center";
    else el.style.color = colorMap[parts[2]] || parts[2];
  }

  if (parts[1] === "fs") {
    el.style.fontSize = parts[2] + "px";
  }

  if (parts[1] === "radius") {
    el.style.borderRadius = parts[2] + "px";
  }

  if (parts[1] === "border") {
    if (parts.length === 3) {
      el.style.borderWidth = parts[2] + "px";
      el.style.borderStyle = "solid";
    }
    if (parts.length === 3 && colorMap[parts[2]]) {
      el.style.borderColor = colorMap[parts[2]];
    }
  }
}

function applyChaiCSS() {
  const elements = document.querySelectorAll("*");

  elements.forEach(el => {
    const classes = [...el.classList];

    classes.forEach(cls => {
      if (cls.startsWith("chai-")) {
        parseClass(cls, el);
        el.classList.remove(cls);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", applyChaiCSS);
