import React, { useState } from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placehorder='Name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placehorder='Company'
      />
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        placehorder='Theme'
      >
        <option placehorder='light'>light</option>
        <option placehorder='dark'>dark</option>
        <option placehorder='colorful'>colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placehorder='Title'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placehorder='Email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placehorder='Message'
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
