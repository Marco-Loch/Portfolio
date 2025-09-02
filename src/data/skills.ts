import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/javascript.png';
import materialDesignIcon from '../assets/img/materialdesign.png';
import typescriptIcon from '../assets/img/typescript.png';
import angularIcon from '../assets/img/angular.png';
import firebaseIcon from '../assets/img/firebase.png';
import gitIcon from '../assets/img/git.png';
import restApiIcon from '../assets/img/restapi.png';
import scrumIcon from '../assets/img/scrum.png';
import growthMindsetIcon from '../assets/img/growthmindset.png';
import type { Skill } from '../types/skill_type';

export const skills: Skill[] = [
  { id: 'html', name: 'HTML', icon: htmlIcon },
  { id: 'css', name: 'CSS', icon: cssIcon },
  { id: 'js', name: 'JavaScript', icon: jsIcon },
  { id: 'mui', name: 'Material Design', icon: materialDesignIcon },
  { id: 'ts', name: 'TypeScript', icon: typescriptIcon },
  { id: 'ang', name: 'Angular', icon: angularIcon },
  { id: 'fire', name: 'Firebase', icon: firebaseIcon },
  { id: 'git', name: 'Git', icon: gitIcon },
  { id: 'rest', name: 'REST-API', icon: restApiIcon },
  { id: 'scrum', name: 'Scrum', icon: scrumIcon },
  { id: 'grow', name: 'Growth mindset', icon: growthMindsetIcon },
];
