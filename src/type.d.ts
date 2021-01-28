type Inputs= {
  creator: String;
  title: String;
  message: String;
  image:String;
};

type State = {
  posts: Inputs[],
 
 };

type Action = {
  type: String;
  value: Inputs;
};


type CardProps =  Inputs & {id:number}
