import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="form-group container">
    <form action="#" method="post">
    <div >
        <label for="name">Nom :</label>
        <input class="form-control w-75  mt-2 p-2" type="text" id="name" name="name" placeholder="Enter Nom"/>
    </div>
    <div>
        <label for="last_name">Prenom:</label>
        <input class="form-control w-75  mt-2 p-2" type="text" id="lastname" name="last_name" placeholder="Enter Prenom"/>
    </div>
    <div>
        <label for="mail">E-mail :</label>
        <input class="form-control w-75  mt-2 p-2" type="email" id="mail" name="user_mail" placeholder="Enter Email"/>
    </div>
     
      <button type="button" class="btn btn-outline-primary bs-tooltip-right"for="valider">Valider</button>
  
    
      <button type="button" class="btn btn-outline-primary bs-tooltip-right" for="annuler">Annuler</button>


</form>
</div>
    
  )
}

export default App;
