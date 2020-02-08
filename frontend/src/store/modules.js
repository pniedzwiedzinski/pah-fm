import { namespaces } from './constants';
import PassengerModule from './modules/passengers';
import CarsModule from './modules/cars';
import ProjectsModule from './modules/projects';
import DrivesModule from './modules/drives';

const modules = {
  [namespaces.drives]: DrivesModule,
  [namespaces.cars]: CarsModule,
  [namespaces.passengers]: PassengerModule,
  [namespaces.projects]: ProjectsModule,
};

export { modules };
