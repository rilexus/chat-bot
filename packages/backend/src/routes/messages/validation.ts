const access = (
  path: string /* key.path.to.object.value */,
  object: { [key: string]: object }
): any => {
  // Gets value from object by given path.
  const value = path.split(".").reduce((value, key) => value[key], object);
  if (!value) {
    console.warn(`Value is undefined for path: "${path}"!`);
  }
  return value;
};

const body = (path) => {
  return {
    isString: (req, res, next) => {
      const value = access(path, req.body);

      if (!value) {
        res
          .status(400)
          .send({ error: true, message: "Invalid request body shape." });
        return next(
          new Error(`Value for ${path} does not exist in the request body.`)
        );
      }

      if (typeof value !== "string") {
        res
          .status(400)
          .send({ error: true, message: "Value is not a string." });
        return next(new Error("Body value is not a string!"));
      }

      return next();
    },
  };
};
export { body };
