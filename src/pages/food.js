const food = (name, price, type, info, subtype) => {
  const getName = () => name;
  const getPrice = () => price;
  const getType = () => type;
  const getInfo = () => info;
  const getSubtype = () => (subtype ? subtype : "");

  const setName = (input) => (name = input);
  const setPrice = (input) => (price = input);
  const setType = (input) => (type = input);
  const setInfo = (input) => (info = input);
  const setSubtype = (input) => (subtype = input);

  return {
    // name,
    // price,
    // type,
    // info,
    // subtype,
    getName,
    getPrice,
    getType,
    getInfo,
    getSubtype,
    setName,
    setPrice,
    setType,
    setInfo,
    setSubtype,
  };
};

export default food;
