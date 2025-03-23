export default (initialState: API.UserInfo) => {
  // Define project permissions here based on initialization data, manage them uniformly
  // Reference documentation https://umijs.org/docs/max/access
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  return {
    canSeeAdmin,
  };
};
