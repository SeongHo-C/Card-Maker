import React from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'SeongHo',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'SeongHo@gmail.com',
      message: 'go for it',
      fileName: 'seongho',
      fileURL: null,
    },
    {
      id: '2',
      name: 'SeongHo2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'SeongHo2@gmail.com',
      message: 'go for it',
      fileName: 'seongho2',
      fileURL: 'seongho2.png',
    },
    {
      id: '3',
      name: 'SeongHo3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'SeongHo3@gmail.com',
      message: 'go for it',
      fileName: 'seongho3',
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
