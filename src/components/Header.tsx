import React,{VFC} from 'react';
import styles from "../styles/ball_header.module.scss";
import { Collapse , useDisclosure } from "@chakra-ui/react";

const Header:VFC = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <div className={styles.root}>
      <div className={styles.ball_top} >
        <p className={styles.title}>Pokédex</p>
        <div className={styles.ball_top_line} onClick={() => onToggle()}/>
        <div className={styles.ball_top_main} onClick={() => onToggle()}/>
        <div onClick={() => onToggle()} className={styles.ball_top_outside}/>
        <div onClick={() => onToggle()} className={styles.ball_top_center}/>
      </div>
      <Collapse in={isOpen} animateOpacity>
        <div className={styles.contents}>
          <div className={styles.contents_menu}>
            <ul className={styles.contents_menu_lists}>
              <li className={styles.contents_menu_list}>
                <img alt={'hyper'} src={'/hyper.jpeg'} />
                ピカッピカピカ！！(ポケモン図鑑へ)
              </li>
              <li className={styles.contents_menu_list}>
                <img alt={'master'} src={'/master.png'} />
                ピッピカチュゥ(ポケモンを探す)
              </li>
            </ul>
          </div>
          <img className={styles.contents_img} src={ 'pika3.gif' } alt={ 'pika' }/>
        </div>
      </Collapse>
      <div className={styles.ball_under}>
        <div onClick={() => onToggle()} className={styles.ball_under_line}/>
        <div onClick={() => onToggle()} className={styles.ball_under_main}/>
        <div onClick={() => onToggle()} className={styles.ball_under_outside}/>
        <div onClick={() => onToggle()} className={styles.ball_under_center}/>
        <div onClick={() => onToggle()} className={styles.contents_text_container}>
          <p className={styles.contents_text}>
            <span>Click on the monster ball</span>
          </p>
        </div>

      </div>

    </div>
  );
};

export default Header;
