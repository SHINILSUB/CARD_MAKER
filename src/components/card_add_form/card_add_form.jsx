import React, { useRef, useState } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef()
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({fileName: null, fileUrl: null});
  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRefnameRef.current.value || '',
      theme: themeRefnameRef.current.value || '',
      title: titleRefnameRef.current.value || '',
      email: emailRefnameRef.current.value || '',
      message: messageRefnameRef.current.value || '',
      filename:  file.fileName || '',
      fileURL:  file.fileURL || ''
    };
    formRef.current.reset()
    onAdd(card)
  };
  return (
    <form 
    ref={formRef}
    className={styles.form}>
      <input
      ref={nameRef}
       className={styles.input} type="text" name="name" placeholder="Name" />
      <input
      ref={companyRef}

        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
      ref={themeRef}
       className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
      ref={titleRef}
       className={styles.input} type="text" name="title" placeholder={title} />
      <input
      ref={emailRef}
       className={styles.input} type="text" name="email" placeholder={email} />
      <textarea
      ref={messageRef}
       className={styles.textarea} name="message" placeholder="Message" />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange}/>
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
