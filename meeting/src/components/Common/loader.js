import loader from './loader.svg';

const Loader = () => {
  return (
    <div className="container-fluid">
      <img
        className="mx-auto d-block"
        src={loader}
        alt="loaderSpinning"
        draggable="false"
      />
    </div>
  );
};

export default Loader;
