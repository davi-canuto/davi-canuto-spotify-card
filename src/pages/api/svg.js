import React from 'react';
import ReactDOMServer from 'react-dom/server';

import SvgComponent from '../../components/SvgComponent';

export default (req, res) => {
  const svgString = ReactDOMServer.renderToString(<SvgComponent />);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svgString);
};