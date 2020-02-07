import { makeModule, makeFetchData } from './helpers';
import { namespaces, actions } from './constants';
import PassengerModule from './modules/passengers';

const modules = {
  [namespaces.drives]: makeModule({
    [actions.fetchDrives]: makeFetchData('drives'),
  }),
  [namespaces.cars]: makeModule({
    [actions.fetchCars]: makeFetchData('cars'),
  }),
  [namespaces.passengers]: PassengerModule,
  [namespaces.projects]: makeModule({
    [actions.fetchProjects]: makeFetchData('projects'),
  }),
};

export { modules };
