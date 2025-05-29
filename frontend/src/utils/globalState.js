import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    darkMode: true

    });


export { setGlobalState, useGlobalState };