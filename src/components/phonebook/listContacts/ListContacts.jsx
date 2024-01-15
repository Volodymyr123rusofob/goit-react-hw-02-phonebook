import style from './listContacts.module.css';

const ListContacts = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name }) => (
    <li key={id} className={style.list}>
      {name}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <div className={style.div}>
      <h2 className={style.h2}>Contacts</h2>
      <ul className={style.ullist}>{elements}</ul>
    </div>
  );
};

export default ListContacts;
