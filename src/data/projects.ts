import htmlIcon from '../assets/img/thtml.png';
import cssIcon from '../assets/img/tcss.png';
import jsIcon from '../assets/img/tjavascript.png';
import tsIcon from '../assets/img/ttypescript.png';
import angularIcon from '../assets/img/tangular.png';
import firebaseIcon from '../assets/img/tfirebase.png';
import reactIcon from '../assets/img/treact.png';

import joinProjectImg from '../assets/img/join.png';
import crazyDogImg from '../assets/img/crazydog.png';
import eveLinkeImg from '../assets/img/evelike.png';

// ==============
// Typdefinitionen
// ==============
export interface Technology {
  name: string;
  icon: string;
  id: string;
}

export interface Project {
  id: string;
  title: string;
  translationKey: string;
  technologies: Technology[];
  liveLink: string;
  githubLink: string;
  image: string;
}

// ==============
// Daten für die Technologien
// ==============
export const allTechnologies = {
  html: { id: 'html', name: 'HTML', icon: htmlIcon },
  css: { id: 'css', name: 'CSS', icon: cssIcon },
  js: { id: 'js', name: 'JavaScript', icon: jsIcon },
  ts: { id: 'ts', name: 'TypeScript', icon: tsIcon },
  angular: { id: 'angular', name: 'Angular', icon: angularIcon },
  firebase: { id: 'firebase', name: 'Firebase', icon: firebaseIcon },
  react: { id: 'react', name: 'React', icon: reactIcon },
};

// ==============
// Projektdaten
// ==============
export const projects: Project[] = [
  {
    id: 'join-project',
    title: 'Join',
    translationKey: 'join',
    technologies: [
      allTechnologies.angular,
      allTechnologies.ts,
      allTechnologies.html,
      allTechnologies.css,
      allTechnologies.firebase,
    ],
    liveLink: 'https://marco-loch.developerakademie.net/join/index.html',
    githubLink: 'https://github.com/Marco-Loch/join',
    image: joinProjectImg,
  },
  {
    id: 'crazy-dog-project',
    title: 'Crazy Dog',
    translationKey: 'crazy-dog',
    technologies: [allTechnologies.html, allTechnologies.css, allTechnologies.js],
    liveLink: 'https://marco-loch.developerakademie.net/CrazyDogEng/index.html',
    githubLink: 'https://github.com/Marco-Loch/2d-Game-DA',
    image: crazyDogImg,
  },
  {
    id: 'evelike-project',
    title: 'EVElike',
    translationKey: 'evelike',
    technologies: [allTechnologies.js, allTechnologies.html, allTechnologies.css, allTechnologies.react],
    liveLink: 'https://evelike.onrender.com/',
    githubLink: 'https://github.com/Marco-Loch/EVElike',
    image: eveLinkeImg,
  },
];
