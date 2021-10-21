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
  handleChangePosition: (operation: string, element: 'brand' | 'secondText' | 'textMade' | 'logo') => void;
  handleChangePositionY: (operation: string, element: 'brand' | 'secondText' | 'textMade' | 'logo') => void;
  changeTextElement: (element: 'brand' | 'secondText' | 'textMade', value: string) => void;
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
      positionY: "180",
      visible: true,
    },
    secondText: {
      name: "Slogan Adasi",
      color: "#fff",
      size: "24",
      font_family: "default",
      positionX: "50",
      positionY: "180",
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

  function changeTextElement(element: 'brand' | 'secondText' | 'textMade', value: string) {
    const elementParams = tag[element];
    setTag({
      ...tag,
      [element]: {
        ...elementParams,
        name: value,
      },
    });
  }

  function handleChangePosition(operation: string, element: 'brand' | 'secondText' | 'textMade' | 'logo') {
    const elementParams = tag[element];
    if (operation === "add") {
      const x = (parseInt(elementParams.positionX) + 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...elementParams,
          positionX: x.toString(),
        },
      });
    } else if (operation === "subtract") {
      const x = (parseInt(elementParams.positionX) - 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...elementParams,
          positionX: x.toString(),
        },
      });
    }
  }

  function handleChangePositionY(operation: string, element: 'brand' | 'secondText' | 'textMade' | 'logo') {
    console.log(tag.brand.positionY);
    const elementParams = tag[element];
    if (operation === "add") {
      const y = (parseInt(elementParams.positionY) + 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...elementParams,
          positionY: y.toString(),
        },
      });
    } else if (operation === "subtract") {
      const y = (parseInt(elementParams.positionY) - 2).toString();
      setTag({
        ...tag,
        [element]: {
          ...elementParams,
          positionY: y.toString(),
        },
      });
    }
  }

  return (
    <TagContext.Provider
      value={{
        tag,
        handleChangePosition,
        handleChangePositionY,
        changeTextElement,
      }}
    >
      {children}
    </TagContext.Provider>
  );
}
