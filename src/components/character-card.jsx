function CharacterCard({ className, name, src, callback }) {
  return (
    <div className={'character-card ' + className}
      onClick={() => callback(name)}>

      <img className="character-card__avatar" src={`${src}`} alt="character-avatar" />

      <label htmlFor="" className="character-card__label">{name}</label>
    </div>
  );
}

export default CharacterCard;