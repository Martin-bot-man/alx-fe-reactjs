import React from "react";
import react,{useContext} from UserContext
const UserProfile =()=>{
return(
<div>
    <h2>{props.name}</h2>
    <p>Age: {props.age}</p>
    <p>Bio: {props.bio}</p>
</div>
);
};
export default UserProfile