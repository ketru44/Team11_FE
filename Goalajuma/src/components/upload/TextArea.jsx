import { InputStyle } from "./input";
import styled from "styled-components";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { contentState } from "../../utils/UploadAtom";

/**
 *
 * @param {string} name
 */
const TextArea = ({ name }) => {
  const [upload, setUpload] = useRecoilState(contentState);
  const textArea = useRef();

  const textAreaHeight = () => {
    textArea.current.style.height = 0;
    //초기화해야함(안해주면 scrollHeight이 누적됨.)
    textArea.current.style.height = textArea.current.scrollHeight + "px";
  };
  return (
    <TextAreaStyle>
      <label htmlFor="content">{name}</label>
      <textarea
        id="content"
        placeholder="상세설명을 입력해주세요"
        ref={textArea}
        onChange={(e) => {
          textAreaHeight(e);
          setUpload(e.target.value);
        }}
        rows={1}
      ></textarea>
    </TextAreaStyle>
  );
};

const TextAreaStyle = styled(InputStyle)`
  margin-top: 2rem;
  textarea {
    width: 271px;
    height: 28px;
    padding: 15px 20px 0 15px;
    line-height: 140%;

    border: 1px solid #4f4f4f;
    border-radius: 6px;

    box-shadow: 0px 2px 2px rgba(126, 126, 126, 0.25);
    resize: none;

    font-family: "NanumGothic";
  }
`;

export default TextArea;