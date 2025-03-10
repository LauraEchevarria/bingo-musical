import Home from './svg/Home';

const WIDTH = {
  small: '20px',
  medium: '30px',
  large: '40px',
};

const Icon = ({ type, size, text, ...props }) => {
  if (!Object.keys(WIDTH).includes(size)) size = 'small';

  if (text) {
  }

  let iconSvg;
  // eslint-disable-next-line default-case
  switch (type) {
    case 'home':
      iconSvg = <Home size={WIDTH[size]} {...props} />;
      break;
  }

  return (
    <>
      {iconSvg}
      {text && <p>{Text}</p>}
    </>
  );
};
export default Icon;
