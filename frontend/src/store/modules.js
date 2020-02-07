import { makeModule, makeFetchData } from './helpers';
import { namespaces, actions } from './constants';
import PassengerModule from './modules/passengers';
import CarsModule from './modules/cars';
import ProjectsModule from './modules/projects';

const modules = {
  [namespaces.drives]: makeModule({
    [actions.fetchDrives]: makeFetchData('drives'),
  }),
  [namespaces.cars]: CarsModule,
  [namespaces.passengers]: PassengerModule,
  [namespaces.projects]: ProjectsModule,
};

export { modules };
