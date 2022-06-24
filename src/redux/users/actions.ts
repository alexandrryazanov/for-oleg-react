export const addUser = (user: any): any => {
  return (dispatch: any) => {
    setTimeout(() => dispatch({ type: "ADD_USER", value: user }), 3000);
  };
  // return { type: "ADD_USER", value: user };
};
