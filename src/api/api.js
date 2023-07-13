const products = [
  {
    id: 1,
    name: 'Livret A',
    interestRate: 3.0,
    initialDeposit: 30,
    ceiling: 10000,
    goal: 'épargne',
    category: 'épargne',
    investmentType: 'long terme',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut sapien at neque vehicula dictum. \n Quisque sit amet massa tortor. Aliquam bibendum arcu non magna hendrerit, ut pellentesque nulla vehicula. Morbi vitae pretium purus.\n Donec accumsan vestibulum felis sed lacinia. Sed quis nulla facilisis, mollis turpis id, mattis enim. Sed id ultrices magna. Phasellus ipsum ligula, ultricies egestas metus in, scelerisque ultrices lorem. Nunc lobortis magna eu odio convallis, vel egestas nunc aliquet.\n Nullam at ipsum eget tortor venenatis vehicula. Nullam luctus facilisis ipsum eu ultrices. Maecenas in vestibulum ex. Vivamus dictum vel dolor eget porta. Cras tempus orci eu suscipit tincidunt. Vestibulum laoreet nunc eu ligula tempor, sit amet pharetra mi porta. Quisque vehicula scelerisque erat at eleifend. Integer quis suscipit augue. Maecenas a orci ligula. Pellentesque eu blandit nisi.\n Nunc dolor nulla, aliquam quis lorem at, sodales consectetur leo.\n Aliquam eleifend tempus auctor.\n Etiam fringilla suscipit elementum. Nulla velit libero, maximus non ultrices sit amet, semper sed ipsum.\n Maecenas dictum velit ut justo egestas, et efficitur erat semper.',
  },
  {
    id: 2,
    name: 'LDD',
    interestRate: 3.5,
    initialDeposit: 1000,
    ceiling: 10000,
    goal: 'épargne',
    category: 'épargne',
    investmentType: 'long terme',
    descr:
      'In dignissim nibh eu nibh maximus pharetra. \n Duis orci enim, efficitur et massa id, elementum ornare ex. Sed venenatis egestas nisl eget tincidunt. Cras non felis enim. Morbi lobortis lectus lectus, ut ultrices sapien finibus nec. Donec malesuada hendrerit ultricies. Curabitur tempus erat ultricies rutrum sagittis. \n Mauris porta nec metus eu tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eget rutrum metus, eget faucibus quam. Cras sit amet quam tortor. \n Curabitur sodales libero quis ante faucibus, quis vehicula ipsum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta pharetra lectus sit amet consequat. Nulla eu pellentesque tortor, a aliquam dui.',
  },
  {
    id: 3,
    name: 'Compte courant',
    interestRate: 0.5,
    initialDeposit: 0,
    ceiling: null,
    goal: 'dépenses quotidiennes',
    category: 'épargne',
    investmentType: 'court terme',
    descr:
      'Phasellus viverra blandit magna in tincidunt. \n  Etiam risus velit, finibus eu mollis tincidunt, euismod ut odio. \n  Proin sed ipsum bibendum, semper sapien ut, imperdiet massa. Duis eu enim suscipit, tincidunt ligula in, tempus turpis. Fusce id tellus ut nisi tristique mattis ut in mi. \n Mauris sit amet nunc sagittis, tincidunt sapien consectetur, malesuada metus.',
  },
  {
    id: 4,
    name: 'Compte à terme',
    interestRate: 4.0,
    initialDeposit: 5000,
    ceiling: null,
    goal: 'épargne',
    category: 'épargne',
    investmentType: 'court terme',
    descr:
      'Suspendisse in tempus turpis. Nam et ligula et ipsum convallis luctus eget dictum urna. Integer semper fringilla lorem et sodales. Morbi ex leo, facilisis id imperdiet at, euismod in metus. Suspendisse elementum ligula ac nibh lacinia porta. Nulla nec felis porttitor, eleifend dui ac, pellentesque nulla. Phasellus viverra blandit magna in tincidunt. Etiam risus velit, finibus eu mollis tincidunt, euismod ut odio. \n Proin sed ipsum bibendum, semper sapien ut, imperdiet massa. Duis eu enim suscipit, tincidunt ligula in, tempus turpis. Fusce id tellus ut nisi tristique mattis ut in mi. \n Mauris sit amet nunc sagittis, tincidunt sapien consectetur, malesuada metus. Sed erat ex, placerat vitae enim sed, dapibus varius quam. Mauris vel quam ut felis rutrum rhoncus.',
  },
  {
    id: 5,
    name: 'Plan épargne logement',
    interestRate: 2.0,
    initialDeposit: 2000,
    ceiling: 15000,
    goal: 'épargne, crédit',
    category: 'épargne',
    investmentType: 'long terme',
    descr:
      'Ut lobortis, ligula nec dictum blandit, augue tellus tempor ante, eget eleifend lectus ipsum a felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. \n Ut egestas ac purus at commodo. Praesent in turpis pretium, luctus quam et, semper tortor. Nam a laoreet neque. Nam ac massa rhoncus metus convallis placerat at vitae quam. \n Pellentesque congue cursus erat, in bibendum nisl molestie nec.',
  },
  {
    id: 6,
    name: 'Assurance vie',
    interestRate: 2.5,
    initialDeposit: 500,
    ceiling: 50000,
    goal: 'épargne',
    category: 'assurance',
    investmentType: 'long terme',
    descr:
      'Cras tristique vehicula condimentum. Aenean eget tempor lacus. Aenean elit mi, viverra eu porta vitae, varius eget justo. Nam porttitor volutpat arcu vel viverra. \n Duis varius ante est, vitae tristique purus viverra non. Nullam dapibus, mauris vel luctus semper, libero dolor lacinia diam, vitae venenatis arcu mauris non lorem. \n Duis tincidunt commodo nulla ac tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum vitae dui ultricies, tempus tortor nec, dictum lacus. Cras feugiat massa nibh, porta semper ligula hendrerit non. \n Aliquam suscipit urna ut nulla molestie molestie. \n Pellentesque ex lorem, tempor a venenatis eu, laoreet vitae ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu rhoncus nisi.',
  },

  {
    id: 7,
    name: 'Crédit auto',
    interestRate: 0,
    initialDeposit: 0,
    ceiling: 0,
    goal: 'crédit',
    category: 'crédit',
    investmentType: 'long terme',
    descr:
      'Cras tristique vehicula condimentum. \n  Aenean eget tempor lacus. Aenean elit mi, viverra eu porta vitae, varius eget justo. Nam porttitor volutpat arcu vel viverra. Duis varius ante est, vitae tristique purus viverra non. Nullam dapibus, mauris vel luctus semper, libero dolor lacinia diam, vitae venenatis arcu mauris non lorem. \n  Duis tincidunt commodo nulla ac tristique. \n  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum vitae dui ultricies, tempus tortor nec, dictum lacus. Cras feugiat massa nibh, porta semper ligula hendrerit non. Aliquam suscipit urna ut nulla molestie molestie. Pellentesque ex lorem, tempor a venenatis eu, laoreet vitae ipsum. \n  Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu rhoncus nisi.',
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProduct = products.find((p) => p.id === parseInt(id));

      resolve(filteredProduct);
    }, 1000);
  });
};

export { getProducts, getProduct };
