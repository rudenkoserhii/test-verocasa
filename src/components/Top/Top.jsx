import React from 'react'
import 'components/News/news.scss'
import news_x1 from 'assets/images/present/present_x1.png'
import news_x2 from 'assets/images/present/present_x2.png'
import news_x3 from 'assets/images/present/present_x3.png'
import { Button } from 'components/Button/Button'

export const Top = () => {
  const onClickButton = () => console.log('До каталогу')

  return (
    <section className="news__section">
      <div className="news__content">
        <h3 className="news__title">Ми знаємо, що сподобається вашим “великим” друзям!</h3>
        <p className="news__paragraph">
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big
          warm”
        </p>
        <Button color="black" text="До каталогу" onClickButton={() => onClickButton()} />
      </div>
      <img
        className="news__image"
        srcSet={`${news_x1} 1x, ${news_x2} 2x, ${news_x3} 3x`}
        src={news_x1}
        alt="Man"
      />
    </section>
  )
}
