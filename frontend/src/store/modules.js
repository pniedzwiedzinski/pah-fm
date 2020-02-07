import { makeModule, makeFetchData } from './helpers';
import { namespaces, actions } from './constants';
import PassengerModule from './modules/passengers';
import CarsModule from './modules/cars';

const modules = {
  [namespaces.drives]: makeModule({
    [actions.fetchDrives]: makeFetchData('drives'),
  }),
  [namespaces.cars]: CarsModule,
  [namespaces.passengers]: PassengerModule,
  [namespaces.projects]: makeModule({
    [actions.fetchProjects]: makeFetchData('projects'),
  }),
};

export { modules };
