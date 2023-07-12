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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut purus eget nisi consequat dignissim a nec ipsum. Praesent metus dolor, scelerisque quis pulvinar eget, dignissim in massa. Nam odio lectus, semper et dui at, laoreet placerat lectus. Morbi magna elit, facilisis ut condimentum quis, auctor semper tellus. Curabitur convallis dui quis auctor suscipit. Etiam fermentum sit amet diam feugiat sagittis. Donec ac dictum nisi. Maecenas tincidunt pellentesque dolor, mattis viverra massa accumsan nec. Suspendisse vitae ex quam. Morbi elit urna, placerat ac quam eu, imperdiet lacinia orci. Pellentesque scelerisque semper augue sed suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ornare lacus.',
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
      'In dignissim nibh eu nibh maximus pharetra. Duis orci enim, efficitur et massa id, elementum ornare ex. Sed venenatis egestas nisl eget tincidunt. Cras non felis enim. Morbi lobortis lectus lectus, ut ultrices sapien finibus nec. Donec malesuada hendrerit ultricies. Curabitur tempus erat ultricies rutrum sagittis. Mauris porta nec metus eu tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eget rutrum metus, eget faucibus quam. Cras sit amet quam tortor. Curabitur sodales libero quis ante faucibus, quis vehicula ipsum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta pharetra lectus sit amet consequat. Nulla eu pellentesque tortor, a aliquam dui.',
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
      'Phasellus viverra blandit magna in tincidunt. Etiam risus velit, finibus eu mollis tincidunt, euismod ut odio. Proin sed ipsum bibendum, semper sapien ut, imperdiet massa. Duis eu enim suscipit, tincidunt ligula in, tempus turpis. Fusce id tellus ut nisi tristique mattis ut in mi. Mauris sit amet nunc sagittis, tincidunt sapien consectetur, malesuada metus.',
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
      'Suspendisse in tempus turpis. Nam et ligula et ipsum convallis luctus eget dictum urna. Integer semper fringilla lorem et sodales. Morbi ex leo, facilisis id imperdiet at, euismod in metus. Suspendisse elementum ligula ac nibh lacinia porta. Nulla nec felis porttitor, eleifend dui ac, pellentesque nulla. Phasellus viverra blandit magna in tincidunt. Etiam risus velit, finibus eu mollis tincidunt, euismod ut odio. Proin sed ipsum bibendum, semper sapien ut, imperdiet massa. Duis eu enim suscipit, tincidunt ligula in, tempus turpis. Fusce id tellus ut nisi tristique mattis ut in mi. Mauris sit amet nunc sagittis, tincidunt sapien consectetur, malesuada metus. Sed erat ex, placerat vitae enim sed, dapibus varius quam. Mauris vel quam ut felis rutrum rhoncus.',
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
      'Ut lobortis, ligula nec dictum blandit, augue tellus tempor ante, eget eleifend lectus ipsum a felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut egestas ac purus at commodo. Praesent in turpis pretium, luctus quam et, semper tortor. Nam a laoreet neque. Nam ac massa rhoncus metus convallis placerat at vitae quam. Pellentesque congue cursus erat, in bibendum nisl molestie nec.',
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
      'Cras tristique vehicula condimentum. Aenean eget tempor lacus. Aenean elit mi, viverra eu porta vitae, varius eget justo. Nam porttitor volutpat arcu vel viverra. Duis varius ante est, vitae tristique purus viverra non. Nullam dapibus, mauris vel luctus semper, libero dolor lacinia diam, vitae venenatis arcu mauris non lorem. Duis tincidunt commodo nulla ac tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum vitae dui ultricies, tempus tortor nec, dictum lacus. Cras feugiat massa nibh, porta semper ligula hendrerit non. Aliquam suscipit urna ut nulla molestie molestie. Pellentesque ex lorem, tempor a venenatis eu, laoreet vitae ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu rhoncus nisi.',
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
