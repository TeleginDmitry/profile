import React from 'react'
import styles from './ImagesList.module.scss'


const ImagesList = ({picture}) => {
  return (
    <ul className={styles.pictures}>
      {picture.map((item) => {
				return <img key={item.id} className={styles.picture} src={item.linkView} alt="Name Site" />
			})}
    </ul>
  )
}

export default ImagesList