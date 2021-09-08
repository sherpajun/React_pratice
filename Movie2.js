import React from "react";


function Movie2({title,medium_cover_image}){
    return(
        
            <tr>
                <td>{title}</td>
                <td><img width="100"src={medium_cover_image}/></td>
            </tr>


        
    );
 }


export default Movie2