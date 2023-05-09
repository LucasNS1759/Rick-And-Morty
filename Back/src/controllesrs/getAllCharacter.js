const { Character } = require("../Database/DB_connection.js");

const getAllCharacter = async (querys, page, pageSize) => {
let params = {...querys}
  const offset = +page * +pageSize;
  const limit = +pageSize;
  let response;
  let order = [];
  if (querys.sort && querys.typeSort) {
    order.push([querys.sort, querys.typeSort]);
  }

  let where = querys;
  delete where.sort;
  delete where.typeSort;
  delete where.page;

  if (order && where) {
    response = await Character.findAndCountAll({
      where,
      order,
      district: true,
      limit,
      offset,
    });
  } else if (!order && where) {
    response = await Character.findAndCountAll({
      where,
      district: true,
      limit,
      offset,
    });
  } else if (order && !where) {
    response = await Character.findAndCountAll({
      order,
      district: true,
      limit,
      offset,
    });
  } else {
    response = await Character.findAndCountAll({
      order: order,
      district: true,
      limit,
      offset,
    });
  }

  let pagination = {
    count: response.count,
    totalPage: Math.ceil(response.count / pageSize) - 1,
    currentPage: page ? parseInt(page) : page,
    prevPage: page <= 0 ? null : parseInt(page) - 1,
    nextPage:
      page >= Math.ceil(response.count / parseInt(pageSize)) - 1
        ? null
        : parseInt(page) + 1,
    params: params,
    pageSize: pageSize,
    characters: response?.rows,
  };
  
  console.log(pagination.params);
  return pagination;
};
module.exports = getAllCharacter;
