import React from "react";

interface Props {
  mzg: string;
}

const LoadingMessage: React.FC<Props> = ({ mzg }) => {
  return (
    <div role="alert" className="alert alert-error">
      <span className="loading loading-spinner loading-md"></span>
      <span>{mzg}</span>
    </div>
  );
};

export default LoadingMessage;
