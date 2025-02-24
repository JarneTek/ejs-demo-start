export const home = (req, res) => {
  // res.render("<NAAM VAN DE VIEW>", {<DATA NAAR DE VIEW>})
  res.render("pages/home", {
    title: "Dinosaurs around the world",
    content: "Welcome to the world of dinosaurs",
  });
};
export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    content: "We are a group of dinosaur enthusiasts",
    team: ["T-Rex", "Velociraptor", "Stegosaurus"],
  });
};
export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content: "Contact us at 09 233 40 89",
  });
};
export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy",
    team: false,
  });
};