//import { buildSiteInfoJson } from '../../scripts/buildSiteInfo';

export default function handler(req, res) {
  const { page } = req.query;

  const posts = [];

  res.status(200).json(posts);
}
