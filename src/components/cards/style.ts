import { makeStyles, Theme} from '@material-ui/core/styles';


export const useStyle= makeStyles((theme:Theme)=>({
    root:{
        minWidth:250,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        margin:theme.spacing(3)
    },
  
     

})) 