export const usersReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.value];
  }

  return state || null;
};

export default usersReducer;
