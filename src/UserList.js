import React,{useState , useEffect} from 'react';
import axios from 'axios'
const UserList = () => {
    const [listOfUSer, setlistOfUSer] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
     );
     setlistOfUSer(result.data);
   };
   fetchData();
 }, []);

    return (
        <div >
           {listOfUSer.map((e)=>
           <form className="form" key={e.id}>
               <div >
            <div class="form-group row ">

            <label for="inputName" class="col-sm-2 col-form-label title"> Name :</label>
    <div class="col-sm-3">
      <input type="text" readonly class="form-control-plaintext" id="inputName" value={e.name}/>
    </div>
</div>
                 
                  
    <div class="form-group row">
    <label for="inputUserName" class="col-sm-2 col-form-label title">User Name :</label>
    <div class="col-sm-3">
      <input type="text" readonly class="form-control-plaintext" id="inputUserName" value={e.username}/>
    </div>
</div>

                
                   <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label title">Email :</label>
    <div class="col-sm-3">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={e.email}/>
    </div>
</div>
</div>
           </form>


           )} 
        </div>
    );
};

export default UserList;