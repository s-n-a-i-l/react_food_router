import './Contacts.css';

function Contacts()
{

     const text ={
        title:'Contact',
        description:'E-mail:thetadatadb@gmail.com'
     }
    return(
        <div className='wrap'>
             <h2>{text.title}</h2>
             <h3>{text.description}</h3>
        </div>
    )
}
export default Contacts;