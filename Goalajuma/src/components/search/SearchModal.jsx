import Portal from "../common/modal/Portal";
import { useEffect } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { ModalWrapper, ModalInner } from "../common/modal/Modal";

const SearchModal = ({ visible, children, onClose, maskClosable }) => {
  const onMaskClick = (e) => {
    // target : 모달 배경, currentTarget : 유저가 클릭한 것
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  return (
    <Portal elementId="modal">
      <ModalWrapper onClick={maskClosable ? onMaskClick : null} visible={true}>
        <SearchModalInner>
          <SearchInput></SearchInput>
        </SearchModalInner>
      </ModalWrapper>
    </Portal>
  );
};

const SearchModalInner = styled(ModalInner)`
  top: 5%;
  width: 100%;
  height: 95px;
  background-color: #fff;
  padding: 60px 0px 10px 0px;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default SearchModal;
