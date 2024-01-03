import { ToastContainer, toast } from "react-toastify";
import "regenerator-runtime/runtime";
import useSpeechRecognition from "./hooks/useSpeechRecognition";

function App() {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  if (!hasRecognitionSupport) {
    toast.error(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      <div>{text}</div>
      <div>
        {!isListening ? (
          <button onClick={startListening}>Start Listening</button>
        ) : (
          <button onClick={stopListening}>Stop Listening</button>
        )}
      </div>
    </>
  );
}

export default App;
