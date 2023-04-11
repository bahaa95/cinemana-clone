type Props = {
  message: string;
  status?: number;
  statusText?: string;
};

export const ApiError = ({ message, statusText }: Props) => {
  return (
    <div className={`flex flex-col justify-center alaign-center h-screen`}>
      <h2 className={`text-6xl`}>{statusText}</h2>
      <p className={`text-xl`}>{message}</p>
      <p className={`text-sm`}>Please refresh the page.</p>
    </div>
  );
};
