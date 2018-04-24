
export const hostUrl = process.env.NODE_ENV === 'production' ?
  'https://obievents.herokuapp.com' : 'http://localhost:3000';

export const getMoreUrl = (limit, pageNo, totalCenters, path) =>
  (pageNo + 1 <= Math.ceil(totalCenters / limit) ?
    `${hostUrl}${path}/?page=${pageNo + 1}&limit=${limit}` : null);

export const paginateData = ({
  req, res, centers, limit, pageNo
}) => {
  let info = 'Centers have been returned successfully';
  if (centers.count < 1) {
    info = 'No centers available';
  } else if (centers.rows.length < 1) {
    info = 'No centers in this set';
  } else if (pageNo > Math.ceil(centers.count / limit)) {
    return res.status(404).json({
      info: 'No more centers available'
    });
  }
  return res.status(200).json({
    info,
    centers: centers.rows,
    count: centers.count,
    more: getMoreUrl(limit, pageNo, centers.count, req.path)
  });
};
