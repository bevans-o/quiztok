import React, { useEffect } from "react";
import { useStream, Stream, postStream } from "./stream";

const TestStreamComponent: React.FC = () => {
  const { stream, endGuessing, changeQuestion, submitAnswer } = useStream('my-stream-id');

  useEffect(() => {
    // Post the initial stream object to the server
    const initialStream: Stream = {
      host: 'John Doe',
      questionStatus: 'active',
      currentQuestion: 0,
      viewerCount: 0,
      userAnswers: new Map(),
      scores: {},
    };
    postStream(initialStream);
  }, []);

  const handleAnswerSubmit = (userId: string, answer: any) => {
    submitAnswer(userId, answer);
  };

  const handleEndGuessing = () => {
    endGuessing();
  };

  const handleChangeQuestion = () => {
    changeQuestion();
  };

  return (
    <div>
      <h1>Test Stream Component</h1>
      {stream && (
        <div>
          <p>Host: {stream.host}</p>
          <p>Question Status: {stream.questionStatus}</p>
          <p>Current Question: {stream.currentQuestion}</p>
          <p>Viewer Count: {stream.viewerCount}</p>
          <button onClick={handleEndGuessing}>End Guessing</button>
          <button onClick={handleChangeQuestion}>Change Question</button>
          <button onClick={() => handleAnswerSubmit('user1', { answer: 'A' })}>
            Submit Answer (user1)
          </button>
        </div>
      )}
    </div>
  );
};

export default TestStreamComponent;