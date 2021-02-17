import '../../mixins/Animations/Animations.scss'
import './Introduction.scss'

function Introduction() {
  return (
    <div className="introduction">
      <p className="introduction__title"> Alejandra López </p>
      <p className="introduction__subtitle">
        React
        <spa className="introduction__ico"> + </spa>
        Sass
      </p>
      
    </div>
  );
}

export default Introduction;