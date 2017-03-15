// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
        },
    }, {
      path: '/features',
      name: 'features',
      getComponent(nextState, cb) {
        import('containers/FeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/services',
      name: 'servicesPage',
      getComponent(location, cb) {
        import('containers/ServicesPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/services/:packNum',
      name: 'propousalPage',
      getComponent(location, cb) {
        import('containers/PropousalPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/contact',
      name: 'contactPage',
      getComponent(location, cb) {
        import('containers/ContactPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'aboutPage',
      getComponent(location, cb) {
        import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
