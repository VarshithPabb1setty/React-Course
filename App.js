//

// Single Elements
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "a" },
  "Hello World from React!"
);

// Nested Elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "parent" }, "I am h1 tag!")
  )
);

// Nested Elements with siblings
const parent1 = React.createElement(
  "div",
  { id: "parent1" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "parent1" }, "I am h1 tag!"),
    React.createElement("h2", { id: "parent1" }, "I am h2 tag!"),
  ])
);

//Nested Elements with multiple child
const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I'm nested h1 element with multiple child")
  ),
  React.createElement(
    "div",
    { id: "child3" },
    React.createElement("h2", {}, "I'm nested h2 element with multiple child")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);
root.render(parent1);
root.render(parent2);
