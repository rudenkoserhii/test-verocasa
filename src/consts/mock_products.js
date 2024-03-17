import product_01_01_medium_x1 from 'assets/images/product/product_01-01_medium_x1.png'
import product_01_01_medium_x2 from 'assets/images/product/product_01-01_medium_x2.png'
import product_01_01_medium_x3 from 'assets/images/product/product_01-01_medium_x3.png'

import product_01_02_medium_x1 from 'assets/images/product/product_01-02_medium_x1.png'
import product_01_02_medium_x2 from 'assets/images/product/product_01-02_medium_x2.png'
import product_01_02_medium_x3 from 'assets/images/product/product_01-02_medium_x3.png'

import product_01_03_medium_x1 from 'assets/images/product/product_01-03_medium_x1.png'
import product_01_03_medium_x2 from 'assets/images/product/product_01-03_medium_x2.png'
import product_01_03_medium_x3 from 'assets/images/product/product_01-03_medium_x3.png'

import product_01_01_small_x1 from 'assets/images/product/product_01-01_small_x1.png'
import product_01_01_small_x2 from 'assets/images/product/product_01-01_small_x2.png'
import product_01_01_small_x3 from 'assets/images/product/product_01-01_small_x3.png'

import product_01_02_small_x1 from 'assets/images/product/product_01-02_small_x1.png'
import product_01_02_small_x2 from 'assets/images/product/product_01-02_small_x2.png'
import product_01_02_small_x3 from 'assets/images/product/product_01-02_small_x3.png'

import product_01_03_small_x1 from 'assets/images/product/product_01-03_small_x1.png'
import product_01_03_small_x2 from 'assets/images/product/product_01-03_small_x2.png'
import product_01_03_small_x3 from 'assets/images/product/product_01-03_small_x3.png'

import product_01_01_big_x1 from 'assets/images/product/product_01-01_big_x1.png'
import product_01_01_big_x2 from 'assets/images/product/product_01-01_big_x2.png'
import product_01_01_big_x3 from 'assets/images/product/product_01-01_big_x3.png'

import product_02_01_medium_x1 from 'assets/images/product/product_02-01_medium_x1.png'
import product_02_01_medium_x2 from 'assets/images/product/product_02-01_medium_x2.png'
import product_02_01_medium_x3 from 'assets/images/product/product_02-01_medium_x3.png'

import product_03_01_medium_x1 from 'assets/images/product/product_03-01_medium_x1.png'
import product_03_01_medium_x2 from 'assets/images/product/product_03-01_medium_x2.png'
import product_03_01_medium_x3 from 'assets/images/product/product_03-01_medium_x3.png'

export const MOCK_PRODUCTS = [
  {
    name: 'термобілизна для бодібілдерів',
    art: 'MW0MW32781',
    category: 'одяг',
    subcategory: 'термобілизна',
    type: 'термокостюм',
    brand: 'puma',
    gender: 'чоловіки',
    whom: 'для чоловіків',
    price: 4000,
    weight: null,
    isFavorite: false,
    sizes: [
      { title: 'xxs', quantity: { black: 0, grey: 1 } },
      { title: 'xs', quantity: { black: 0, grey: 1 } },
      { title: 's', quantity: { black: 3, grey: 1 } },
      { title: 'm', quantity: { black: 0, grey: 1 } },
      { title: 'l', quantity: { black: 0, grey: 1 } },
      { title: 'xl', quantity: { black: 1, grey: 1 } },
      { title: 'xxl', quantity: { black: 0, grey: 0 } },
    ],
    colors: ['black', 'grey'],
    description: [
      {
        title: 'Терморегуляція забезпечить вам тепло в будь-якій ситуації.',
        text: 'Сучасні технології дозволяють нашому термокостюму адаптуватися до вашого тіла та навколишнього середовища.',
      },
      {
        title: 'Легкість та еластичність для максимальної свободи рухів.',
        text: 'Забудьте про невигоди - наш термокостюм розроблений з урахуванням вашої активності.',
      },
      {
        title: 'Дихаючі тканини для оптимальної вентиляції.',
        text: 'Забудьте про  потовиділення - наш термокостюм дозволяє шкірі "дихати", забезпечуючи вам комфорт під час активної діяльності.',
      },
    ],
    images: [
      {
        medium: {
          photo_01: {
            x1: product_01_01_medium_x1,
            x2: product_01_01_medium_x2,
            x3: product_01_01_medium_x3,
          },
          photo_02: {
            x1: product_01_02_medium_x1,
            x2: product_01_02_medium_x2,
            x3: product_01_02_medium_x3,
          },
          photo_03: {
            x1: product_01_03_medium_x1,
            x2: product_01_03_medium_x2,
            x3: product_01_03_medium_x3,
          },
        },
      },
      {
        small: {
          photo_01: {
            x1: product_01_01_small_x1,
            x2: product_01_01_small_x2,
            x3: product_01_01_small_x3,
          },
          photo_02: {
            x1: product_01_02_small_x1,
            x2: product_01_02_small_x2,
            x3: product_01_02_small_x3,
          },
          photo_03: {
            x1: product_01_03_small_x1,
            x2: product_01_03_small_x2,
            x3: product_01_03_small_x3,
          },
        },
      },
      {
        big: {
          photo_01: {
            x1: product_01_01_big_x1,
            x2: product_01_01_big_x2,
            x3: product_01_01_big_x3,
          },
        },
      },
    ],
  },
  {
    name: 'майка для бодібілдерів',
    art: 'MW0MW32782',
    category: 'одяг',
    subcategory: 'спорт',
    type: 'топ',
    brand: 'nike',
    gender: 'жінки',
    whom: 'для жінок',
    price: 1100,
    weight: null,
    isFavorite: false,
    sizes: [
      { title: 'xxs', quantity: { black: 0, grey: 1, white: 2, red: 0, green: 1, pink: 2 } },
      { title: 'xs', quantity: { black: 0, grey: 1, white: 2, red: 0, green: 1, pink: 2 } },
      { title: 's', quantity: { black: 2, grey: 1, white: 2, red: 0, green: 1, pink: 2 } },
      { title: 'm', quantity: { black: 0, grey: 1, white: 2, red: 0, green: 1, pink: 2 } },
      { title: 'l', quantity: { black: 2, grey: 1, white: 2, red: 0, green: 1, pink: 2 } },
      { title: 'xl', quantity: { black: 0, grey: 1, white: 2, red: 0, green: 1, pink: 2 } },
      { title: 'xxl', quantity: { black: 0, grey: 0, white: 0, red: 0, green: 1, pink: 2 } },
    ],
    colors: ['black', 'grey', 'white', 'red', 'green', 'pink'],
    description: [
      {
        title: 'Терморегуляція забезпечить вам тепло в будь-якій ситуації.',
        text: 'Сучасні технології дозволяють нашому термокостюму адаптуватися до вашого тіла та навколишнього середовища.',
      },
      {
        title: 'Легкість та еластичність для максимальної свободи рухів.',
        text: 'Забудьте про невигоди - наш термокостюм розроблений з урахуванням вашої активності.',
      },
      {
        title: 'Дихаючі тканини для оптимальної вентиляції.',
        text: 'Забудьте про  потовиділення - наш термокостюм дозволяє шкірі "дихати", забезпечуючи вам комфорт під час активної діяльності.',
      },
    ],
    images: [
      {
        medium: {
          photo_01: {
            x1: product_02_01_medium_x1,
            x2: product_02_01_medium_x2,
            x3: product_02_01_medium_x3,
          },
        },
      },
    ],
  },
  {
    name: 'ланцюжок для бодібілдерів',
    art: 'MW0MW32783',
    category: 'одяг',
    subcategory: 'аксесуари',
    type: 'ланцюг',
    brand: 'prada',
    gender: 'аксесуари',
    whom: 'аксесуари',
    price: 2000,
    weight: 30,
    isFavorite: false,
    sizes: [
      { title: 's', quantity: { none: 0 } },
      { title: 'm', quantity: { none: 2 } },
      { title: 'l', quantity: { none: 0 } },
    ],
    colors: ['none'],
    description: [
      {
        title: 'Терморегуляція забезпечить вам тепло в будь-якій ситуації.',
        text: 'Сучасні технології дозволяють нашому термокостюму адаптуватися до вашого тіла та навколишнього середовища.',
      },
      {
        title: 'Легкість та еластичність для максимальної свободи рухів.',
        text: 'Забудьте про невигоди - наш термокостюм розроблений з урахуванням вашої активності.',
      },
      {
        title: 'Дихаючі тканини для оптимальної вентиляції.',
        text: 'Забудьте про  потовиділення - наш термокостюм дозволяє шкірі "дихати", забезпечуючи вам комфорт під час активної діяльності.',
      },
    ],
    images: [
      {
        medium: {
          photo_01: {
            x1: product_03_01_medium_x1,
            x2: product_03_01_medium_x2,
            x3: product_03_01_medium_x3,
          },
        },
      },
    ],
  },
  {
    name: 'чоловічий термокостюм',
    art: 'MW0MW32780',
    category: 'одяг',
    subcategory: 'термобілизна',
    type: 'термокостюм',
    brand: 'atlantic',
    gender: 'чоловіки',
    whom: 'для чоловіків',
    price: 3700,
    weight: null,
    isFavorite: false,
    sizes: [
      { title: 'xxs', quantity: { black: 0, grey: 1, white: 2 } },
      { title: 'xs', quantity: { black: 0, grey: 1, white: 2 } },
      { title: 's', quantity: { black: 0, grey: 1, white: 2 } },
      { title: 'm', quantity: { black: 0, grey: 1, white: 2 } },
      { title: 'l', quantity: { black: 0, grey: 1, white: 2 } },
      { title: 'xl', quantity: { black: 0, grey: 1, white: 2 } },
      { title: 'xxl', quantity: { black: 0, grey: 0, white: 0 } },
    ],
    colors: ['black', 'grey', 'white'],
    description: [
      {
        title: 'Терморегуляція забезпечить вам тепло в будь-якій ситуації.',
        text: 'Сучасні технології дозволяють нашому термокостюму адаптуватися до вашого тіла та навколишнього середовища.',
      },
      {
        title: 'Легкість та еластичність для максимальної свободи рухів.',
        text: 'Забудьте про невигоди - наш термокостюм розроблений з урахуванням вашої активності.',
      },
      {
        title: 'Дихаючі тканини для оптимальної вентиляції.',
        text: 'Забудьте про  потовиділення - наш термокостюм дозволяє шкірі "дихати", забезпечуючи вам комфорт під час активної діяльності.',
      },
    ],
    images: [
      {
        medium: {
          photo_01: {
            x1: product_01_01_medium_x1,
            x2: product_01_01_medium_x2,
            x3: product_01_01_medium_x3,
          },
          photo_02: {
            x1: product_01_02_medium_x1,
            x2: product_01_02_medium_x2,
            x3: product_01_02_medium_x3,
          },
          photo_03: {
            x1: product_01_03_medium_x1,
            x2: product_01_03_medium_x2,
            x3: product_01_03_medium_x3,
          },
        },
      },
      {
        small: {
          photo_01: {
            x1: product_01_01_small_x1,
            x2: product_01_01_small_x2,
            x3: product_01_01_small_x3,
          },
          photo_02: {
            x1: product_01_02_small_x1,
            x2: product_01_02_small_x2,
            x3: product_01_02_small_x3,
          },
          photo_03: {
            x1: product_01_03_small_x1,
            x2: product_01_03_small_x2,
            x3: product_01_03_small_x3,
          },
        },
      },
      {
        big: {
          photo_01: {
            x1: product_01_01_big_x1,
            x2: product_01_01_big_x2,
            x3: product_01_01_big_x3,
          },
        },
      },
    ],
  },
]
