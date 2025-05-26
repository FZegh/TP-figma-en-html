

function creerNav() {
  let navSection = document.getElementById("nav");
  if (!navSection) return;

  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  // Création des liens
  let pages = [
    { nom: "ACCEUIL", lien: "index.html" },
    { nom: "À PROPOS", lien: "indexApropos.html" },
    { nom: "PORTFOLIO", lien: "indexPortfolio.html" },
    { nom: "CONTACT", lien: "indexContact.html" },
  ];

  pages.forEach(page => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = page.lien;
    a.textContent = page.nom;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  navSection.appendChild(nav);

  const path = window.location.pathname;  //
   nav.style.position = "fixed";
   nav.style.right = "20px";

  if (path.includes("index.html")) {
    // Page d'accueil : nav en haut
   
    nav.style.top = "100px";
    nav.style.transform = "none";
  } else {
    // Autres pages : nav centrée verticalement
   
    nav.style.top = "50%";
    nav.style.transform = "translateY(-50%)";
  }
}

window.addEventListener("DOMContentLoaded", creerNav);   //J'ai modifé pour être sûr que ça s'exécute après le chargement du DOM.
//creerNav();    //j'appelle la fonction sinon elle ne s'execute pas . 

    
let projets=[
  { titre:"Couleurs et design", categorie:"design"},
  { titre: "Interface utilisateur", categorie:"web"},
  { titre: "Création solidaire", categorie: "web"},
  { titre:"Livres et graphisme", categorie:"design"},      //je crée le tableau 
  { titre:"Gaming et interaction", categorie:"jeux"},
  { titre:"Diversité et inclusion", categorie:"web"}
];

let categories = ["tous",... new Set(projets.map(projets=>projets.categorie))]; // set= evite les doublons  
console.log(categories);

let container = document.getElementById("boutons-categories"); //chercher dans le DOM

categories.forEach(categories=>{
  let bouton =  document.createElement("button")   //pour chaque cztegorie creer un bouton
  bouton.textContent = categorie;
  bouton.addEventListener("click", () => {
    console.log("Catégorie cliquée :", categorie);
});

  container.appendChild(bouton);
  });

  function afficherProjets(filtre) {
  // 1. Vider l'affichage
  let projetsContainer = document.getElementById("projets-container");
  projetsContainer.innerHTML = "";

  // 2. Filtrer selon la catégorie
  const filtres = filtre === "tous"
    ? projets
    : projets.filter(projet => projet.categorie === filtre);

  // 3. Afficher chaque projet
  filtres.forEach(projet => {
    let div = document.createElement("div");
    div.className = "projet";
    div.textContent = `${projet.titre} (${projet.categorie})`;
    projetsContainer.appendChild(div);
  });
}

categories.forEach(categories => {
  let bouton = document.createElement("button");
  bouton.textContent = categories;

  bouton.addEventListener("click", () => {                      
    afficherProjets(categories); // <-- ici le filtrage. J'ai fait étape par etape en essayant de comprendre le filtrage mais cela n'a pas donné de résultat.
  });

  container.appendChild(bouton);
});

afficherProjets("tous");

