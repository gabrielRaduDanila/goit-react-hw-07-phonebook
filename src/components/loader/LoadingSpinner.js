import { ProgressBar } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <ProgressBar
      height="100"
      width="100"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
};
export default LoadingSpinner;
