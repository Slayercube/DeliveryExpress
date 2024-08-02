import React from 'react'
import styles from './Itemspecs.module.css'
const Itemspecs = () => {
  return (
    <div className='card' id={styles.box}>
      <select>
        <option value="item1">select item</option>
        <option value="item1">Documents</option>
        <option value="item1">Box</option>
        <option value="item1">Furniture</option>
        <option value="item1">Electronics</option>
      </select>
        <input className={styles.box} type="text" placeholder='length'/>
        <input className={styles.box} type="text" placeholder='width'/>
        <input className={styles.box} type="text" placeholder='height' />
        <input className={styles.box} type="text" placeholder='weight' />

    </div>
  )
}

export default Itemspecs