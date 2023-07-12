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
  },
];

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export { getProducts };
