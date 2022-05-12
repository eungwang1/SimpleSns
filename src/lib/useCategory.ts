export const CATEGORIES = [
  {
    categoryPk: 6,
    categoryCode: 'ALL',
    categoryName: '전체',
  },
  {
    categoryPk: 7,
    categoryCode: 'RANKING',
    categoryName: '인기글',
  },
  {
    categoryPk: 1,
    categoryCode: 'PETITION',
    categoryName: '대선청원',
  },
  {
    categoryPk: 2,
    categoryCode: 'FREE',
    categoryName: '자유글',
  },
  {
    categoryPk: 3,
    categoryCode: 'QNA',
    categoryName: '질문/답변',
  },
  {
    categoryPk: 4,
    categoryCode: 'NEWS',
    categoryName: '뉴스',
  },
  {
    categoryPk: 5,
    categoryCode: 'TIP',
    categoryName: '노하우',
  },
];

export const useCategory = () => {
  const categoires = CATEGORIES;
  const categoryName = CATEGORIES.filter((data) => {
    let boolean = true;
    if (data.categoryName === '인기글') boolean = false;
    if (data.categoryName === '전체') boolean = false;
    return boolean;
  }).map((data) => data.categoryName);
  const convert = (name: string) => categoires.filter((data) => data.categoryName === name)[0];
  return { categoires, categoryName, convert };
};
