import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const TypeContext = createContext<{
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}>({
  type: "news",
  setType: () => "",
});

export const useType = (): {
  saveType: (type: string) => void;
  type: string;
} => {
  const { type, setType } = useContext(TypeContext);
  const saveType = (type: string) => {
    console.log(type);
    setType(type);
  };

  return {
    saveType,
    type,
  };
};

export const useCurrentType = (): {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
} => {
  const [type, setType] = useState("news");
  return {
    type,
    setType,
  };
};
