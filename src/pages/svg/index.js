import { useEffect, useState } from 'react';

const SvgPage = () => {
  const [svgUrl, setSvgUrl] = useState('');

  useEffect(() => {
    fetch('/api/svg')
      .then((response) => response.text())
      .then((data) => {
        const blob = new Blob([data], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        setSvgUrl(url);
      });
  }, []);

  return <img src={svgUrl} />;
};

export default SvgPage;