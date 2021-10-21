import { createContext, useState } from "react";

type TagProviderProps = {
  children: React.ReactNode;
};

export type simbolos = {
  name: string;
};

export type typeModel = {
  name: string;
  width: number;
  height: number;
  borderRadius: number;
  background: string;
  color: string;
};

export type TagContextData = {
  tag: TagModel;
  handleChangePosition: (operation: string, element: string) => void;
  handleChangePositionY: (operation: string, element: string) => void;
};

export type TagModel = {
  simbolos: simbolos[];
  ContentModel: typeModel;
  brand: {
    name: string;
    color: string;
    size: string;
    font_family: string;
    positionX: string;
    positionY: string;
    visible: boolean;
  };
  secondText: {
    name: string;
    color: string;
    size: string;
    font_family: string;
    positionX: string;
    positionY: string;
    visible: boolean;
  };
  textMade: {
    name: string;
    color: string;
    size: string;
    font_family: string;
    positionX: string;
    positionY: string;
    visible: boolean;
  };
  logo?: {
    image: string;
    size: string;
    positionX: string;
    positionY: string;
  };
};

export const TagContext = createContext({} as TagContextData);

export function TagProvider({ children }: TagProviderProps) {
  const [tag, setTag] = useState({
    simbolos: [],
    ContentModel: {
      name: "teste",
      width: 500,
      height: 200,
      borderRadius: 20,
      background: "#121214",
      color: "#fff",
    },
    brand: {
      name: "Adasi",
      color: "#fff",
      size: "24",
      font_family: "default",
      positionX: "12",
      positionY: "130",
      visible: true,
    },
    secondText: {
      name: "Slogan Adasi",
      color: "#fff",
      size: "24",
      font_family: "default",
      positionX: "12",
      positionY: "12",
      visible: true,
    },
    textMade: {
      name: "Made in Brazil",
      color: "#fff",
      size: "24",
      font_family: "default",
      positionX: "12",
      positionY: "12",
      visible: true,
    },
    logo: {
      image: "https://github.com/JonatasAlves9.png",
      size: "24",
      positionX: "12",
      positionY: "12",
    },
  });

  function handleChangePosition(operation: string, element: string) {
    if (operation === "add") {
      const x = (parseInt(tag.brand.positionX) + 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...tag[element],
          positionX: x.toString(),
        },
      });
    } else if (operation === "subtract") {
      const x = (parseInt(tag.brand.positionX) - 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...tag[element],
          positionX: x.toString(),
        },
      });
    }
  }

  function handleChangePositionY(operation: string, element: string) {
    console.log(tag.brand.positionY);
    if (operation === "add") {
      const y = (parseInt(tag.brand.positionY) + 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...tag[element],
          positionY: y.toString(),
        },
      });
    } else if (operation === "subtract") {
      const y = (parseInt(tag.brand.positionY) - 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...tag[element],
          positionY: y.toString(),
        },
      });
    }
  }

  return (
    <TagContext.Provider
      value={{ tag, handleChangePosition, handleChangePositionY }}
    >
      {children}
    </TagContext.Provider>
  );
}
