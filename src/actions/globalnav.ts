export type GlobalNavAction = {
  type: "SET_GLOBAL_NAV";
  target: string;
};

export const onGlobalNavClick = (target: string): GlobalNavAction => {
  return {
    type: "SET_GLOBAL_NAV",
    target: target
  };
};
