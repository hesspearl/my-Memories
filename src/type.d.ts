interface Inputs {
  creator: String;
  title: String;
  message: String;
  image?: string;
}
interface InputState extends Inputs {
  id: number;
}

type Props = {
  img: (arg: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
