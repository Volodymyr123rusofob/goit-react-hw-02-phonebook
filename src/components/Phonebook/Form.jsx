import style from './form.module.css';

const Form = ({}) => {
  return (
    <form className={style.form} action="">
      Name
      <input className={style.inp} type="text" name="name" required />
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
