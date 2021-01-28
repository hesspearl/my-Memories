import { makeStyles, Theme} from '@material-ui/core/styles';


export const useStyle= makeStyles((theme:Theme)=>({
    contain:{
        height:"30%"
    },
    appbar:{
        height:"5rem",
        borderRadius:50,
        top:20 ,
        backgroundImage:`linear-gradient(135deg , rgba(1,87,155,0.8) 0% , rgba(41,182,246,0.8) 100%) ,url("https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`,
        backgroundOrigin:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:'cover',
    },
    toolbar:{
        margin:"auto",
       
    },
    text:{
      
        fontSize:"600",
        
    },
    background:{
        width:"100%",
        height:"100%",
        
       
        
    }
}
)
)
      

    