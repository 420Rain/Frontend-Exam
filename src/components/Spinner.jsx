import { HashLoader } from "react-spinners";

const Spinner = ({ loading, loadText }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 font-lato my-20">
      <HashLoader
        color="#21CBAC"
        loading={loading}
        size={50}
      />
      <p className="font-semibold text-2xl">{loadText}</p>
    </div>
  )
}

export default Spinner