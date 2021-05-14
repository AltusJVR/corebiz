import React from 'react'

import star_fill from './img/star_icon.svg';
import star_transparent from './img/star_icon_transparent.svg';

const Stars = (props) => {
  let stars = []
  let max_stars = 5;
  for (let i = 0; i < props.stars; ++i) {
    stars.push(<img key={`${i + 1} star__fill`} src={star_fill} className="star__transparent" alt="" />)
  }

  for (let i = 0; i < (max_stars - props.stars); ++i) {
    stars.push(<img key={`${i + 1} star__transparent`} src={star_transparent} alt="" />)
  }

  return (
    <div className="stars">
      {stars}
    </div >
  )
}

export default Stars