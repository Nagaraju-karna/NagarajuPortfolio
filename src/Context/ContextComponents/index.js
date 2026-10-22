import { createContext } from "react";

const Context = createContext(
    {
        showMood: false,
        btnClickToChangeMood: () => { }
    }
)

export default Context