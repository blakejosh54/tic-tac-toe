import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: min(92vw, 500px);
  max-height: 90vh;
  overflow-y: auto;
  margin: 0 auto;
  padding: 32px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    max-width: 100%;
    padding: 24px 16px;
    border-radius: 12px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  text-align: center;
  gap: 8px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;
