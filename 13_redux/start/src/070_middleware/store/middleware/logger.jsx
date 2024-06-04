const logger = (store) => {
    return (next) => {
      return (action) => {
        console.log(action, store.getState())
        next(action);
        console.log(action, store.getState())
      };
    }
  }
  export default logger;