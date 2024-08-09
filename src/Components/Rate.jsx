import React, { useState } from 'react'
import styles from './Rate.module.css'

export const Rate = () => {

  const [ismainFrameHidden, setMainFrameHidden] = useState(false)

  const handleHiddenMenu = () => {
      setMainFrameHidden(true)
  }
  
  return (
    <>
    <div className={styles.top_frame}>
    <img src="https://i.etsystatic.com/16874044/r/il/3212cf/2376452636/il_fullxfull.2376452636_skrj.jpg" alt="" />
    <div className={styles.show_btn}
    onClick={handleHiddenMenu}>Start Review</div>
    </div>

    <div className={ismainFrameHidden === false ? styles.main_frame_hidden : styles.main_frame}>
      bjasjkasjkahsk

    </div>
    </>
  )
}
